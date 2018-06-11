import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

    componentWillMount() {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = dataSource.cloneWithRows(this.props.libraries);
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }

    renderRow(library) {
        return <ListItem library={library}/>;
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
};

// connect() returns a function. Call the returned function with the parameter LibraryList  
export default connect(mapStateToProps)(LibraryList);