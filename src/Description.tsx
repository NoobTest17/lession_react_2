import React from 'react';

interface TProps {
  initData: {
    id: string
    link: string
  }
  name: string
}

const Description = ({ name, initData }: TProps) => {
  return (
    <>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      { name }
      <a
        className='App-link'
        href={ initData.link }
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>

    </>
  );
};

export default Description;
