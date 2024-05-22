import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { ItemState } from '@/redux/store'

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  picture: string;
}

export const useGlobalItems = () => {
  return useSelector((state : ItemState) => state, shallowEqual)
}

const ProductCard = ({ id, name, price, picture }: ProductCardProps) => {
  const dispatch = useDispatch();
  const items = useGlobalItems();
  const productAmount = items?.[id] ?? 0;

  return (
    <div className="bg-gray-200 p-6 rounded-md">
      <div className="relative 100% m-auto">
        <img src={picture} alt={name} className="object-cover" />
      </div>
      <div className="flex justify-between mt-4">
        <div className="font-bold text-l"> {name} </div>
        <div className="font-bold text-l text-gray-500"> ${price} per kg </div>
      </div>
      <div className="flex justify-between mt-4 w-2/4 m-auto">
        <button
          className="pl-2 pr-2 bg-red-400 text-white rounded-md"
          disabled={productAmount === 0}
          onClick={() => dispatch({ type: 'DECREMENT', id})}>
          -
        </button>
        <div>{productAmount}</div>
        <button
          className="pl-2 pr-2 bg-green-400 text-white rounded-md"
          onClick={() => dispatch({ type: 'INCREMENT', id})}>
          +
        </button>
      </div>
    </div>
  );
}

export default ProductCard;