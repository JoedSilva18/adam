"use strict";Object.defineProperty(exports, "__esModule", {value: true});class EstoqueController {
  // Funcao busca no banco se o produto ainda tem em estoque
  async show(req, res) {
    const { productId, userId } = req.body;

    return res.status(200).json({
      result: `Ola, tudo bem? Ainda temos o produto em estoque mas não sabemos por quanto tempo! ${productId} e ${userId}`,
    });
  }
}

exports. default = new EstoqueController();
