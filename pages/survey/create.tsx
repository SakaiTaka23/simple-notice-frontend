import axios from 'axios';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FieldArray from '../../components/FieldArray';

const defaultValues = {
  title: '',
  description: '',
  owner: '',
  delete_pass: '',
  from: '',
  to: '',
  questions: [
    {
      title: 'title1',
      type: '',
      is_required: false,
      nestedArray: [{ choice: 'choice' }],
    },
    {
      title: 'title2',
      type: '',
      is_required: false,
      nestedArray: [{ choice: 'choice' }],
    },
  ],
};

const Create = () => {
  const methods = useForm({ defaultValues });
  const onSubmit = async (data: never) => {
    console.log(data);
    // const url = 'http://127.0.0.1/api/survey';
    // const response = await axios.post(url, data, { headers: { 'Content-Type': 'application/json' } });
    // console.log(response.data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <h1>アンケート新規作成</h1>
        title
        <input type='text' name='title' placeholder='survey title' ref={methods.register({ required: true })} />
        {methods.errors.title && <span>This field is required</span>}
        description
        <input
          type='text'
          name='description'
          placeholder='survey description'
          ref={methods.register({ required: true })}
        />
        {methods.errors.description && <span>This field is required</span>}
        owner
        <input type='text' name='owner' placeholder='survey owner' ref={methods.register({ required: true })} />
        {methods.errors.owner && <span>This field is required</span>}
        delete pass
        <input
          type='text'
          name='delete_pass'
          placeholder='password to delete survey'
          ref={methods.register({ required: true })}
        />
        {methods.errors.delete_pass && <span>This field is required</span>}
        from
        <input type='date' name='from' placeholder='when to start survey' ref={methods.register({ required: true })} />
        {methods.errors.from && <span>This field is required</span>}
        to
        <input type='date' name='to' placeholder='when to end survey' ref={methods.register({ required: true })} />
        {methods.errors.to && <span>This field is required</span>}
        <FieldArray />
        <button type='button' onClick={() => methods.reset(defaultValues)}>
          Reset
        </button>
        <input type='submit' />
      </form>
    </FormProvider>
  );
};

export default Create;
