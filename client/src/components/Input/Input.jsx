import React from 'react';
import './Input.css';

const Input = ({label, name, type, placeholder, onChangeHandler, classNameStr, disabled, value}) =>{
    return <div className={`uss_input ${classNameStr}`}>
        <label>
            {label && label}
            <input value={value} type={type} placeholder={placeholder} name={name} onChange={onChangeHandler} disabled={disabled} />
        </label>
    </div>
}

export default Input;

Input.defaultProps = {
    onChangeHandler:()=>{}, 
    classNameStr:'',
    label:'', 
    name:'', 
    type:'text', 
    placeholder:'',
    disabled:false,
    value:''
}