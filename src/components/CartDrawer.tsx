
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2, X, ShoppingCart as CartIcon, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  size?: string;
  color?: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  // Exemplo de itens no carrinho
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Vestido Floral",
      price: 135.91, // Preço com desconto
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      quantity: 1,
      size: "M",
      color: "Verde"
    },
    {
      id: 3,
      name: "Calça Jeans Slim",
      price: 116.91, // Preço com desconto
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      quantity: 2,
      size: "G",
      color: "Azul"
    }
  ]);

  const incrementQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div
        className={`absolute top-0 bottom-0 right-0 w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-lg font-medium flex items-center">
              <CartIcon className="mr-2 h-5 w-5" />
              Seu Carrinho 
              <span className="ml-2 text-sm text-gray-500">
                ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} itens)
              </span>
            </h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Body */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-10">
                <div className="mb-4 flex justify-center">
                  <CartIcon className="h-12 w-12 text-gray-300" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Seu carrinho está vazio
                </h3>
                <p className="text-gray-500 mb-6">
                  Adicione produtos para iniciar suas compras.
                </p>
                <Button
                  onClick={onClose}
                  className="bg-brasil-green hover:bg-brasil-green/90"
                >
                  Continuar comprando
                </Button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex border rounded-md p-3 relative"
                >
                  <div className="w-20 h-20 bg-gray-100 rounded-md flex-shrink-0">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="ml-4 flex-grow">
                    <Link to={`/produto/${item.id}`} onClick={onClose}>
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                    </Link>
                    <div className="text-sm text-gray-500 mt-1">
                      {item.size && <span>Tamanho: {item.size}</span>}
                      {item.color && item.size && <span> | </span>}
                      {item.color && <span>Cor: {item.color}</span>}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="font-medium text-gray-900">
                        R$ {item.price.toFixed(2)}
                      </div>
                      <div className="flex items-center border rounded-md">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => decrementQuantity(item.id)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => incrementQuantity(item.id)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-6 w-6"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4 text-gray-400" />
                  </Button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium">R$ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Entrega:</span>
                <span className="font-medium">Calculado no checkout</span>
              </div>
              <div className="flex justify-between text-base font-medium">
                <span>Total:</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>
              <Link to="/carrinho" onClick={onClose}>
                <Button className="w-full bg-brasil-green hover:bg-brasil-green/90">
                  Finalizar Compra
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full"
                onClick={onClose}
              >
                Continuar Comprando
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
