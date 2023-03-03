const { Router } = require("express");
const { check } = require("express-validator");
const {
  getObjectos,
  createObjecto,
  updateObjecto,
  deleteObjecto,
} = require("../controllers/object");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

//realizar validacion del jwt
router.use(validarJWT);

// Definir las rutas
router.get("/", getObjectos);

router.post(
  "/",
  [
    check("name", "El nombre del objeto es obligatorio").not().isEmpty(),
    check("photo", "La foto del objeto es obligatoria").not().isEmpty(),
    check("longitude", "La longitud es obligatoria").not().isEmpty(),
    check("latitude", "La latitud es obligatoria").not().isEmpty(),
    check("operatorId", "El ID del operador es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  createObjecto
);

router.put("/:id", updateObjecto);

router.delete("/:id", deleteObjecto);

module.exports = router;
