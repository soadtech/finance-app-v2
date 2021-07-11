import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native'

export default function Wrapper ({ children }) {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 15,
    }
})