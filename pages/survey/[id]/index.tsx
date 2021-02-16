import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { formData } from '../../../type/formType';
import Questions from '../../../components/Questions';
import { Typography } from '@material-ui/core';

const Form: FC = () => {
  const [surveyData, setSurveyData] = useState<formData>({
    id: '1',
    title: 'title',
    description: 'desc',
    questions: [],
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const id = router.query.id;

  const fetchSurveyData = async () => {
    const url = `http://127.0.0.1/api/survey/${id}`;
    const response = await axios.get(url);
    const newSurveyData = response.data;
    setSurveyData(newSurveyData[0]);
  };

  useEffect(() => {
    if (id) {
      fetchSurveyData();
      setLoading(false);
    }
  }, [id]);

  const { title, description, questions } = surveyData;

  if (loading || id === undefined) {
    return <h1>loading</h1>;
  }

  return (
    <>
      <Typography variant='h4'>{title}</Typography>
      <Typography variant='h5'>{description}</Typography>
      <Questions key='1' id={id} questions={questions} />
    </>
  );
};

export default Form;
