import ModelModel from './model.model';

export const getAllModels = async (req, res) => {
  const { offset, limit } = req.params;
  const { status = 'active' } = req.query;

  try {
    const query = ModelModel.find({ status }).skip(offset).limit(limit).populate('tradermark', ['tradermarkName', 'status']);

    const data = await query.exec();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: '> It couldnt get all models',
    });
  }
};

export const createModel = async (req, res) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      message: '> Please complete all files required',
    });
  }

  try {
    const data = await ModelModel.create({
      modelName: body.modelName,
      tradermark: body.tradermark,
      status: body.status,
    });
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      code: 500,
      message: '> It couldnt create the category.',
    });
  }
};
