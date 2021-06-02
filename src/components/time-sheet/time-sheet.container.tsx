import React from 'react';
import { FormikProps } from 'formik';
import { ConfiguredForm } from '../form';
import { TimeSheetView } from './time-sheet.view';
import { TimeSheetSchema } from './time-sheet.model';

// REVIEW:
// interface TimeSheetContainerProps {}

export const TimeSheetContainer: React.FC = () => {
  const initialValues: TimeSheetSchema = {
    description: '',
    startTime: '09:00',
    endTime: '10:00',
    elapsedTime: '1h',
  };
  return (
    <ConfiguredForm<TimeSheetSchema> initialValues={initialValues}>
      {(formikBag: FormikProps<TimeSheetSchema>) => <TimeSheetView formikBag={formikBag} />}
    </ConfiguredForm>
  );
};

export const TimeSheet = TimeSheetContainer;
