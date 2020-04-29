class EstoqueController {
  async index(req, res) {
    return res.status(200).json({
      result: 'Ainda temos o produto em nosso estoque',
    });
  }
}

export default new EstoqueController();
