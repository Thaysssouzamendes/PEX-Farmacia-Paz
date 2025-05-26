
import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, Product } from "@/data/products";
import { useToast } from "@/hooks/use-toast";
import { Pill, Heart, Droplet, Bandage } from "lucide-react";

const CategoryPage = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [cartOpen, setCartOpen] = useState(false);

  
  const path = location.pathname.substring(1); 
  const categoryFilter = path;

  const filteredProducts = products.filter((product) => {
    if (categoryFilter === "promocoes") {
      return product.discount !== undefined && product.discount > 0;
    }
    return product.gender === categoryFilter;
  });

  
  const getCategoryIcon = () => {
    switch(categoryFilter) {
      case "remedios":
        return <Pill className="h-6 w-6 mr-2 text-farmacia-yellow" />;
      case "perfumes":
        return <Heart className="h-6 w-6 mr-2 text-farmacia-yellow" />;
      case "desodorantes":
        return <Droplet className="h-6 w-6 mr-2 text-farmacia-yellow" />;
      case "produtos-pele":
        return <Bandage className="h-6 w-6 mr-2 text-farmacia-yellow" />;
      default:
        return null;
    }
  };

  const pageTitle = 
    categoryFilter === "remedios" ? "Remédios" :
    categoryFilter === "perfumes" ? "Perfumes" :
    categoryFilter === "desodorantes" ? "Desodorantes" :
    categoryFilter === "produtos-pele" ? "Produtos de Pele" :
    categoryFilter === "promocoes" ? "Promoções" : "Produtos";

  const handleAddToCart = (product: Product) => {
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho.`,
      duration: 2000,
    });
    setCartOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar cartOpen={cartOpen} onCartOpenChange={setCartOpen} />
      <main className="flex-grow">
        <div className="bg-farmacia-lightyellow py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              {getCategoryIcon()}
              {pageTitle}
            </h1>
            <p className="mt-2 text-gray-600">
              {filteredProducts.length} produtos encontrados
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">Nenhum produto encontrado nesta categoria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id}
                  {...product}
                  onAddToCart={() => handleAddToCart(product)}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
