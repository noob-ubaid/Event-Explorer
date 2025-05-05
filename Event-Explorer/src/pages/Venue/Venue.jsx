import React, { useEffect, useState } from 'react';

const Venue = () => {
    const [venue,setVenue] = useState([])
    useEffect(()=>{
        const data = fetch('venue.json')
        .then(res => res.json())
        setVenue(data)
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10'>
            
        </div>
    );
};

export default Venue;