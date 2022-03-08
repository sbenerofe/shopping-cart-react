import React from 'react';

const RenderItems = ( props ) => {
  return (
    <div>
      { props.array.map((item) => {
        return item;
      })}
    </div>
  );
};

export { RenderItems };