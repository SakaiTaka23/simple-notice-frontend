import { Button } from '@material-ui/core';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { question } from '../type/formType';
import Input from './Input';

type Prop = {
  id: string | string[];
  questions: question[];
};

const Questions: FC<Prop> = ({ id, questions }) => {
  const router = useRouter();
  const methods = useForm();
  // apiを叩いてデータ送信
  const submitData = async (data: never) => {
    const url = `http://127.0.0.1/api/survey/${id}`;
    const response = await axios.post(url, data, { headers: { 'Content-Type': 'application/json' } });
    console.log(response);
    router.push({
      pathname: `/survey/${id}/result`,
    });
  };

  const onSubmit = (data: never) => {
    console.log(data);
    submitData(data);
  };

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

        <Button type='submit' variant='contained' color='secondary'>
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};

export default Questions;
