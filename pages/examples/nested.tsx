import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';

const Nested = () => {
  const { register, control, handleSubmit, reset, trigger, setError } = useForm({
    // defaultValues: {}; you can populate the fields by this attribute
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name: 'questions',
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      title
      <input type='text' name='title' ref={register} />
      description
      <input type='text' name='description' ref={register} />
      owner
      <input type='text' name='owner' ref={register} />
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <input
              name={`questions[${index}].title`}
              ref={register()}
              defaultValue={item.title} // make sure to set up defaultValue
            />
            <select name={`questions[${index}].type`} ref={register()}>
              <option value='text'>text</option>
              <option value='radio'>radio</option>
              <option value='check'>check</option>
            </select>
            <button type='button' onClick={() => remove(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button type='button' onClick={() => append({ title: 'appendBill', type: 'appendLuo' })}>
        append
      </button>
      <input type='submit' />
    </form>
  );
};

export default Nested;
