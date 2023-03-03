const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { dbConnection } = require("./database/config");

//crear server xpress
const app = express();

// Base de datos
dbConnection();

//CORS  - Conf basica para Servidores
app.use(cors());

//Directorio publico
app.use(express.static("public"));

// Lectura y parseo del Body
app.use(express.json());
//Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/object", require("./routes/object"));

//redirect to index
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//Escuchar Peticiones
app.listen(process.env.PORT, () => {
  console.log(`Sevidor corriendo en puerto ${process.env.PORT} `);
});
