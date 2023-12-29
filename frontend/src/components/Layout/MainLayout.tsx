import {Outlet} from "react-router-dom";
import {Header} from "../Header/Header";
import {Bottom} from "../Botter/Botter";

export const MainLayout=()=>{
    return(<div>
        <Header/>
        <Outlet/>
        <Bottom/>
    </div>)
}