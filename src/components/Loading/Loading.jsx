import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center my-16'>
            <div className="radial-progress text-current p-4" style={{ "--value": 100 }}>Loading...</div>
        </div>
    );
};

export default Loading;