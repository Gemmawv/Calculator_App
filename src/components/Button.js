import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleClick}>
                    {this.props.num}
                </button>
            </div>
        )
    }
}
export default Button;