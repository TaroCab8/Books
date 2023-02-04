const nodemailer = require("nodemailer");

const credentials = require("./credentials")

const mailTransport = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    auth: {
        user: credentials.mailgun.user,
        pass: credentials.mailgun.password,
    },
})

async function go() {
try {
    const result = await mailTransport.sendMail({
        from: '"Lautaro Cabrera" <lautarocabrera@lfcsoftware.com>',
        to: "lautacabrera@gmail.com, 'Lauta Costumer' <lautarocabrera_8@hotmail.com>",
        subject: "Your Meadowlark Travel Tour",
        text: "Thank you for booking your trip with Meadowlak travel. " + "We look forward to your visit!",
    })
    console.log("mail sent sucesfully: ", result)
} catch(err) {
    console.log("could not send mail: " + err.message)
}

}

go();

