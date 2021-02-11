import React, { FC } from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fir', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Demo line plot',
      backgroundColor: '#008080',
      borderColor: '#7fffd4',
      pointBorderWidth: 10,
      data: [5, 6, 9, 15, 30, 40, 80],
    },
  ],
};

const LinePlot: FC = () => {
  return (
    <div>
      <HorizontalBar data={data} />
    </div>
  );
};

export default LinePlot;
