import React, { Component } from 'react';

class CustomInput extends Component {

    constructor(){
        super();
        this.state = {id:'', type:'', name:''};
    }
    
    render(){
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.name}</label>
                <input id={this.props.id} type={this.props.type} name={this.props.name}/>
            </div>
        );
    }
}

export default CustomInput;