import React from "react";
import {Text, TouchableOpacity, StyleSheet} from "react-native";

interface Props{
    onPress: () => void,
    text: string
}

export const BotonPersonalizado = ({text, onPress}: Props) => {
    return (
            <TouchableOpacity onPress={() => onPress()}
                              style={styles.boton}>
                <Text>{text}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    boton: {
        backgroundColor: "#E0E0E0",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    }
})