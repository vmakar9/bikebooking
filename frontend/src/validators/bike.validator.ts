import Joi from "joi";

export const bikeValidator={
    name: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ ]{5,1000}$/).trim().required().messages({
        'string.pattern.base': 'Only letter min 5 ',
    }) ,
    type: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ ]{5,1000}$/).trim().required().messages({
        'string.pattern.base': 'Only letter min 5 ',
    }),
    color: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ ]{5,1000}$/).trim().required().messages({
        'string.pattern.base': 'Only letter min 5 ',
    }) ,
    description: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ ]{5,1000}$/).trim().required().messages({
        'string.pattern.base': 'Only letter min 5 ',
    }) ,
    price: Joi.number().min(0) ,
    wheel_size: Joi.number().min(0)
};
