import React from 'react';
import { useForm } from 'react-hook-form';

type Inputs = {
  example: string;
  exampleRequired: string;
};

const form = () => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = (data: any) => console.log(data);

  console.log(watch('example'));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name='example' defaultValue='test' ref={register} />
      <input name='exampleRequired' ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <select name='gender' ref={register}>
        <option value='male'>male</option>
        <option value='female'>female</option>
      </select>
      <input type='checkbox' name='check' ref={register} />
      <input name='m' type='radio' value='radio1' ref={register} />
      <input name='m' type='radio' value='radio2' ref={register} />

      <input type='submit' />
    </form>
  );
};

export default form;
