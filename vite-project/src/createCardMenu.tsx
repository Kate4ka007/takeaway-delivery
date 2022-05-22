/* eslint-disable require-jsdoc */
import { Button } from './button';
import './card.css';
import {ICardMenuProps} from './menu';
import './menu.css'

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
        <div className="menu-number">1</div>
        <div className="menu__but"><Button ownwidth={'115px'} buttonContent={'Add to card'} ownheight={'45px'}/></div>
        </div>       
      </div>
   
    </div>
  );
}