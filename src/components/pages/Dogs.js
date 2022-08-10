import React, { useState } from 'react';
import Card from '../Card';

export default function Dogs() {
    const [canines, setCanines] = useState([]);

    function retrieveCanines() {
        setCanines([
            {
                name: 'Fido',
                description: 'The Best Boy',
                id: 117
            },
            {
                name: 'Sparky',
                description: 'The other Best Boy',
                id: 204
            },
            {
                name: 'Bullseye',
                description: 'Maybe a Horse',
                id: 148
            }
        ]);
    }

    return (
        <div>
            {
                canines.map(canine => {
                    return <Card name={canine.name} description={canine.description} id={canine.id} />
                })
            }
            <button onClick={retrieveCanines}>Retrieve Canines</button>
        </div>
    )
}