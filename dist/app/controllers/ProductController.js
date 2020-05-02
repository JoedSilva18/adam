"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _v1 = require('ibm-watson/natural-language-understanding/v1'); var _v12 = _interopRequireDefault(_v1);
var _auth = require('ibm-watson/auth');

class ProductController {
  async show(req, res) {
    const { atributos } = req.params;

    const naturalLanguageUnderstanding = new (0, _v12.default)({
      version: '2019-07-12',
      authenticator: new (0, _auth.IamAuthenticator)({
        apikey: 'Jko59ZWHiPV2ULTGBL6LzM8PdBIHPV-uuGvAn6xpfn_9',
      }),
      url:
        'https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/33976261-1372-4bf9-bd01-70ad8f111b59',
    });

    const analyzeParams = {
      text:
        'Marca: Arno Linha: Silence Force Modelo: VF41 Tipo de ventilador: De mesa',
      language: 'pt',
      features: {
        entities: {
          model: '7bcfa7eb-517b-4605-bb13-d8581363388d',
        },
      },
    };

    const result = await naturalLanguageUnderstanding.analyze(analyzeParams);

    const { entities } = result.result;

    entities.map(entity => {
      if (entity.type === 'atributos') {
        return res.status(200).json({
          result: 'Informação no anuncio',
        });
      }
    });

    return res.status(200).json({
      result: 'Não achei',
    });
  }
}

exports. default = new ProductController();
