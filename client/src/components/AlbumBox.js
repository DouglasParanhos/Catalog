import React, { Component } from 'react';
import FormInputs from './FormInputs';
import AlbumsTable from './AlbumsTable';
import $ from 'jquery';

class AlbumBox extends Component {

    constructor(){
        super();
        this.state = {albums: []};
    }

    componentDidMount(){
        $.ajax({
            url:"http://localhost:3001/albums",
            dataType: 'json',
            success:function(response){
                this.setState({albums:response});
            }.bind(this)
        });
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