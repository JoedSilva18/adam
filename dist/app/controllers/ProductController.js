"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _WKS = require('../lib/WKS'); var _WKS2 = _interopRequireDefault(_WKS);

class ProductController {
  async show(req, res) {
    const { atributos } = req.params;

    const result = await _WKS2.default.getService();

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

exports. default = new ProductController();
