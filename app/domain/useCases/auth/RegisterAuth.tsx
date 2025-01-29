import {AuthRepositoryImpl} from "../../../data/repositories/AuthRepository";
import {UserInteface} from "../../entities/User";


const {register} = new AuthRepositoryImpl()

export const RegisterAuthUseCase = async (user: UserInteface) => {
    return await register(user)
}