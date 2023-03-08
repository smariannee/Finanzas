import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Overlay, Image, Button } from '@rneui/base'

export default function ConfirmationAlert(props) {
    const { show, text } = props;
  return (
    <Overlay 
        isVisible={show}
        windowBackgroundColor='rgba(0,0,0,0.5)'
        overlayBackgroundColor='transparent'
        overlayStyle={styles.overlay}
    >
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Blinking_warning.gif' }}
                style={styles.img}
            />
            {text && <Text style={styles.text}>{text}</Text>}
            <View style={styles.buttons}>
                <Button
                    title="Aceptar"
                    buttonStyle={{ backgroundColor: 'green', borderRadius: 5 }}
                    containerStyle={styles.buttonContainer}
                    onPress={props.onConfirm}
                />
                <Button
                    title="Cancelar"
                    buttonStyle={{ backgroundColor: 'red', borderRadius: 5 }}
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
        height: 265,
        width: 265,
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 90,
        height: 90,
    },
    text: {
        color: 'black',
        marginTop: 10,
        textAlign: 'center'
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 20,
    },
    buttonContainer: {
        marginHorizontal: 5,
    }
})