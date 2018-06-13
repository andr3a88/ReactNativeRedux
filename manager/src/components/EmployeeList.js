import React, { Component } from 'react';
import { ListView } from 'react-native';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import _ from 'lodash';

class EmployeeList extends Component {

    UNSAFE_componentWillMount() {
        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <ListItem employee={employee} />;
    }

    render() {
        console.log(this.props);
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (employeeModel, uid) => {
        return { ...employeeModel, uid };
        // {name: "", phone: "", shift: "", uid: ""}
    });

    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);