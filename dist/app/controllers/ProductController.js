"use strict";Object.defineProperty(exports, "__esModule", {value: true});class ProductController {
  async show(req, res) {
    const { atributos } = req.body;

    return res.status(200).json({
      result: atributos,
    });
  }
}

exports. default = new ProductController();
