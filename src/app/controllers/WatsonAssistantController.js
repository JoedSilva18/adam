import WatsonAssistant from '../lib/WatsonAssistant';

class WatsonAssistantController {
  async index(req, res) {
    const { productId, userId } = req.params;
    const { question } = req.body;

    const assistant = await WatsonAssistant.getService();

    const { result } = await assistant.createSession({
      assistantId: 'a7f1bb02-970d-4dd7-9e22-c1206ede4d02',
    });

    await assistant.message({
      assistantId: 'a7f1bb02-970d-4dd7-9e22-c1206ede4d02',
      sessionId: result.session_id,
      input: {
        message_type: 'text',
        text: `productId:${productId} e userId:${userId}`,
      },
    });

    const resu = await assistant.message({
      assistantId: 'a7f1bb02-970d-4dd7-9e22-c1206ede4d02',
      sessionId: result.session_id,
      input: {
        message_type: 'text',
        text: question,
      },
    });

    let text;

    if (resu.result.output.generic[0].text) {
      text = resu.result.output.generic[0].text;
    } else {
      text = null;
    }

    return res.status(200).json({
      userId,
      productId,
      question,
      answer: text,
      date: new Date(),
    });
  }
}

export default new WatsonAssistantController();
