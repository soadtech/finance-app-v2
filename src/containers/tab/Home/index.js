import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import CardMonth from '../../../components/CardMonth';
import Header from '../../../components/Header';
import Wrapper from '../../../components/Wrapper';
import { colors } from '../../../helpers/constants'
import CardTypeTransaction from '../../../components/CardTypeTransaction';
import { LineChart, Grid } from 'react-native-svg-charts'

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
const data2 = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
export default function Home () {
    return (
        <Wrapper>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ paddingVertical: 10, paddingHorizontal: 30 }}>
                        <Header />
                    </View>

                    <ScrollView horizontal>
                        {data.map(dat => (
                            <CardMonth key={dat.id} year={dat.year} month={dat.month} active={dat.active} />
                        ))}
                    </ScrollView>
                </View>

                <View style={{ flex: 1, paddingHorizontal: 10, marginTop: 10 }}>

                    <View style={{ backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 30 }}>
                        <View>
                            <Text style={{ color: colors.gray, fontSize: 15 }}>Net balance</Text>
                            <Text style={{ fontSize: 27, fontWeight: 'bold' }}>$2446.90</Text>
                        </View>
                        <View>
                            <LineChart
                                style={{ height: 200 }}
                                data={data2}
                                svg={{ stroke: colors.primary }}
                                contentInset={{ top: 20, bottom: 20 }}
                            >
                                <Grid />
                            </LineChart>
                        </View>
                    </View>

                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5 }}>
                    <View style={{ flex: 0.49 }}>
                        <CardTypeTransaction name='Income' bg={colors.secondary} total='6,593.750' icon='arrow-collapse-left' />
                    </View>

                    <View style={{ flex: 0.49 }}>
                        <CardTypeTransaction name='Expense' bg={colors.primary} total='2,645.500' icon='arrow-collapse-right' />
                    </View>
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
        backgroundColor: '#FFF',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20
    }
})