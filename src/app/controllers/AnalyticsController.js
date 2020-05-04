import Analytics from '../schemas/Analytics';

class AnalyticsController {
  async store(req, res) {
    const { productId, userId, atributos } = req.params;

    let analytics = await Analytics.findOne({
      productId,
      userId,
    });

    if (!analytics) {
      analytics = await Analytics.create({
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

    const analytics = await Analytics.findOne({
      productId: `productId:${productId}`,
      userId: `userId:${userId}`,
    });

    return res.status(200).json(analytics);
  }
}

export default new AnalyticsController();
