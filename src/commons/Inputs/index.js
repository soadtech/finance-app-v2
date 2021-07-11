import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { colors } from '../../helpers/constants'

export default function Input ({ label, placeholder, handleChange, name, value, errors }) {
    const stylesErrLabel = errors[name] ? { color: 'red' } : { color: colors.gray };
    const stylesErrInput = errors[name] ? { borderBottomColor: 'red' } : { borderBottomColor: colors.gray };

    return (
        <View>
            <Text style={[styles.label, stylesErrLabel]}>{label}</Text>
            <TextInput
                autoCorrect={false}
                autoCompleteType='off'
                autoCapitalize='none'
                style={[styles.input, stylesErrInput]}
                value={value}
                onChangeText={(text) => handleChange(name, text)}
                placeholder={placeholder} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    label: {
        color: colors.gray,
        fontSize: 18,
        fontWeight: 'normal'
    },
    input: {
        width: '100%',
        paddingVertical: 12,
        color: '#000',
        fontWeight: 'bold',
        fontSize: 22,
        borderBottomColor: colors.gray,
        borderBottomWidth: 1
    }
})