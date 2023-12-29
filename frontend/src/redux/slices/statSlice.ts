import {IStat} from "../../interfaces/statistics.interface";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {statisticsService} from "../../services/statistics.service";

interface IState{
    stats:IStat,

}

const initialState:IState={
    stats:null,
}

const getStat=createAsyncThunk<IStat,void>(
    'statSlice/getStat',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await statisticsService.getStat()
            return data
        }catch (e) {
            return rejectWithValue(e)
        }
    }
)

const statSlice = createSlice({
    name:'statSlice',
    initialState,
    reducers:{},
    extraReducers:builder => builder
        .addCase(getStat.fulfilled,(state, action)=>{
            state.stats = action.payload
        })

}
)

const {reducer:statReducer,actions} = statSlice

const statsActions={
    ...actions,
    getStat
}

export {statsActions,statReducer}



