class ColorController {
  async index(req, res) {
    return res.status(200).json({
      result: 'As cores disponiveis são: Azul, verde, vermelho',
    });
  }
}

export default new ColorController();
