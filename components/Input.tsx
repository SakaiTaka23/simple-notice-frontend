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
        <div>デバッグ用 : {question_number}</div>
        <input type={type} name={question_number.toString()} ref={register({ required: is_required })} />
      </>
    );
  }

  if (question.type === 'checkbox' || question.type === 'radio') {
    return (
      <>
        <div>デバッグ用 : {question_number}</div>
        {question.choices.map((choice, index) => {
          return (
            <div key={index}>
              <input
                type={type}
                name={question_number.toString()}
                value={choice}
                ref={register({ required: is_required })}
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
