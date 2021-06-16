import React from 'react'
import { NavLink } from 'react-router-dom';
import  seo  from "./img/seo.png";
import Common from "./Common";
const Home = () => {
    return (
        <>
            <Common 
            name="Grow your business with"
            imgsrc={seo}
            visit='/service'
            btnname = "Get Started"
            />


        </>
    )
}

export default Home
