import React from 'react';
import {Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComments,faUsers} from '@fortawesome/free-solid-svg-icons'

//

const Services = (props) => {
   
    return (
  
     <Card className="p-1">   
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title className="fw-bold">{props.title}</Card.Title>
      <Card.Text>
      {props.desc.slice(0,150)}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     <span ><FontAwesomeIcon icon={faUsers}/> {props.member}</span>
     <span className="ms-3"><FontAwesomeIcon icon={faComments}/> {props.comment}</span>
     <span className="float-end fw-bold text-danger">{props.price}</span>
    </Card.Footer>
    </Card>
   
    );
};

export default Services;