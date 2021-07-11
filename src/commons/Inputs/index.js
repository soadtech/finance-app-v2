import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { colors } from '../../helpers/constants'

export default function Input ({ label, placeholder, name, error }) {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} placeholder={placeholder} />
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