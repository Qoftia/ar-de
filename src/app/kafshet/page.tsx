import React from 'react';
import PetCard from "../../components/custom/Pets/PetCard";
import {fetchPets} from "@/action/fetchPets";
interface Bird {
    id: number;
    name: string;
    species: string;
    family: string;
    habitat: string;
    place_of_found:string;
    diet : string;
    description: string;
    wingspan_cm: string
    weight_kg : string
    image : string
}

async function Page() {

    const a = await fetchPets('cats')

    return (
        <div className={"px-6 flex flex-wrap gap-2"}>
            {
                a?.map((val, i) => (<PetCard origin={val.place_of_found ?? val.origin} name={val.name} img={val.image} key={i}/>))
            }
        </div>
    );
}

export default Page;