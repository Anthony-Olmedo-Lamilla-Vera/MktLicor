const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const body = require("body-parser");
let claves = {
  client_id:
    "321362138561-lue7f3e604bfrjihiglsghkn7j08lrft.apps.googleusercontent.com",
  project_id: "projectyoutube-325806",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_secret: "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",
  access_token:
    "ya29.A0ARrdaM-RP5OD9PIKfj20vCboMGLuBFcBcvp951uAhG3AeU14WSfxfuefq5heF9wN2ybHnHt9DTJ-GcGKUHyLN4D5i_XL9XHubALtK9fcZCe7lzSa2RtAjwWG-RfXRpjJn6xOrQrMvs-_C0XMPdBavus82fRc",
  refresh_token:
    "1//04fXs61gK1gu9CgYIARAAGAQSNwF-L9Irb42_G8cCxwVA9jQIZgWIzqjDI3gJ7vXdnY9sGLnmdY3AwgtAqA1ASIsP7jnjfs44_3A",
};

const app = express();
app.use(body.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.post("/send/email/", async (req, res) => {
  try {
    const { email } = req.body;
    console.log(email);
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "anthony.lamilla@gmail.com",
        clientId: claves.client_id,
        clientSecret: claves.client_secret,
        accessToken: claves.access_token,
        refreshToken: claves.refresh_token,
      },
    });
    const mailOptions = {
      to: email,
      subject: "SUSCRIPCION A TIENDA ",
      text: "Se ha suscrito ahora ",
      html: `<h1>Bienvenidoo hehehh ${email}</h1>`,
    };
    await transport.sendMail(mailOptions);
    return res.send(req.body);
  } catch (error) {
    console.log(" NOOO enviado correct");
    console.log(error);
    return res.send(error);
  }
});
app.listen(2000, () => console.log("estamos en el puerto" + 2000));
