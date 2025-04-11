import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";

const RandomReviews = () => {
    const [randomRating, setRandomRating] = useState(null);

    useEffect(() => {
        const storedRating = sessionStorage.getItem('randomRating');
        if (storedRating) {
            setRandomRating(parseFloat(storedRating));
        } else {
            const min = 4.0;
            const max = 5.0;
            const rating = Math.random() * (max - min) + min;
            const roundedRating = parseFloat(rating.toFixed(1));
            sessionStorage.setItem('randomRating', roundedRating);
            setRandomRating(roundedRating);
        }
    }, []);

    if (randomRating === null) return null; // avoid rendering until rating is set

    return (
        <div className="producvt-rating flex items-center gap-1">
            <ul className='flex gap-1 items-center text-yellow-500'>
                {[...Array(5)].map((_, starIndex) => (
                    <li key={starIndex}>
                        <FaStar
                            className={starIndex < Math.floor(randomRating) ? 'text-yellow-500' : 'text-gray-300'}
                        />
                    </li>
                ))}
            </ul>
            <p className='font-[300] text-[12px]'>({randomRating})</p>
        </div>
    );
};

export default RandomReviews;
