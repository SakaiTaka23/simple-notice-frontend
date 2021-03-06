import React from 'react';
import SurveyList from '../../components/SurveyList/SurveyList';
import { surveyStatus } from '../../type/surveyStatusType';

const Now = () => {
  const url = 'http://127.0.0.1/api/surveys/now/';
  const title = 'Available Questions';
  const status: surveyStatus = 'available';

  return <SurveyList url={url} title={title} status={status} />;
};

export default Now;
