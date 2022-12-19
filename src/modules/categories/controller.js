import model from './model.js'


const GET = async (req, res) => {
    try {
        const categories = await model.GET(req.params)
        res.json({data: categories})
    } catch (error) {
        console.error(error);
    }
}


const POST = async (req, res) => {
  try {
    const category = await model.POST(req.body);
    res.status(200).res.json({data: category});
  } catch (error) {
    console.error(error);
  }
};


const PUT = async (req, res) => {
  try {
    const category = await model.PUT(req.params, req.body);
    res.status(200).send(category);
  } catch (error) {
    console.error(error);
  }
};

const DELETE = async (req, res) => {
  try {
    const category = await model.DELETE(req.params);
    res.status(200).send(category);
  } catch (error) {
    console.error(error);
  }
};

export default {
  GET,
  POST,
  PUT,
  DELETE,
};