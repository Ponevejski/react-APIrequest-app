import React from 'react';
import './error.css';
import img from './error.jpg'


const ErrorMessage = () =>{
    return(
        <div className ="error-message">
            
            <span>Something goes wrong</span>
            <img src = {img} alt = "error" ></img>
        </div>
    )
}
export default ErrorMessage;