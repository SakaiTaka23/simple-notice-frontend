import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FieldArray from './components/FieldArray';

const defaultValues = {
  title: '',
  description: '',
  owner: '',
  questions: [
    {
      title: 'title1',
      type: '',
      nestedArray: [{ choice: 'choice' }],
    },
    {
      title: 'title2',
      type: '',
      nestedArray: [{ choice: 'choice' }],
    },
  ],
};

function NestdeEx() {
  const methods = useForm({ defaultValues });
  const onSubmit = (data: never) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <h1>アンケート新規作成</h1>
        title
        <input type='text' name='title' ref={methods.register} />
        description
        <input type='text' name='description' ref={methods.register} />
        owner
        <input type='text' name='owner' ref={methods.register} />
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
