import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Input from '../../../commons/Inputs';
import Wrapper from '../../../components/Wrapper';
import ButtonRounded from '../../../commons/Buttons/ButtonRounded';
import Button from '../../../commons/Buttons/Button';
import { colors } from '../../../helpers/constants'

const icon = <Icon name="arrow-forward-ios" size={30} color='#fff' />

export default function Login () {
    return (
        <Wrapper>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 18 }}>Budget tracker</Text>
                    <TouchableOpacity>
                        <Text style={{ color: colors.primary, fontSize: 18 }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <Image style={{ width: '100%', height: '90%' }} resizeMode='contain' source={require('../../../assets/logo.png')} />
                    <Text style={{ fontSize: 27, fontWeight: 'bold' }}>Login to you account</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                    <View style={{ marginBottom: 20 }}>
                        <Input label='Email' placeholder='name@domain.com' />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flex: 0.9 }}>
                            <Input label='Password' placeholder='***********' />
                        </View>
                        <View>
                            <ButtonRounded label={icon} />
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