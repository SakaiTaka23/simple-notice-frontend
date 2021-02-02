import { GetServerSideProps } from 'next';
import React from 'react';
import data from '../../data/mock_data';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  //api作成して呼び出す
  const formData = data;
  return {
    props: {
      formData,
    },
  };
};

const Form = ({ formData }: any) => {
  const { id, title, description, questions } = formData;
  console.log(id, title, description, questions);
  return <div>form</div>;
};

export default Form;
