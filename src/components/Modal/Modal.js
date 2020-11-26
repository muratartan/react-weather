import React from 'react';

import './Modal.css';
import Button from '../Buttons/Button/Button';

const modal = props => (

    <div className='Modal'>
        <div className='ModalContent'>
            {props.children}
            <Button></Button>
        </div>
    </div>
);

export default modal;