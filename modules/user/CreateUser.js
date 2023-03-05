import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { isEmpty, size } from 'lodash'
import { Button, Image, Icon, Input } from '@rneui/base'
import Loading from '../../kernel/components/Loading'
import { useState } from 'react'
import { validateEmail } from '../../kernel/validations'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function CreateUser(props) {
    const { navigation } = props;

    const payload = {
        email: "",
        password: "",
        repeatPassword: ""
    };

    const auth = getAuth();

    const [show, setShow] = useState(false);
    const [error, setError] = useState(payload);
    const [data, setData] = useState(payload);
    const [showPassword, setShowPassword] = useState(true);
    const [showRepeatPassword, setShowRepeatPassword] = useState(true);

    const changePayload = (e, type) => {
        setData({
            ...data, [type]: e.nativeEvent.text
        })
    }

    const createUser = () => {
        if (!(isEmpty(data.email) || isEmpty(data.password) || isEmpty(data.repeatPassword))) {
            if (validateEmail(data.email)) {
                if (size(data.password) >= 6) {
                    if (data.password == data.repeatPassword) {
                        setError(payload);
                        setShow(true)
                        createUserWithEmailAndPassword(auth, data.email, data.password)
                            .then((userCredential) => {
                                // Signed in 
                                const user = userCredential.user;
                                navigation.navigate('ProfileStack');
                                console.log("usuario creado")
                                setShow(false)
                                // ...
                            })
                            .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                // ..
                            });
                    } else {
                        setError({ repeatPassword: "Las contraseñas no coinciden", email: "", password: "" })
                    }
                } else {
                    setError({ password: "La contraseña debe ser mayor a 6 caracteres", email: "", repeatPassword: "" })
                }
            } else {
                setError({ email: "Correo no válido", password: "", repeatPassword: "" })
            }
        } else {
            setError({ email: "Campo obligatorio", password: "Campo obligatorio", repeatPassword: "Campo obligatorio" })
        }
    }

    return (
        <KeyboardAwareScrollView>
            <Image
                source={require('../../assets/presupuesto.png')}
                resizeMode='contain'
                style={styles.logo}
            />
            <View style={styles.viewForm}>
                <View style={styles.container}>
                    <Input
                        placeholder="Correo Electrónico"
                        keyboardType="email-address"
                        rightIcon={
                            <Icon type="material-community" name="email-outline" size={22} />
                        }
                        containerStyle={styles.input}
                        onChange={(e) => changePayload(e, "email-outline")}
                        errorMessage={error.email}
                        autoCapitalize="none"
                    />
                    <Input
                        placeholder="Contraseña"
                        containerStyle={styles.input}
                        rightIcon={
                            <Icon
                                type="material-community"
                                name={showPassword ? "eye-outline" : "eye-off-outline"}
                                size={22}
                                onPress={() => setShowPassword(!showPassword)}
                            />
                        }
                        onChange={(e) => changePayload(e, "password")}
                        secureTextEntry={showPassword}
                        errorMessage={error.password}
                    />
                    <Input
                        placeholder="Repetir contraseña"
                        containerStyle={styles.input}
                        rightIcon={
                            <Icon
                                type="material-community"
                                name={showRepeatPassword ? "eye-outline" : "eye-off-outline"}
                                size={22}
                                onPress={() => setShowRepeatPassword(!showRepeatPassword)}
                            />
                        }
                        onChange={(e) => changePayload(e, "repeatPassword")}
                        secureTextEntry={showRepeatPassword}
                        errorMessage={error.repeatPassword}
                    />
                    <Button
                        title='Crear cuenta'
                        containerStyle={styles.btnContainer}
                        buttonStyle={styles.btn}
                        onPress={createUser}
                    />
                </View>
            </View>
            <Loading show={show} text="Creando cuenta" />
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: "100%",
        height: 150,
        marginTop: 30
    },
    viewForm: {
        marginHorizontal: 20
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    input: {
        width: '100%',
        marginVertical: 10
    },
    btnContainer: {
        marginBottom: 20,
        width: "95%"
    },
    btn: {
        backgroundColor: "#00a680"
    }
})