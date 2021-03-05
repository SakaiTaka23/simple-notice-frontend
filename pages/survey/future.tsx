import React from 'react';
import SurveyList from '../../components/SurveyList/SurveyList';

const Future = () => {
  const url = 'http://127.0.0.1/api/surveys/future';
  const title = 'Coming Soon';

  return <SurveyList url={url} title={title} />;
};

export default Future;
