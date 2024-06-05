"use client";
// Next Peer Dependencies
import { usePathname } from "next/navigation";
// Shad CN Components
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Icons
import { Menu, Search } from "lucide-react";
// Tailwind Utils
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
// Types And Interfaces
type RootNavigationMenuProps = {};

import { useAtom } from 'jotai';
import { sheetAtom } from "@/stores/sheetAtom";
import MenuBar from "@/components/custom/MenuBar";

function RootNavigationMenu({}: RootNavigationMenuProps) {
    const currentPathname = usePathname();

    const [open, setOpen] = useAtom(sheetAtom);

    return (

               <MenuBar/>



    );
}

export default RootNavigationMenu;
