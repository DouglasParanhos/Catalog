import React, { Component } from 'react';

class AlbumsTable extends Component {

    constructor(){
        super();
        this.state = { albums: [] };
    }

    render(){
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Artist</th>
                            <th>Description</th>
                            <th>Number of Songs</th>
                            {/* <th>Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.albums.map(function(album){
                                return (
                                    <tr key={album.id}>
                                        <td>{album.name}</td>
                                        <td>{album.artist}</td>
                                        <td>{album.description}</td>
                                        <td>{album.totalSongs}</td>
                                        {/* <td>0</td> */}
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AlbumsTable;