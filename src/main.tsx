import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App.tsx'
import theme from './theme.ts';
import './index.css'

// in order to use react queery you have to install react query using this command npm i @tanstack/react-query@latest
// you will require react query dev tools you can grab it using this command npm i @tanstack/react-query-devtools@latest

// then you have to import these two line down here
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/production'


// and create an instance of the query client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {/* we have to wrape our application with query client provider */}
      <QueryClientProvider client={queryClient}>
        <App />
        {/* and last we have to provide the devtools */}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
