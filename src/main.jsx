import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter';
  }

  table{
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ccc;
  }

  th, td {
  border: 1px solid #ccc;    
  padding: 6px;
  text-align: left;
  font-size: 14px;
  }

  td label {
    margin-right: 10px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }

`;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
)
