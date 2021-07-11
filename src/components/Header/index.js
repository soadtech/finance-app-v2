import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header () {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 27, fontWeight: 'bold' }}>Daily</Text>
            <Icon name="search" size={30} color='#000' />
        </View>
    )
}