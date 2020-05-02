import Product from '../schemas/Product';

class ProductController {
  async show(req, res) {
    const { atributos, productId } = req.params;

    const product = await Product.findOne({
      productId,
    });

    if (product) {
      product.attributes.map(attr => {
        if (attr.attrName === atributos) {
          return res.status(200).json({
            result: `Olá, tudo bem? ${attr.attrName}:${attr.value}`,
          });
        }
      });
    }

    return res.status(400).json({
      result: 'Não achei',
    });
  }

  async store(req, res) {
    const product = await Product.create(req.body);
    return res.status(200).json(product);
  }
}

export default new ProductController();
