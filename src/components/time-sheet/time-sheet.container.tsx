import React from 'react';
import { TimeSheetView } from './time-sheet.view';

// REVIEW:
interface TimeSheetContainerProps {}

export const TimeSheetContainer: React.FC<TimeSheetContainerProps> = () => {
  return <TimeSheetView />;
};

export const TimeSheet = TimeSheetContainer;
