import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
const numberButtons = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['0', '.']];
const operatorButtons =[['+','-','/','*','=']]

class Keypad extends React.Component {
    render() {
        return (
            <div>
                <div>
                {numberButtons.map((row) => {
                    return (
                        <div className='row'>
                            {row.map((button) => {
                                return (<Button handleClick={this.props.handleClick}
                                    button={button} />
                            )})}
                        </div>
                    )
                }
                )}
                </div>
                 <div>
                {operatorButtons.map((row) => {
                    return (
                        <div className='row'>
                            {row.map((button) => {
                                return (<Button handleClick={this.props.addOps}
                                    button={button} />
                            )})}
                        </div>
                    )
                }
                )}
                </div>
              

            </div>
        )
    }
}
export default Keypad;