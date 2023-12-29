import {configureStore} from "@reduxjs/toolkit";
import {bikeReducer} from "./slices/bikeSlice";
import {statReducer} from "./slices/statSlice";

const store=configureStore({
    reducer:{
       bikes:bikeReducer,
       stats:statReducer
    }
})

export {store}