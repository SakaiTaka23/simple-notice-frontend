import { Box, Button, Typography } from '@material-ui/core';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { question } from '../../type/formType';
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
            <Box key={index} py={2}>
              <Box pb={2}>
                <Typography variant='h5'>
                  {question.title} {question.is_required ? '*' : ''}
                </Typography>
              </Box>
              <Input question={question} />
            </Box>
          );
        })}

        <Box pt={3}>
          <Button type='submit' size='large' variant='contained' color='secondary'>
            Submit
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default Questions;
