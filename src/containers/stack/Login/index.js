import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
import Input from '../../../commons/Inputs';
import Wrapper from '../../../components/Wrapper';
import ButtonRounded from '../../../commons/Buttons/ButtonRounded';
import Button from '../../../commons/Buttons/Button';

export default function Login () {
    return (
        <Wrapper>
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Image style={{ width: '100%', height: '90%' }} resizeMode='contain' source={require('../../../assets/logo.png')} />
                    <Text style={{ fontSize: 27, fontWeight: 'bold' }}>Login to you account</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                    <View style={{ marginBottom: 20 }}>
                        <Input label='Email' placeholder='name@domain.com' />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flex: 0.8 }}>
                            <Input label='Password' placeholder='***********' />
                        </View>
                        <View >
                            <View>
                                <ButtonRounded label=">" />
                            </View>
                        </View>

                    </View>
                </View>

                <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <View>
                        <Text>or</Text>
                    </View>

                    <View style={{ width: '100%' }}>
                        <Button label='Login with facebook' />
                    </View>

                    <View>
                        <Text>Forgot password?</Text>
                    </View>

                </View>
            </View>
        </Wrapper>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30
    }
})