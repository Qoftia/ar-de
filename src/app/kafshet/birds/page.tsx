import React from 'react';
import PetsView from "@/components/custom/Pets/PetsView/indedx";
import {fetchPets} from "@/action/fetchPets";
async function Page() {

    const birds = await fetchPets('birds')
    return (
        <PetsView pets={birds}/>
    );
}
export default Page;