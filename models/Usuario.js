const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  role: {
    type: String,
    enum: {
      values: ["admin", "operario"],
      message: "{VALUE} no es un role valido",
      default: "operario",
      require: true,
    },
  },
});

module.exports = model("Usuario", UsuarioSchema);
