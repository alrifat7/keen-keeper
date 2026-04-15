import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col items-center
            text-center py-16 gap-4'>
            <h2 className='font-bold text-5xl'>Friends to keep close in your life</h2>
            <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
        <button className='btn bg-green-950 text-white'>+ Add a Friend</button>
        </div>
    );
};

export default Banner;