import React from "react";
import "./EventCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const EventCard = ({
  organizer,
  name,
  description,
  price,
  dateofevent,
  location,
  type,
}) => {
  return (
    <div className="container">
      <Card style={{ width: "18rem", maxheight: "30rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Book Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EventCard;
