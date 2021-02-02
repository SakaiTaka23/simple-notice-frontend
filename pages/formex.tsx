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
      <input type='checkbox' name='check' value='1' ref={register} />
      one
      <input type='checkbox' name='check' value='2' ref={register} />
      two
      <input type='checkbox' name='check' value='3' ref={register} />
      three
      <input name='m' type='radio' value='radio1' ref={register} />
      radio1
      <input name='m' type='radio' value='radio2' ref={register} />
      radio2
      <input type='submit' />
    </form>
  );
};

export default form;
