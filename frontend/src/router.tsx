import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./components/Layout/MainLayout";
import {BikePage} from "./components/BikeComponent/BikePage/BikePage";

export const router = createBrowserRouter([
    {
      path:'',element:<MainLayout/>,children:[
            {index:true,element:<Navigate to={'bikes'}/>},
            {path:'bikes',element:<BikePage/>}
        ]
    }
])