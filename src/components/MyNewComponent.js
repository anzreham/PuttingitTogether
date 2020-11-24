import React, { Component } from 'react';
    
    
class SomeClassComponent extends Component {
    render() {
    const { firstname, lastname, age, hairColor } = this.props;
        return <div>

 <h1> { firstname}  { lastname }</h1>
<p> Age: {age} </p>
<p> Hair color {hairColor} </p>
           
</div>;
    }
}
    
export default SomeClassComponent;