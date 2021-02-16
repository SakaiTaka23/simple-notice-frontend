import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

type Prop = {
  nestIndex: number;
};

const NestedFieldArray: React.FC<Prop> = ({ nestIndex }) => {
  const { control, register } = useFormContext();
  const { fields, remove, append } = useFieldArray({
    control,
    name: `questions[${nestIndex}].nestedArray`,
  });

  return (
    <div>
      {fields.map((item, index) => {
        return (
          <div key={item.id}>
            <label>Choice : </label>
            <input
              name={`questions[${nestIndex}].choice[${index}]`}
              ref={register({ required: true })}
              defaultValue={item.choice}
              required
            />

            <button type='button' onClick={() => remove(index)}>
              Delete Nested
            </button>
          </div>
        );
      })}

      <button
        type='button'
        onClick={() =>
          append({
            choice: 'choice append',
          })
        }
      >
        Append Nested
      </button>

      <hr />
    </div>
  );
};

export default NestedFieldArray;
