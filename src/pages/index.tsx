import ProductCard from '@/components/ProductCard';
import products from '../data/items';

const Home = () => {
  return (
    <div className="grid grid-cols gap-4">
      {products.map(product => (
        <ProductCard key={product.id} {...product}></ProductCard>
      ))}
    </div>
  )
}

export default Home;