import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById
('root'))

//Los nombres de nuestros componentes deben ser en PascalCase para que React pueda diferenciar los elementos HTML

root.render(
<App/>
)