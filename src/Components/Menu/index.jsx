import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    Box,
    Stack,
    FormControl,
    FormLabel,
    InputGroup,
    Text,
} from '@chakra-ui/react'
import React from 'react'
import * as yup from "yup"
import { useForm } from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup"
import { useContext } from 'react';
import { AddContext } from '../../Provider/AddProvider';


export const Menu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {AddProduct} = useContext(AddContext)
    const btnRef = React.useRef()
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

    const onSubmitAdd = (data) => {
        AddProduct(data)
    }

    return (
        <>
        <Button 
        ref={btnRef} 
        onClick={onOpen} 
        p={["4px","6px", "8px"]} 
        h={["30px", "30px"]} 
        w={["110px", "155px"]} 
        ml={["0px", "10px"]} 
        fontSize={["12px", "15px"]} 
        color="#ffff" 
        bg="#142850" 
        _hover={{bg: "#142850c8"}} 
        fontFamily="Kanit, sans-serif"
        >
            Adicionar Produto
        </Button>
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent bg='#DAE1E7'>
            <DrawerCloseButton color="#142850"/>
            <DrawerHeader fontFamily="Kanit, sans-serif" color="#142850" borderBottom="2px solid #142850">Adicionar Produto</DrawerHeader>

            <DrawerBody
            mt="10px"
            sx={{
                '&::-webkit-scrollbar': {
                  width: '10px',
                  borderRadius: '8px',
                  backgroundColor: `#142850`,
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: `#738ca1`,
                  borderRadius: '8px',
                },
              }}
            >
                <Box
                as='form'
                w="100%"
                onSubmit={handleSubmit(onSubmitAdd)}
                >
                    <Stack fontFamily="Kanit, sans-serif">
                        <FormControl id='name'>
                            <FormLabel color="#142850" fontSize="17px">Nome Produto</FormLabel>
                            <InputGroup>
                                <Input type="text" placeholder='Nome do produto' {...register("name")} borderColor="#142850" focusBorderColor='#142850' _hover={{borderColor:"#142850"}} color="#142850" _placeholder={{fontFamily: "Poppins, sans-serif", fontWeight: "bold", fontSize: "13px"}}/>
                            </InputGroup>
                            <Text>{errors.name?.message}</Text>
                        </FormControl>

                        <FormControl id='description'>
                            <FormLabel color="#142850" fontSize="17px">Descrição</FormLabel>
                            <InputGroup>
                                <Input type="text" placeholder='Descrição do produto' {...register("description")} borderColor="#142850" focusBorderColor='#142850' _hover={{borderColor:"#142850"}} color="#142850" _placeholder={{fontFamily: "Poppins, sans-serif", fontWeight: "bold", fontSize: "13px"}}/>
                            </InputGroup>
                            <Text>{errors.description?.message}</Text>
                        </FormControl>

                        <FormControl id='category'>
                            <FormLabel color="#142850" fontSize="17px">Categoria</FormLabel>
                            <InputGroup>
                                <Input type="text" placeholder='Categoria do produto' {...register("category")} borderColor="#142850" focusBorderColor='#142850' _hover={{borderColor:"#142850"}} color="#142850" _placeholder={{fontFamily: "Poppins, sans-serif", fontWeight: "bold", fontSize: "13px"}}/>
                            </InputGroup>
                            <Text>{errors.category?.message}</Text>
                        </FormControl>

                        <FormControl id='which_store'>
                            <FormLabel color="#142850" fontSize="17px">Onde Comprou?</FormLabel>
                            <InputGroup>
                                <Input type="text" placeholder='Nome da loja' {...register("which_store")} borderColor="#142850" focusBorderColor='#142850' _hover={{borderColor:"#142850"}} color="#142850" _placeholder={{fontFamily: "Poppins, sans-serif", fontWeight: "bold", fontSize: "13px"}}/>
                            </InputGroup>
                            <Text>{errors.which_store?.message}</Text>
                        </FormControl>

                        <FormControl id='price_paid'>
                            <FormLabel color="#142850" fontSize="17px">Quanto Pagou?</FormLabel>
                            <InputGroup>
                                <Input type="number" placeholder='Preço que pagou' {...register("price_paid")} borderColor="#142850" focusBorderColor='#142850' _hover={{borderColor:"#142850"}} color="#142850" _placeholder={{fontFamily: "Poppins, sans-serif", fontWeight: "bold", fontSize: "13px"}}/>
                            </InputGroup>
                            <Text>{errors.price_paid?.message}</Text>
                        </FormControl>

                        <FormControl id='price_to_sell'>
                            <FormLabel color="#142850" fontSize="17px">Por Quanto vai Vender?</FormLabel>
                            <InputGroup>
                                <Input type="number" placeholder='Preço que vai vender' {...register("price_to_sell")} borderColor="#142850" focusBorderColor='#142850' _hover={{borderColor:"#142850"}} color="#142850" _placeholder={{fontFamily: "Poppins, sans-serif", fontWeight: "bold", fontSize: "13px"}}/>
                            </InputGroup>
                            <Text>{errors.price_to_sell?.message}</Text>
                        </FormControl>

                        <FormControl id='quantity'>
                            <FormLabel color="#142850" fontSize="17px">Quantidade</FormLabel>
                            <InputGroup>
                                <Input type="number" placeholder='Quantidade de produto' {...register("quantity")} borderColor="#142850" focusBorderColor='#142850' _hover={{borderColor:"#142850"}} color="#142850" _placeholder={{fontFamily: "Poppins, sans-serif", fontWeight: "bold", fontSize: "13px"}}/>
                            </InputGroup>
                            <Text>{errors.quantity?.message}</Text>
                        </FormControl>

                        <FormControl id='purchase_data'>
                            <FormLabel color="#142850" fontSize="17px">Data que Comprou</FormLabel>
                            <InputGroup>
                                <Input type="text" placeholder='Ex: Ano-Mês-Dia' {...register("purchase_data")} borderColor="#142850" focusBorderColor='#142850' _hover={{borderColor:"#142850"}} color="#142850" _placeholder={{fontFamily: "Poppins, sans-serif", fontWeight: "bold", fontSize: "13px"}}/>
                            </InputGroup>
                            <Text>{errors.purchase_data?.message}</Text>
                        </FormControl>

                        <Stack spacing={4} pt="2">
                            <Button 
                            colorScheme="blue"
                            loadingText="Submitting"
                            as="button"
                            type='submit'
                            bg="#142850"
                            _hover={{bg: "#142850c0"}}
                            >
                                Cadastrar
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </DrawerBody>

            </DrawerContent>
        </Drawer>
        </>
    )
}