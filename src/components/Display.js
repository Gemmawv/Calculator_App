import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
    render() {
        return (
            <div>
                <span> {this.props.value} </span>
            </div>
        )
    }
}
export default Display;