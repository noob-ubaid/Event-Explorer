import React from 'react';
import { useLoaderData } from 'react-router';
import Event from '../Event/Event';

const Events = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-6 md:my-10 justify-items-center lg:grid-cols-3 gap-8'>
            {
                data.map( event => <Event key={event.id} event={event}></Event>)
            }
        </div>
    );
};

export default Events;