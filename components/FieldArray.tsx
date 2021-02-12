import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import NestedFieldArray from './NestedFieldArray';

const FieldArray: React.FC = () => {
  const { control, register, getValues, setValue } = useFormContext();
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: 'questions',
  });

  return (
    <>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <input
                name={`questions[${index}].title`}
                ref={register()}
                placeholder='question'
                defaultValue={item.title}
              />
              <select name={`questions[${index}].type`} ref={register()} defaultValue={item.type}>
                <option value='text'>text</option>
                <option value='check'>check</option>
                <option value='radio'>radio</option>
              </select>

              <button type='button' onClick={() => remove(index)}>
                Delete
              </button>
              <NestedFieldArray nestIndex={index} />
            </li>
          );
        })}
      </ul>

      <section>
        <button
          type='button'
          onClick={() => {
            append({ name: 'append' });
          }}
        >
          append
        </button>

        <button
          type='button'
          onClick={() => {
            setValue('questions', [
              ...getValues().questions,
              {
                name: 'append',
                nestedArray: [{ choice: 'choice append' }],
              },
            ]);
          }}
        >
          Append Nested
        </button>

        <button
          type='button'
          onClick={() => {
            prepend({ title: 'title append' });
          }}
        >
          prepend
        </button>

        <button
          type='button'
          onClick={() => {
            setValue('questions', [
              {
                name: 'append',
                nestedArray: [{ choice: 'append' }],
              },
              ...getValues().questions,
            ]);
          }}
        >
          prepend Nested
        </button>
      </section>
    </>
  );
};

export default FieldArray;
