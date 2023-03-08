import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { Overlay } from '@rneui/base'

export default function Loading(props) {
    const { show, text } = props;
  return (
    <Overlay
        isVisible={show}
        windowsBackgroundColor='rgba(0,0,0,0.5)'
        overlayBackgroundColor='transparent'
        overlayStyle={styles.overlay}
    >
        <View styles={styles.container}>
            <ActivityIndicator
                size="large"
                color="#007bff"
            />
            {text && <Text styles={styles.text}>{text}</Text>}
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'black',
        marginTop: 20,
        textAlign: 'center'
    },
})