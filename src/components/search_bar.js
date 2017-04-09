import React, { Component } from 'react';

class SearchBar extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            term:'Starting Value'
        }
    }

    onInputChange(event) {
        this.setState({term:event.target.value});
        this.props.onInputSelected(this.state.term);
    }

    render() {
        const { term }  = this.state;
        return (
            <div className="search-bar">
                <input
                    value={term}
                    onChange={this.onInputChange.bind(this)}/>
            </div>
        );
    }

}

export default SearchBar;

