import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import Button from '@restart/ui/esm/Button';

const Booking = () => {

  const [userEmail,setUserEmail] = useState('');
  const [userAddress,setUserAddress] = useState('');
  const [userNumber,setUserNumber] = useState('');
  // console.log(userAddress ,userNumber,userEmail);
    const {serviceId} =useParams();
    let {user ,isLoading} = useAuth();

    // console.log(user.email)

    const handleSubmit = e => {
      e.preventDefault();
      e.target.reset();
      // console.log(data);
     
   };

    // console.log(serviceId);
    //  console.log(data);
    const [serviceDetails,setServiceDetails] = useState({});
      useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data =>setServiceDetails(data))
    },[])
    const name = serviceDetails.name;
    const price = serviceDetails.price;
    const imageURL = serviceDetails.imageURL;
    const description = serviceDetails.description;
    const email = user.email;
    const status = 'Pending';
    // console.log(serviceDetails.name);
    
    const orderData = {
      name, description , imageURL , price , email  , userNumber,userAddress,status}
      // console.log(orderData)
    
    if(isLoading){
      return <Spinner animation="border" />
    }
    // holding on input.
    const handleInputEmail = e => {
      setUserEmail(e.target.value)

  }
  const handleInputAddress = e => {
    setUserAddress(e.target.value)
  }
  const handleInputNumber = e => {
    setUserNumber(e.target.value)
  }
    
   const handleSubmitData = () => {
    axios.post('http://localhost:5000/bookings',orderData)
    .then(res => {
        if(res.insertedId) {
            alert('added successfully');
        }
    })
   }
    
    return (
        <div className="mx-5">
             {/* <h2>This is {serviceId}</h2> */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
          <div className="card">
        <h2 className="card-text">{serviceDetails.name}</h2>
        <img src={serviceDetails.imageURL} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h6 className="card-title">{serviceDetails.price}tk</h6>
        <p className="card-text">{serviceDetails.description}</p>
        {/* <Link to="/complete"> */}
          {/* <button className="btn btn-info">Get Booking</button> */}
          {/* </Link> */}

    <div>
  <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  type="email" placeholder={user.email} disabled/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control type="Address" onBlur={handleInputAddress} placeholder="Address" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicNumber">
    <Form.Label>Number</Form.Label>
    <Form.Control type="Number" onBlur={handleInputNumber} placeholder="Number" />
  </Form.Group>
  <Button className="btn btn-warning text-white" onClick={handleSubmitData} variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>

      </div>
    </div>
  </div>
</div>
 </div>
 
    );
};
export default Booking;































































// useEffect(() => {
    //     const foundServices = serviceDetails.filter (service => service.id === serviceId)
    //     console.log(foundServices)
    // },[])
    // const foundServices = serviceDetails.filter (service => service.id === serviceId)
    // console.log(foundServices)