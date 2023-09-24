import React from 'react';

const DetailsCard = ({data}) => {

    const {picture, title, text_color, description , price}= data || {}
    return (
        
        <div className=' max-w-5xl mx-auto card card-compact'>
            <div className='absolute'>
                <img className= ' w-[1000px] mx-auto' src={picture} alt="" />
                <div className='card-actions bg-black bg-opacity-30 py-4 px-4 relative bottom-[72px]'>
                <button className={` bg-[${text_color}] text-white py-2 px-4 `}>Donate {price}</button>
            </div>
            </div>
           
            <div className='card-body'>
            <h4>{title}</h4>
            <p>{description}</p>
            </div>
        </div>
    );
};

export default DetailsCard;