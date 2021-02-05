import React, { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { question } from '../type/formType';
import Input from './Input';

type Prop = {
  questions: question[];
};

const Questions: FC<Prop> = ({ questions }) => {
  const methods = useForm();
  // apiを叩いてデータ送信
  const onSubmit = (data: any) => console.log(data);
  console.log(questions);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {questions.map((question, index) => {
          return (
            <div key={index}>
              <h2>{question.title}</h2>
              <Input question={question} />
            </div>
          );
        })}
        <input type='submit' />
      </form>
    </FormProvider>
  );
};

export default Questions;
