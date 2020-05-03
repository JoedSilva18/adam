import Questions from '../schemas/Questions';

class AnswerController {
  async show(req, res) {
    const { productId, input } = req.params;

    const question = await Questions.findOne({
      productId,
      question: input,
    });

    return res.status(200).json(question);
  }
}

export default new AnswerController();
