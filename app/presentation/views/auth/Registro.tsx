import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ToastAndroid} from "react-native";
import styles from "./StylesRegistro";
import {useNavigation} from "@react-navigation/native";
import {BotonPersonalizado} from "../../components/BotonPersonalizado";
import {FormInputPersonalizado} from "../../components/FormInputPersonalizado";
import { FormInput } from '../../components/FormInput';

function RegistroScreen(){
    const navigation = useNavigation();

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
                    onPressForm={() => alert("")}
                ></FormInput>

                <FormInput
                    image={require("../../../../assets/my_user.png")}
                    placeholder={"Apellidos"}
                    keyboardType="default"
                    secureTextEntry={false}
                    onPressForm={() => alert("")}
                ></FormInput>

                <FormInput
                    image={require("../../../../assets/email.png")}
                    placeholder={"Correo electrónico"}
                    keyboardType="email-address"
                    secureTextEntry={false}
                    onPressForm={() => alert("")}
                ></FormInput>

                <FormInput
                    image={require("../../../../assets/phone.png")}
                    placeholder={"Teléfono"}
                    keyboardType="numeric"
                    secureTextEntry={false}
                    onPressForm={() => alert("")}
                ></FormInput>

                <FormInput
                    image={require("../../../../assets/password.png")}
                    placeholder={"Contraseña"}
                    keyboardType="default"
                    secureTextEntry={true}
                    onPressForm={() => alert("")}
                ></FormInput>
                <View>
                    <BotonPersonalizado onPress={() => {alert("hola")}} text={"REGISTRAR"}/>
                </View>
            </View>
        </View>
    );
}

export default RegistroScreen;