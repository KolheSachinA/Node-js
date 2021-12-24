const nodemailer = require("nodemailer");

const transporter = async () => {
    await nodemailer.createTransport({
        service: "hotmail",
        port: 587,
        auth: {
            user: "sachinkolhe719@outlook.com",
            pass: "your passwd",
        },
    });
    return Promise.resolve()
}