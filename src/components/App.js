import React from 'react';
import Proptypes from 'prop-types';
import Display from './Display';
import Input from './Input';
import Keypad from './Keypad';

class App extends React.Component {
render() {
    return (
    <div> 
        <h1>Calculator</h1>
        <Display/>
        <Input/>
        <Keypad/>
        </div>
        )
}




}
export default App;