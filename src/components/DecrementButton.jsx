import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class DecrementButton extends React.Component {
    render() {
        return (
            <button>Decrement Count</button>
        );
    }
}

export const DecrementButtonContainer = DecrementButton
