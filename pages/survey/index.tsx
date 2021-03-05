import React from 'react';
import SurveyList from '../../components/SurveyList/SurveyList';

const Index = () => {
  const url = `http://127.0.0.1/api/surveys`;
  const title = 'Available Questions';

  return <SurveyList url={url} title={title} />;
};

export default Index;
