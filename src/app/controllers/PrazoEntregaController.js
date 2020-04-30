class PrazoEntregaController {
  async index(req, res) {
    return res.status(200).json({
      result: 'Vc pode fazer o calculo no frete no anuncio do produto',
    });
  }
}

export default new PrazoEntregaController();
