/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import "./works.css";
import menu1 from "./assets/image/menu1.jpg";
import menu2 from "./assets/image/menu2.jpg";
import menu3 from "./assets/image/menu3.jpg";
import menu4 from "./assets/image/menu4.jpg";
import menu5 from "./assets/image/menu5.jpg";
import menu6 from "./assets/image/menu6.jpg";

import { CreateCardMenu } from "./createCardMenu";
import './menu'


export interface ICardMenuProps {
  menuTitle: string;
  menuPath: string;
  menuText: string;
  menuPrice: string;
}

export function Menu() {
  const [menu] = useState<ICardMenuProps[]>([
    { menuTitle: "Burger Dreams",
    menuPath: menu1,
    menuText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        menuPrice: '$9.20 USD',  
    },
    { menuTitle: "Burger Waldo",
    menuPath: menu4,
    menuText:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        menuPrice: '$10.00 USD',  
    },
    { menuTitle: "Burger Cali",
    menuPath: menu2,
    menuText:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        menuPrice: '$8.00 USD',  
    },
    { menuTitle: "Burger Bacon Buddy",
    menuPath: menu5,
    menuText:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        menuPrice: '$9.99 USD',  
    },
    { menuTitle: "Burger Spicy",
    menuPath: menu3,
    menuText:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        menuPrice: '$9.20 USD',  
    },
    { menuTitle: "Burger Classic",
    menuPath: menu6,
    menuText:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        menuPrice: '$8.00 USD',  
    },
  ]);
  return (
    <div className="menu">
      <div className="menu_wrapper">
        <div className="menu-title">Browse our menu</div>
        <div className="menu__content">
          {" "}
          {menu.map((item) => (
            <CreateCardMenu {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
