import React, {useEffect, useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ToastAndroid} from "react-native";
import styles from "./StylesRegistro";
import {useNavigation} from "@react-navigation/native";
import {BotonPersonalizado} from "../../components/BotonPersonalizado";
import { FormInput } from '../../components/FormInput';
import viewModel from "./ViewModel";

function RegistroScreen(){
    const navigation = useNavigation();
    const {email, password, firstName, lastName, phone, onChangeRegister, register, errorMessage} = viewModel.RegisterViewModel();
    useEffect(() => {
        if(errorMessage != ""){
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage])
    return(
        <View style={styles.container}>
            <View style={styles.contenedorimagen}>
                <Image source={require("../../../../assets/logo.png")} style={styles.imagen}></Image>
                <Text style={styles.texto}>Aplicación</Text>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Registrate</Text>
                <FormInput
                    image={require("../../../../assets/user.png")}
                    placeholder={"Nombre"}
                    keyboardType="default"
                    secureTextEntry={false}
                    onPressForm={(text) => onChangeRegister("firstName", text)}
                ></FormInput>

                <FormInput
                    image={require("../../../../assets/my_user.png")}
                    placeholder={"Apellidos"}
                    keyboardType="default"
                    secureTextEntry={false}
                    onPressForm={(text) => onChangeRegister("lastName", text)}
                ></FormInput>

                <FormInput
                    image={require("../../../../assets/email.png")}
                    placeholder={"Correo electrónico"}
                    keyboardType="email-address"
                    secureTextEntry={false}
                    onPressForm={(text) => onChangeRegister("email", text)}
                ></FormInput>

                <FormInput
                    image={require("../../../../assets/phone.png")}
                    placeholder={"Teléfono"}
                    keyboardType="numeric"
                    secureTextEntry={false}
                    onPressForm={(text) => onChangeRegister("phone", text)}
                ></FormInput>

                <FormInput
                    image={require("../../../../assets/password.png")}
                    placeholder={"Contraseña"}
                    keyboardType="default"
                    secureTextEntry={true}
                    onPressForm={(text) => onChangeRegister("password", text)}
                ></FormInput>
                <View>
                    <BotonPersonalizado onPress={() => {
                        register()
                        //ToastAndroid.show("Registro exitoso", ToastAndroid.SHORT);
                    }} text={"REGISTRAR"}/>
                </View>
            </View>
        </View>
    );
}

export default RegistroScreen;