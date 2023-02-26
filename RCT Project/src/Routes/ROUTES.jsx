import Main from "../Components/Main";
import Login from "../Components/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "../Components/SignUp";
import Engagement from "../Components/Engagement";
import Pricing from "../Components/Pricing";
import AdminLogin from "../Components/AdminLogin"
import UserData from "../Components/UserData";

function ROUTES(){

    return (<Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/home" element={<Main/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/engagement" element={<Engagement />}></Route>
        <Route path="/pricing" element={<Pricing/>}></Route>
        <Route path="/admin" element={<AdminLogin/>}></Route>
        <Route path="/userdata" element={<UserData/>}></Route>
    </Routes>
)
}

export default ROUTES