import { createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const ExcluirContext = createContext();

const ExcluirProvider = ({children}) => {
    const token = JSON.parse(localStorage.getItem("@Token:User")) || ""

    const ExcluirProduct = (idProduct) => {

        axios.delete(`https://api-smg.herokuapp.com/api/products/${idProduct}/`, {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        .then((response) => {
            toast("Produto Excluido!!")
        })
        .catch((err) => console.log(err))
    }

    return (
        <ExcluirContext.Provider value={{ExcluirProduct}}>
            {children}
        </ExcluirContext.Provider>
    )
}

export default ExcluirProvider