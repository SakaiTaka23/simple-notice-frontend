import React from 'react';

const TwoComp = () => {
  const array = ['one', 'two'];

  return (
    <div>
      {array.map((_, index) => {
        return <Item key={index} />;
      })}
    </div>
  );
};

const Item = () => {
  return <div>One Item</div>;
};

export default TwoComp;
