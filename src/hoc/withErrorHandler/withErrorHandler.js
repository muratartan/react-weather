import React, {Component,Fragment} from 'react';

import Modal from '../../components/Modal/Modal';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Button from '../../components/Buttons/Button/Button';

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {
        render () {
            return (
                <Fragment>
                   
                    <WrappedComponent />
                </Fragment>
            );
        }
    }
}

export default withErrorHandler;