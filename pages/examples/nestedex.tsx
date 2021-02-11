import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FieldArray from './components/FieldArray';

const defaultValues = {
  test: [
    {
      name: 'useFieldArray1',
      nestedArray: [{ field1: 'field1', field2: 'field2' }],
    },
    {
      name: 'useFieldArray2',
      nestedArray: [{ field1: 'field1', field2: 'field2' }],
    },
  ],
};

function NestdeEx() {
  const methods = useForm({ defaultValues });
  const onSubmit = (data: any) => console.log('data', data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <h1>Array of Array Fields</h1>
        <p>The following example demonstrate the ability of building nested array fields.</p>

        <FieldArray />

        <button type='button' onClick={() => methods.reset(defaultValues)}>
          Reset
        </button>

        <input type='submit' />
      </form>
    </FormProvider>
  );
}

export default NestdeEx;
