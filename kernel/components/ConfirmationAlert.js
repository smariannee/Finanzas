import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Overlay, Image, Button } from '@rneui/base'

export default function ConfirmationAlert(props) {
    const { show, text } = props;
  return (
    <Overlay 
        isVisible={show}
        windowBackgroundColor="rgba(255, 255, 255, .5)"
        overlayBackgroundColor="green"
        overlayStyle={styles.overlay}
    >
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://cdn.dribbble.com/users/251873/screenshots/9288094/13539-sign-for-error-or-explanation-alert.gif' }}
                style={styles.img}
            />
            {text && <Text style={styles.text}>{text}</Text>}
            <View style={styles.buttons}>
                <Button
                    title="Aceptar"
                    buttonStyle={styles.button}
                    containerStyle={styles.buttonContainer}
                    onPress={props.onConfirm}
                />
                <Button
                    title="Cancelar"
                    buttonStyle={styles.button}
                    containerStyle={styles.buttonContainer}
                    onPress={props.onCancel}
                />
            </View>
        </View>
    </Overlay>
  )
}

const styles = StyleSheet.create({
    overlay: {
        height: 200,
        width: 200,
        borderRadius: 10,
        borderColor: 'green',
        borderWidth: 2,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 70,
        height: 70,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: 10,
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 20,
    },
    button: {
        backgroundColor: 'green',
    },
    buttonContainer: {
        marginHorizontal: 5,
    }
})