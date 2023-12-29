import {Request,Response,NextFunction} from "express";
import {Bike} from "../models/Bike.model";
import {ApiError} from "../error/api.error";
import {BikeValidator} from "../validators/bike.validator";


class BikeMiddleware {
    public async getByIdAndThrow(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const {bikeId} = req.params;
            const bike = await Bike.findById(bikeId)
            if (!bike) {
                throw new ApiError("Bike not found", 404)
            }
            next()
        } catch (e) {
            next(e)
        }
    }

    public async isValidCreate(req:Request,res:Response,next:NextFunction):Promise<void>{
        try {
            const {error,value} = BikeValidator.createBike.validate(req.body)
            if(error){
                throw new ApiError(error.message,400)
            }
            req.body = value
            next();
        }catch (e) {
            next(e)
        }
    }
}

export const bikeMiddleware = new BikeMiddleware()