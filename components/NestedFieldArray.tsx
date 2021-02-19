import { Button, TextField, Typography } from '@material-ui/core';
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
    <>
      {fields.map((item, index) => {
        return (
          <div key={item.id}>
            <Typography>Choice : </Typography>

            <TextField
              name={`questions[${nestIndex}].choice[${index}]`}
              inputRef={register({ required: true })}
              defaultValue={item.choice}
              required
            />

            <Button variant='contained' onClick={() => remove(index)}>
              Delete Nested
            </Button>
          </div>
        );
      })}

      <Button
        variant='contained'
        onClick={() =>
          append({
            choice: 'choice append',
          })
        }
      >
        Append Nested
      </Button>

      <hr />
    </>
  );
};

export default NestedFieldArray;
