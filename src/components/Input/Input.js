import React from 'react';

import './Input.css';

const input = props => (

    <input 
        className='Input' 
        onKeyDown={props.clicked}
        onChange={props.changed} 
        value={props.value}
        placeholder={props.placeholder}
     />
);

export default input;