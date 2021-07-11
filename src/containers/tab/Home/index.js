import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import CardMonth from '../../../components/CardMonth';
import Header from '../../../components/Header';
import Wrapper from '../../../components/Wrapper';

const data = [
    {
        id: '1',
        year: '2021',
        month: 'Jan',
        active: false
    },
    {
        id: '2',
        year: '2021',
        month: 'Feb',
        active: false
    },
    {
        id: '3',
        year: '2021',
        month: 'Mar',
        active: false
    },
    {
        id: '4',
        year: '2021',
        month: 'Apr',
        active: false
    },
    {
        id: '5',
        year: '2021',
        month: 'Jun',
        active: false
    },
    {
        id: '6',
        year: '2021',
        month: 'Jul',
        active: true
    },
]

export default function Home () {
    return (
        <Wrapper>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ paddingVertical: 10 }}>
                        <Header />
                    </View>

                    <ScrollView style={{ width: '100%' }} horizontal>
                        {data.map(dat => (
                            <View style={{ flexDirection: 'row' }} key={dat.id}>
                                <CardMonth year={dat.year} month={dat.month} active={dat.active} />
                            </View>

                        ))}
                    </ScrollView>
                </View>

                <View style={{ flex: 1 }}>

                </View>

                <View style={{ flex: 1 }}>

                </View>

            </View>

        </Wrapper>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 0.5,
        paddingHorizontal: 30,
        backgroundColor: '#FFF',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20
    }
})