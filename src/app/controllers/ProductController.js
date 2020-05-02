class ProductController {
  async show(req, res) {
    const { atributos } = req.params;

    return res.status(200).json({
      result: atributos,
    });
  }
}

export default new ProductController();
