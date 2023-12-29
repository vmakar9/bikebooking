import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {useEffect} from "react";
import {bikeActions} from "../../../redux/slices/bikeSlice";
import {Bike} from "./Bike/Bike";

export const BikesList=()=>{

    const {bikes,trigger} = useAppSelector(state => state.bikes)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(bikeActions.getAll())
    }, [dispatch,trigger]);

    return(<div>
        {bikes.map(bike=><Bike key={bike._id} bike={bike}/>)}
    </div>)
}