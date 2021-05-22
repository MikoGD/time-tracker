import React from 'react';
import { Grid, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';

// REVIEW:
interface TimeSheetRowInputProps {}

export const TimeSheetRowInput: React.FC<TimeSheetRowInputProps> = () => {
  return (
    <Grid templateColumns="3fr 2fr 2fr 1.75fr" w="100%" borderBottom="1px solid black" h="10rem">
      <FormControl as={Flex} id="description" flexDir="column">
        <FormLabel>Description</FormLabel>
        <Input borderRadius="none" />
      </FormControl>
      <FormControl as={Flex} id="start-time" flexDir="column">
        <FormLabel>Start time</FormLabel>
        <Input borderRadius="none" />
      </FormControl>
      <FormControl as={Flex} id="end-time" flexDir="column">
        <FormLabel>End time</FormLabel>
        <Input borderRadius="none" />
      </FormControl>
      <FormControl as={Flex} id="elapsed-time" flexDir="column">
        <FormLabel>Elapsed time</FormLabel>
        <Input borderRadius="none" />
      </FormControl>
    </Grid>
  );
};
