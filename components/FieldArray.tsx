import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
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
              <Typography>Question {index + 1}</Typography>
              <TextField
                label='question title'
                name={`questions[${index}].title`}
                inputRef={register({ required: 'This field is required' })}
                placeholder='question'
                defaultValue={item.title}
                required
              />
              <Controller
                control={control}
                name={`questions[${index}].type`}
                defaultValue={'text'}
                as={
                  <Select>
                    <MenuItem value='text'>text</MenuItem>
                    <MenuItem value='check'>check</MenuItem>
                    <MenuItem value='radio'>radio</MenuItem>
                  </Select>
                }
              />
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox name={`questions[${index}].is_required`} defaultChecked={false} inputRef={register} />
                  }
                  label='is required'
                />
              </FormGroup>
              <Button variant='contained' onClick={() => remove(index)}>
                Delete
              </Button>
              <NestedFieldArray nestIndex={index} />
            </li>
          );
        })}
      </ul>

      <Button
        type='button'
        onClick={() => {
          append({ name: 'append' });
        }}
      >
        append
      </Button>

      <Button
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
      </Button>

      <Button
        type='button'
        onClick={() => {
          prepend({ title: 'title append' });
        }}
      >
        prepend
      </Button>

      <Button
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
      </Button>
    </>
  );
};

export default FieldArray;
