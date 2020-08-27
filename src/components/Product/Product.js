import React from 'react';
import './Product.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
 console.log(props.product);
    const {img, name,price,rating,duration,students} = props.product;


    return (
        <div className="product row">
           <div className="col-md-5.5 d-flex align-items-center">
              <img src={img} alt="" className="img-control"></img>
            </div>
           <div className="col-md-6.5 description">
                <h3 >{name}</h3>
              
                <p><small>Rating : {rating}</small> <FontAwesomeIcon icon={faStar}/></p>
                <p><small><FontAwesomeIcon icon={faClock}/>{ duration}</small></p>
                <p><small> <FontAwesomeIcon icon={faUser}/> {students} students has already enrolled.</small></p>  
                <p><b>$</b>{price}</p>
                <button 
                   className="btn btn-success"
                    onClick={()=>props.handleAddProduct(props.product)}
                    >
                    <FontAwesomeIcon icon={faShoppingCart}/>  Enroll Now
                </button>  
           </div>
        </div>
    );
};

export default Product;