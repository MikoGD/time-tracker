import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

const App: React.FunctionComponent = () => {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <h2>Hello, World!</h2>
      </div>
    </ChakraProvider>
  );
};

export default App;
