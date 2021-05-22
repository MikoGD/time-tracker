import React from 'react';
import { Flex, Grid, Heading, Text } from '@chakra-ui/react';

interface TimeSheetRowProps {
  isHeader?: boolean;
}

export const TimeSheetRow: React.FC<TimeSheetRowProps> = ({ isHeader }) => {
  return isHeader ? (
    <Grid templateColumns="3fr 2fr 2fr 1.75fr" w="100%" borderBottom="1px solid black">
      <Flex>
        <Heading>Description</Heading>
      </Flex>
      <Flex>
        <Heading>Start time</Heading>
      </Flex>
      <Flex>
        <Heading>End time</Heading>
      </Flex>
      <Flex>
        <Heading>Elapsed time</Heading>
      </Flex>
    </Grid>
  ) : (
    <Grid templateColumns="3fr 2fr 2fr 1.75fr" w="100%">
      <Flex>
        <Text fontSize="24">Test description</Text>
      </Flex>
      <Flex>
        <Text fontSize="24">09:00</Text>
      </Flex>
      <Flex>
        <Text fontSize="24">10:00</Text>
      </Flex>
      <Flex>
        <Text fontSize="24">1h</Text>
      </Flex>
    </Grid>
  );
};
