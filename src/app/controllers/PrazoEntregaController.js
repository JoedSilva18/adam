class PrazoEntregaController {
  async index(req, res) {
    const { cep } = req.body;

    return res.status(200).json({
      result: `As entregas variam entre 5 e 10 dias para o cep ${cep}`,
    });
  }
}

export default new PrazoEntregaController();
