import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../../images/destination-single-gallery-8-313x234.jpg'

const About = () => {
    return (
        <section className="pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                   <div className="col-md-7 align-self-center">
                        <h1 className="text-warning">We Plan Your Trip</h1>
                        <p className="text-secondary my-5">
                        Established in 1990, the Adventure Travel Trade Association is the largest global network of adventure travel leaders. Our community is made up of ~30,000 individual guides, tour operators, lodges, travel advisors, tourism boards, destination marketing and management organizations, outdoor educators, gear companies and travel media who share a belief and commitment to sustainable tourism. The connections and creativity of this vibrant community come together both virtually and in person to create and deliver the solutions that propel our businesses and our communities toward a responsible and profitable future.
                        </p>
                        <Link to="/"><button className="btn btn-warning">Learn More</button></Link>
                    </div>
                    <div className="col-md-5 mb-4 m-md-0">
                        <img src={images} alt=""/>
                        <div>
            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;