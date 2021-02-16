import { Checkbox, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { question } from '../type/formType';

type Prop = {
  question: question;
};

const Input: FC<Prop> = ({ question }) => {
  const { register } = useFormContext();
  const { question_number, is_required } = question;

  if (question.type === 'text') {
    return (
      <>
        <TextField name={question_number.toString()} inputRef={register({ required: is_required })} />
      </>
    );
  }

  if (question.type === 'checkbox') {
    return (
      <>
        {question.choices.map((choice, index) => {
          return (
            <FormControl key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    name={question_number.toString()}
                    value={choice}
                    inputRef={register({ required: is_required })}
                  />
                }
                label={choice}
              />
            </FormControl>
          );
        })}
      </>
    );
  }

  if (question.type === 'radio') {
    return (
      <FormControl>
        <RadioGroup name={question_number.toString()}>
          {question.choices.map((choice, index) => {
            return (
              <FormControlLabel
                key={index}
                name={question_number.toString()}
                value={choice}
                control={<Radio />}
                label={choice}
                inputRef={register({ required: is_required })}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    );
  }
  return <div>error</div>;
};

export default Input;
