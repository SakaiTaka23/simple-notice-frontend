import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { formData } from '../../type/formType';
import Questions from '../../components/Questions';

const url = 'http://127.0.0.1/api/survey/';

const Form: FC = () => {
  const [questions, setQuestions] = useState<formData>({} as formData);
  const router = useRouter();
  const { id } = router.query;

  const fetchQuestions = async () => {
    const response = await fetch(url + id);
    const newQuestions = await response.json();
    setQuestions(newQuestions[0]);
  };

  useEffect(() => {
    if (id) {
      fetchQuestions();
    }
  }, [id]);

  const { title, description } = questions;

  return (
    <div>
      <h1>survey</h1>
      <h1>{title}</h1>
      <h2>{description}</h2>
      {/* <Questions key={id} questions={questions} /> */}
    </div>
  );
};

export default Form;
