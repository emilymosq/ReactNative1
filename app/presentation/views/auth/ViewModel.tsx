import React, {useState} from 'react';
import {ApiDelivery} from "../../../data/sources/remote/api/ApiDelivery";
import {RegisterAuthUseCase} from "../../../domain/useCases/auth/RegisterAuth";
import {LoginAuthUseCase} from "../../../domain/useCases/auth/LoginAuth";

const LoginViewModel = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    /*
        * Le va a llegar en property una variable email o password
        * value llega el valor del input
        *
        * array[email] = value
        * */

    const onChangeLogin = (property: string, value: any) => {
        /* ... significa quedarnos con el valor que tiene y agregar lo que necesitamos*/
        setValues({...values, [property]: value})
    }

    const login = async () => {
        const response = await LoginAuthUseCase(values)
        console.log("Result: " + JSON.stringify(response))
    }
    return{
        ...values,
        onChangeLogin,
        login
    }
}

const RegisterViewModel = () =>{
    const[errorMessage, setErrorMessage] = useState<string>('')

    const [values, setValues] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: "",
        //repeatPassword: ""
    })

    const onChangeRegister = (property: string, value: any) => {
        setValues({...values, [property]: value})
    }

    const register = async () =>{
        // try{
        //     const data = {
        //         firstName: values.nombre,
        //         lastName: values.apellidos,
        //         phone: values.telefono,
        //         email: values.email,
        //         password: values.password,
        //         //repeatPassword: values.repeatPassword
        //
        //     }
        //     const response = await ApiDelivery.post("/users/create", data)
        //     console.log(JSON.stringify(response))
        // } catch (error){
        //     console.error(error);
        // }
        if(validateForm()){

            const response = await RegisterAuthUseCase(values)
            console.log("Result: " + JSON.stringify(response))
        }
    }

    const validateForm= ()=> {
        if(values.firstName === ""){
            setErrorMessage("El nombre es obligatorio");
            return false
        }
        if(values.lastName === ""){
            setErrorMessage("El apellido es obligatorio");
            return false
        }
        if(values.email === ""){
            setErrorMessage("El email es obligatorio");
            return false
        }
        if(values.phone === ""){
            setErrorMessage("El número de teléfono es obligatorio");
            return false
        }
        if(values.password === ""){
            setErrorMessage("La contraseña es obligatoria");
            return false
        }

       // if(values.repeatPassword !== )
        return true
    }

    return{
       ...values,
        onChangeRegister,
        register,
        errorMessage
    }
}

export default {LoginViewModel, RegisterViewModel};