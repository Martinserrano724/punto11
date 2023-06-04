import React from "react";
import { Card } from "react-bootstrap";
const CardNoticia = ({ noticia }) => {
  return (
    
    <Card className="card-text col-md-4 col-lg-3 m-3">
      <Card.Img
        variant="top"
        src={
          noticia.image_url
            ? noticia.image_url
            : "https://thenounproject.com/api/private/icons/3129434/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkfCc3LDnn4WzbLmp5T4mJddcgHRPAKYr1XSbK6JKH_v3pYXNsPV_2G-MrM2EpBClEz4oBLvSFLwUqjDs2LJgksK4xAg%3D%3D?"
        }
      />
      <Card.Body>
        <Card.Title>{noticia.title}</Card.Title>
        <Card.Text>{noticia.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardNoticia;
