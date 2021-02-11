import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

type Prop = {
  nestIndex: any;
};

const NestedFieldArray: React.FC<Prop> = ({ nestIndex }) => {
  const { control, register } = useFormContext();
  const { fields, remove, append } = useFieldArray({
    control,
    name: `questions[${nestIndex}].nestedArray`,
  });

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div key={item.id} style={{ marginLeft: 20 }}>
            <label>Choice : </label>
            <input
              name={`questions[${nestIndex}].choice[${k}]`}
              ref={register({ required: true })}
              defaultValue={item.choice}
              style={{ marginRight: '25px' }}
            />

            <button type='button' onClick={() => remove(k)}>
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
