import Joi from "joi";

export const LoginSchema=Joi.object({
    username:Joi.string().required(),
    password:Joi.string().required()
})

export const CategoriesSchema=Joi.object({
    category_name:Joi.string().required()
})

export const SubCategories=Joi.object({
    sub_category_name:Joi.string().required()
})

export const Event=Joi.object({
    body:Joi.string().required(),
    description:Joi.string().required(),
    event_link:Joi.string().required(),
    event_type:Joi.valid('online','offline'),
    event_date:Joi.string().required(),
    event_time:Joi.string().required(),
    user_role:Joi.valid('yuridik shaxs','jismoniy shaxs'),
    user_name:Joi.string().min(2).max(64).required(),
    user_proff: Joi.string().required(),
    company_name:Joi.string(),
    phone_number:Joi.string().required(),
    phone_second:Joi.string().required(),
    category_id:Joi.number().required(),
    sub_category_id:Joi.number().required(),
    event_img:Joi.string().pattern(new RegExp (/\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4)$/i))
})


