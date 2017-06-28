import React from 'react';
import Proptypes from 'prop-types';
import Display from './Display';
import Input from './Input';
import Keypad from './Keypad';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leftState: '',
            operator: '',
            rightState: '',
            result: ''

        }
        this.addNums = this.addNums.bind(this);
        this.addOps = this.addOps.bind(this);
    }
    render() {
        return (
            <div>
                <h1>Calculator</h1>
                <Display value={this.state.leftState + this.state.operator + this.state.rightState} />
                <Keypad handleClick={this.addNums || this.addOps} />
            </div>
        )
    }

    addNums(event) {
        const value = event.target.innerHTML
        this.setState({
            leftState: this.state.leftState + value,
            
        })

        console.log(this.state.leftState)

    }


    addOps(event) {
        const value = event.target.innerHTML
        this.setState({
            operator: this.state.operator + value
        })

    }
     addOps(event) {
        const value = event.target.innerHTML
        this.setState({
            operator: this.state.operator + value
        })

    }
}

export default App;