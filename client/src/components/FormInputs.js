import React, { Component } from 'react';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import PubSub from 'pubsub-js';
import $ from 'jquery';

class FormInputs extends Component {

    constructor(){
        super();
        this.state = {name:'', artist:'', description:'', searchString: ''};
        this.findByText = this.findByText.bind(this);
        this.createRecord = this.createRecord.bind(this);
        this.setName = this.setName.bind(this);
        this.setArtist = this.setArtist.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.setSearchString = this.setSearchString.bind(this);
    }

    findByText(event){
        event.preventDefault();
        let path =  this.state.searchString.length === 0? 'stringError' : this.state.searchString;
        let url = 'http://localhost:3001/albums/bytext/' + path;

        $.ajax({
            url: url,
            contentType: 'application/json',
            dataType: 'json',
            type:'get',
            success:function(response){
                PubSub.publish('filterAlbums', response);
            },
            error: function(response){
                PubSub.publish('errorsInputs', response.responseJSON);
            },
            beforeSend: function(){
                PubSub.publish('cleanErrorsInsertingAlbum');
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
            data: JSON.stringify({name: this.state.name, artist: this.state.artist, description: this.state.description}),
            success:function(){
                PubSub.publish('updateAlbums');
                this.setState({name:'', artist:'', description:''});
            }.bind(this),
            error: function(response){
                PubSub.publish('errorsInputs', response.responseJSON);
            },
            beforeSend: function(){
                PubSub.publish('cleanErrorsInsertingAlbum');
            }
        });
    }

    setName(event){
        this.setState({name:event.target.value});
    }

    setArtist(event){
        this.setState({artist:event.target.value});
    }

    setDescription(event){
        this.setState({description:event.target.value});
    }

    setSearchString(event){
        this.setState({searchString:event.target.value});
    }

    render(){
        return (
            <div>
                <form id="actions" onSubmit={this.createRecord} method="post">
                    <CustomInput id='labelName' type='text' name='Name' onChange={this.setName} value={this.state.name}/>
                    <CustomInput id='labelArtist' type='text' name='Artist' onChange={this.setArtist} value={this.state.artist}/>
                    <CustomInput id='labelDescription' type='text' name='Description' onChange={this.setDescription} value={this.state.description}/>
                    <CustomButton text='Add' type="submit"/>
                </form>
                <form id="search" onSubmit={this.findByText} method="get">
                    <CustomInput id='labelSearch' type='text' name='Search' onChange={this.setSearchString} value={this.state.searchString}/>
                    <CustomButton text='Filter' type="submit"/>
                </form>
            </div>
        );
    }
}

export default FormInputs;