import React from 'react';
import PetsView from "@/components/custom/Pets/PetsView/indedx";
import {fetchPets} from "@/action/fetchPets";
async function Page() {

    const pets = await fetchPets('cats')
    return (
      <PetsView pets={pets}/>
    );
}
export default Page;