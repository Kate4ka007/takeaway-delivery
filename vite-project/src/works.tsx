/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { CreateCard } from "./createCard";
import "./works.css";
import img1 from "./assets/image/card-img3.png";
import img2 from "./assets/image/card-img2.png";
import img3 from "./assets/image/card-img1.png";

export interface ICardProps {
  text: string;
  path: string;
  subtext: string;
}

export function Works() {
  const [data] = useState<ICardProps[]>([
    {
      text: "Adapt your menu items",
      path: img1,
      subtext:
        "Easily adapt your menu using the webflow CMS and allow customers to browse your items.",
    },
    {
      text: "Accept online orders & takeout",
      path: img2,
      subtext:
        "Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.",
    },
    {
      text: "Manage delivery or takeout",
      path: img3,
      subtext:
        "Manage your own logistics and take orders simply through the ecommerce system.",
    },
  ]);
  return (
    <div className="works">
      <div className="works_wrapper">
        <div className="works-title">How it works.</div>
        <div className="works__content">
          {" "}
          {data.map((item) => (
            <CreateCard {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
