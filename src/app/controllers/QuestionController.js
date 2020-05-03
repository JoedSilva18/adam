import Questions from '../schemas/Questions';

class QuestionController {
  async store(req, res) {
    const { productId, userId } = req.params;
    const { question } = req.body;
    const questionSave = await Questions.create({
      productId,
      userId,
      question,
    });

    res.status(200).json(questionSave);
  }

  async index(req, res) {
    const { productId } = req.params;

    const questions = await Questions.find({
      productId: `productId:${productId}`,
    });

    return res.status(200).json(questions);
  }
}

export default new QuestionController();
