const credentials = require("./credentials")

const emailService = require("./lib/email")(credentials)

const email = "lautacabrera@gmail.com"

if(email) {
    emailService.send(email, "Hood River tours on sale today!",
    "Get 'em while they're hot!")
    .then(()=> {
        console.log("sent succesfully!")
    })
    .catch(err => {
        console.log("failed to send email: ", err.message)
    })
} else {
    console.log("Edit this file, and specify and email address to test..")
}