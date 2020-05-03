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
            result: `Olá, tudo bem? Segundo as informações presentes no anúncio '${attr.attrName}:${attr.value}'. Só temos disponível o que está descrito no anúncio. Aguardamos sua compra.`,
          });
        }
      });
    }

    return res.status(200).json({
      result: '',
    });
  }

  async store(req, res) {
    const product = await Product.create(req.body);
    return res.status(200).json(product);
  }
}

export default new ProductController();
