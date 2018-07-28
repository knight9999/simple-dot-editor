import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class IncrementButton extends React.Component {
    render() {
        return (
            <button>Increment Count</button>
        );
    }
}


export const IncrementButtonContainer = IncrementButton
