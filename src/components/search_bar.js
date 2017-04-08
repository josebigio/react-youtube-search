import React, { Component } from 'react';

class SearchBar extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            term:'Starting Value'
        }
    }

    render() {
        console.log('SearchBar render',this.state);
        const { term }  = this.state;
        return (
            <div>
                <input
                    value={term}
                    onChange={this.onInputChange.bind(this)}/>
            </div>
        );
    }

    onInputChange(event) {
        this.setState({term:event.target.value});
    }
}

export default SearchBar;

