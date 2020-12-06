import React from 'react';

import './Input.css';

const input = props => {
    const modeColor = props.mode ? 'Light-Mode-Input-Color' : 'Dark-Mode-Color';    
    return  (
        <input 
            className={['Input',modeColor].join(' ')} 
            onKeyDown={props.clicked}
            onChange={props.changed} 
            value={props.value}
            placeholder={props.placeholder}
         />
    );
}

export default input;