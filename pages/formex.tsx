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
  const exampleRequired = 'exampleRequired';
  const isRequired = true;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name='example' defaultValue='test' ref={register} />
      <input name={exampleRequired} ref={register({ required: isRequired })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <select name='gender' ref={register}>
        <option value='male'>male</option>
        <option value='female'>female</option>
      </select>
      <input type='checkbox' name='check' value='1' ref={register({ required: true })} />
      one
      <input type='checkbox' name='check' value='2' ref={register} />
      two
      <input type='checkbox' name='check' value='3' ref={register} />
      three
      <input type='radio' name='m' value='radio1' ref={register} />
      radio1
      <input type='radio' name='m' value='radio2' ref={register} />
      radio2
      <input type='submit' />
    </form>
  );
};

export default form;
