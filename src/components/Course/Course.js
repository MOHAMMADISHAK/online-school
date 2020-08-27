import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Course.css'
import Product from '../Product/Product';
import Item from '../Item/Item';

const Course = () => {
   const first15 = fakeData.slice(0,15);
   const [products,setProducts]= useState(first15);
   const [cart,setCart] = useState([]);

   const handleAddProduct = (product)=>{
    console.log("product added",product);
    const newCart =[...cart,product];
    setCart(newCart);
}
    return (
        <div className="container">
        <div className="course-container row">

            <div className="col-md-9 product-container">
             {
                 products.map(pd=><Product
                    handleAddProduct={handleAddProduct}
                     product={pd} >

                     </Product>)
             } 
            </div>
            <div className="col-md-3 cart-container">
                <Item cart={cart}></Item>
            </div>
            
        </div>
        </div>
    );
};

export default Course;