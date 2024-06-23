import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import classes from './ProductModal.module.css';
import { Link, } from 'react-router-dom/cjs/react-router-dom.min';
import CartContext from '../../Store/CartContext';
import { AuthContext } from '../../Store/Auth-Context';
import { useDispatch } from 'react-redux';
import { showNotification } from '../../Store/store';

const ProductModule = ({ id, title, price, imageUrl }) => {
  const ctx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();

  const addItemToCart = () => {
    if(authCtx.isLoggedIn) 
    {
      ctx.addItem({ id, title, price, imageUrl });
   
    } 
    
    else { 
      
      dispatch(
        showNotification({
          status: 'error',
          title: 'Authentication Required',
          message: 'Please log in to add items to the cart.',
        })
      );
    
    }
  };
  
  return (
    <Card className={classes.CardContainer}>
      <Link to={`/products/${id}`}>
        <Card.Img className={classes.CardImg} variant="top" src={imageUrl} alt={title} />
      </Link>
      <Card.Body>
        <Card.Title className={classes.CardTitle}>{title}</Card.Title>
        <Card.Text className={classes.CardPrice}>${price.toFixed(2)}</Card.Text>
        <Card.Text className={classes.CardText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Card.Text>
        <Button className={classes.Button} variant="danger" onClick={addItemToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductModule;
