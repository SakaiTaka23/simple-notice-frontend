import React, { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { question } from '../type/formType';
import Input from './Input';

type Prop = {
  questions: question[];
};

const Questions: FC<Prop> = ({ questions }) => {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {questions.map((question, index) => {
          return (
            <div key={index}>
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
