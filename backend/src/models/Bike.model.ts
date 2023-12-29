import {model, Schema} from "mongoose";
import {EStatus} from "../enum/status.enum";

const bikeSchema= new Schema(
    {
        name:{
            type:String,
            required:true
        },
        type:{
            type:String,
            required:true
        },
        color:{
            type:String,
            required:true
        },
        wheel_size:{
            type:Number,
            required:true
        },
        price:{
            type:Number,
            required:true,
        },
        description:{
            type:String,
            required:true
        },
        status:{
           type:String,
           enum:EStatus,
           default:EStatus.unavailable
        },
    },
    {
        versionKey:false,
        timestamps:true
    }
)

export const Bike = model('Bike',bikeSchema)

