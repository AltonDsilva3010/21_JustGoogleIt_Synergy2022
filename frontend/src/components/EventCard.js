import React from "react";
import "./EventCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import BgImage from "../images/istockphoto-1125107251-612x612.jpg";

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
        <Card.Img variant="top" src={BgImage} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{location}</Card.Text>
          <Card.Text>{dateofevent}</Card.Text>
          <Button variant="primary">Book Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EventCard;
