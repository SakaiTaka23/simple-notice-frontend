import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Results from '../../../components/Results';
import { SurveyResult } from '../../../type/api/surveyResultTypes';

const Result = () => {
  const [resultData, setResultData] = useState<SurveyResult>({
    title: 'title',
    description: 'desc',
    owner: 'owner',
    questions: [],
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const id = router.query.id;

  const fetchResultData = async () => {
    const url = `http://127.0.0.1/api/survey/${id}/result`;
    const response = await axios.get(url);
    const newResultData = response.data;
    setResultData(newResultData);
  };

  useEffect(() => {
    if (id) {
      fetchResultData();
      setLoading(false);
    }
  }, [id]);

  const { questions } = resultData;
  console.log(questions);

  if (loading || id === undefined) {
    return <h1>loading</h1>;
  }

  return (
    <>
      <h1>title : {resultData.title}</h1>
      <h2>description : {resultData.description}</h2>
      <h3>owner : {resultData.owner}</h3>
      <Results key='1' questions={questions} />
    </>
  );
};

export default Result;
