import React from 'react';

const page = ({ params }: { params: { customURL: string } }) => {
  return (
    <>
      <div>This page will always be</div>
      <div>url: {params.customURL}</div>
    </>
  );
};

export default page;
