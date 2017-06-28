import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          input: this.props.input 
        }
        
    }
    render() {
        return (
            <div>
                <h2> Display {this.props.input} </h2>

            </div>
        )
    }

}
export default Display;