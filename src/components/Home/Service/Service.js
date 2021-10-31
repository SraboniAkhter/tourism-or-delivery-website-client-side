import React from 'react';
import './Service.css';
import { NavLink } from 'react-router-dom';

const Service = ({ service }) => {

    const { _id, name, description, imageURL } = service;
    return (
        <div className="service pb-3">
            <img style={{ height:"160px"}} src={imageURL} alt="" />
            <h3 className="text-warning">{name}</h3>
            <p className="px-3">{description}</p>
            <NavLink to={`/booking/${_id}`}>
            <button className="btn btn-warning text-white">Book Now</button>
            </NavLink>
        </div>
    );
};

export default Service;