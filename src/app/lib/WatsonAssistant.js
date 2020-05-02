import AssistantV2 from 'ibm-watson/assistant/v2';
import { IamAuthenticator } from 'ibm-watson/auth';

class WatsonAssistant {
  async getService() {
    const assistant = new AssistantV2({
      version: '2020-04-01',
      authenticator: new IamAuthenticator({
        apikey: 'FtioZq2albOdRcSS3uFR94zFcMfN1LyzQBIgIYBMnRaO',
      }),
      url:
        'https://api.us-south.assistant.watson.cloud.ibm.com/instances/a394d2bd-5ee7-45aa-89cd-065322c9eb01',
    });

    return assistant;
  }
}

export default new WatsonAssistant();
