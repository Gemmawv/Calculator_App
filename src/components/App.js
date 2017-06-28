import React from 'react';
import Proptypes from 'prop-types';
import Display from './Display';
import Input from './Input';
import Keypad from './Keypad';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <div>
                <h1>Calculator</h1>
                <Display />
                <Keypad handleClick={this.handleClick}/>
            </div>
        )
    }

    handleClick (event) {
        // display innerHTML
        // this.setState ({input:event.target.innerHTML});
        // when = is clicked, display result of previous string
         console.log(event.target.innerHTML);
        // console.log(this.state.input)
        
    }
}
export default App;