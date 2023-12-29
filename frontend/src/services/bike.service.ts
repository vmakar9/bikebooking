import {IRes} from "../types/response.type";
import {IBike} from "../interfaces/bike.interface";
import {apiService} from "./api.service";
import {urls} from "../urls/urls";


const bikeService={
    getAll:():IRes<IBike[]>=>apiService.get(urls.bikes.base),
    create:(data:IBike):IRes<IBike>=>apiService.post(urls.bikes.base,data),
    updateStatus:(_id:string,status:string):IRes<IBike>=>apiService.patch(urls.bikes.byId(_id),{status}),
    deleteById:(_id:string):IRes<void>=>apiService.delete(urls.bikes.byId(_id))
}

export {bikeService}