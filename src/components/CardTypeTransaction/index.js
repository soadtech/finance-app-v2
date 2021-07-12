import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../helpers/constants'

export default function CardTypeTransaction ({ icon, bg, name, total }) {
    return (
        <View style={styles.card}>
            <View style={{ alignSelf: 'flex-start' }}>
                <View style={{ borderRadius: 50, backgroundColor: bg, paddingHorizontal: 15, paddingVertical: 15, alignSelf: 'center' }}>
                    <Icon name={icon} size={30} color='#fff' />
                </View>
            </View>

            <View>
                <Text style={{ color: colors.gray, fontSize: 16 }}>{name}</Text>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>$ {total}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        flex: 0.6,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 20,
        justifyContent: 'space-between'
    }
})