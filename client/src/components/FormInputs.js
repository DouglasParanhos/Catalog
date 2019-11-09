import React, { Component } from 'react';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import PubSub from 'pubsub-js';
import $ from 'jquery';

class FormInputs extends Component {

    constructor(){
        super();
        this.findByText = this.findByText.bind(this);
    }

    findByText(event){
        event.preventDefault();
        $.ajax({
            url:"http://localhost:3001/albums/bytext/",
            contentType: 'application/json',
            dataType: 'json',
            type:'post',
            data: JSON.stringify({}),
            success:function(response){
                this.setState({albums:response});
            }.bind(this),
            error: function(response){

            }
        });
    }

    render(){
        return (
            <div>
                <form id="actions" onSubmit={this.createRecord} method="post">
                    <CustomInput id='labelArtist' type='text' name='Artist'/>
                    <CustomInput id='labelDescription' type='text' name='Decription'/>
                    <CustomButton text='Add'/>
                </form>
                <form id="search" onSubmit={this.findByText} method="get">
                    <CustomInput id='labelSearch' type='text' name='Search'/>
                    <input id='searchInputButton' type='submit'/>
                </form>
            </div>
        );
    }
}

export default FormInputs;