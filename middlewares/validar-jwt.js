const { response } = require("express");
const jwt = require("jsonwebtoken");

const validarJWT = (req, res, next) => {
  //x-token headers
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "No se encuentra token en la peticion",
    });
  }
  try {
    const { uid, name, role } = jwt.verify(token, process.env.SECRET_JWT_SEED);

    req.uid = uid;
    req.name = name;
    req.role = role;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Token no es Valido",
    });
  }

  next();
};

module.exports = {
  validarJWT,
};
