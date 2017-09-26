import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm'
class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBGE_rxHfHZDNEIHVf6l-vLNENagqpUAzM',
            authDomain: 'loginappfirebase-5b1d3.firebaseapp.com',
            databaseURL: 'https://loginappfirebase-5b1d3.firebaseio.com',
            projectId: 'loginappfirebase-5b1d3',
            storageBucket: 'loginappfirebase-5b1d3.appspot.com',
            messagingSenderId: '374257110242'
        })
    }

    render() {
        return (
            <View>
               <LoginForm/>
            </View>
        );
    }
}

export default App;