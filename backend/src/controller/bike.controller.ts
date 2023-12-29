import {NextFunction, Request, Response} from "express";
import {IBike} from "../types/bike.type";
import {bikeService} from "../services/bike.service";
import {ICommonResponse} from "../types/common.type";
import {Bike} from "../models/Bike.model";
import {IBikeStatistics} from "../types/statistics.type"

class BikeController{
    public async getAll(req:Request,res:Response,next:NextFunction):Promise<Response<IBike[]>>{
        try {
            const bikes = await bikeService.getAll()
            return res.status(200).json(bikes)
        }catch (e) {
            next(e)
        }
    }

    public async create(req:Request,res:Response,next:NextFunction):Promise<Response<ICommonResponse<IBike>>>{
        try {
            const body=req.body
            const bike = await Bike.create(body)
            return res.status(201).json({
                message:"Bike created",
                data:bike
            })
        }catch (e) {
            next(e)
        }
    }

    public async delete(req:Request,res:Response,next:NextFunction):Promise<Response<ICommonResponse<IBike>>>{
        try {
            const {bikeId}=req.params
            await Bike.deleteOne({_id:bikeId});
            return res.status(200).json({
                message:"Bike deleted"
            })
        }catch (e) {
            next(e)
        }
    }

    public async updateStatus(req:Request,res:Response,next:NextFunction):Promise<Response<IBike>>{
        try {
            const {bikeId} = req.params
            const {status} = req.body
            const updateBike = await bikeService.updateStatus(bikeId,status)
            return res.json(updateBike)
        }catch (e) {
            next(e)
        }
    }

    public async getStatistics(req:Request,res:Response,next:NextFunction):Promise<Response<IBikeStatistics>>{
        try {
            const statistics = await bikeService.getStatistics()
            return res.status(200).json(statistics)
        }catch (e) {
            next(e)
        }
    }
}

export const bikeController = new BikeController()