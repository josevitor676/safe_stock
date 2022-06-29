import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react"
import { ExcluirContext } from "../../Provider/Excluir"
import { useContext } from "react"
import EditarModal from "../ModalEditar"

const ProductCard = ({dadosProducts}) => {
    const {ExcluirProduct} = useContext(ExcluirContext)
    
    const {
        name,
        description, 
        category, 
        id, 
        which_store, 
        price_paid, 
        price_to_sell, 
        quantity, 
        purchase_data
    } = dadosProducts


    return (
        <Box 
        as="li" 
        id={id} 
        border="1px solid black" 
        borderRadius="5px" 
        w={["290px"]}
        minH="350px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        mt="20px"
        ml={["10px", "10px","20px"]}
        p="5px"
        >
            <Text w="290px" fontSize="14px" fontFamily="Poppins, sans-serif"><Text as="span" fontSize="16px" fontFamily="Kanit, sans-serif">Nome do Produto: </Text>{name}</Text>

            <Text w="290px" fontSize="14px" fontFamily="Poppins, sans-serif"><Text as="span" fontSize="16px" fontFamily="Kanit, sans-serif">Descrição: </Text>{description}</Text>

            <Text fontSize="14px" fontFamily="Poppins, sans-serif"><Text as="span" fontSize="16px" fontFamily="Kanit, sans-serif">Categoria: </Text>{category}</Text>

            <Text fontSize="14px" fontFamily="Poppins, sans-serif"><Text as="span" fontSize="16px" fontFamily="Kanit, sans-serif">Onde Comprou: </Text>{which_store}</Text>

            <Text fontSize="14px" fontFamily="Poppins, sans-serif"><Text as="span" fontSize="16px" fontFamily="Kanit, sans-serif">Preço que pagou: </Text>R$ {price_paid.toFixed(2)}</Text>

            <Text fontSize="14px" fontFamily="Poppins, sans-serif"><Text as="span" fontSize="16px" fontFamily="Kanit, sans-serif">Preço que vai vender: </Text>R$ {price_to_sell.toFixed(2)}</Text>

            <Text fontSize="14px" fontFamily="Poppins, sans-serif"><Text as="span" fontSize="16px" fontFamily="Kanit, sans-serif">Quantidade: </Text>{quantity} Unidades</Text>

            <Text fontSize="14px" mb="5px" fontFamily="Poppins, sans-serif"><Text as="span" fontSize="16px" fontFamily="Kanit, sans-serif">Data que comprou: </Text>{purchase_data}</Text>

            <ButtonGroup fontFamily="Kanit, sans-serif">
                <EditarModal idProduct={id}/>
                <Button 
                onClick={() => {
                  ExcluirProduct(id) 
                }}
                bg="#142850"
                _hover={{bg: "#142850c0", transition: "ease 0.6s"}}
                color="white"
                >
                    Excluir
                </Button>
            </ButtonGroup>
        </Box>
    )
}

export default ProductCard