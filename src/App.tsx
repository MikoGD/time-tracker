import React from 'react';
import { CssBaseline, Box, Container } from '@mui/material';
import NavBar from './components/layouts/nav-bar.component';
import Home from './pages/home';

const App: React.FunctionComponent = () => {
  return (
    <Box width={1} height={1} display="flex" justifyContent="center" flexDirection="column">
      <CssBaseline />
      <NavBar />
      <Box my={2} width={1}>
        <Container maxWidth="md">
          <Home />
        </Container>
      </Box>
    </Box>
  );
};

export default App;
