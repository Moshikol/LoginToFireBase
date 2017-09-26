import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Card, CardSection, Input } from './common'
import firebase from 'firebase';

class LoginForm extends Component {
    state = { email: '', pass: '', error: '' };




    onLogin() {
        this.setState({error:''})
        const { email, pass } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, pass).catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, pass).catch(() => {
                this.setState({ error: 'Password Wrong' });
            });
        });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        keytype='email-address'
                        placeHolder='Google@gmail.com'
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email} />
                </CardSection>
                <CardSection>
                    <Input
                        securetxt
                        label='Password'
                        placeHolder='password'
                        onChangeText={(pass) => this.setState({ pass })}
                        value={this.state.pass} />
                </CardSection>
                <CardSection style={{ borderRadius: 10 }}>
                    <Button
                        iconRight={{ name: 'send', size: 32, color: 'white' }}
                        buttonStyle={{ backgroundColor: '#00b764', borderRadius: 10 }}
                        textStyle={{ textAlign: 'center' }}
                        fontSize={26}
                        title={`Login/Sign in`}
                        onPress={this.onLogin.bind(this)}
                    />

                </CardSection>
                <CardSection style={{ borderRadius: 10 }}>
                    <Text style={{ fontSize: 20, color: 'red' }}>
                        {this.state.error}
                    </Text>
                </CardSection>
            </Card >
        );
    }


}
export default LoginForm;