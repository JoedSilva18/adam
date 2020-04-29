"use strict";Object.defineProperty(exports, "__esModule", {value: true});class PrazoEntregaController {
  async index(req, res) {
    const { cep } = req.body;

    return res.status(200).json({
      result: `As entregas variam entre 5 e 10 dias para o cep ${cep}`,
    });
  }
}

exports. default = new PrazoEntregaController();
