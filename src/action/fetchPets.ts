
export interface Pet {
    id: number;
    name: string;
    species?: string;
    family?: string;
    habitat?: string;
    origin:string;
    diet : string;
    description: string;
    wingspan_cm?: string
    weight_kg ? : string
    image : string;
    place_of_found?:string;
    breed_group?:string
    size?: string
    lifespan?: string
    temperament?:string
    colors ?: string[]



}
export async function fetchPets(pet : string): Promise<Pet[] | undefined>  {
    try {
        const response = await fetch(`https://freetestapi.com/api/v1/${pet}`);
        console.log(response, 192993)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching bird data:', error);
    }
}