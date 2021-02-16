import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Surveys } from '../../type/api/surveyTypes';
import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core';

const Index = () => {
  const [surveys, setSurveys] = useState<Surveys>([]);

  const fetchSurveys = async () => {
    const url = 'http://127.0.0.1/api/survey';
    const response = await axios.get(url);
    const newSurveys = response.data;
    setSurveys(newSurveys);
  };

  useEffect(() => {
    fetchSurveys();
  }, []);

  return (
    <>
      <Typography variant='h3'>Available Questions</Typography>
      {surveys.map((survey, index) => {
        return (
          <Card key={index}>
            <Link href={`/survey/${survey.id}`}>
              <CardActionArea>
                <CardContent>
                  <Typography variant='h4'>{survey.title}</Typography>
                  <Typography variant='h5'>{survey.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Link>
            <Link href={`/survey/${survey.id}/result`}>
              <a>デバッグ用 : 結果へのリンク</a>
            </Link>
          </Card>
        );
      })}
    </>
  );
};

export default Index;
