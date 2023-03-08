import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Overlay, Image } from '@rneui/base'

export default function SuccessAlert(props) {
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
                source={{ uri: "https://i.gifer.com/7efs.gif" }}
                style={styles.img}
            />
            {text && <Text style={styles.text}>{text}</Text>}
        </View>
    </Overlay>
  )
}

const styles = StyleSheet.create({
    overlay: {
        height: 100,
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
    }
})