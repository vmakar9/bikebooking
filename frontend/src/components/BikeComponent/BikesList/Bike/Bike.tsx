import React, { FC, PropsWithChildren} from "react";
import {IBike} from "../../../../interfaces/bike.interface";
import {useAppDispatch} from "../../../../hooks/reduxHooks";
import {bikeActions} from "../../../../redux/slices/bikeSlice";
import css from "./Bike.module.css"


interface IProps extends PropsWithChildren{
    bike:IBike
}
export const Bike:FC<IProps>=({bike})=>{
    const {_id, name,price,type,color,status} = bike
    const dispatch = useAppDispatch()


    const handleStatusChange = async (_id: string, newStatus: string) => {
         await dispatch(bikeActions.updateStatus({ _id: _id, status: newStatus }));
         console.log(_id,newStatus)
    };

    return (
        <div className={css.BikeList}>
            <div className={`${css.BikeBlock} ${css[status]}`}>
                <div className={css.NameTypeColor}>
                    <h4>{name}</h4>
                    <h4>{type}</h4>
                    <h4>{color}</h4>
                </div>
                <div className={css.ID}>
                    <h5>ID : {_id}</h5>
                </div>
                <div className={css.StatusBlock}>
                   <div className={css.Stat}>
                    <h4> Status: </h4> <select

                        className={css.Status}
                        value={status}
                        onChange={(e) => handleStatusChange(_id, e.target.value)}
                    >
                        <option value="available">Available</option>
                        <option value="booked">Booked</option>
                        <option value="busy">Busy</option>
                        <option value="unavailable">Unavailable</option>
                    </select>
                </div>
                   <div className={css.Price}>
                    <h4>{price} UAH/hr.</h4>
                   </div>
                </div>


                <div className={css.Delete}>
                    <span onClick={() => dispatch(bikeActions.deleteById({_id}))} className={css.CrossIcon}>
              &times;
               </span>
                </div>
            </div>
            <div className={css.VerticalLine}></div>

        </div>
    );
}