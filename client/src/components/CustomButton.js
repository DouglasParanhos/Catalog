import React, { Component } from 'react';

class CustomButton extends Component {

    // constructor(){
    //     super();
    //     // this.state = {text: 'Add'} 
    // }
    
    render(){
        return (
            <div>
                <input type={this.props.type} value={this.props.text}/>
            </div>
        );
    }
}

export default CustomButton;