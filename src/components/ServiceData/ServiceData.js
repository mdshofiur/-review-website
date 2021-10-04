import React from 'react';
import {useState,useEffect} from 'react'
import Services from '../Services/Services';
import {Container,Row} from 'react-bootstrap'



const ServiceData = () => {
    const [services,setService] = useState([])

    useEffect(() =>{
      const url = './ServiceData.JSON';
      fetch(url)
      .then((response) => response.json())
      .then(data => setService(data))

    }, [])

    return (

        <div>
           
           
           <Container className="mt-5">
           <h3 className="mb-3">Our Popular Services Course</h3>
           <Row xs={1} md={3} className="g-4">

           {
               services.map(service => <Services
               key={service.id}
               title={service.title}
               desc={service.desc}
               img={service.img}
               member={service.member}
               comment={service.comment}
               price={service.price}
               ></Services>)
            }
                 </Row>
                 </Container>

        </div>
    );
};

export default ServiceData;