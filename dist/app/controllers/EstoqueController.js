"use strict";Object.defineProperty(exports, "__esModule", {value: true});class EstoqueController {
  // Funcao busca no banco se o produto ainda tem em estoque
  async show(req, res) {
    const { productId, userId } = req.params;
    const [, productId_] = productId.split(':');
    const [, userId_] = userId.split(':');

    // TODO buscar a disponibilidade do produto baseado do productId_ e no userId_

    return res.status(200).json({
      result: `Ola, tudo bem? Ainda temos o produto em estoque mas não sabemos por quanto tempo!`,
    });
  }
}

exports. default = new EstoqueController();
