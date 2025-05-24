
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  discount?: number;
  onAddToCart?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  imageUrl,
  category,
  discount,
  onAddToCart,
}) => {
  const discountedPrice = discount ? price * (1 - discount / 100) : price;

  return (
    <div className="group">
      <Link to={`/produto/${id}`}>
        <div className="aspect-square overflow-hidden rounded-md bg-gray-100 relative">
          <img
            src={imageUrl}
            alt={name}
            className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
          />
          {discount && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              {discount}% OFF
            </div>
          )}
        </div>
        <div className="mt-3">
          <p className="text-xs text-gray-500">{category}</p>
          <h3 className="font-medium text-gray-700 mt-1">{name}</h3>
          <div className="flex items-center mt-1">
            {discount ? (
              <>
                <p className="font-medium text-gray-900">
                  R$ {discountedPrice.toFixed(2)}
                </p>
                <p className="text-gray-500 line-through text-sm ml-2">
                  R$ {price.toFixed(2)}
                </p>
              </>
            ) : (
              <p className="font-medium text-gray-900">R$ {price.toFixed(2)}</p>
            )}
          </div>
        </div>
      </Link>
      <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button 
          className="w-full bg-brasil-green hover:bg-brasil-green/90 text-white"
          onClick={(e) => {
            e.preventDefault();
            onAddToCart?.();
          }}
        >
          <ShoppingBag className="mr-2 h-4 w-4" /> Adicionar
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
