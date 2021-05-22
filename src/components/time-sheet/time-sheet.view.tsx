import React from 'react';
import { VStack } from '@chakra-ui/react';
import { TimeSheetRow } from './time-sheet-row.component';

// REVIEW:
interface TimeSheetViewProps {}

export const TimeSheetView: React.FC<TimeSheetViewProps> = () => {
  return (
    <VStack>
      <TimeSheetRow isHeader />
      <TimeSheetRow />
    </VStack>
  );
};
