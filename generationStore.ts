import { create } from "zustand";
interface GenerationState {
    selectedItems: number
    setSelectedItems: (selectedItems: number) => void
    selectedItemsPrize: number
    setSelectedItemsPrize: (selectedItems: number) => void
    itemsInBasket: object[]
    setItemInBasket: (itemsInBasket: object[]) => void
}

export const useGenerationStore = create<GenerationState>()((set) => ({
    selectedItems: 0,
    setSelectedItems: (selectedItems: number) => set({selectedItems}),
    selectedItemsPrize: 0,
    setSelectedItemsPrize: (selectedItemsPrize: number) => set({selectedItemsPrize}),
    itemsInBasket: [],
    setItemInBasket: (itemsInBasket: object[]) => set({itemsInBasket})
}))