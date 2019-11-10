import React, { Component } from 'react';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
// import PubSub from 'pubsub-js';
import $ from 'jquery';

class FormInputs extends Component {

    constructor(){
        super();
        this.state = {artist:'', description:''}
        this.findByText = this.findByText.bind(this);
        this.createRecord = this.createRecord.bind(this);
        this.setArtist = this.setArtist.bind(this);
        this.setDescription = this.setDescription.bind(this);
    }

    findByText(event){
        event.preventDefault();
        $.ajax({
            url:"http://localhost:3001/albums/bytext/paranhos",
            contentType: 'application/json',
            dataType: 'json',
            type:'get',
            success:function(response){
                // this.setState({albums:response});
            },
            error: function(response){
                
            }
        });
    }

    createRecord(event){
        event.preventDefault();
        $.ajax({
            url:"http://localhost:3001/albums",
            contentType: 'application/json',
            dataType: 'json',
            type:'post',
            data: JSON.stringify({}),
            success:function(response){
                
            },
            error: function(response){
                console.log(response);
            }
        });
    }

    setArtist(event){
        this.setState({artist:event.target.value});
    }

    setDescription(event){
        this.setState({description:event.target.value});
    }

    render(){
        return (
            <div>
                <form id="actions" onSubmit={this.createRecord} method="post">
                    <CustomInput id='labelArtist' type='text' name='Artist' onChange={this.setArtist}/>
                    <CustomInput id='labelDescription' type='text' name='Description' onChange={this.setDescription}/>
                    <CustomButton text='Add' type="submit"/>
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