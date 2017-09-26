import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { Card, CardSection, Input } from './common'
// import Card from './common/Card';
// import CardSection from './common/CardSection';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', pass: '' };

    }


    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        keytype='email-address'
                        placeHolder='Google@gmail.com'
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email} />
                </CardSection>
                <CardSection>
                    <Input
                        label='Password'

                        onChangeText={pass => this.setState({ pass })}
                        value={this.state.pass} />
                </CardSection>
                <CardSection style={{ borderRadius: 10 }}>
                    <Button
                        iconRight={{ name: 'send', size: 32, color: 'white' }}
                        buttonStyle={{ backgroundColor: '#00b764', borderRadius: 10 }}
                        textStyle={{ textAlign: 'center' }}
                        fontSize={26}
                        title={`Login`}
                    />
                </CardSection>
            </Card>
        );
    }


}
export default LoginForm;