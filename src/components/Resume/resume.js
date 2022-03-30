import React from 'react';
import resumeData from './resume.json';

const resume = () => {
  return (
    <>
      <div>
        <div>
          <h1>{resumeData.basics.name}</h1>
          <div>
            <h3>{resumeData.basics.email}</h3>
            <h3>{resumeData.basics.website}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default resume;
