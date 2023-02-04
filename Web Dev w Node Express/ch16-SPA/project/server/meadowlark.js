
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
//const multiparty = require("multiparty")
const expressSession = require('express-session')
const cors = require("cors")
const csrf = require("csurf")

const credentials = require("./credentials")
const handlers = require("./lib/handlers")
const createAuth = require("./lib/auth")

require("./db-Mongo")


    
const app = express();

app.use("/api", cors())



app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cookieParser(credentials.cookieSecret))
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: credentials.cookieSecret,
  }))
//security configuration
const auth = createAuth(app, {
    //baseUrl is optional;it will default ot localhost if you omit it;
    // it can be helpful to se this if you're not working on
    // your local machine. For example, if you were using a staging server,
    // you might set the BASE_URL environment variable to
    // https://staging.meadowlark.com
    baseUrl: process.env.BASE_URL,
    providers: credentials.authProviders,
    successRedirect: "/account",
    failureRedirect: "/unauthorized",
})

// auth.init() links in Passport middleware
auth.init()
// now we can specify our auth routes:
auth.registerRoutes()

app.use(csrf({cookie: true}))
app.use((req,res,next) => {
    res.locals._csrfToken = req.csrfToken()
    next()
})


const port = process.env.PORT || 3033;

app.use("/static", express.static("public"))   


app.get("/api/vacations", handlers.getVacationsApi)
app.get("/api/vacation/:sku", handlers.getVacationBySkuApi)
app.post("/api/vacation/:sku/notify-when-in-season", handlers.addVacationInSeasonListenerApi)
app.delete("/api/vacation/:sku", handlers.requestDeleteVacationApi)

const customerOnly = (req, res, next) => {
    if(req.user && req.user.role === "customer") return next()
    // we want customer only pages to know they need to logon
    res.redirect(303, "unauthorized")
}

const employeeOnly = (req, res, next) => {
    if(req.user && req.user.role === "employee") return next()
    //we want employee-only authorization failures to be "hidden", to
    // prevent potential hackers from even knowing that such a page exists
    next("route")
}

//custormer routes
app.get("/account", customerOnly, (req, res) => {
    res.render("account", {username: req.user.name})
})
app.get("/acount/porder-history", customerOnly, (req, res) => {
    res.render("account/order-history")
})
app.get("/account/email-prefs", customerOnly,(req,res) => {
    res.render("account/email-prefs")
})
// employee routes
app.get("/sales", employeeOnly, (req, res) => {
    res.render("sales")
})
// we also need an "unauthorized" page
app.get("/unauhtorized", (req, res) => {
    res.status(403).render("unauthorized")
})
// and a way ut to logout
app.get("/logout", (req, res) => {
    req.logout()
    res.redirect("/")
})


if(require.main === module) {
app.listen(port, () => {
    console.log(`Express started on http://localhost:${port}` + "; press Ctrl-C to terminate.")
    });
} else {
    module.exports = app
}



