import React from 'react'
import './input.scss';

//props(rest sisa inputan yang lain)

const Input = ({label, ...rest}) => {
    return (
        <div className="input-wrapper">
            <p className="label">{label}</p>
            <input className="input" {...rest}/>
        </div>
    )
}

export default Input
