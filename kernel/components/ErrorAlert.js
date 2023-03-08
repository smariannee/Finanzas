import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Overlay, Image } from '@rneui/base'

export default function ErrorAlert(props) {
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
                source={{ uri: 'https://cdn.dribbble.com/users/251873/screenshots/9388228/error-img.gif' }}
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
        width: 90,
        height: 90,
    },
    text: {
        color: 'black',
        marginTop: 10,
        textAlign: 'center'
    }
})