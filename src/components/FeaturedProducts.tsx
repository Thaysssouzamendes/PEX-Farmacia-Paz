
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

// Filter for the specific featured products requested
const getFeaturedProducts = () => {
  const featuredNames = ["Joshson Baby", "Shapoom", "Melatonina", "Frauda"];
  // Use these specific product names or fall back to a slice if not found
  const featuredProducts = products.filter(product => 
    featuredNames.some(name => product.name.toLowerCase().includes(name.toLowerCase()))
  );
  
  // If we didn't find all requested products, add some from the regular products
  return featuredProducts.length < 4 ? 
    [...featuredProducts, ...products.slice(0, 4 - featuredProducts.length)] : 
    featuredProducts;
};

const featuredProducts = getFeaturedProducts();

const FeaturedProducts = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Produtos em Destaque</h2>
          <a href="/promocoes" className="text-farmacia-yellow hover:underline font-medium">
            Ver todos
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
