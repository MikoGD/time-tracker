import React from 'react';
import { Input, InputProps, Textarea } from '@chakra-ui/react';
import { Field } from 'formik';
import { checkStyles, Styles } from '../../utility';

interface ConfiguredFieldProps extends InputProps {
  name: string;
  id: string;
  styles?: Styles;
  textArea?: boolean;
}

export const ConfiguredField: React.FC<ConfiguredFieldProps> = ({ name, id, styles, textArea, ...rest }) => {
  const allowedStyles = ['h'];
  checkStyles(styles, name, allowedStyles);

  return <Field name={name} id={id} as={textArea ? Textarea : Input} {...styles} {...rest} />;
};
