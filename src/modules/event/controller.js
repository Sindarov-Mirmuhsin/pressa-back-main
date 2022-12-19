import model from './model.js'


const GET = async (req, res) => {
    try {
        const event = await model.GET(req.params,req.query)
        res.json({data: event})
    } catch (error) {
        console.error(error);
    }
}

const GETBYID = async (req, res) => {
  try {
      const event = await model.GETBYID(req.params)
      res.json({data: event})
  } catch (error) {
      console.error(error);
  }
}


const POST = async (req, res) => {
  try {
    const event = await model.POST(req.body,req.file);
    res.status(201).json({data: event});
  } catch (error) {
    console.error(error);
  }
};


const PUT = async (req, res) => {
  try {
    const event = await model.PUT(req.params, req.body);
    res.status(200).send(event);
  } catch (error) {
    console.error(error);
  }
};

const PUTACTIVE = async (req, res) => {
  try {
    const event = await model.PUT(req.params);
    res.status(200).send(event);
  } catch (error) {
    console.error(error);
  }
};



const DELETE = async (req, res) => {
  try {
    const event = await model.DELETE(req.params);
    res.status(200).send(event);
  } catch (error) {
    console.error(error);
  }
};

export default {
  GET,
  POST,
  PUT,
  DELETE,
  PUTACTIVE, GETBYID
};

