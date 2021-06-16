import React from 'react'
import { NavLink } from 'react-router-dom';
import  seo  from "./img/seo.png";
import Common from "./Common";
const About = () => {
  return (
    <>
    <Common 
    name="Welcome to About us page"
    imgsrc={seo}
    visit='/contact'
    btnname = "Contact us"
    />
</>
  )
}

export default About
