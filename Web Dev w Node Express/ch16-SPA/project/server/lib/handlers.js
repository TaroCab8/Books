const db = require("../db-Mongo")

exports.api={}

const fortune = require("./fortune");
exports.home = (req, res) => res.render("home");
/* newsletter form handler with flash message*/
    //email regex
const VALID_EMAIL_REGEX = new RegExp("^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}-]"+"[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?"+"(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9]{0,61}[a-zA-Z0-9])?)+$")

    //fake nesletter signup interface
    class newsletterSignup{
        constructor({name, email}){
            this.name = name
            this.email = email
        }
        async save(){
        // here's where we would do the work of saving to a database
        // since this method is async, it will return a promise, and
        // since we're not throwing any errors, the promise will
        // resolve successfully
        }
    }

/* END of newsletter form handler with flash message*/


exports.newsletterSignup = (req, res) => {
    //we will learn about CSRF later.. for now we just
    // provid a dummy value
    res.render("newsletter-signup", {csrf: "CRSF token goes here"})
}
exports.newsletterSignupProcess= (req, res) => {
    console.log("Form (from querystring): " + req.body.form)
    console.log("Form (from hidden form field): " + req.body._csrf)
    console.log("Form (from visible form field): " + req.body.name)
    console.log("Form (from visible form field): " + req.body.email)
    res.redirect(303, "/newsletter-signup/thank-you")
}

exports.newsletterSignupThankYou = (req,res) => res.render("newsletter-signup-thank-you")



exports.vacationPhotoContest = (req,res) => {
    const now = new Date()
    res.render("contest/vacation-photo-ajax",{year: now.getFullYear(), month: now.getMonth()})
    
}

exports.vacationPhotoContestAjax = (req, res) => {
const now = new Date()
res.render("contest/vacation-photo-ajax", {year: now.getFullYear(), month: now.getMonth()})
}

exports.vacationPhotoContestProcess = (req,res,fields,files) => {
    console.log("field data: ", fields)
    console.log("files: ", files)
    res.redirect(303, "/contest/vacation-photo-thank-you")
}


exports.vacationPhotocontestProcessError =(req, res, fields, files) => {
    res.redirect(303, "/contest/vacation-photo-error")
}

exports.vacationPhotoContestProcessThankYou = (req, res) => {
    res.render("contest/vacation-photo-error")
}

const pathUtils = require("path")
const fs = require("fs")

//create directory to store vacation photos (if it doesn't already exist)
const dataDir = pathUtils.resolve(__dirname,"..", "data")
const vacationPhotosDir = pathUtils.join(dataDir, "vacation-photos")
if(!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)
if(!fs.existsSync(vacationPhotosDir)) fs.mkdirSync(vacationPhotosDir)

function saveContestEntry(contestName, email, year, month, photoPath) {
    //TODO.. THIS WILL COME LATER
}

// we'll want these promise-based version of fs functions in our asung fn
const {promisify} = require("util")
const mkdir = promisify(fs.mkdir)
const rename = promisify(fs.rename)



exports.api.vacationPhotoContest = async (req, res, fields, files) => {
    const photo = files.photo[0]
    const dir = vacationsPhotosDir + "/" + Date.now()
    const path = dir + "/" + photo.originalFilename
    await mkdir(dir)
    await rename(photo.path,path)
    saveContestEntry("vacation-photo", fields.email, req.params.year, req.params.month, path)
    res.send({result: "success"})

}


exports.api.vacationPhotocontestError = (req, res, message) => {
    res.send({result: "error", error: message})
}

// *** these handlers are or fetch/JSON form handlers
exports.newsletter = (req, res) => {
    //we will learn about CSRF laet, for now, we just 
    //provide a dummy value
    res.render("newsletter", {csrf: "CSRF token goes here"})
}


exports.api.newsletterSignup = (req,res) => {
        console.log("CSRF tokem (from hidden form field): " + req.body._csrf)
        console.log("Name tokem (from visible form field): " + req.body.name)
        console.log("Email tokem (from visible form field): " + req.body.email)
        res.send({result: "success"})
}
// *** end fetch/JSON form handlers


exports.about= (req,res) => res.render("about", {fortune:fortune.getFortune()})

function convertFromUSD(value, currency) {
    switch(currency) {
        case "USD": return value *1
        case "GBP": return value *0.79
        case "BTC": return value *0.000078
        default: return NaN
    }
}

exports.listVacations = async (req, res) => {
    const vacations = await db.getVacations({avaiable: true})
    const currency = req.session.currency || "USD"
    const context = {
        currency: currency,
        vacations: vacations.map(vacation => {
            return{
                sku: vacation.sku,
                name: vacation.name,
                description: vacation.description,
                inSeason: vacation.inSeason,
                price: convertFromUSD(vacation.price, currency),
                qty: vacation.qty,
            }
        }),
    }
    switch(currency) {
        case "USD": context.currencyUSD = "selected"; break
        case "GBP": context.currencyGBP = "selected"; break
        case "BTC": context.currencyBTC = "selected"; break
    }
    res.render("vacations", context)
}

//note that this redirects to the /vacations page, but may
// want to use on // other pages! should fix....
exports.setCurrency = (req,res) => {
    req.session.curreny = req.params.currency
    return res.redirect(303, "/vacations")
}

exports.notifyWhenInSeasonForm = (req,res) => res.render("notify-when-in-season", {sku: req.query.sku})

exports.notifyWhenInSeasonProcess = async(req, res) =>{
    const {email, sku} = req.body
    await db.addVacationInSeasonListener(email, sku)
    return res.redirect(303, "/vacations")
}

exports.getVacationsApi= async(req, res) => {
    const vacations = await db.getVacations({available: true})
    res.json(vacations)
}
exports.getVacationBySkuApi = async (req, res) => {
    const vacations = await db.getVacationBySku(req.params.sku)
    res.json(vacations)
  }

exports.addVacationInSeasonListenerApi = async (req, res) => {
await db.addVacationInSeasonListener(req.params.sku, req.body.email)
res.json({message: "success"})
}
exports.requestDeleteVacationApi = async (req, res) => {
    const {email, notes} = req.body
    res.status(500).json({message: "not yet implemented"})
}


exports.notFound = (req, res) => res.render("404")
//Express recognzes the error handler by way of its four
//arguments, so we have to disable ESLint's no-unused-vars rule

/* eslint-disable no-unused-vars */

exports.serverError = (err, req, res, next) => res.render("500")

/* eslint-enable no-unused-vars */
