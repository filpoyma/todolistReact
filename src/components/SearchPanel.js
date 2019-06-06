import React from 'react';
import './SearchPanel.css'

class SearchPanel extends React.Component {
    state = {
        term: ''
    };

    onSearchChange = (event) => {
        this.setState({term: event.target.value});
        this.props.onSearhCange(event.target.value);
    };

    render() {
        return <input className="form-control search-input"
                      onChange={this.onSearchChange}
                      placeholder="type to search"
                      value={this.state.term}
                      />
    }
}

export default SearchPanel;

