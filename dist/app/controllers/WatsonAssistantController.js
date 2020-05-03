"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _WatsonAssistant = require('../lib/WatsonAssistant'); var _WatsonAssistant2 = _interopRequireDefault(_WatsonAssistant);

class WatsonAssistantController {
  async index(req, res) {
    const { productId, userId } = req.params;
    const { question } = req.body;

    const assistant = await _WatsonAssistant2.default.getService();

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

    return res.status(200).json({
      productId,
      userId,
      question,
      answer: resu.result.output.generic[0].text,
      date: new Date(),
    });
  }
}

exports. default = new WatsonAssistantController();
