import React from 'react';

const CommentsCart = ({data}) => {
    return (
        <div className='flex items-start gap-4'>
            <img className='w-10 rounded-full ' src={data?.userImage} alt="" />
            <p className='bg-white p-4 rounded-2xl max-w-2xl'> {data?.comment}</p>
            
        </div>
    );
};

export default CommentsCart;