import { TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FieldArray from '../../components/FieldArray';

let date = new Date('2021-02-27');
const today = `
${date.getFullYear()}-
${(date.getMonth() + 1).toString().padStart(2, '0')}-
${date.getDate().toString().padStart(2, '0')}
`.replace(/\n|\r/g, '');

const defaultValues = {
  title: '',
  description: '',
  owner: '',
  delete_pass: '',
  from: today,
  to: today,
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
  const router = useRouter();
  const methods = useForm({ defaultValues });
  const onSubmit = async (data: never) => {
    console.log(data);
    // const url = 'http://127.0.0.1/api/survey';
    // const response = await axios.post(url, data, { headers: { 'Content-Type': 'application/json' } });
    // console.log(response.data);
    // router.push({
    //   pathname: '/survey',
    // });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Typography variant='h4'>アンケート新規作成</Typography>
        <TextField
          label='survey title'
          name='title'
          placeholder='survey title'
          inputRef={methods.register({ required: 'This field is required' })}
          error={Boolean(methods.errors.title)}
          helperText={methods.errors.title && methods.errors.title.message}
        />
        <TextField
          label='description'
          name='description'
          placeholder='description'
          inputRef={methods.register({ required: 'This field is required' })}
          error={Boolean(methods.errors.description)}
          helperText={methods.errors.description && methods.errors.description.message}
        />
        <TextField
          label='owner'
          name='owner'
          placeholder='owner'
          inputRef={methods.register({ required: 'This field is required' })}
          error={Boolean(methods.errors.owner)}
          helperText={methods.errors.owner && methods.errors.owner.message}
        />
        <TextField
          label='delete_pass'
          name='delete_pass'
          placeholder='delete_pass'
          inputRef={methods.register({ required: 'This field is required' })}
          error={Boolean(methods.errors.delete_pass)}
          helperText={methods.errors.delete_pass && methods.errors.delete_pass.message}
        />
        <TextField
          label='from'
          type='date'
          defaultValue='2021-02-16'
          name='from'
          inputRef={methods.register({ required: 'This field is required' })}
          error={Boolean(methods.errors.from)}
          helperText={methods.errors.from && methods.errors.from.message}
        />
        <TextField
          label='to'
          type='date'
          defaultValue='2021-02-16'
          name='to'
          inputRef={methods.register({ required: 'This field is required' })}
          error={Boolean(methods.errors.to)}
          helperText={methods.errors.to && methods.errors.to.message}
        />
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
