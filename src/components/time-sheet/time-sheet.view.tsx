import React from 'react';
import { Grid, VStack } from '@chakra-ui/react';
import { TimeSheetRow } from './time-sheet-row.component';
import { TimeSheetInput } from './time-sheet-input.component';

// REVIEW:

export const TimeSheetView: React.FC = () => {
  const amount: number[] = [];
  for (let i = 0; i < 50; i += 1) {
    amount.push(i);
  }
  return (
    <Grid templateColumns="4fr 1fr" columnGap="5">
      <VStack>
        <TimeSheetRow isHeader />
        <VStack w="100%" maxH="70vh" overflow="auto" spacing="none">
          {amount.map((elem) => {
            if (elem % 2 === 0) {
              return <TimeSheetRow key={Math.random()} styles={{ bgColor: 'gray.200' }} />;
            }

            return <TimeSheetRow key={Math.random()} styles={{ bgColor: 'gray.50' }} />;
          })}
        </VStack>
      </VStack>
      <TimeSheetInput />
    </Grid>
  );
};
