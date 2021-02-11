import React from 'react';
import { useForm } from 'react-hook-form';
import FieldsArray from './components/FieldArray';

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
  const { control, register, handleSubmit, getValues, errors, reset, setValue } = useForm({
    defaultValues,
  });
  const onSubmit = (data: any) => console.log('data', data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Array of Array Fields</h1>
      <p>The following example demonstrate the ability of building nested array fields.</p>

      <FieldsArray {...{ control, register, defaultValues, getValues, setValue, errors }} />

      <button type='button' onClick={() => reset(defaultValues)}>
        Reset
      </button>

      <input type='submit' />
    </form>
  );
}

export default NestdeEx;
