import React from 'react';
import { Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { Styles } from '../../utility/style-checker';

interface TimeSheetRowProps {
  isHeader?: boolean;
  styles?: Styles;
}

export const TimeSheetRow: React.FC<TimeSheetRowProps> = ({ isHeader, styles }) => {
  return isHeader ? (
    <Grid templateColumns="3fr 2fr 2fr 1.75fr" w="100%" borderBottom="1px solid black" {...styles}>
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
    <Grid templateColumns="3fr 2fr 2fr 1.75fr" w="100%" {...styles}>
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
