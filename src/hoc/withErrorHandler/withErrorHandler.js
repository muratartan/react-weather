import React, {Component,Fragment} from 'react';

import Modal from '../../components/Modal/Modal';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Button from '../../components/Buttons/Button/Button';

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {
        render () {
            return (
                <Fragment>
                    <Modal>
                        <ErrorOutlineIcon style={{fontSize:50,color:'#ff0000'}} />
                        <p>Oops! Something went wrong!</p>
                        <Button btnType='Error'>Go Home</Button>
                    </Modal>
                    <WrappedComponent />
                </Fragment>
            );
        }
    }
}

export default withErrorHandler;