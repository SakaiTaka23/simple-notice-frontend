import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { question } from '../type/formType';

type Prop = {
  questions: question[];
};

const Questions: FC<Prop> = ({ questions }) => {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {questions.map((question, index) => {
        return (
          <div key={index}>
            <h2>{question.title}</h2>
            <input type={question.type} name={question.name} ref={register} />
          </div>
        );
      })}
      <input type='submit' />
    </form>
  );
};

export default Questions;
