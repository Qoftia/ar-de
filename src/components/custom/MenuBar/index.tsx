"use client"
import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

function MenuBar() {
    const router = useRouter()

        return (
        <div className={'justify-around flex flex-row sticky top-0 bg-gray-950 z-20'}>
                <Button onClick={() =>router.push('/')}> Home</Button>
                <Button onClick={() =>router.push('/kafshet/birds')}> Birds</Button>
                <Button onClick={() =>router.push('/kafshet/dogs')}> Dogs</Button>
                <Button onClick={() =>router.push('/kafshet/cats')}> Cats</Button>
            <Button onClick={() =>router.push('/kafshet/1')}> About Us</Button>


        </div>
    );
}

export default MenuBar;