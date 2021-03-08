import { Box, Button, Paper, Typography } from '@material-ui/core';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useStyles } from '../../theme/Theme';
import { Survey } from '../../type/api/surveyTypes';

type Prop = {
  survey: Survey;
};

const SurveyCardFuture: FC<Prop> = ({ survey }) => {
  const classes = useStyles();
  const router = useRouter();
  const [readMore, setReadMore] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: never) => {
    const url = `http://127.0.0.1/api/survey/${survey.id}`;
    console.log(url, data);

    await axios.request({ method: 'delete', url, data }).catch(function (error) {
      console.log(error.response.status);
    });
    router.reload();
  };

  return (
    <Box py={2}>
      <Paper className={classes.glass}>
        <Box pl={5} py={4}>
          <Link href='#'>
            <a>
              <Typography variant='h4'>{survey.title}</Typography>
              <Typography variant='h5'>
                {readMore ? survey.description : `${survey.description.substring(0, 100)}`}
              </Typography>
            </a>
          </Link>
          {readMore && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor='password'>delete pass</label>
              <input name='password' placeholder='password' ref={register({ required: true })} />
              <Button type='submit'>Submit</Button>
            </form>
          )}
          <Button
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            Read More
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default SurveyCardFuture;
