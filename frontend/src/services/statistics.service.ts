import {IRes} from "../types/response.type";
import {IStat} from "../interfaces/statistics.interface";
import {apiService} from "./api.service";
import {urls} from "../urls/urls";

const statisticsService={
    getStat:():IRes<IStat>=>apiService.get(urls.statistics)
}

export {statisticsService}