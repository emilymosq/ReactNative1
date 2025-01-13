import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ToastAndroid} from "react-native";
import styles from "./StylesRegistro";
import {useNavigation} from "@react-navigation/native";

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
                <View style={styles.formInputContainer}>
                    <TextInput style={styles.formInput}
                               placeholder={"Usuario"}
                               keyboardType={"default"}
                               secureTextEntry={false}
                    ></TextInput>
                </View>
                <View style={styles.formInputContainer}>
                    <TextInput style={styles.formInput}
                               placeholder={"Email"}
                               keyboardType={"default"}
                               secureTextEntry={false}
                    ></TextInput>
                </View>
                <View style={styles.formInputContainer}>
                    <TextInput style={styles.formInput}
                               placeholder={"Contraseña"}
                               keyboardType={"default"}
                               secureTextEntry={true}
                    ></TextInput>
                </View>
                <View style={styles.formInputContainer}>
                    <TextInput style={styles.formInput}
                               placeholder={"Confirma tu contraseña"}
                               keyboardType={"default"}
                               secureTextEntry={true}
                    ></TextInput>
                </View>
                <View>
                    <TouchableOpacity onPress={() => {ToastAndroid.show("Presionado Toast", ToastAndroid.SHORT)}}
                                      style={styles.boton}>
                        <Text>REGISTRAR</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: 20}}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("LoginScreen");
                    }}>
                        <Text style={styles.textRegistro}>Inicia sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default RegistroScreen;