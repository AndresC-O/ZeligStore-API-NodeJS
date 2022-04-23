import EstiloModel from './estilo.model';

export const getAllEstilos = async (req, res) => {
  const { offset, limit } = req.params;
  const { status = 'active' } = req.query;

  try {
    const query = EstiloModel.find({ status }).skip(offset).limit(limit);

    const data = await query.exec();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: '> It couldnt get all Estilos',
    });
  }
};

export const createEstilo = async (req, res) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      message: '> Please complete all files required',
    });
  }

  try {
    const data = await EstiloModel.create({
      estiloName: body.estiloName,
    });
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      code: 500,
      message: '> It couldnt create the model.',
    });
  }
};

export const updateEstilo = async (req, res) => {
  const { body, params } = req;
  const { idEstilo } = params;

  if (!body) {
    return res.status(400).json({
      message: 'Please complete all files required',
    });
  }

  try {
    const data = await EstiloModel.findOneAndUpdate(
      { _id: idEstilo },
      {
        estiloName: body.estiloName,
      }
    );
    return res.status(200).json(Object.assign(data, body));
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: '> It couldnt update the estilo.',
    });
  }
};

export const deleteEstilo = async (req, res) => {
  const { params } = req;
  const { idEstilo } = params;

  try {
    const data = await EstiloModel.findOneAndUpdate(
      { _id: idEstilo },
      { status: 'inactive' }
    );

    return res.status(200).json({
      ...data,
      status: 'inactive',
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: '> It couldnt delete this estilo.',
    });
  }
};

export const deleteEstiloPermantly = async (req, res) => {
  const { params } = req;
  const { idEstilo } = params;

  try {
    const data = await EstiloModel.deleteOne({ _id: idEstilo });

    return res.status(200).json({
      ...data,
      status: 'deleted',
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: '> It couldnt delete this estilo.',
    });
  }
};
