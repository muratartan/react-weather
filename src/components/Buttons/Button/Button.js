import React from 'react';

import './Button.css';


const button = props => (

    <button className='Button' onClick={props.click}>
        {props.children}
    </button>
);

export default button;
