import Questions from '../schemas/Questions';

class AnswerController {
  async checkQuestion(req, res) {
    const { productId } = req.params;
    const { input } = req.body;

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
      result: '',
    });
  }
}

export default new AnswerController();
