const jwt = require("jsonwebtoken");

const generarJWT = (uid, name, role) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name, role };
    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      {
        expiresIn: "2 days",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se puedo generar el token");
        }
        resolve(token);
      }
    );
  });
};

module.exports = {
  generarJWT,
};
