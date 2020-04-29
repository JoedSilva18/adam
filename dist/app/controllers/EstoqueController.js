"use strict";Object.defineProperty(exports, "__esModule", {value: true});class EstoqueController {
  async index(req, res) {
    return res.status(200).json({
      result: 'Ainda temos o produto em nosso estoque',
    });
  }
}

exports. default = new EstoqueController();
