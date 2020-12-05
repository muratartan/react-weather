import React from 'react';

import './Modal.css';

const modal = props => (

    <div className='Modal'>
        <div className='ModalContent'>
            {props.children}
        </div>
    </div>
);

export default modal;