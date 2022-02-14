const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const body = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dvrsowzhf",
  api_key: "619715953128421",
  api_secret: "4BZId0FMtM7OSHubU5XI0qRXzqU",
});

const app = express();
app.use(body.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/Backend/Uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

mongoose
  .connect(
    "mongodb+srv://antocraxx:perfect12@cluster0.feg8c.mongodb.net/MisProductos?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("Conectado BASE DE DATOS");
  })
  .catch((err) => console.error(err));

let claves = {
  client_id:
    "321362138561-lue7f3e604bfrjihiglsghkn7j08lrft.apps.googleusercontent.com",
  project_id: "projectyoutube-325806",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_secret: "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",
  access_token:
    "ya29.A0ARrdaM9EEQl4aLpI1dsR84j0KrKTXaTJqB29ID69oWBR064gOYQH6y60yATUAFPyn4id2QhwM8IgJQgogNNCoqGepriI4mAGQsJqLCd3V4VkvwuVLBDGVTYqnumJyd3TZMs67LCG0YRX12chdP9Xw5boA0cM",
  refresh_token:
    "1//04fXs61gK1gu9CgYIARAAGAQSNwF-L9Irb42_G8cCxwVA9jQIZgWIzqjDI3gJ7vXdnY9sGLnmdY3AwgtAqA1ASIsP7jnjfs44_3A",
};
const SchemaProduct = mongoose.Schema({
  id: mongoose.Types.ObjectId,
  nombre: String,
  type: String,
  price: Number,
  stock: Number,
  img: String,
});

const SchemaCorreos = mongoose.Schema({
  correo: String,
});

const modelProduct = mongoose.model("ProductNew", SchemaProduct);
const modelCorreos = mongoose.model("CorreosNew", SchemaCorreos);

app.post("/create-product/", upload.single("img"), async function (req, res) {
  try {
    const { nombre, type, price, stock } = req.body;
    let imgUrl = "";
    const uploads = await cloudinary.uploader.upload(
      req.file.path,
      (err, res) => (imgUrl = res.url)
    );
    console.log(imgUrl);
    const newProduct = await new modelProduct({
      nombre: nombre,
      type: type,
      price: price,
      stock: stock,
      img: imgUrl,
    });
    const guardado = await newProduct.save();

    res.send({ message: "guardado correctamente", dataGuardada: guardado });
    return console.log("bien hecho");
  } catch (error) {}
});
app.get("/get-product/", async (req, res) => {
  const data = await modelProduct.find({});
  res.send(data);
});
app.delete("/delete-product/:id", async (req, res) => {
  const { id } = req.params;
  const deleteprod = await modelProduct.findOneAndDelete(id);
  res.send({ mensaje: "borrado correctamente", item: deleteprod });
});
app.put("/edit-product/", async (req, res) => {
  const { id, nombre, type, price, stock } = req.body;

  const editItem = await modelProduct.findByIdAndUpdate(id, {
    nombre: nombre,
    type: type,
    price: price,
    stock: stock,
  });

  res.send({ mensaje: "editado", itemEditado: editItem });
});
app.get("/edit-id/:id", async (req, res) => {
  const { id } = req.params;

  const item = await modelProduct.findById(id);
  res.send({ mensaje: "editado", itemEditado: item });
});

app.post("/send/email/", async (req, res) => {
  try {
    const { email } = req.body;
    const correoNuevo = new modelCorreos({ correo: email });
    correoNuevo.save();
    const ResCorreos = await modelCorreos.find({});

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

    res.send({ data: ResCorreos });
  } catch (error) {
    console.log(" NOOO enviado correct");
    console.log(error);
    return res.send(error);
  }
});

app.post("/upload-img/", upload.single("img"), function (req, res) {
  console.log(req.file);
  /*const uploads = cloudinary.uploader.upload(req.file.path, (err, res) =>
    console.log(res.url)
  );*/
  res.send({ file: req.file });
});
app.listen(process.env.PORT || 2000, () =>
  console.log("estamos en el puerto" + 2000)
);
