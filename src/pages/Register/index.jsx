import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Text,
    Image,
    InputLeftElement
} from '@chakra-ui/react';
import { Redirect } from "react-router-dom";
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import estoqueRegister from "../../assets/estoquePintado.png"
import {MdOutlineDriveFileRenameOutline} from "react-icons/md"
import {AiOutlineMail} from "react-icons/ai"
import {RiLockPasswordLine} from "react-icons/ri"
import * as yup from "yup"
import { useForm } from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { RegisterContext } from '../../Provider/RegisterProvider';



export const Register = () => {
    const {sendRegister} = useContext(RegisterContext)
    const [showPassword, setShowPassword] = useState(false);
    const schema = yup.object().shape({
        first_name: yup.string().required("Nome Obrigatório"),
        last_name: yup.string().required("Sobrenome Obrigatório"),
        email: yup.string().required("Email Obrigatório").email("Email Invalido"),
        password: yup.string().min(8, "Minimo de 8 digitos").matches(/(?=.*[A-Z])/, "Sua senha deve conter ao menos uma letra maiúscula").required("Campo Obrigatório"),
        confirmpassword: yup.string().oneOf([yup.ref("password")], "Senhas diferentes").required("Campo Obrigatório")
    })

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({resolver:yupResolver(schema)})

    const onSubmitRegister = (data) => {
        sendRegister(data)
    }

   /*  if (authenticated) {
        return <Redirect to="/home"/>
    } */

    return (
        <Flex flexDirection={['column', 'column', 'row']} bg="#142850">
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg="#DAE1E7"
                flex="1">
                <Stack m="10px" mx={'auto'} maxW={'lg'}  w="100vw" display="flex" justifyContent="center" alignItems="center">
                    {/* <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'} color="#142850">
                        Fazer Cadastro
                    </Heading>
                    </Stack> */}
                <Box
                    rounded={'lg'}
                    boxShadow="0px 0px 5px #142850"
                    p={3}
                    boxSizing="border-box"
                    w={["85%", "90%", "95%", "100%"]}
                    as="form"
                    onSubmit={handleSubmit(onSubmitRegister)}
                    >  
                    <Stack spacing={4}>
                        <FormControl id="first_name">
                            <FormLabel fontSize={["15px", "16px", "17px"]} mb="0px">Nome</FormLabel>
                            <InputGroup>
                            <InputLeftElement pointerEvents="none" mt={["0px", "0px" , "2px"]} children={<MdOutlineDriveFileRenameOutline fontSize="25px" />}/>
                            <Input type="text" h={["35px", "40px"]} fontSize="18px" borderColor="#142850" focusBorderColor='#142850'
                            _hover={{borderColor:"#142850"}} {...register("first_name")}/>
                            </InputGroup>
                            <Text>{errors.first_name?.message}</Text>
                        </FormControl>

                        <FormControl id="last_name">
                            <FormLabel fontSize={["15px", "16px", "17px"]} mb="0px">Sobrenome</FormLabel>
                            <InputGroup>
                            <InputLeftElement pointerEvents="none" mt={["0px", "0px" , "2px"]} children={<MdOutlineDriveFileRenameOutline fontSize="25px"/>}/>
                            <Input type="text" h={["35px", "40px"]} fontSize="18px" borderColor="#142850" focusBorderColor='#142850'
                            _hover={{borderColor:"#142850"}} {...register("last_name")}/>
                            </InputGroup>
                            <Text>{errors.last_name?.message}</Text>
                        </FormControl>

                        <FormControl id="email">
                        <FormLabel fontSize={["15px", "16px", "17px"]} mb="0px">Email</FormLabel>
                        <InputGroup>
                        <InputLeftElement pointerEvents="none" mt={["0px", "0px" , "2px"]} children={<AiOutlineMail fontSize="25px"/>}/>
                        <Input type="email" h={["35px", "40px"]} fontSize="18px" borderColor="#142850" focusBorderColor='#142850'_hover={{borderColor:"#142850"}} {...register("email")}/>
                        </InputGroup>
                        <Text>{errors.email?.message}</Text>
                        </FormControl>

                        <FormControl id="password" >
                        <FormLabel fontSize={["15px", "16px", "17px"]} mb="0px">Senha</FormLabel>
                        <InputGroup>
                        <InputLeftElement pointerEvents="none" mt={["0px", "0px" , "2px"]} children={<RiLockPasswordLine fontSize="25px"/>}/>
                            <Input type={showPassword ? 'text' : 'password'} h={["35px", "40px"]} fontSize="18px" borderColor="#142850" focusBorderColor='#142850' _hover={{borderColor:"#142850"}} {...register("password")}/>
                            <InputRightElement h={'full'}>
                            <Button
                                variant={'ghost'}
                                onClick={() =>
                                setShowPassword((showPassword) => !showPassword)
                                }>
                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Text>{errors.password?.message}</Text>
                        </FormControl>

                        <FormControl id="confirmpassword">
                        <FormLabel fontSize={["15px", "16px", "17px"]} mb="0px">Confirmar Senha</FormLabel>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none" mt={["0px", "0px" , "2px"]} children={<RiLockPasswordLine fontSize="25px"/>}/>
                            <Input type={showPassword ? 'text' : 'password'} h={["35px", "40px"]} fontSize="18px" borderColor="#142850" focusBorderColor='#142850' _hover={{borderColor:"#142850"}} {...register("confirmpassword")}/>
                            <InputRightElement h={'full'}>
                            <Button
                                variant={'ghost'}
                                onClick={() =>
                                setShowPassword((showPassword) => !showPassword)
                                }>
                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Text>{errors.confirmpassword?.message}</Text>
                        </FormControl>

                        <Stack spacing={6} pt={2}>
                        <Button
                            loadingText="Submitting"
                            as="button"
                            type='submit'
                            size="lg"
                            bg={'#142850'}
                            color={'white'}
                            _hover={{
                            bg: '#142850dd',
                            }}>
                            Fazer Cadastro
                        </Button>
                        </Stack>
                        <Stack pt={1}>
                        <Text align={'center'} _hover={{textDecoration: "underline"}}>
                            Já tem Cadastro? <Link to="/login" color={'#142850'}>Fazer Login</Link>
                        </Text>
                        </Stack>
                    </Stack>
                    </Box>
                </Stack>
            </Flex>
            <Flex flex="1" justifyContent="center" alignItems="center" flexDirection="column">
                <Image src={estoqueRegister} w={["0", "0", "300px", "350px"]}/>
                <Text as="div" color="#DAE1E7" textAlign="center" fontSize="18px">
                    <Text fontWeight="bold" fontSize="35px">Safe Stock</Text>
                    O melhor lugar para gerenciar seus produtos
                </Text>
            </Flex>
        </Flex>
    )
}