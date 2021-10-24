import React from 'react';
import { Box } from '@chakra-ui/react';
import { Form, Formik, FormikProps } from 'formik';
import { checkStyles, Styles } from '../../utility';

// REVIEW:
interface ConfiguredFormProps<Schema> {
  children: React.ReactNode;
  formName: string;
  formStyles: Styles;
  initialValues: Schema;
  onSubmit: (values: Schema) => void;
}

export const ConfiguredForm = <Schema,>({
  children,
  formName,
  formStyles,
  initialValues,
  onSubmit,
}: ConfiguredFormProps<Schema>): React.ReactElement => {
  const allowedStyles: string[] = ['w'];
  checkStyles(formStyles, formName, allowedStyles);

  const handleSubmit = (values: Schema) => {
    onSubmit(values);
  };

  return (
    <Formik<Schema> initialValues={initialValues} onSubmit={handleSubmit}>
      {(formikBag: FormikProps<Schema>) => {
        return (
          <Box as={Form} {...formStyles}>
            {(children as (bag: FormikProps<Schema>) => React.ReactNode)(formikBag as FormikProps<Schema>)}
          </Box>
        );
      }}
    </Formik>
  );
};
