import ShoesModel from './shoes.model';

export const getAllShoes = async (req, res) => {
  const { offset, limit } = req.params;
  const { status = 'active' } = req.query;

  try {
    const query = ShoesModel.find({ status }).skip(offset).limit(limit)
      .populate('category', ['categorieName', 'status'])
      .populate({
        path: 'model',
        populate: { path: 'tradermark', select: ['tradermarkName'] },
      })
      .populate('design', ['designName', 'status']);

    const data = await query.exec();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: '> It couldnt get all shoes',
    });
  }
};

export const createShoes = async (req, res) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      message: '> Please complete all files required',
    });
  }

  try {
    const data = await ShoesModel.create({
      size: body.size,
      color: body.color,
      price: body.price,
      url: body.url,
      category: body.category,
      model: body.model,
      design: body.design,
      status: body.status,
    });
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      code: 500,
      message: '> It couldnt create the shoes.',
    });
  }
};
