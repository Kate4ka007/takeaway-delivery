import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './header'
import { Hello } from './hello'
import './index.css'
import { Menu } from './menu'
import { Product } from './product'
import { Works } from './works'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Hello/>
    <Product/>
    <Works/>
    <Menu/>
  </React.StrictMode>
)
