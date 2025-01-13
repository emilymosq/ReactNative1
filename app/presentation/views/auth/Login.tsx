import React from 'react';
import {Image, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesLogin";
import {useNavigation} from "@react-navigation/native";

function LoginScreen(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.contenedorimagen}>
                <Image source={require("../../../../assets/logo.png")} style={styles.imagen}></Image>
                <Text style={styles.texto}>Aplicación</Text>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Iniciar sesion</Text>
                <View style={styles.formInputContainer}>
                    <TextInput style={styles.formInput}
                               placeholder={"Usuario"}
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
                <View>
                    <TouchableOpacity onPress={() => {ToastAndroid.show("Presionado Toast", ToastAndroid.SHORT)}}
                                      style={styles.boton}>
                        <Text>ENTRAR</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: 20}}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("RegistroScreen");
                    }}>
                        <Text style={styles.textRegistro}>Registrate</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default LoginScreen;