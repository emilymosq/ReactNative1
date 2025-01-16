import React, {useState} from 'react';
import {Image, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesLogin";
import {useNavigation} from "@react-navigation/native";
import {BotonPersonalizado} from "../../components/BotonPersonalizado";
import {FormInput} from "../../components/FormInput";

function LoginScreen(){
    const navigation = useNavigation();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return(
        <View style={styles.container}>
            <View style={styles.contenedorimagen}>
                <Image source={require("../../../../assets/logo.png")} style={styles.imagen}></Image>
                <Text style={styles.texto}>Aplicación</Text>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Iniciar sesion</Text>
                    <FormInput
                        image={require("../../../../assets/email.png")}
                        placeholder={"Email"}
                        keyboardType="email-address"
                        secureTextEntry={false}
                        onPressForm={(text) => setEmail(text)}
                    ></FormInput>
                    <FormInput
                        image={require("../../../../assets/password.png")}
                        placeholder={"Contraseña"}
                        keyboardType="default"
                        secureTextEntry={true}
                        onPressForm={(text) => setPassword(text)}
                    ></FormInput>
                <View>
                    <BotonPersonalizado onPress={() => {alert("hola")}} text={"INICIAR SESION"}/>
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