import React from 'react';
import { FormikProps } from 'formik';
import { VStack } from '@chakra-ui/react';
import { TimeSheetRow } from './time-sheet-row.component';
import { TimeSheetRowInput } from './time-sheet-row-input.component';
import { TimeSheetSchema } from './time-sheet.model';

// REVIEW:
interface TimeSheetViewProps {
  formikBag: FormikProps<TimeSheetSchema>;
}

export const TimeSheetView: React.FC<TimeSheetViewProps> = ({ formikBag }) => {
  const amount: number[] = [];
  for (let i = 0; i < 50; i += 1) {
    amount.push(i);
  }
  return (
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
      <TimeSheetRowInput formikBag={formikBag} />
    </VStack>
  );
};
