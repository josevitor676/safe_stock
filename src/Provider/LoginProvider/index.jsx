import { createContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export const LoginContext = createContext();

const LoginProvider = ({children}) => {
    const history = useHistory();

    const sendLogin = (dataLogin) => {
        axios
        .post("https://api-smg.herokuapp.com/api/login/", dataLogin)
        .then((response) => {
            history.push("/home")
            localStorage.setItem("@Token:User", JSON.stringify(response.data.token))
            toast("Login Feito com Sucesso!")
        })
        .catch((err) => console.log(err))
    }

    return (
        <LoginContext.Provider value={{sendLogin}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;