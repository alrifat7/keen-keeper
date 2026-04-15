import React from 'react';

const Card = () => {
    return (
        <div className="card card-dash bg-base-100  mx-auto container grid grid-cols-4 gap-9 px-20">
            <div className="card-body bg-base-200 rounded-lg text-center shadow">
                <h2 className="text-4xl font-bold">10</h2>
                <p className='text-xl'>Total Friends</p>
            </div>
            <div className="card-body bg-base-200 rounded-lg text-center shadow">
                <h2 className="text-4xl font-bold">10</h2>
                <p className='text-xl'>Total Friends</p>
            </div>
            <div className="card-body bg-base-200 rounded-lg text-center shadow">
                <h2 className="text-4xl font-bold">10</h2>
                <p className='text-xl'>Total Friends</p>
            </div>
            <div className="card-body bg-base-200 rounded-lg text-center shadow">
                <h2 className="text-4xl font-bold">10</h2>
                <p className='text-xl'>Total Friends</p>
            </div> 
            <hr className='text-gray-50 max-w-full' />
        </div>
    );
};

export default Card;