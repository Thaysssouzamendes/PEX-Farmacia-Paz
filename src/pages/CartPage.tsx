
import { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  size?: string;
  color?: string;
}

const CartPage = () => {
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

  const [couponCode, setCouponCode] = useState("");

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

  const applyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Cupom "${couponCode}" aplicado com sucesso!`);
    setCouponCode("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Carrinho de Compras</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-lg">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Carrinho vazio" 
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-6 opacity-50"
                />
              </div>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">
                Seu carrinho está vazio
              </h2>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Parece que você ainda não adicionou nenhum produto ao seu carrinho. Explore nossa loja e descubra nossas ofertas!
              </p>
              <Link to="/">
                <Button className="bg-brasil-green hover:bg-brasil-green/90">
                  Ir às Compras
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white border rounded-lg overflow-hidden">
                  <div className="hidden sm:grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b text-sm font-medium">
                    <div className="col-span-6">Produto</div>
                    <div className="col-span-2 text-center">Preço</div>
                    <div className="col-span-2 text-center">Quantidade</div>
                    <div className="col-span-2 text-center">Total</div>
                  </div>

                  {/* Itens do carrinho */}
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 border-b items-center"
                    >
                      {/* Produto */}
                      <div className="col-span-6">
                        <div className="flex">
                          <div className="w-20 h-20 bg-gray-100 rounded-md flex-shrink-0">
                            <img
                              src={item.imageUrl}
                              alt={item.name}
                              className="w-full h-full object-cover rounded-md"
                            />
                          </div>
                          <div className="ml-4">
                            <Link to={`/produto/${item.id}`}>
                              <h3 className="font-medium text-gray-900">{item.name}</h3>
                            </Link>
                            <div className="text-sm text-gray-500 mt-1">
                              {item.size && <span>Tamanho: {item.size}</span>}
                              {item.color && item.size && <span> | </span>}
                              {item.color && <span>Cor: {item.color}</span>}
                            </div>
                            <button 
                              className="text-sm text-red-500 flex items-center mt-2 sm:hidden"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-3 w-3 mr-1" /> Remover
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Preço */}
                      <div className="col-span-2 text-center flex items-center justify-between sm:block">
                        <span className="sm:hidden">Preço:</span>
                        <span>R$ {item.price.toFixed(2)}</span>
                      </div>

                      {/* Quantidade */}
                      <div className="col-span-2 flex items-center justify-between sm:justify-center">
                        <span className="sm:hidden">Quantidade:</span>
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

                      {/* Total */}
                      <div className="col-span-2 text-center flex items-center justify-between sm:block">
                        <span className="sm:hidden">Total:</span>
                        <div className="flex items-center justify-end sm:justify-center">
                          <span className="font-medium">
                            R$ {(item.price * item.quantity).toFixed(2)}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="ml-2 h-8 w-8 hidden sm:inline-flex"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4 text-gray-400" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Ações do Carrinho */}
                  <div className="p-4 flex flex-wrap gap-4">
                    <Link to="/">
                      <Button variant="outline">Continuar Comprando</Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="text-red-500 border-red-500"
                      onClick={() => setCartItems([])}
                    >
                      Limpar Carrinho
                    </Button>
                  </div>
                </div>
              </div>

              {/* Resumo do Pedido */}
              <div className="lg:col-span-1">
                <div className="bg-white border rounded-lg p-6">
                  <h2 className="text-lg font-medium mb-4">Resumo do Pedido</h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal:</span>
                      <span>R$ {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cupom:</span>
                      <span>-R$ 0,00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Entrega:</span>
                      <span>Calculado no próximo passo</span>
                    </div>
                  </div>

                  <div className="border-t pt-3 mb-6">
                    <div className="flex justify-between text-lg font-medium">
                      <span>Total:</span>
                      <span>R$ {subtotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-brasil-green hover:bg-brasil-green/90">
                    Finalizar Compra <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  {/* Cupom */}
                  <div className="mt-6">
                    <h3 className="text-sm font-medium mb-2">Cupom de desconto</h3>
                    <form onSubmit={applyCoupon} className="flex">
                      <Input
                        type="text"
                        placeholder="Digite seu cupom"
                        className="rounded-r-none"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                      <Button type="submit" className="rounded-l-none">
                        Aplicar
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
