/* eslint-disable require-jsdoc */
import { Button } from './button';
import './card.css';
import {ICardMenuProps} from './menu';
import './menu.css'
import menu1 from "./assets/image/menu1.jpg";
import menu2 from "./assets/image/menu2.jpg";
import menu3 from "./assets/image/menu3.jpg";
import menu4 from "./assets/image/menu4.jpg";
import menu5 from "./assets/image/menu5.jpg";
import menu6 from "./assets/image/menu6.jpg";

export function CreateCardMenu(props: ICardMenuProps) {
  return (
    <div
      className="cardMenu">  
      <img className="cardMenu-img" src={props.menuPath} alt="" />
      <div className="cardMenu_content">
        <div className="menu-title">
          <div className='cardMenu-title'>{props.menuTitle}</div>
          <div className='cardMenu-price'>{props.menuPrice}</div>
        </div>      
      <div className='cardMenu-subtitle'>{props.menuText}</div>
      <div className="menu-buttons">
        <div className="menu-number"></div>
        <div className="menu__but"><Button ownwidth={'115px'} buttonContent={'Add to card'} ownheight={'45px'}/></div>
        </div>       
      </div>
   
    </div>
  );
}