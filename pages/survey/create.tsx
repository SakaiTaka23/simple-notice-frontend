import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Create = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [inputCount, setInputCount] = useState(3);

  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <h1>create survey</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>The Title of the Survey</h3>
        <input type='text' name='title' ref={register} />
        <h3>Description of the Survey</h3>
        <input type='text' name='description' ref={register} />
        <h3>Your Name or Company Name</h3>
        <input type='text' name='owner' ref={register} />

        <div>
          <input type='text' name='title' ref={register} />
          <select name='type'>
            <option value='text'>text</option>
            <option value='radio'>radio</option>
            <option value='check'>check</option>
          </select>
        </div>

        <br />
        <input type='submit' />
      </form>
    </div>
  );
};

export default Create;
