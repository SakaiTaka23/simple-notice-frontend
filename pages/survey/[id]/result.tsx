import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Result = () => {
  const [resultData, setResultData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const id = router.query.id;

  const fetchResultData = async () => {
    const url = `http://127.0.0.1/api/survey/${id}/result`;
    const response = await axios.get(url);
    const newResultData = response.data;
    setResultData(newResultData);
  };

  useEffect(() => {
    if (id) {
      fetchResultData();
      setLoading(false);
    }
  }, [id]);

  console.log(resultData);

  if (loading || id === undefined) {
    return <h1>loading</h1>;
  }

  return <div>result</div>;
};

export default Result;
