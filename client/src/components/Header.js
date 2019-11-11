import React, { Component } from 'react';

class Header extends Component {

    constructor(){
        super();
        this.state = {title: 'Albums'};
    }
    
    render(){
        return (
            <div className="header">
                {this.state.title}
            </div>
        );
    }
}

export default Header;
