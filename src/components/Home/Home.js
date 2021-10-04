import React from 'react';
import {useState,useEffect} from 'react'
import {Container,Row,Card,Col} from 'react-bootstrap'
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




<Container className="mt-5">

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
    );
};

export default Home;