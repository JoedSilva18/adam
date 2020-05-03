import Questions from '../schemas/Questions';

class AnswerController {
  async show(req, res) {
    const { productId, input } = req.params;

    const question = await Questions.findOne({
      productId,
      question: input,
    });

    if (question) {
      return res.status(200).json({
        result: question.answer,
      });
    }

    return res.status(200).json({
      result: input,
    });
  }
}

export default new AnswerController();
