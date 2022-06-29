import { createContext, useState } from "react";
import axios from "axios";

export const ProductContext = createContext()

const ProductProvider = ({children}) => {
    const [product, setProduct] = useState([])
    const token = JSON.parse(localStorage.getItem("@Token:User")) || ""
    const getProducts = () => {
        axios.get("https://api-smg.herokuapp.com/api/product/",{
            headers: {
                Authorization: `Token ${token}`
            }
        })
        .then((response) => {
            
            setProduct(response.data)
        })
        .catch((err) => console.log(err))
    }

    return (
        <ProductContext.Provider value={{product, getProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider