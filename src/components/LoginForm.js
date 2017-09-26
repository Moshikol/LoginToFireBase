import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import Card from './common/Card';
import CardSection from './common/CardSection';

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = { Email: '', Pass: '' };

    }
    

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput
                        style={{ height: 40, width: 150 }}
                       onChangeText={text => this.setState({ Email })}
                        value={this.state.Email} />
                </CardSection>
                <CardSection>
                    <TextInput style={{ height: 40, width: 150 }}
                        onChangeText={text => this.setState({ Pass })}
                        value={this.state.Pass} />
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