import {IBike} from "../types/bike.type";
import {Bike} from "../models/Bike.model";
import {ApiError} from "../error/api.error";
import {EStatus} from "../enum/status.enum";
import {IBikeStatistics} from "../types/statistics.type";

class BikeService{
  public async getAll():Promise<IBike[]>{
      try{
          return Bike.find()
      }catch (e) {
           throw new ApiError(e.message,e.status)
      }
  }

  public async updateStatus(bikeId:string,newStatus:EStatus):Promise<IBike>{
      try {
          return await Bike.findOneAndUpdate(
              {_id: bikeId},
              {$set: {status: newStatus}},
              {new: true}
          )
      }catch (e) {
          throw new ApiError(e.message,e.status)
      }
  }

  public async getStatistics():Promise<IBikeStatistics>{
      try {
          const totalBicycles =  await Bike.countDocuments()
          const availableBicycles = await Bike.countDocuments({status:EStatus.available})
          const bookedBicycles = await Bike.countDocuments({status:EStatus.booked})
          const averagePrice = await Bike.aggregate([
              {
                  $group:{
                      _id:null,
                      averagePrice: {$avg:"$price"}
                  }
              }
          ])

          return  {
              totalBicycles,
              availableBicycles,
              bookedBicycles,
              averagePrice: averagePrice.length ? averagePrice[0].averagePrice : 0
          }
      }catch (e) {
          throw new ApiError(e.message,e.status)
      }
  }

}

export const bikeService = new BikeService()
