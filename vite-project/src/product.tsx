/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */
import "./product.css";
import product from './assets/image/product-img.png'

import { Button } from "./button";




export function Product() {
  return (
    <div className="product">
      <div className="product_wrapper">
        <div className="product__content">
          <div className="content-prod">
            <div className="title-prod">The home of fresh products</div>
            <div className="sub-title-prod">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</div>
            <div className="hello__button"> <Button ownwidth={'173px'} buttonContent={'Learn about us'} ownheight={'60px'}/>        
      </div>            
          </div>
          <div className="product__image"><img src={product} alt=''/></div>
        </div>
      </div>     
    </div>
  );
}