/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */
import "./hello.css";
import helloImg from './assets/image/hello_image.png'
import star from './assets/image/star-image.png'
import { Button, IButtonProps } from "./button";






export function Hello() {
  return (
    <div className="hello">
      <div className="hello_wrapper">
        <div className="hello__content">
          <div className="content">
            <div className="title">Beautiful food & takeaway, <span className="blue">delivered</span>  to your door.</div>
            <div className="sub-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</div>
            <div className="hello__button"> <Button ownwidth={'173px'} buttonContent={'Place on Order'} ownheight={'60px'}/>        
      </div>
            <div className="hello__star">
              <div className="star_img"><img className="star_image" src={star}/></div>              
              <div className="raiting">4.8 out of 5</div>
              <div className="rewiuvs">based on 2000+ reviews</div>
            </div>
          </div>
          <div className="hello__image"><img src={helloImg} alt=''/></div>
        </div>
      </div>     
    </div>
  );
}
