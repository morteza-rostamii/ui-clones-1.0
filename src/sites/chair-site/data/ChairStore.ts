import { create } from 'zustand'
import { TProduct } from './DataChair';

const useChairStore:any = create((set:any, get:any) => ({
  items: [],
  
  addItem: (item: TProduct) => {
    // check if item exists
    if (get().itemExist(item)) return;
    set((state:any) => ({
      items: [...state.items, item],
    }));
  },

  itemExist: (item: TProduct): boolean => get().items.some((el:any) => item.id === el.id),
}))

const unsub = useChairStore.subscribe((state:any) => console.log('chairstore: ', state));

export default useChairStore 