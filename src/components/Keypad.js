import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
const buttonData = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '/', '*', '=', 'del'];

class Keypad extends React.Component {
    render() {
        
        return (
            <div>
                
                {buttonData.map((nums) => {
                    return <Button handleClick={this.props.handleClick}
                    num={nums} />;
                })}

            </div>

        )

    }

}
export default Keypad;