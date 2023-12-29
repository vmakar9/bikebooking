import {IBike} from "../../interfaces/bike.interface";
import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {bikeService} from "../../services/bike.service";


interface IState{
    bikes:IBike[],
    trigger:boolean,
    status:IBike
}

const initialState:IState={
    bikes:[],
    trigger:null,
   status:null

}

const getAll = createAsyncThunk<IBike[],void>(
    'bikeSlice/getAll',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await bikeService.getAll()
            return data
        }catch (e) {
            return rejectWithValue(e)
        }
    }
)

const create = createAsyncThunk<void,{bike:IBike}>(
    'bikeSlice/create',
    async ({bike},{rejectWithValue})=>{
        try {
            await bikeService.create(bike)
        }catch (e) {
           return  rejectWithValue(e)
        }
    }
)

const deleteById =createAsyncThunk<void,{_id:string}>(
    'bikeSlice/deleteById',
    async ({_id},{rejectWithValue})=>{
        try {
            await bikeService.deleteById(_id)
        }catch (e) {
            return rejectWithValue(e)
        }
    }
)

const updateStatus= createAsyncThunk<IBike,{_id:string,status:string}>(
    'bikeSlice/updateStatus',
    async ({_id,status},{rejectWithValue})=>{
        try {
            console.log('Updating status...');
             await bikeService.updateStatus(_id, status)
            console.log(_id,status)
            console.log('Status updated successfully!');
        }catch (e) {
            return rejectWithValue(e)
        }
    }
)

const bikeSlice = createSlice({
    name:'bikeSlice',
    initialState,
    reducers:{
    },
    extraReducers:builder => builder
        .addCase(getAll.fulfilled,(state, action)=>{
            state.bikes = action.payload
        })
        .addMatcher(isFulfilled(create,deleteById,updateStatus),state => {
            state.trigger = !state.trigger
        })
})

const {reducer:bikeReducer,actions} = bikeSlice

const bikeActions={
    ...actions,
    getAll,
    create,
    deleteById,
    updateStatus
}

export {bikeActions,bikeReducer}