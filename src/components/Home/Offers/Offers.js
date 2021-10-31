import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../../images/h2-img-1.png'

const Offers = () => {
    return (
        <div className="container mt-5">
            <Row className="bg-warning">
    <Col>
    <img src={img} alt="" />
    </Col>
    <Col className="text-white text-center">
        <br /> <br />
    <h1>Last Minute Offer</h1>
    <h5>erial view of Cape Town with Cape Town Stadium</h5>
    <p><small>Best Price Guarantee. Save up to 50% on your reservation. Book your vocation Deal in Deal online! No Booking Fees. Read Real Guest Reviews. Save 10% with Genius.</small></p>
    <Link to="/services">
    <button className="btn btn-dark">Know more</button>
    </Link>
    </Col>
  </Row>
            
            
        </div>
    );
};

export default Offers;