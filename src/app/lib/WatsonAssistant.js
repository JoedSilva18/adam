import AssistantV2 from 'ibm-watson/assistant/v2';
import { IamAuthenticator } from 'ibm-watson/auth';

class WatsonAssistant {
  async getService() {
    const assistant = new AssistantV2({
      version: '2020-04-01',
      authenticator: new IamAuthenticator({
        apikey: process.env.WATSON_APIKEY,
      }),
      url: process.env.WATSON_URL,
    });

    return assistant;
  }
}

export default new WatsonAssistant();
