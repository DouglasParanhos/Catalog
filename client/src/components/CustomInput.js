import React, { Component } from 'react';
import PubSub from 'pubsub-js';

class CustomInput extends Component {

    constructor(){
        super();
        this.state = {errorMessage:''};
    }

    componentDidMount(){
        PubSub.subscribe("errorsInsertingAlbum", function(topic, error){
            if(error.field === this.props.name){
                this.setState({errorMessage: error.message});
            }
        }.bind(this));

        PubSub.subscribe("cleanErrorsInsertingAlbum", function(topic){
            this.setState({errorMessage: ''});
        }.bind(this));
    }
    
    render(){
        // console.log("alterando " + this.errorMessage);
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.name}</label>
                <input id={this.props.id} type={this.props.type} name={this.props.name} onChange={this.props.onChange}/>
                <span>{this.state.errorMessage}</span>
            </div>
        );
    }
}

export default CustomInput;