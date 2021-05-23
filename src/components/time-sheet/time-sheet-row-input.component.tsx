import React, { useMemo } from 'react';
import Select from 'react-select';
import { Flex, FormControl, FormLabel, Grid, Input } from '@chakra-ui/react';

// REVIEW:
interface TimeSheetRowInputProps {}

const padLeadingZeros = (num: string, amount: number) => {
  let newNum = num;
  while (newNum.length < amount) newNum = `${0}${num}`;

  return newNum;
};

interface TimeOption {
  value: string;
  label: string;
}

export const TimeSheetRowInput: React.FC<TimeSheetRowInputProps> = () => {
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
    times.forEach((time) => {
      tempOptions.push({ label: time, value: time });
    });
    return tempOptions;
  }, []);

  return (
    <Grid templateColumns="3fr 2fr 2fr 1.75fr" w="100%" borderBottom="1px solid black" h="10rem">
      <FormControl as={Flex} id="description" flexDir="column">
        <FormLabel>Description</FormLabel>
        <Input borderRadius="none" />
      </FormControl>
      <FormControl as={Flex} id="start-time" flexDir="column">
        <FormLabel>Start time</FormLabel>
        <Select options={options} />
      </FormControl>
      <FormControl as={Flex} id="end-time" flexDir="column">
        <FormLabel>End time</FormLabel>
        <Select options={options} />
      </FormControl>
      <FormControl as={Flex} id="elapsed-time" flexDir="column">
        <FormLabel>Elapsed time</FormLabel>
        <Input borderRadius="none" />
      </FormControl>
    </Grid>
  );
};
