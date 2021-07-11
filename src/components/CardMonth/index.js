import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../helpers/constants'

export default function CardMonth ({ year, month, active }) {
    return (
        <View style={{ justifyContent: 'center' }}>
            <View style={{ marginBottom: 10 }}>
                <Text style={{ color: colors.gray, marginLeft: 10 }}>{year}</Text>
            </View>
            <View style={[styles.card, { backgroundColor: active ? colors.primary : colors.gray }]}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>{month}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginRight: 10
    }
})