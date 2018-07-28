import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// Pure react component. Should not be connected to redux store; its container
// should be connected to the store.
export class TestComponent extends React.Component {
    render() {
        return (
            <h1>{this.props.label}</h1>
        );
    }
}


export const TestComponentContainer = TestComponent
