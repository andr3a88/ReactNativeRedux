import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation
} from "react-native";
import { CardSection } from './common';
import { connect } from 'react-redux';
// import * as variableName: Give me everything that was exported from the actions file and assign it to the variable actions
import * as actions from '../actions';

class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        const shouldExpand = false

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }

    renderDescription() {
        const { library, expanded } = this.props;
        const { descriptionStyle } = styles;
        if (expanded) {
            return (
                <CardSection>
                    <Text style={descriptionStyle}>{library.description}</Text>
                </CardSection>
            );
        }
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    descriptionStyle: {
        paddingLeft: 20,
        paddingRight: 20
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);