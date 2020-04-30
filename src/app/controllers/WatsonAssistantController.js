import AssistantV2 from 'ibm-watson/assistant/v2';
import { IamAuthenticator } from 'ibm-watson/auth';

class WatsonAssistantController {
  async index(req, res) {
    const { productId } = req.params;
    const { message } = req.body;

    const assistant = new AssistantV2({
      version: '2020-04-01',
      authenticator: new IamAuthenticator({
        apikey: 'FtioZq2albOdRcSS3uFR94zFcMfN1LyzQBIgIYBMnRaO',
      }),
      url:
        'https://api.us-south.assistant.watson.cloud.ibm.com/instances/a394d2bd-5ee7-45aa-89cd-065322c9eb01',
    });

    const { result } = await assistant.createSession({
      assistantId: 'cc32de7d-e2c6-45f8-b8c6-b89090b866ff',
    });

    const resu = await assistant.message({
      assistantId: 'cc32de7d-e2c6-45f8-b8c6-b89090b866ff',
      sessionId: result.session_id,
      input: {
        message_type: 'text',
        text: message,
      },
    });

    return res.status(200).json({
      result: resu.result.output.generic[0].text,
    });
  }
}

export default new WatsonAssistantController();
