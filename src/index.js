import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import RegisterProvider from './Provider/RegisterProvider';
import LoginProvider from "./Provider/LoginProvider";
import AddProvider from './Provider/AddProvider';
import ProductProvider from './Provider/GetProduct';
import ExcluirProvider from './Provider/Excluir';
import EditProvider from './Provider/Edit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <RegisterProvider>
          <LoginProvider>
            <AddProvider>
              <ProductProvider>
                <ExcluirProvider>
                  <EditProvider>
                    <App />
                  </EditProvider>
                </ExcluirProvider>
              </ProductProvider>
            </AddProvider>
          </LoginProvider>
        </RegisterProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
