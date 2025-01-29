import React from "react";
import {Image, KeyboardType, StyleSheet, TextInput, View} from "react-native";
import {AppColors} from "../theme/AppTheme";

interface Props {
    image: any,
    placeholder: string,
    keyboardType: KeyboardType,
    secureTextEntry: boolean,
    onPressForm: (text:string) => void
}


export const FormInput = (
    {image, placeholder, keyboardType, secureTextEntry, onPressForm}: Props
) => {
    return (
        <View style={styles.formInputContainer}>
            <Image style={styles.formImageInput} source={image}/>
            <TextInput style={styles.formInput}
                       placeholder={placeholder}
                       keyboardType={keyboardType}
                       secureTextEntry={secureTextEntry}
                       onChangeText={(text) => onPressForm(text)}
            ></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    formInputContainer: {
        flexDirection: "row",
        marginBottom: 20
    },
    formImageInput: {
        width: 25,
        height: 25,
        alignSelf: "center",
        marginRight: 15
    },
    formInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: AppColors.background,
    }
})