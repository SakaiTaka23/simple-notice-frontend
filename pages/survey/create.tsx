import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FieldArray from '../../components/FieldArray';
import { useStyles } from '../../theme/Theme';
import { createSurveyType } from '../../type/createSurveyType';

const today = dayjs().format('YYYY-MM-DD');
const weekAfter = dayjs().add(1, 'week').format('YYYY-MM-DD');

const defaultValues = {
  title: '',
  description: '',
  owner: '',
  delete_pass: '',
  from: today,
  to: weekAfter,
  questions: [],
};

const Create = () => {
  const classes = useStyles();
  const router = useRouter();
  const methods = useForm<createSurveyType>({ defaultValues });
  const onSubmit = async (data: never) => {
    console.log(data);
    const url = 'http://127.0.0.1/api/survey';
    const response = await axios.post(url, data, { headers: { 'Content-Type': 'application/json' } });
    console.log(response.data);
    router.push({
      pathname: '/survey',
    });
  };

  return (
    <div style={{ padding: 50 }}>
      <Grid container direction='column' justify='center' spacing={6}>
        <Paper className={`${classes.glass}`}>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Typography variant='h4'>アンケート新規作成</Typography>
              <Grid item>
                <TextField
                  label='survey title'
                  name='title'
                  placeholder='survey title'
                  inputRef={methods.register({ required: 'This field is required' })}
                  error={Boolean(methods.errors.title)}
                  helperText={methods.errors.title && methods.errors.title.message}
                  className={classes.textField}
                  inputProps={{ className: classes.textField }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label='description'
                  name='description'
                  placeholder='description'
                  inputRef={methods.register({ required: 'This field is required' })}
                  error={Boolean(methods.errors.description)}
                  helperText={methods.errors.description && methods.errors.description.message}
                  className={classes.textField}
                  inputProps={{ className: classes.textField }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label='owner'
                  name='owner'
                  placeholder='owner'
                  inputRef={methods.register({ required: 'This field is required' })}
                  error={Boolean(methods.errors.owner)}
                  helperText={methods.errors.owner && methods.errors.owner.message}
                  className={classes.textField}
                  inputProps={{ className: classes.textField }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label='delete_pass'
                  name='delete_pass'
                  placeholder='delete_pass'
                  inputRef={methods.register({ required: 'This field is required' })}
                  error={Boolean(methods.errors.delete_pass)}
                  helperText={methods.errors.delete_pass && methods.errors.delete_pass.message}
                  className={classes.textField}
                  inputProps={{ className: classes.textField }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label='from'
                  type='date'
                  defaultValue='2021-02-16'
                  name='from'
                  inputRef={methods.register({ required: 'This field is required' })}
                  error={Boolean(methods.errors.from)}
                  helperText={methods.errors.from && methods.errors.from.message}
                  inputProps={{ className: classes.textField }}
                />
                <TextField
                  label='to'
                  type='date'
                  defaultValue='2021-02-16'
                  name='to'
                  inputRef={methods.register({ required: 'This field is required' })}
                  error={Boolean(methods.errors.to)}
                  helperText={methods.errors.to && methods.errors.to.message}
                  inputProps={{ className: classes.textField }}
                />
              </Grid>

              <FieldArray />
              <Button variant='contained' onClick={() => methods.reset(defaultValues)}>
                Reset
              </Button>
              <Button type='submit' variant='contained'>
                Submit
              </Button>
            </form>
          </FormProvider>
        </Paper>
      </Grid>
    </div>
  );
};

export default Create;
