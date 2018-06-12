import React, { Component } from 'react';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size='large' />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='email@gmail.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label='Password'
                        placeholder='password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card >
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = ({ auth }) => {
    // auth is the reducer key
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
};

// Connect the components to redux store, connect is used to map the stores 
// state and dispatch to the props of a component
// The first argument is the state received from the store, the second are the
// actions creator
export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(LoginForm);