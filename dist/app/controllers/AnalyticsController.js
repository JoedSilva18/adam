"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Analytics = require('../schemas/Analytics'); var _Analytics2 = _interopRequireDefault(_Analytics);

class AnalyticsController {
  async store(req, res) {
    const { productId, userId, atributos } = req.params;

    let analytics = await _Analytics2.default.findOne({
      productId,
      userId,
    });

    if (!analytics) {
      analytics = await _Analytics2.default.create({
        productId,
        userId,
      });
    }

    let { total } = analytics;
    total += 1;
    await analytics.update({ total });

    switch (atributos) {
      case 'freteEPrazo': {
        let { freteEPrazo } = analytics;
        freteEPrazo += 1;
        await analytics.update({ freteEPrazo });
        break;
      }

      case 'formaPagamento': {
        let { formaPagamento } = analytics;
        formaPagamento += 1;
        await analytics.update({ formaPagamento });
        break;
      }

      case 'NFEGarantia': {
        let { NFEGarantia } = analytics;
        NFEGarantia += 1;
        await analytics.update({ NFEGarantia });
        break;
      }

      case 'originalidade': {
        let { originalidade } = analytics;
        originalidade += 1;
        await analytics.update({ originalidade });
        break;
      }

      case 'caracteristicasProduto': {
        let { caracteristicasProduto } = analytics;
        caracteristicasProduto += 1;
        await analytics.update({ caracteristicasProduto });
        break;
      }

      case 'SPAM': {
        let { SPAM } = analytics;
        SPAM += 1;
        await analytics.update({ SPAM });
        break;
      }

      case 'naoIdentificado': {
        let { naoIdentificado } = analytics;
        naoIdentificado += 1;
        await analytics.update({ naoIdentificado });
        break;
      }

      default:
        break;
    }

    return res.status(200).json(analytics);
  }

  async index(req, res) {
    const { productId, userId } = req.params;

    const analytics = await _Analytics2.default.findOne({
      productId,
      userId,
    });

    return res.status(200).json(analytics);
  }
}

exports. default = new AnalyticsController();
