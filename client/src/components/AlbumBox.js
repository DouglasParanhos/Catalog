import React, { Component } from 'react';
import FormInputs from './FormInputs';
import AlbumsTable from './AlbumsTable';
import PubSub from 'pubsub-js';
import $ from 'jquery';

class AlbumBox extends Component {

    constructor(){
        super();
        this.state = {albums: []};
        this.refreshTable = this.refreshTable.bind(this);
    }

    refreshTable(){
        $.ajax({
            url:"http://localhost:3001/albums",
            dataType: 'json',
            success:function(response){
                this.setState({albums:response});
            }.bind(this)
        });
    }

    componentDidMount(){
        this.refreshTable();

        PubSub.subscribe('updateAlbums', function(topic){
            this.refreshTable();    
        }.bind(this));
    }
    
    render(){
        return (
            <div>
                <FormInputs />
                <AlbumsTable albums={this.state.albums}/>
            </div>
        );
    }
}

export default AlbumBox;