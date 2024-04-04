'use client'
import { useGenerationStore } from "@/generationStore"
import Cards from "@/components/Cards/Cards"
export default function selectedItems(){
   const {itemsInBasket} = useGenerationStore()
    return <div className="shop-container">
            {itemsInBasket.map((item, index) => <Cards prize={item.prize} item={item} imgsrc={item.imgsrc} key={index} btnState="Remove" itemToDelete={index}/>)}
    </div>
}