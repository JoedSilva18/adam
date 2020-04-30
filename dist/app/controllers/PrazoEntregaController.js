"use strict";Object.defineProperty(exports, "__esModule", {value: true});class PrazoEntregaController {
  async index(req, res) {
    return res.status(200).json({
      result: 'Vc pode fazer o calculo no frete no anuncio do produto',
    });
  }
}

exports. default = new PrazoEntregaController();
