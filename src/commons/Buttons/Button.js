import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../../helpers/constants'

const stylesDefault = {
    paddingVertical: 23,
    paddingHorizontal: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2d88ff',
    width: '100%',
}

export default function Button ({ label, outline }) {
    const stylesButton = {
        ...stylesDefault,

    }
    return (
        <TouchableOpacity style={stylesButton}>
            <Text style={{ color: '#2d88ff' }}>{label}</Text>
        </TouchableOpacity>
    )
}