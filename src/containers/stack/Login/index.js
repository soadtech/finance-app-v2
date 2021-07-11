import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, Keyboard, UIManager, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Input from '../../../commons/Inputs';
import Wrapper from '../../../components/Wrapper';
import ButtonRounded from '../../../commons/Buttons/ButtonRounded';
import Button from '../../../commons/Buttons/Button';
import { colors } from '../../../helpers/constants';
import useValidate from '../../../hooks/useValidate';
import validateLogin from '../../../helpers/validations/validLogin'

const icon = <Icon name="arrow-forward-ios" size={30} color='#fff' />

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}


export default function Login ({ navigation }) {

    const [stylesTitle, setStylesTitle] = useState({ fontSize: 27, fontWeight: 'bold' });
    const STATE_INITIAL = {
        email: 'fernandojoseropero@gmail.com',
        password: '123456'
    }
    const { values, errors, submitForm, handleSubmit, handleChange } = useValidate(STATE_INITIAL, validateLogin, handlerLogin)

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
        // cleanup function
        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);

    const _keyboardDidShow = () => {
        setStylesTitle({ ...stylesTitle, fontSize: 18 })
    };

    const _keyboardDidHide = () => {
        setStylesTitle({ ...stylesTitle, fontSize: 27 })
    };

    async function handlerLogin () {
        navigation.navigate('home')
    }

    return (
        <Wrapper>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 18 }}>Budget tracker</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('register')}>
                        <Text style={{ color: colors.primary, fontSize: 18 }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <Image style={{ width: '100%', height: '85%' }} resizeMode='contain' source={require('../../../assets/logo.png')} />
                    <View>
                        <Text style={stylesTitle}>Login to you account</Text>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                    <View style={{ marginBottom: 20 }}>
                        <Input name='email' errors={errors} values={values.email} handleChange={handleChange} label='Email' placeholder='name@domain.com' />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flex: 0.9 }}>
                            <Input name='password' errors={errors} values={values.password} handleChange={handleChange} label='Password' placeholder='***********' />
                        </View>
                        <View>
                            <ButtonRounded submitForm={submitForm} handler={handleSubmit} label={icon} />
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