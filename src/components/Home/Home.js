import React from 'react';
import {useState,useEffect} from 'react'
import {Container,Row,Card,Col,Carousel} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComments,faUsers} from '@fortawesome/free-solid-svg-icons'

const Home = () => {

    const [services,setService] = useState([])

    useEffect(() =>{
      const url = './ServiceData.JSON';
      fetch(url)
      .then((response) => response.json())
      .then(data => setService(data))

    }, [])

    let one = services.slice(3, 6)

    return (

        <div>


<div>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-5"
      src="https://eduma.thimpress.com/demo-2/wp-content/uploads/sites/18/2015/11/bg-home-2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>We Provide Best Learning Course Services</h3>
      <p>Learn online and earn valuable credentials from top universities like Yale, and leading companies like Google and IBM.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>


<div>
<Container className="mt-5">
  <h2 className="mb-5">Our Most Popular Services </h2>
 <Row xs={1} md={3} className="g-4">
     {
         one.map(services => 
            <Col>
      <Card className="p-1">   
    <Card.Img variant="top" src={services.img} />
    <Card.Body>
      <Card.Title className="fw-bold">{services.title}</Card.Title>
      <Card.Text>
      {services.desc.slice(0,150)}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     <span ><FontAwesomeIcon icon={faUsers}/> {services.member}</span>
     <span className="ms-3"><FontAwesomeIcon icon={faComments}/> {services.comment}</span>
     <span className="float-end fw-bold text-danger">{services.price}</span>
    </Card.Footer>
    </Card>
    </Col>
            )
     }
</Row>
</Container>
  </div>
  </div>
    );
};

export default Home;