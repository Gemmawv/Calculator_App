import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.handleClick}>
                {this.props.button}
            </button>
        )
    }
}
export default Button;