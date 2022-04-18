import UserModel from './user.model';

export const getAllUsers = async (req, res) => {
  const { offset, limit } = req.params;
  const { status = 'active' } = req.query;

  try {
    const query = UserModel.find({ status }).skip(offset).limit(limit);

    const data = await query.exec();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: '> It couldnt get all users',
    });
  }
};

export const createUser = async (req, res) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      message: '> Please complete all files required',
    });
  }

  try {
    const data = await UserModel.create({
      names: body.names,
      lastnames: body.lastnames,
      phoneNumber: body.phoneNumber,
      username: body.username,
      password: body.password,
      status: body.status,
    });
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      code: 500,
      message: '> It couldnt create the user.',
    });
  }
};
