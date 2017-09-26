import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Card from './common/Card';
import CardSection from './common/CardSection';

class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Text> TESTTTTTTTTTTT</Text>
                </CardSection>
                <CardSection>
                    <Text> TESTTTTTTTTTTT</Text>
                </CardSection>
                <CardSection>
                    <Button
                        raised
                        icon={{ name: 'home', size: 32 }}
                        buttonStyle={{ backgroundColor: 'red', borderRadius: 10 }}
                        textStyle={{ textAlign: 'center' }}
                        title={`Welcome to\nReact Native Elements`}
                    />
                </CardSection>
            </Card>
        );
    }


}
export default LoginForm;