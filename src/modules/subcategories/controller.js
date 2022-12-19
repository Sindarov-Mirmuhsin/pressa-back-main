import model from './model.js'


const GET = async (req, res) => {
    try {
        const subcategories = await model.GET(req.params)
        res.json({data: subcategories})
    } catch (error) {
        console.error(error);
    }
}


const POST = async (req, res) => {
  try {
    const subcategory = await model.POST(req.body);
    res.status(201).send(subcategory);
  } catch (error) {
    console.error(error);
  }
};


const PUT = async (req, res) => {
  try {
    const subcategory = await model.PUT(req.params, req.body);
    res.status(200).send(subcategory);
  } catch (error) {
    console.error(error);
  }
};

const DELETE = async (req, res) => {
  try {
    const subcategory = await model.DELETE(req.params);
    res.status(200).send(subcategory);
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