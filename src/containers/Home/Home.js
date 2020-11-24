import React, { Component } from 'react';

import Input from '../../components/Input/Input';
import './Home.css';
import Button from '../../components/Buttons/Button/Button';

class Home extends Component {
    render () {
        return (
            <div className='Home'>
                <Input/>
            </div>
        );
    }
    
};

export default Home;