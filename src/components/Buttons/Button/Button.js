import React from 'react';

import './Button.css';


const button = props => {

    
    
    return (
        <button className={['Button', props.btnType].join(' ')} onClick={props.click}>
            {props.children}
        </button>
    )
   
};

export default button;
