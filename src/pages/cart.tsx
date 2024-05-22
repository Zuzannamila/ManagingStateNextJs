import { useGlobalItems } from '@/components/ProductCard';
import data from '@/data/items'

const getFullItem = (id: string) => {
    const idx = data.findIndex((item) => item.id === id)
    return data[idx];
};

const Cart = () => {
    const items = useGlobalItems();
    const total = Object.keys(items).map((id) => getFullItem(id).price * items[id]).reduce((x,y) => x + y, 0);;
    const amounts = Object.keys(items).map((id) => {
        const item = getFullItem(id);
        return { item, amount: items[id] };
    })
    return (
        <>
        <h1 className="text-xl font-bold">Total: ${total}</h1>
        <div>
        </div>
        </>
    );
};

export default Cart;