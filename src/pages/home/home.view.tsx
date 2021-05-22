import React from 'react';
import { Center } from '@chakra-ui/react';
import { TimeSheet } from '../../components';

// REVIEW:
interface HomeViewProps {}

export const HomeView: React.FC<HomeViewProps> = () => {
  return (
    <Center w="75rem" bg="gray.200">
      <TimeSheet />
    </Center>
  );
};
