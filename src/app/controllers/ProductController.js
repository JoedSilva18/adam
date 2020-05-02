import WKS from '../lib/WKS';

class ProductController {
  async show(req, res) {
    const { atributos } = req.params;

    const result = await WKS.getService();

    const { entities } = result.result;

    entities.map(entity => {
      if (entity.type === atributos) {
        return res.status(200).json({
          result: `Olá, tudo bem? ${entity.text}`,
        });
      }
    });

    return res.status(400).json({
      result: 'Não achei',
    });
  }
}

export default new ProductController();
