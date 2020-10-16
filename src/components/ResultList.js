import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../App.css';
export default function ResultList(props) {

  return (
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={props.result.urlToImage} style={{ width: '30rem' }} />
      <Card.Body>
        <Card.Title>{props.result.title}</Card.Title>
        <Card.Text>
          {props.result.desciption}
          <span>{props.result.publishedAt}</span>
          <p>{props.result.description}</p>
        </Card.Text>
        <Button href={props.result.url} style={{ color: 'white', backgroundColor: '#775E82', border: '#775E82' }} variant="link">Read More</Button>
      </Card.Body>
    </Card>
  )
}
