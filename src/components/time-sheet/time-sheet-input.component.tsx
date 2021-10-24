import React, { useMemo } from 'react';
import { FormikProps } from 'formik';
import { Button, Flex, FormControl, FormLabel, VStack } from '@chakra-ui/react';
import { CustomSelect } from '../custom-select';
import { ConfiguredField, ConfiguredForm } from '../form';
import { TimeSheetSchema } from './time-sheet.model';

const padLeadingZeros = (num: string, amount: number) => {
  let newNum = num;
  while (newNum.length < amount) newNum = `${0}${num}`;

  return newNum;
};

interface TimeOption {
  value: number;
  label: string;
}

export const TimeSheetInput: React.FC = () => {
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

  const onSubmit = (values: TimeSheetSchema) => {
    console.log(values);
  };

  const initialValues: TimeSheetSchema = {
    description: '',
    startTime: '09:00',
    endTime: '10:00',
    elapsedTime: '1h',
  };

  return (
    <ConfiguredForm<TimeSheetSchema>
      initialValues={initialValues}
      onSubmit={onSubmit}
      formStyles={{ w: '100%' }}
      formName="time-sheet-row-input.component"
    >
      {(formikBag: FormikProps<TimeSheetSchema>) => (
        <VStack flexDir="column" w="20rem" columnGap="2" mt="2.8rem" spacing="3">
          <FormControl as={Flex} id="description" flexDir="column">
            <FormLabel>Description</FormLabel>
            <ConfiguredField
              borderRadius="none"
              id="description"
              name="description"
              onChange={formikBag.handleChange}
              styles={{ h: '24' }}
              textArea
            />
          </FormControl>
          <FormControl as={Flex} id="startTime" flexDir="column">
            <FormLabel>Start time</FormLabel>
            <CustomSelect<TimeOption>
              name="startTime"
              onChange={(optionValue) => optionValue && formikBag.setFieldValue('startTime', optionValue.value)}
              options={options}
            />
          </FormControl>
          <FormControl as={Flex} id="endTime" flexDir="column">
            <FormLabel>End time</FormLabel>
            <CustomSelect<TimeOption>
              name="endTime"
              onChange={(optionValue) => optionValue && formikBag.setFieldValue('endTime', optionValue.value)}
              options={options}
            />
          </FormControl>
          <Flex flexDir="column" justifyContent="flex-end" alignItems="flex-start" w="100%">
            <Button type="submit">Add time</Button>
          </Flex>
        </VStack>
      )}
    </ConfiguredForm>
  );
};
