import NaturalLanguageUnderstandingV1 from 'ibm-watson/natural-language-understanding/v1';
import { IamAuthenticator } from 'ibm-watson/auth';

class NLController {
  async index(req, res) {
    const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
      version: '2019-07-12',
      authenticator: new IamAuthenticator({
        apikey: 'Jko59ZWHiPV2ULTGBL6LzM8PdBIHPV-uuGvAn6xpfn_9',
      }),
      url: 'https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/33976261-1372-4bf9-bd01-70ad8f111b59',
    });

    const analyzeParams = {
      'text': 'Marca: Arno Linha: Silence Force Modelo: VF41 Tipo de ventilador: De mesa',
      'language': 'pt',
      'features': {
        'entities': {
          'model': '7bcfa7eb-517b-4605-bb13-d8581363388d'
        }
      },
    };

    const result = await naturalLanguageUnderstanding.analyze(analyzeParams);

    return res.status(200).json(result.result.entities);
  }
}

export default new NLController();
