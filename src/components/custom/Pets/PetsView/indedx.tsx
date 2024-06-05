"use client"
import React, {useState} from 'react';
import PetCard from "@/components/custom/Pets/PetCard";
import {Pet} from "@/action/fetchPets";



interface props {
    pets?: Pet[]
}

 function PetsView({pets} : props) {

    const [filter, setFilter] = useState('');

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };

    const filteredPets = pets?.filter(pet =>
        pet.name.toLowerCase().includes(filter.toLowerCase())
    );


    return (
<div className={'flex flex-col'} >
        <input
            type="text"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Search Pets"
            className="m-6 p-1 border border-gray-300 rounded w-72 text-black"
        />
    <div className="px-2 flex flex-wrap gap-2 justify-center">
        {
            filteredPets?.map((pet, i) => (
                <PetCard {...pet} key={i}/>
            ))
        }
    </div>
</div>
)
    ;
}

export default PetsView;