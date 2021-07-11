import React from 'react'
import { SafeAreaView, Text } from 'react-native';
import Input from '../../../commons/Inputs';

export default function Login () {
    return (
        <SafeAreaView>
            <Text>lOGIN</Text>
            <Input label='Email' placeholder='name@domain.com' />
        </SafeAreaView>
    )
}
