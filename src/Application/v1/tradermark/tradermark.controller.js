import TraderMarkModel from './tradermark.model';
import CategorieModel from '../category/category.model';

export const getAllTradermarks = async (req, res) => {
  const { offset, limit } = req.params;
  const { status = 'active' } = req.query;

  try {
    const query = TraderMarkModel.find({ status }).skip(offset).limit(limit);

    const data = await query.exec();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: '> It couldnt get all tradermarks',
    });
  }
};

export const createTraderMark = async (req, res) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      message: '> Please complete all files required',
    });
  }

  try {
    const data = await TraderMarkModel.create({
      tradermarkName: body.tradermarkName,
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

export const updateTraderMark = async (req, res) => {
  const { body, params } = req;
  const { idTradeMark } = params;

  if (!body) {
    return res.status(400).json({
      message: 'Please complete all fields required',
    });
  }

  try {
    const data = await TraderMarkModel.findOneAndUpdate(
      { _id: idTraderMark },
      {
        tradermarkName: body.tradermarkName,
        status: body.status,
      }
    );
    return res.status(200).json(Object.assign(data, body));
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: '> It couldnt update the tradermark.',
    });
  }
}

export const deleteTraderMark = async (req, res) => {
  const { params } = req;
  const { idTraderMark } = params;

  try {
    const data = await TraderMarkModel.findOneAndUpdate(
      { _id: idTraderMark },
      { status: 'inactive' }
    );

    return res.status(200).json({
      ...data,
      status: 'inactive',
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: '> It couldnt delete this tradermark.',
    });
  }
};

export const deleteTraderMarkPermantly = async (req, res) => {
  const { params } = req;
  const { idTraderMark } = params;

  try {
    const data = await TraderMarkModel.deleteOne({ _id: idTraderMark });

    return res.status(200).json({
      ...data,
      status: 'deleted',
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: '> It couldnt delete this tradermark.',
    });
  }
};
