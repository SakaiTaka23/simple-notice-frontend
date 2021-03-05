import React from 'react';
import SurveyList from '../../components/SurveyList/SurveyList';
import { surveyStatus } from '../../type/surveyStatusType';

const Past = () => {
  const url = 'http://127.0.0.1/api/surveys/past';
  const title = 'Finished Questions';
  const status: surveyStatus = 'past';

  return <SurveyList url={url} title={title} status={status} />;
};

export default Past;
