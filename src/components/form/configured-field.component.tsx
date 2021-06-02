import React from 'react';
import { Input, InputProps } from '@chakra-ui/react';
import { Field } from 'formik';

interface ConfiguredFieldProps extends InputProps {
  name: string;
  id: string;
}

export const ConfiguredField: React.FC<ConfiguredFieldProps> = ({ name, id, ...rest }) => {
  return <Field name={name} id={id} as={Input} {...rest} />;
};
