import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import img from '../../../images/Taj_Mahal_in_India_-_Kristian_Bertel.jpg'
import img2 from '../../../images/dominican-republic-beach.jpg'
import img3 from '../../../images/MAM-900x600-Likuliku-Overwater-hero.jpg'

const Features = () => {
    return (
        <div className="mt-5 m-5">
            <h6 className="text-warning">Modern & Beautiful</h6>
            <h2 className="text-bold">Special Offers & Discounts</h2>
            <p><small className="text-secondary">With some of the world's most popular destinations available, <br /> a quality vacation is at your fingertips. Maximize your Roam membership and enjoy the value.</small></p>
            <CardGroup>
 <Card>
  <Card.Img src={img} style={{height: '450px'}} alt="Card image" />
  <Card.ImgOverlay>
  <Card.Title>Taj Mahal</Card.Title>
    <Card.Text>
        Agra,India
    </Card.Text>
  </Card.ImgOverlay>
</Card>
<Card>
  <Card.Img src={img2} style={{height: '450px'}} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Beach in February</Card.Title>
    <Card.Text>
    Thailand
    </Card.Text>
  </Card.ImgOverlay>
</Card>
  <Card>
  <Card.Img src={img3} style={{height: '450px'}} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Fiji Islands Vocations</Card.Title>
    <Card.Text>
    Fiji Island
    </Card.Text>
  </Card.ImgOverlay>
</Card>
</CardGroup>
        </div>
    );
};

export default Features;