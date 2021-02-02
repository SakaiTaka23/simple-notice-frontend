import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { question } from '../type/formType';

type Prop = {
  question: question;
};

const Input: FC<Prop> = ({ question }) => {
  const { register } = useFormContext();

  if (question.type === 'text') {
    return (
      <>
        <h2>{question.title}</h2>
        <input type={question.type} name={question.name} ref={register({ required: question.isRequired })} />
      </>
    );
  }
  if (question.type === 'checkbox' || question.type === 'radio') {
    return (
      <>
        <h2>{question.title}</h2>
        {question.choices.map((choice, index) => {
          return (
            <div key={index}>
              <input
                type={question.type}
                name={question.name}
                value={choice}
                ref={register({ required: question.isRequired })}
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
