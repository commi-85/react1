import React from 'react';
import {Card} from "react-bootstrap"
import Button from 'react-bootstrap/Button'
import Name from './Name';
import Description from './Description';
import Price from './Price';
import product from '../produit';
//import Image from './component/Image';

function CardProduct() {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.imageUrl}  />
        <Card.Body>
          <Card.Title> <Name name={product.name}/> </Card.Title>
          <Card.Text>
          <Description description = {product.description}/>
          <Price price = {product.price}/> 
          </Card.Text>
          <Button variant="primary">Acheter</Button>
        </Card.Body>
      </Card>
    );
}

export default CardProduct;