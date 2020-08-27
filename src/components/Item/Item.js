import React from 'react';
import './Item.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const Item = (props) => {

    const cart = props.cart;
     const total = cart.reduce((total,prd)=>total + prd.price,0);
    

    let discount = 0;

    if(total>500){
        discount=total /20;
    }
    else if(total>300){
        discount=total /10;
    }
    else if(total>100){
        discount=total /5;
    }
    else if(total>0){
        discount=0;
    }

    const grandTotal =  total-discount ;

    return (
  
        <div className="d-flex justify-content-start summary">
            <div >
                <h3 className="order-summary"><b>Order Summary</b></h3>
                <p >Course Enrolled : {cart.length}</p>
                <p >Course Price : ${total}</p>
                <p ><small>Discount : ${discount}</small></p>
                <h5>Total Price : ${grandTotal}</h5>
                <button className="btn btn-success" >Order Now</button>
            </div>
        </div>
    );
};

export default Item;