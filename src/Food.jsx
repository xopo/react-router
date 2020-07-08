import React from 'react';
import { useParams } from 'react-router-dom';
const url = 'https://source.unsplash.com/300x300/?';

const Food = () => {
    const { name } = useParams();
    const imgUrl = `${url}${name}`;
    return (
        <div className='Food'>
            <h1>I love to eat {name}</h1>
            <img src={imgUrl} alt={name} />
        </div>
    );    
}

export default Food;