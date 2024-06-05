"use client"
import React, {useState} from 'react';
import Image from "next/image";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger} from "@/components/ui/dialog";
import {Pet} from "@/action/fetchPets";




function PetCard({ image,
                 name,
                     species,
                     family,
                     habitat,
                     origin,
                     diet ,
                     description,
                     wingspan_cm,
                     weight_kg  ,
                     place_of_found ,
                     breed_group, size ,lifespan , temperament,
                     colors
} : Pet) {


    const [open , setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }
    console.log(open)

    return (
        <Dialog open={open}
                onOpenChange={handleClick}
        >
            <DialogTrigger>
        <div className={"flex flex-col  ease-in duration-150 cursor-pointer w-52 gap-2 bg-gray-800 rounded-md hover:opacity-50 "} onClick={handleClick}>
<Image src={image} alt={"1"} className={"h-52 rounded-md  "} width={1000} height={1000}/>
            <div className={"w-full"}>
                <h2 className={"text-sky-50"}>{name} </h2>
                <h2 className={"text-sky-50"}>{origin} </h2>
            </div>

        </div>
            </DialogTrigger>
            <DialogContent className={"bg-gray-950"}>
                <div className={"flex flex-col"}>
                    <h2>name: {name} </h2>
                    <h2>habitat: {habitat ?? '-'} </h2>
                    <h2>origin: {origin ?? place_of_found} </h2>
                    <h2>species: {species ?? '-'}</h2>
                    <h2>family: {family ?? '-'}</h2>
                    <h2>diet: {diet ?? '-'}</h2>
                    <h2>description: {description}</h2>
                    <h2>wingspan_cm: {wingspan_cm ?? "-"}</h2>
                    <h2>weight_kg: {weight_kg ?? "-"}</h2>
                    <h2>size: {size ?? '-'}</h2>
                    <h2>lifespan: {lifespan ?? '-'}</h2>
                    <h2>breed_group: {breed_group ?? '-'}</h2>
                    <h2>temperament: {temperament ?? '-'}</h2>
                    <h2>colors: {colors?.join(',') ?? '-'}</h2>
                </div>


            </DialogContent>
        </Dialog>

    );
}

export default PetCard;