import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Button, Input, Image, Icon } from '@rneui/base'
import { isEmpty } from 'lodash'
import Loading from '../../../../kernel/components/Loading';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login(props) {
  const { navigation } = props;
  const [error, setError] = useState({email: '', password: ''});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [show, setShow] = useState(false);
  const [failSession, setFailSession] = useState(false);
  const auth = getAuth();

  const login = () => {
    if (!(isEmpty(email) || isEmpty(password))) {
      setShow(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((async (userCredential) => {
          setShow(false)
          navigation.navigate('ProfileStack');
          // ...
        }))
        .catch((error) => {
          setShow(false);
          setError({email: 'Correo o contraseña incorrectos', password: 'Correo o contraseña incorrectos'});
          const errorCode = error.code;
          const errorMessage = error.message;
        })
    } else {
      setShow(false);
      setError({email: 'Campo obligatorio', password: 'Campo obligatorio'});
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.mx}
        centerContent={true}
      >
        <Image
          source={require('../../../../assets/presupuesto.png')}
          reasizeMode="contain" //adaptar la imagen al tamaño del contenedor
          style={styles.logotype}
        />
        <Input
          placeholder="Correo electrónico"
          //labelStyle={{color: 'tomato', fontSize: 14}}
          keyboardType="email-address"
          containerStyle={styles.input}
          onChange={(event) => setEmail(event.nativeEvent.text)}
          autoCapitalized="none"
          errorMessage={error.email}
        />
        <Input
          placeholder="Contraseña"
          containerStyle={styles.input}
          onChange={(event) => setPassword(event.nativeEvent.text)}
          secureTextEntry={showPassword}
          errorMessage={error.password}
          rightIcon={
            <Icon
              type='material-community'
              name={
                showPassword ? 'eye-outline' : 'eye-off-outline'
              }
              color='#c2c2c2'
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
        <View style={styles.ViewBtnContainer}>
          <Button
            title="Iniciar Sesión"
            icon={<Icon name="login" type="material-community" size={22} color="white" />}
            containerStyle={styles.btnContainer}
            ButtonStyle={styles.btnSuccess}
            onPress={login}
          />
        </View>
        <Text
          style={styles.createAccount}
          onPress={() => console.log('Crear cuenta')}
        >
          ¡Regístrate!
        </Text>
        <Loading show={show} text="Iniciando sesión" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%'
  },
  mx: {
    marginLeft: 32,
    marginRight: 32
  },
  logotype: {
    width: "50%",
    height: 150,
    marginVertical: 32,
    marginHorizontal: 75 
  },
  input: {
    width: '100%',
    marginBottom: 16
  },
  ViewBtnContainer: {
    flex: 1,
    alignItems: 'center'
  },
  btnSuccess: {
    color: 'white',
    backgroundColor: '#28a745'
  },
  btnContainer: {
    width: '70%'
  },
  createAccount: {
    color: '#007bff',
    marginTop: 16,
    textAlign: 'center'
  },
})