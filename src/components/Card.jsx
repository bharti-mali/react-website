import React from 'react'
import { NavLink } from "react-router-dom";
import s1 from "./img/1.jpg";

const Card = (props) => {
    return (
        <>

            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">In publishing and graphic design, Lorem ipsum is a
                            placeholder text commonly used to demonstrate the visual form of a document
                            or a typeface without
                        </p>
                        <NavLink to="/service" className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Card
