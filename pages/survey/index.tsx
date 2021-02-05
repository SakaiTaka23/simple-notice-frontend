import React, { useEffect, useState } from 'react';
import { Surveys } from '../../type/api/surveyTypes';

const url = 'http://127.0.0.1/api/survey';

const Index = () => {
  const [surveys, setSurveys] = useState<Surveys>([]);

  const fetchSurveys = async () => {
    const response = await fetch(url);
    const newSurveys = await response.json();
    setSurveys(newSurveys);
  };

  useEffect(() => {
    fetchSurveys();
  }, []);

  return (
    <>
      Available Questions
      {surveys.map((survey, index) => {
        return (
          <div key={index}>
            <h1>title : {survey.title}</h1>
            <h2>description : {survey.description}</h2>
          </div>
        );
      })}
    </>
  );
};

export default Index;
