import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../../helpers/constants'

export default function ButtonRounded ({ label, handler }) {
    return (
        <TouchableOpacity onPress={handler} style={styles.btn}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btn: {
        backgroundColor: colors.primary,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})