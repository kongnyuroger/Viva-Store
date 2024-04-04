 'use client'
 import "./NavBar.css";
 import Link from "next/link";
 import { useGenerationStore } from "@/generationStore";
export default function NavBar(){
    const {selectedItems} = useGenerationStore()
    const {selectedItemsPrize} = useGenerationStore()
    return <Link href='./selectedItems'> <nav>
        <p>Items: {selectedItems}</p>
        <p>Amount: {selectedItemsPrize}</p>
    </nav></Link>
}