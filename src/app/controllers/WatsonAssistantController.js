import WatsonAssistant from '../lib/WatsonAssistant';

class WatsonAssistantController {
  async store(req, res) {
    const { productId, userId } = req.params;
    const { question } = req.body;

    const assistant = await WatsonAssistant.getService();

    const { result } = await assistant.createSession({
      assistantId: process.env.WATSON_ASSISTANT_ID,
    });

    await assistant.message({
      assistantId: process.env.WATSON_ASSISTANT_ID,
      sessionId: result.session_id,
      input: {
        message_type: 'text',
        text: `productId:${productId} e userId:${userId}`,
      },
    });

    const resu = await assistant.message({
      assistantId: process.env.WATSON_ASSISTANT_ID,
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
