const nodemailer = require("nodemailer")

const credentials = require("./credentials")

const mailTransport = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    auth: {
        user: credentials.mailgun.user,
        pass: credentials.mailgun.password,
    }
})

async function go() {
try{
    const result = await mailTransport.sendMail({
        from: '"Lautaro Cabrera" <lautacabrera@lfc.com>',
        to: "lautacabrera@gmail.com",
        subject: "Your Meadowlark travel tour",
        text: "Thank you for booking your trip with Meadowlark Tarvel. " + "We look forward to your visit!",
    })
    console.log("mail sent sucesfully: ", result)
} catch (err) {
    console.log("could not send email: " + err.message)
}
}

go()