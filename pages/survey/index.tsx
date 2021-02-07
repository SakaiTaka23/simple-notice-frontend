import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Surveys } from '../../type/api/surveyTypes';

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
      Available Questions
      {surveys.map((survey, index) => {
        return (
          <Link key={index} href={`/survey/${survey.id}`}>
            <a>
              <h1>title : {survey.title}</h1>
              <h2>description : {survey.description}</h2>
            </a>
          </Link>
        );
      })}
    </>
  );
};

export default Index;
