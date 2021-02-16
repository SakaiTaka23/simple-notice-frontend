import { TextField } from '@material-ui/core';
import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { question } from '../type/formType';

type Prop = {
  question: question;
};

const Input: FC<Prop> = ({ question }) => {
  const { register } = useFormContext();
  const { question_number, type, is_required } = question;

  if (question.type === 'text') {
    return (
      <>
        <TextField name={question_number.toString()} inputRef={register({ required: is_required })} />
      </>
    );
  }

  if (question.type === 'checkbox' || question.type === 'radio') {
    return (
      <>
        {question.choices.map((choice, index) => {
          return (
            <div key={index}>
              <input
                type={type}
                name={question_number.toString()}
                value={choice}
                required={is_required}
                ref={register()}
              />
              {choice}
            </div>
          );
        })}
      </>
    );
  }
  return <div>error</div>;
};

export default Input;
