import React, { FormEvent, useMemo } from 'react';
import { FormikProps } from 'formik';
import { Button, Flex, FormControl, FormLabel, Grid, Input } from '@chakra-ui/react';
import { CustomSelect } from '../custom-select';
import { ConfiguredField } from '../form';
import { TimeSheetSchema } from './time-sheet.model';

// REVIEW:
interface TimeSheetRowInputProps {
  formikBag: FormikProps<TimeSheetSchema>;
}

const padLeadingZeros = (num: string, amount: number) => {
  let newNum = num;
  while (newNum.length < amount) newNum = `${0}${num}`;

  return newNum;
};

interface TimeOption {
  value: number;
  label: string;
}

export const TimeSheetRowInput: React.FC<TimeSheetRowInputProps> = ({ formikBag }) => {
  const times = useMemo(() => {
    const tempTimes: string[] = [];

    for (let hour = 0; hour <= 24; hour += 1) {
      for (let minute = 0; minute < 60; minute += 5) {
        tempTimes.push(`${padLeadingZeros(`${hour}`, 2)}:${padLeadingZeros(`${minute}`, 2)}`);
      }
    }
    return tempTimes;
  }, []);

  const options = useMemo(() => {
    const tempOptions: TimeOption[] = [];
    times.forEach((time, index) => {
      tempOptions.push({ label: time, value: index * 5 });
    });
    return tempOptions;
  }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    formikBag.submitForm();
  };

  return (
    <form onSubmit={onSubmit}>
      <Grid templateColumns="3fr 2fr 2fr 1.75fr" w="100%" borderBottom="1px solid black" h="10rem">
        <FormControl as={Flex} id="description" flexDir="column">
          <FormLabel>Description</FormLabel>
          <ConfiguredField borderRadius="none" onChange={formikBag.handleChange} name="description" id="description" />
        </FormControl>
        <FormControl as={Flex} id="startTime" flexDir="column">
          <FormLabel>Start time</FormLabel>
          <CustomSelect<TimeOption>
            options={options}
            onChange={(optionValue) => optionValue && formikBag.setFieldValue('startTime', optionValue.value)}
            name="startTime"
          />
        </FormControl>
        <FormControl as={Flex} id="endTime" flexDir="column">
          <FormLabel>End time</FormLabel>
          <CustomSelect<TimeOption>
            options={options}
            onChange={(optionValue) => optionValue && formikBag.setFieldValue('endTime', optionValue.value)}
            name="endTime"
          />
        </FormControl>
        <Button type="submit">Add time</Button>
      </Grid>
    </form>
  );
};
