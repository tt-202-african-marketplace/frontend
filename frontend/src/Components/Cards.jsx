import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const Cards = (props) => {
  const { data } = props;
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{ data.item_name }</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{ data.category }</CardSubtitle>
        </CardBody>
        {/* <img width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardBody>
          <CardText tag="h6" >{ data.price }</CardText>
          <CardText tag="h3">{ data.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;