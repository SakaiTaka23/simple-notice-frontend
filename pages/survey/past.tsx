import React from 'react';
import SurveyList from '../../components/SurveyList/SurveyList';

const Past = () => {
  const url = 'http://127.0.0.1/api/surveys/past';
  const title = 'Finished Questions';

  return <SurveyList url={url} title={title} />;
};

export default Past;
