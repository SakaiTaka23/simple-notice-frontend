import { GetServerSideProps } from 'next';
import React, { FC } from 'react';
import data from '../../data/mock_data';
import { formData } from '../../type/formType';
import Questions from '../../components/Questions';

type Prop = {
  formData: formData;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  //api作成して呼び出す
  const formData = data;
  return {
    props: {
      formData,
    },
  };
};

const Form: FC<Prop> = ({ formData }) => {
  const { id, title, description, questions } = formData;
  console.log(id, title, description, questions);
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <Questions key={id} questions={questions} />
    </div>
  );
};

export default Form;
