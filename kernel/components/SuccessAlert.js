import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Overlay, Image } from '@rneui/base'

export default function SuccessAlert(props) {
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
                source={{ uri: "https://media.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif" }}
                style={styles.img}
            />
            {text && <Text style={styles.text}>{text}</Text>}
        </View>
    </Overlay>
  )
}

const styles = StyleSheet.create({
    overlay: {
        height: 160,
        width: 250,
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
        width: 70,
        height: 70,
    },
    text: {
        color: 'black',
        marginTop: 20,
        textAlign: 'center'
    }
})