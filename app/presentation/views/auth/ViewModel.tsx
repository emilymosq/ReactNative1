import React, {useState} from 'react';
import {ApiDelivery} from "../../../data/sources/remote/api/ApiDelivery";

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
    return{
        ...values,
        onChangeLogin
    }
}

const RegisterViewModel = () =>{
    const [values, setValues] = useState({
        email: "",
        password: "",
        nombre: "",
        apellidos: "",
        telefono: "",
    })

    const onChangeRegister = (property: string, value: any) => {
        setValues({...values, [property]: value})
    }

    const register = async () =>{
        try{
            const response = await ApiDelivery.post("/users/create", values)
            console.log(JSON.stringify(response))
        } catch (error){
            console.error(error);
        }
    }

    return{
       ...values,
        onChangeRegister,
        register
    }
}

export default {LoginViewModel, RegisterViewModel};