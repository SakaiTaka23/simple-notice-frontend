import React from 'react';
import SurveyList from '../../components/SurveyList/SurveyList';
import { surveyStatus } from '../../type/surveyStatusType';

const Future = () => {
  const url = 'http://127.0.0.1/api/surveys/future';
  const title = 'Coming Soon';
  const status: surveyStatus = 'future';

  return <SurveyList url={url} title={title} status={status} />;
};

export default Future;
