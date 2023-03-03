const { response } = require("express");
const Objeto = require("../models/Objeto");

const createObjeto = async (req, res = response) => {
  try {
    const objeto = new Objeto(req.body);
    const savedObjeto = await objeto.save();
    res.status(201).json({
      ok: true,
      objeto: savedObjeto,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};

const getObjetos = async (req, res = response) => {
  try {
    const objetos = await Objeto.find();
    res.json({
      ok: true,
      objetos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};

const updateObjeto = async (req, res = response) => {
  const objectId = req.params.id;

  try {
    const objeto = await Objeto.findById(objectId);

    if (!objeto) {
      return res.status(404).json({
        ok: false,
        msg: "Objeto no encontrado",
      });
    }

    const campos = req.body;
    const objetoActualizado = await Objeto.findByIdAndUpdate(objectId, campos, {
      new: true,
    });

    res.json({
      ok: true,
      objeto: objetoActualizado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};

const deleteObjeto = async (req, res = response) => {
  const objectId = req.params.id;

  try {
    const objeto = await Objeto.findById(objectId);

    if (!objeto) {
      return res.status(404).json({
        ok: false,
        msg: "Objeto no encontrado",
      });
    }

    await Objeto.findByIdAndDelete(objectId);

    res.json({
      ok: true,
      msg: "Objeto eliminado",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado",
    });
  }
};

module.exports = {
  createObjeto,
  getObjetos,
  updateObjeto,
  deleteObjeto,
};
