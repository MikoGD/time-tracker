import React from 'react';
import { VStack } from '@chakra-ui/react';
import { TimeSheetRow } from './time-sheet-row.component';
import { styleChecker } from '../../utility';
import { TimeSheetRowInput } from './time-sheet-row-input.component';

// REVIEW:
interface TimeSheetViewProps {}

export const TimeSheetView: React.FC<TimeSheetViewProps> = () => {
  const allowedStyles = ['bgColor'];
  const amount: number[] = [];
  for (let i = 0; i < 50; i += 1) {
    amount.push(i);
  }
  return (
    <VStack>
      <TimeSheetRow isHeader />
      <VStack w="100%" maxH="50rem" overflow="auto" spacing="none">
        {amount.map((elem) => {
          if (elem % 2 === 0) {
            return (
              <TimeSheetRow
                key={Math.random()}
                styles={styleChecker({ bgColor: 'gray.200' }, 'time-sheet.view', allowedStyles)}
              />
            );
          }

          return (
            <TimeSheetRow
              key={Math.random()}
              styles={styleChecker({ bgColor: 'gray.50' }, 'time-sheet.view', allowedStyles)}
            />
          );
        })}
      </VStack>
      <TimeSheetRowInput />
    </VStack>
  );
};
