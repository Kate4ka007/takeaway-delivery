/* eslint-disable require-jsdoc */
import React, {useMemo, useState} from 'react';
import './card.css';
import {ICardProps} from './works';

export function CreateCard(props: ICardProps) {
  return (
    <div
      className="card">
      <div className="card-wrapper">
      <img className="card-img" src={props.path} alt="" />
      <div className='card-title'>{props.text}</div>
      <div className='card-subtitle'>{props.subtext}</div>        
      </div>
    </div>
  );
}