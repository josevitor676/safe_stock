import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react"
import { BiArrowBack } from "react-icons/bi"
import { ExcluirContext } from "../../Provider/Excluir"
import EditarModal from "../ModalEditar"
import { useContext } from "react"
const ProductFiltered = ({dadosProducts, setFiltered, setInput}) => {

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

    console.log(setInput)

    const backProduct = () => {
        setFiltered(false)
    }

    return (
        <Box 
        as="li" 
        id={id} 
        border="1px solid black" 
        borderRadius="5px" 
        minW="auto"
        minH="350px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        mt="20px"
        ml="20px"
        p="5px"
        >
            <Button w="20px" h="20px" onClick={backProduct} bg="#142850" _hover={{bg: "#142850c0", transition: "ease 0.6s"}}>
                <BiArrowBack  style={{color: 'white'}}/>
            </Button>
            <Text w="300px"><Text as="span" fontSize="16px" fontFamily="Kanit, sans-serif">Nome do Produto: </Text>{name}</Text>
            <Text w="300px"><Text as="span" fontSize="16px" fontFamily="Kanit, sans-serif">Descrição: </Text>{description}</Text>
            <Text><Text as="span" fontSize="16px" fontFamily="Kanit, sans-serif">Categoria: </Text>{category}</Text>
            <Text><Text as="span" fontSize="16px" fontFamily="Kanit, sans-serif">Onde Comprou: </Text>{which_store}</Text>
            <Text><Text as="span" fontSize="16px" fontFamily="Kanit, sans-serif">Preço que pagou: </Text>R$ {price_paid.toFixed(2)}</Text>
            <Text><Text as="span" fontSize="16px" fontFamily="Kanit, sans-serif">Preço que vai vender: </Text>R$ {price_to_sell.toFixed(2)}</Text>
            <Text><Text as="span" fontSize="16px" fontFamily="Kanit, sans-serif">Quantidade: </Text>{quantity}</Text>
            <Text><Text as="span" fontSize="16px" fontFamily="Kanit, sans-serif">Data que comprou: </Text>{purchase_data}</Text>

            <ButtonGroup>
                <EditarModal idProduct={id}/>
                <Button 
                bg="#142850"
                _hover={{bg: "#142850c0", transition: "ease 0.6s"}}
                color="white"
                onClick={() => {
                    ExcluirProduct(id)
                    setFiltered(false)
                }}>Excluir</Button>
            </ButtonGroup>
        </Box>
    )
}

export default ProductFiltered;