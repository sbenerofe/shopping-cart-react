import React from 'react';

const RenderItems = ( props ) => {
  return (
    <div className='items-container'>
      { props.array.map((item) => {
        return item;
      })}
    </div>
  );
};

export { RenderItems };