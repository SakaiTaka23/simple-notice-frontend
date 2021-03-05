import { Box, Paper, Typography } from '@material-ui/core';
import Link from 'next/link';
import React, { FC } from 'react';
import { useStyles } from '../../theme/Theme';
import { Survey } from '../../type/api/surveyTypes';
import { surveyStatus } from '../../type/surveyStatusType';

type Prop = {
  survey: Survey;
  status: surveyStatus;
};

const SurveyCard: FC<Prop> = ({ survey, status }) => {
  const classes = useStyles();

  let href = '';
  if (status == 'available') {
    href = `/survey/${survey.id}`;
  } else if (status == 'future') {
    href = '#';
  } else if (status == 'past') {
    href = `/survey/${survey.id}/result`;
  }

  return (
    <Box py={2}>
      <Paper className={classes.glass}>
        <Box pl={5} py={4}>
          <Link href={href}>
            <a>
              <Typography variant='h4'>{survey.title}</Typography>
              <Typography variant='h5'>{survey.description}</Typography>
            </a>
          </Link>
          <Link href={`/survey/${survey.id}/result`}>
            <a>デバッグ用 : 結果へのリンク</a>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default SurveyCard;
