import React from "react";
import './Button.css';

const Button = props => {
    return(
        <div className="Button">
            <button onClick={ props.onclick}>{ props.title }</button>
        </div>
    );
}
export default Button;