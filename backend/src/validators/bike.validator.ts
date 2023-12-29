import Joi from "joi";


export class BikeValidator{
    private static names = Joi.string().min(5).trim()
    private static type = Joi.string().min(5).trim()
    private static color = Joi.string().min(5).trim()
    private static description = Joi.string().min(5).trim()
    private static price = Joi.number()
    private static wheel_size = Joi.number()


    static createBike= Joi.object({
        name:this.names.required(),
        type:this.type.required(),
        color:this.color.required(),
        description:this.description.required(),
        price:this.price.required(),
        wheel_size:this.wheel_size.required(),

    })
}

