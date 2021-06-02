import React from 'react';
import { Formik } from 'formik';

// REVIEW:
interface ConfiguredFormProps<Schema> {
  initialValues: Schema;
  children: React.ReactNode;
}

export const ConfiguredForm = <Schema,>({
  initialValues,
  children,
}: ConfiguredFormProps<Schema>): React.ReactElement => {
  const onSubmit = (values: Schema) => {
    console.log(values);
  };

  return (
    <Formik<Schema> initialValues={initialValues} onSubmit={onSubmit}>
      {children}
    </Formik>
  );
};
