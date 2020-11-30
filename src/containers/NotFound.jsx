import React from 'react';

import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <div className='site'>
    <div className='sketch'>
      <div className='bee-sketch red' />
      <div className='bee-sketch blue' />
    </div>

    <h1>
      404:
      <small>Page Not Found</small>
    </h1>
  </div>
);

export default NotFound;
