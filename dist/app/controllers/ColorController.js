"use strict";Object.defineProperty(exports, "__esModule", {value: true});class ColorController {
  async index(req, res) {
    return res.status(200).json({
      result: 'As cores disponiveis são: Azul, verde, vermelho',
    });
  }
}

exports. default = new ColorController();
