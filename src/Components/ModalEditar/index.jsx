import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    InputGroup,
    Input,
    Text,
    Box,
    Stack
} from '@chakra-ui/react'
import * as yup from "yup"
import { useForm } from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup"
import { useContext } from 'react';
import { EditContext } from '../../Provider/Edit';

const EditarModal = ({idProduct}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {EditProduct} = useContext(EditContext)
    const schema = yup.object().shape({
        name: yup.string().required("Campo Obrigatório"),
        description: yup.string().required("Campo Obrigatório"),
        category: yup.string().required("Campo Obrigatório"),
        which_store: yup.string().required("Campo Obrigatório"),
        price_paid: yup.string().required("Campo Obrigatório"),
        price_to_sell: yup.string().required("Campo Obrigatório"),
        quantity: yup.string().required("Campo Obrigatório"),
        purchase_data: yup.string().required("Campo Obrigatório"),
    })

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({resolver: yupResolver(schema)})

    const onSubmitEdit = (data) => {
        EditProduct(idProduct, data)
    }
  return (
    <>
      <Button onClick={onOpen} bg="#142850" color="white" _hover={{bg: "#142850c0", transition: "ease 0.6s"}}>Editar</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={["xs", "sm", "md", "xl"]}>
        <ModalOverlay />
        <ModalContent bg='#DAE1E7'>
          <ModalHeader fontFamily="Kanit, sans-serif" color="#142850" borderBottom="2px solid #142850">Editar Produto</ModalHeader>
          <ModalCloseButton color="#142850"/>
          <ModalBody 
          w="100%"
          as="form"
          onSubmit={handleSubmit(onSubmitEdit)}
          >
            <Box fontFamily="Kanit, sans-serif" display="flex" flexDirection="row" flexWrap='wrap'>
                <FormControl id='name' width="230px">
                    <FormLabel color="#142850">Nome Produto</FormLabel>
                    <InputGroup>
                        <Input type="text" placeholder='Nome do produto' {...register("name")} borderColor="#142850" focusBorderColor='#142850' _hover={{borderColor:"#142850"}} color="#142850" _placeholder={{fontFamily: "Poppins, sans-serif", fontWeight: "bold", fontSize: "13px"}}/>
                    </InputGroup>
                    <Text>{errors.name?.message}</Text>
                </FormControl>

                <FormControl id='description' width="230px" ml={["0rem","0rem","0rem", "0.7rem"]}>
                    <FormLabel color="#142850">Descrição</FormLabel>
                    <InputGroup>
                        <Input type="text" placeholder='Descrição do produto' {...register("description")} borderColor="#142850" focusBorderColor='#142850' _hover={{borderColor:"#142850"}} color="#142850" _placeholder={{fontFamily: "Poppins, sans-serif", fontWeight: "bold", fontSize: "13px"}}/>
                    </InputGroup>
                    <Text>{errors.description?.message}</Text>
                </FormControl>

                <FormControl id='category' width="230px">
                    <FormLabel color="#142850">Categoria</FormLabel>
                    <InputGroup>
                        <Input type="text" placeholder='Categoria do produto' {...register("category")} borderColor="#142850" focusBorderColor='#142850' _hover={{borderColor:"#142850"}} color="#142850" _placeholder={{fontFamily: "Poppins, sans-serif", fontWeight: "bold", fontSize: "13px"}}/>
                    </InputGroup>
                    <Text>{errors.category?.message}</Text>
                </FormControl>

                <FormControl id='which_store' width="230px" ml={["0rem","0rem","0rem", "0.7rem"]}>
                    <FormLabel color="#142850">Onde Comprou?</FormLabel>
                    <InputGroup>
                        <Input type="text" placeholder='Nome da loja' {...register("which_store")} borderColor="#142850" focusBorderColor='#142850' _hover={{borderColor:"#142850"}} color="#142850" _placeholder={{fontFamily: "Poppins, sans-serif", fontWeight: "bold", fontSize: "13px"}}/>
                    </InputGroup>
                    <Text>{errors.which_store?.message}</Text>
                </FormControl>

                <FormControl id='price_paid' width="230px">
                    <FormLabel color="#142850">Quanto Pagou?</FormLabel>
                    <InputGroup>
                        <Input type="number" placeholder='Preço que pagou' {...register("price_paid")} borderColor="#142850" focusBorderColor='#142850' _hover={{borderColor:"#142850"}} color="#142850" _placeholder={{fontFamily: "Poppins, sans-serif", fontWeight: "bold", fontSize: "13px"}}/>
                    </InputGroup>
                    <Text>{errors.price_paid?.message}</Text>
                </FormControl>

                <FormControl id='price_to_sell' width="230px" ml={["0rem","0rem","0rem", "0.7rem"]}>
                    <FormLabel color="#142850">Por Quanto vai Vender?</FormLabel>
                    <InputGroup>
                        <Input type="number" placeholder='Preço que vai vender' {...register("price_to_sell")} borderColor="#142850" focusBorderColor='#142850' _hover={{borderColor:"#142850"}} color="#142850" _placeholder={{fontFamily: "Poppins, sans-serif", fontWeight: "bold", fontSize: "13px"}}/>
                    </InputGroup>
                    <Text>{errors.price_to_sell?.message}</Text>
                </FormControl>

                <FormControl id='quantity' width="230px">
                    <FormLabel color="#142850">Quantidade</FormLabel>
                    <InputGroup>
                        <Input type="number" placeholder='Quantidade de produto' {...register("quantity")} borderColor="#142850" focusBorderColor='#142850' _hover={{borderColor:"#142850"}} color="#142850" _placeholder={{fontFamily: "Poppins, sans-serif", fontWeight: "bold", fontSize: "13px"}}/>
                    </InputGroup>
                    <Text>{errors.quantity?.message}</Text>
                </FormControl>

                <FormControl id='purchase_data' width="230px" ml={["0rem","0rem","0rem", "0.7rem"]}>
                    <FormLabel color="#142850">Data que Comprou</FormLabel>
                    <InputGroup>
                        <Input type="text" placeholder='Ex: Ano-Mês-Dia' {...register("purchase_data")} borderColor="#142850" focusBorderColor='#142850' _hover={{borderColor:"#142850"}} color="#142850" _placeholder={{fontFamily: "Poppins, sans-serif", fontWeight: "bold", fontSize: "13px"}}/>
                    </InputGroup>
                    <Text>{errors.purchase_data?.message}</Text>
                </FormControl>
                <Stack spacing={4} pt="3">
                    <Button 
                    type='submit' 
                    as="button"  
                    bg="#142850"
                    _hover={{bg: "#142850c0", transition: "ease 0.6s"}} 
                    color="white"
                    onClick={() => {
                        onSubmitEdit()
                        onClose()
                    }} >
                    Editar
                    </Button>
                </Stack>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
} 

export default EditarModal