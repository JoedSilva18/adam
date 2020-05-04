"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Product = require('../schemas/Product'); var _Product2 = _interopRequireDefault(_Product);

class ProductController {
  async show(req, res) {
    const { atributos, productId } = req.params;

    const product = await _Product2.default.findOne({
      productId,
    });

    if (product) {
      product.attributes.map(attr => {
        if (attr.attrName === atributos) {
          return res.status(200).json({
            result: `Olá, tudo bem? Segundo as informações presentes no anúncio '${attr.attrName}: ${attr.value}'. Só temos disponível o que está descrito no anúncio. Aguardamos sua compra.`,
          });
        }
      });
    }

    return res.status(200).json({
      result: '',
    });
  }

  async store(req, res) {
    const product = await _Product2.default.create(req.body);
    return res.status(200).json(product);
  }
}

exports. default = new ProductController();
