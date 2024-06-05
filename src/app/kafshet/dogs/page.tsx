import React from 'react';
import {fetchPets} from "@/action/fetchPets";
import PetsView from "@/components/custom/Pets/PetsView/indedx";
async function Page() {

    const pets = await fetchPets("dogs")
    return (
      <PetsView pets={pets} />
    );
}
export default Page;