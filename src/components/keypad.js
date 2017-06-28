import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './Buttons';
const buttonData = [ '1','2','3','4','5','6','7','8' ,'9','0']
class Keypad extends React.Component {
render(){
    return (
<div>
    {buttonData.map(function(nums) {
return <Buttons num = {nums}/>
    })}
  
                       </div>

    )

}


} 
export default Keypad;