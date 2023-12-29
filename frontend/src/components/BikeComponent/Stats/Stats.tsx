import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {useEffect} from "react";
import {statsActions} from "../../../redux/slices/statSlice";
import {Stat} from "./Stat";

export const Stats=()=>{

    const {stats} = useAppSelector(state => state.stats)
    const {trigger} = useAppSelector(state => state.bikes)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(statsActions.getStat())
    }, [dispatch,trigger]);

    return(<div>
        {stats && <Stat stat ={stats}/>}
    </div>)
}