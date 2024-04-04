'use client'
import { useGenerationStore } from "@/generationStore";

interface Props{
    prize: number,
    item: object,
    btnState: string,
    itemToDelete: number

}
export default function BuyBtn ({prize, item, btnState, itemToDelete}: Props){
    const {setSelectedItems} = useGenerationStore();
    const {selectedItems} = useGenerationStore();
    const {setSelectedItemsPrize} = useGenerationStore();
    const {selectedItemsPrize} = useGenerationStore();
    const {itemsInBasket} = useGenerationStore();
    const handelClick = () => {
        if(btnState === 'Buy'){
            setSelectedItems(selectedItems + 1)
            setSelectedItemsPrize(selectedItemsPrize + prize)
            itemsInBasket.push(item)
            console.log(itemsInBasket)
        } else if(btnState === 'Remove'){
            setSelectedItems(selectedItems - 1)
            setSelectedItemsPrize(selectedItemsPrize - prize)
            delete itemsInBasket[itemToDelete]
            
        }
        
        
    }  
    return <h3 onClick={handelClick}>{btnState}</h3>
} 