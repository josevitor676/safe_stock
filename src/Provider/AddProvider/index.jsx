import { createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AddContext = createContext()

const AddProvider = ({children}) => {
    const token = JSON.parse(localStorage.getItem("@Token:User")) || ""

    const AddProduct = (dadosProduct) => {

        axios.post("https://api-smg.herokuapp.com/api/product/", dadosProduct, {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        .then((response) => {
            toast("Produto Adicionado")
        })
        .catch((err) => console.log(err))
    }

    return (
        <AddContext.Provider value={{AddProduct}}>
            {children}
        </AddContext.Provider>
    )
}

export default AddProvider