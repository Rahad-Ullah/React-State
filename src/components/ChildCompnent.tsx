import React from 'react';

type TProps = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  };

const ChildCompnent = ({ count }: TProps) => {
    return (
        <div className='border-2 border-purple-500 m-10 p-10'>
           <h1 className="text-2xl">{count}</h1>
        </div>
    );
};

export default ChildCompnent;