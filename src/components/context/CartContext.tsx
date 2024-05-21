import { SetStateAction, Dispatch, createContext } from "react";

type ItemState = {
    [key: string]: number;
  };

type ShoppingCart = {
    items: ItemState;
    setItems: Dispatch<SetStateAction<ItemState>>;
}

const defaultValues: ShoppingCart = {
    items: {},
    setItems: () => {}
};

const ShoppingCartContext = createContext<ShoppingCart>(defaultValues);

export default ShoppingCartContext;