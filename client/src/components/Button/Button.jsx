import React from 'react';
import './Button.css';

const Button = ({value, type, name, onClickHandler, classNameStr}) =>{
    return <div className={`uss_button ${classNameStr}`}>
        <button type={type} name={name} onClick={onClickHandler}>
            {value}
        </button>
    </div>
}

export default Button;

Button.defaultProps = {
    onClickHandler:()=>{}, 
    classNameStr:'',
    value:'', 
    name:'', 
    type:'button',
}