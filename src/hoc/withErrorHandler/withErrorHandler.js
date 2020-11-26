import React, {Component,Fragment} from 'react';

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