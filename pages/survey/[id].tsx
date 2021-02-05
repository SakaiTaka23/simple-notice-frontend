import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { formData } from '../../type/formType';
import Questions from '../../components/Questions';

const url = 'http://127.0.0.1/api/survey/';

const Form: FC = () => {
  const [surveyData, setSurveyData] = useState<formData>({
    id: '1',
    title: 'title',
    description: 'desc',
    questions: [],
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  const fetchSurveyData = async () => {
    const response = await fetch(url + id);
    const newSurveyData = await response.json();
    setSurveyData(newSurveyData[0]);
  };

  useEffect(() => {
    if (id) {
      fetchSurveyData();
      setLoading(false);
    }
  }, [id]);

  const { title, description, questions } = surveyData;
  console.log(questions);

  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <div>
      <h1>survey</h1>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <Questions key='1' questions={questions} />
    </div>
  );
};

export default Form;
