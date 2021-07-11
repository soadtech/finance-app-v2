import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Wrapper from '../../../components/Wrapper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Input from '../../../commons/Inputs';
import ButtonRounded from '../../../commons/Buttons/ButtonRounded';
import useValidate from '../../../hooks/useValidate';
import { colors } from '../../../helpers/constants';
import validateRegister from '../../../helpers/validations/validRegister'

const icon = <Icon name="arrow-forward-ios" size={30} color='#fff' />
export default function Register ({ navigation }) {
    const STATE_INITIAL = {
        name: '',
        email: '',
        password: ''
    }
    const { values, errors, submitForm, handleSubmit, handleChange } = useValidate(STATE_INITIAL, validateRegister, handlerRegister)

    async function handlerRegister () {
        console.log('Haciendo login')
    }
    return (
        <Wrapper>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 18 }}>Budget tracker</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('login')}>
                        <Text style={{ color: colors.primary, fontSize: 18 }}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <Image style={{ width: '100%', height: '85%' }} resizeMode='contain' source={require('../../../assets/logo.png')} />
                    <View>
                        <Text style={{ fontSize: 27, fontWeight: 'bold' }}>Sign up to Budget tracker</Text>
                        {/* <Text>Keep you finantial data store to our server so that you can acces from enywhere you want.</Text> */}
                    </View>
                </View>

                <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                    <View style={{ marginBottom: 20 }}>
                        <Input name='name' errors={errors} values={values.name} handleChange={handleChange} label='Your name' placeholder='your name' />
                    </View>
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