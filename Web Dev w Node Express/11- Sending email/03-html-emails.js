const nodemailer = require("nodemailer")

const credentials = require("./credentials")

const mailTransport = nodemailer.createTransport({
    host:"smtp.mailgun.org",
    aut: {
        user: credentials.mailgun.user,
        password: credentials.mailgun.password,
    }
})

async function go() {
    try {
        const result = await mailTransport.sendMail({
            from: '"Lautaro Cabrera" <lautacabrera@lfc.com>',
            to: "lautacabrera@gmail.com",
            subject: "Your Meadowlark travel tour",
            html: "<h1>MeadowLark Travel</h1>\n<p>Thanks for book your trip with " + "Meadowlark travel. <b>We look forward to your visit!<//b>",
            text: "Thank you for booking your trip with Meadowlark Travel. " + "We look forward to your visit!",
        })
        console.log("mail sent succesfully; ", result)
    }   catch(err) {
        console.log("could not send mail: " + err.message)
    }
}

go()