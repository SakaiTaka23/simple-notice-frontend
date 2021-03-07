import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import NestedFieldArray from './NestedFieldArray';

const FieldArray: React.FC = () => {
  const { control, register } = useFormContext();
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: 'questions',
  });

  return (
    <>
      <Grid container direction='column' justify='center'>
        <ul>
          {fields.map((item, index) => {
            return (
              <li key={item.id}>
                <Typography>Question {index + 1}</Typography>
                <Grid item>
                  <TextField
                    label='question title'
                    name={`questions[${index}].title`}
                    inputRef={register({ required: 'This field is required' })}
                    placeholder='question'
                    defaultValue={item.title}
                    required
                  />
                </Grid>

                <Grid item container direction='row'>
                  <Controller
                    control={control}
                    name={`questions[${index}].type`}
                    defaultValue={'text'}
                    as={
                      <Select>
                        <MenuItem value='text'>text</MenuItem>
                        <MenuItem value='checkbox'>checkbox</MenuItem>
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
                </Grid>

                <Button variant='contained' onClick={() => remove(index)}>
                  Delete
                </Button>
                <NestedFieldArray nestIndex={index} />
              </li>
            );
          })}
        </ul>
      </Grid>

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
          prepend({ title: 'title append' });
        }}
      >
        prepend
      </Button>
      <br />
    </>
  );
};

export default FieldArray;
