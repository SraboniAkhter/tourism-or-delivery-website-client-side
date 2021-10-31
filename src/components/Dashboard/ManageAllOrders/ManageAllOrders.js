import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [serviceDetails,setServiceDetails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
        .then(res => res.json())
        .then(data =>setServiceDetails(data))
    },[])
    const handleDelete = id => {
        const url = `http://localhost:5000/booking/${id}`;
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                    alert('Are you sure you want to delete?')
                const remaining = serviceDetails.filter(service =>service._id !== id);
            setServiceDetails(remaining)
            }
        })
    }
    const handleUpdateData = e => {

    }
    return (
        <div>
            <h2>Manage All Services</h2>
            {
                
                serviceDetails.map(service => <div className="mx-5" key={service._id}>
            <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
          <div className="card">
        <h2 className="card-text">{service.name}</h2>
        <img src={service.imageURL} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h6 className="card-title">{service.price}tk</h6>
        <p className="card-text">{service.description}</p>
        <p className="card-text">{service.email}</p>
        <h6 className="card-text">{service.userAddress}</h6>
        <h6 className="card-text">Update status:{service.status}</h6>
        <button className="btn btn-warning text-white me-3" onClick={ () => handleDelete(service._id) }>Delete</button>
        <button className="btn btn-warning text-white">Update</button>
                    </div>
                    </div>
                    </div>
                    </div>
                    
                </div>)
            }
        </div>
    );
};

export default ManageAllOrders;