import { useContext } from "react";
import ShoppingCartContext from "@/components/context/cartContext";

type ProductCardProps = {
    id: string;
    name: string;
    price: number;
    picture: string;
}

const ProductCard = ({ id, name, price, picture }: ProductCardProps) => {
    const { setItems, items } = useContext(ShoppingCartContext);
    const productAmount = items[id] || 0;

    const handleAmount = (action: string) => {
        if(action === 'increment') {
            const newItemAmount = id in items ? items[id] + 1 : 1;
            setItems((prevItems) => ({...prevItems, [id]: newItemAmount}))
        };
        if(action === 'decrement') {
            if(items?.[id] > 0) {
                setItems((prevItems) => ({...prevItems, [id]: items[id] - 1}))
            }
        }
    };

    return (
        <div className="bg-gray-200 p-6 rounded-md">
            {/* <div className="relative 100% h-40 m-auto"> */}
            <div className="m-auto 100%">
                <img src={picture} alt={name} className="object-cover" />
            </div>
            <div className="flex justify-between mt-4">
                <div className="font-bold text-l"> {name} </div>
                <div className="font-bold text-l text-gray-500"> ${price} per kg </div>
            </div>
            <div className="flex justify-between mt-4 w-2/4 m-auto">
                <button
                    className="pl-2 pr-2 bg-red-400 text-white rounded-md"
                    disabled={false /* To be implemented */}
                    onClick={() => handleAmount("decrement")}>
                    -
                </button>
                <div>{productAmount}</div>
                <button
                    className="pl-2 pr-2 bg-green-400 text-white rounded-md"
                    onClick={() => handleAmount("increment")}>
                    +
                </button>
            </div>
        </div>
    );
}

export default ProductCard;