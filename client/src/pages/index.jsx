import React from 'react'
import {Route, Routes} from "react-router-dom";
import Layout from "../components/Layout";


//import pages
import Auth from "./Auth";
import UserProfile from "./UserProfile";
import Main from "./Main";
import AboutUs from "./AboutUs";
import Course from "./Course";
import FAQ from "./FAQ";
import NotFound from "./NotFound";


const Routing = () => {
    return (
        <Routes>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Main/>}/>
                <Route path="aboutus" element={<AboutUs/>}/>
                <Route path="profile" element={<UserProfile/>}/>
                <Route path="courses" element={<Course/>}/>
                <Route path="faq" element={<FAQ/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}
export default Routing;
