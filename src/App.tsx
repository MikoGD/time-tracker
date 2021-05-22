import React from 'react';
import { Center, ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { Home } from './pages';

const App: React.FunctionComponent = () => {
  return (
    <ChakraProvider theme={theme}>
      <Center w="100vw" h="100vh">
        <Home />
      </Center>
    </ChakraProvider>
  );
};

export default App;
