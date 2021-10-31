import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
    let {isLoading} = useAuth();
   
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
        // fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    if(isLoading){
        return <Spinner animation="border" />
      }
    return (
        <div id="services">
            <h2 className="text-warning mt-5">Our services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;