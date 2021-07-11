import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../helpers/constants'

const stylesDefault = {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2d88ff',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
}

export default function Button ({ label, outline }) {
    const stylesButton = {
        ...stylesDefault,

    }
    return (
        <TouchableOpacity style={stylesButton}>
            <View style={{ flex: 0.5 }}>
                <Icon name="facebook-f" size={30} color='#2d88ff' />
            </View>
            <Text style={{ color: '#2d88ff', fontSize: 16, fontWeight: 'bold' }}>{label}</Text>
        </TouchableOpacity>
    )
}