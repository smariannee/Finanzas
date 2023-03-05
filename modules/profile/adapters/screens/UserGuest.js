import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Image, Button } from '@rneui/base'
import { ScrollView } from 'react-native'


export default function UserGuest(props) {
    const {navigation} = props
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.mx}
        centerContent={true}
      >
        <Image 
            source={require("../../../../assets/presupuesto.png")}
            resizeMode="contain"
            style={styles.img}
        />
        <Text style={styles.title}>Bienvenido a Mi Cochinito</Text>
        <Text style={styles.description}>
            ¿Te gustaría ahorrar dinero?
            Nosotros te ayudamos. Regístrate e inicia sesión para poder crear presupuestos. 
        </Text>
        <View style={styles.ViewBtnContainer}>
            <Button
                title="Iniciar Sesión"
                //desestructuramos el objeto icon
                icon={{
                    name: 'login',
                    type: 'material-community',
                    size: 15,
                    color: 'white'
                }}
                buttonStyle={styles.btn}
                containerStyle={styles.btnContainer}
                onPress={() => navigation.navigate('LoginStack')}
            />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%'
    },
    mx: {
        marginLeft: 32,
        marginRight: 32
    },
    img: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        margin: 16
    },
    description: {
        textAlign: 'center',
        marginBottom: 16
    },
    ViewBtnContainer: {
        flex: 1,
        alignItems: 'center'        
    },
    btn: {
        backgroundColor: '#ff5a60',
        color: 'white'
    },
    btnContainer: {
        width: '70%'
    }
})