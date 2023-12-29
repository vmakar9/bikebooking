import {FC, PropsWithChildren} from "react";
import {IStat} from "../../../interfaces/statistics.interface";

interface IProps extends PropsWithChildren{
    stat:IStat
}
export const Stat:FC<IProps>=({stat})=>{
    const {availableBicycles,bookedBicycles,totalBicycles,averagePrice} = stat

    return(<div>
        <div>
            <h3>Statistics</h3>
            <h4>Total Bicycles:{totalBicycles}</h4>
            <h4>Available Bicycles:{availableBicycles}</h4>
            <h4>Booked Bicycles:{bookedBicycles}</h4>
            <h4>Average Price:{Math.round(averagePrice)} UAH/hr</h4>
        </div>
    </div>)
}