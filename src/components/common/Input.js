import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';


const Input = ({ label, maxlen, keytype, value, onChangeText, placeHolder }) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                keyboardType={keytype}
                maxLength={maxlen}
                autoCorrect={false}
                placeholder={placeHolder}
                multiline={false}
                value={value}
                onChangeText={onChangeText}
                style={styles.inputStyle}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        width: null
    },
    labelStyle: {
        paddingLeft: 20,
        fontSize: 18,
        flex: 2
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }

};

export { Input }