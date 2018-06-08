import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
// import ListItem from './ListItem';

class LibraryList extends Component {
    render() {
        console.log(this.props);
        return;
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
};

// connect() returns a function. Call the returned function with the parameter LibraryList  
export default connect(mapStateToProps)(LibraryList);