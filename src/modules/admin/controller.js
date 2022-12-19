import model from './model.js'
import jwt from '../../lib/jwt.js'

const LOGIN = async (req, res) => {
    try {
        const admin = await model.LOGIN(req.body)
        if(admin) {
            res.status(200).json({
              status: 200,
              message: "successful",
              token: jwt.sign({ adminId: admin.admin_id })
            });
        }else{
            res.status(401).json({
              status: 401,
              message: "wrong username or password",
              token: null,
            });
        }
    } catch (error) {
        console.error(error);
    }
}


export default {
    LOGIN
}