
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ShoppingBag, Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Em um projeto real, você carregaria esses dados de uma API
const productData = {
  id: 1,
  name: "Vestido Floral Verão",
  price: 159.9,
  discount: 15,
  description:
    "Vestido floral perfeito para o verão brasileiro. Confeccionado em viscose leve e fluida, com estampa exclusiva inspirada na flora brasileira.",
  details: "Material: 100% Viscose\nOrigem: Brasil\nModelo veste tamanho: M\nAltura do modelo: 1,75m",
  care: "Lavagem à mão ou máquina em ciclo delicado\nNão usar alvejante\nSecar à sombra\nPassar em temperatura baixa",
  images: [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
  ],
  sizes: ["PP", "P", "M", "G", "GG"],
  colors: ["Verde", "Azul", "Rosa"],
};

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(productData.images[0]);

  // Calcular preço com desconto
  const discountedPrice = productData.discount
    ? productData.price * (1 - productData.discount / 100)
    : productData.price;

  const handleAddToCart = () => {
    alert("Produto adicionado ao carrinho!");
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Imagens do Produto */}
          <div>
            <div className="aspect-square mb-4 overflow-hidden rounded-md bg-gray-100">
              <img
                src={mainImage}
                alt={productData.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {productData.images.map((image, index) => (
                <div
                  key={index}
                  className={`aspect-square cursor-pointer rounded-md overflow-hidden bg-gray-100 ${
                    mainImage === image ? "ring-2 ring-brasil-green" : ""
                  }`}
                  onClick={() => setMainImage(image)}
                >
                  <img
                    src={image}
                    alt={`${productData.name} - Imagem ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Detalhes do Produto */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{productData.name}</h1>
            
            <div className="mt-3 flex items-end">
              {productData.discount ? (
                <>
                  <p className="text-2xl font-bold text-gray-900">
                    R$ {discountedPrice.toFixed(2)}
                  </p>
                  <p className="text-lg text-gray-500 line-through ml-2">
                    R$ {productData.price.toFixed(2)}
                  </p>
                  <span className="ml-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {productData.discount}% OFF
                  </span>
                </>
              ) : (
                <p className="text-2xl font-bold text-gray-900">
                  R$ {productData.price.toFixed(2)}
                </p>
              )}
            </div>

            <p className="mt-4 text-gray-600">{productData.description}</p>

            {/* Seleção de Cores */}
            <div className="mt-6">
              <h2 className="text-sm font-medium text-gray-900">Cor</h2>
              <div className="mt-2 flex space-x-2">
                {productData.colors.map((color) => (
                  <button
                    key={color}
                    className={`px-3 py-1 border rounded-md ${
                      selectedColor === color
                        ? "border-brasil-green bg-brasil-green/10"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Seleção de Tamanhos */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-gray-900">Tamanho</h2>
                <a href="#" className="text-sm font-medium text-brasil-green hover:text-brasil-green/80">
                  Guia de tamanhos
                </a>
              </div>
              <div className="mt-2 grid grid-cols-5 gap-2">
                {productData.sizes.map((size) => (
                  <button
                    key={size}
                    className={`py-2 text-center border rounded-md ${
                      selectedSize === size
                        ? "border-brasil-green bg-brasil-green/10"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantidade */}
            <div className="mt-6">
              <h2 className="text-sm font-medium text-gray-900">Quantidade</h2>
              <div className="mt-2 flex items-center border border-gray-300 rounded-md w-32">
                <button
                  onClick={decrementQuantity}
                  className="px-3 py-1 border-r border-gray-300 text-gray-500"
                >
                  -
                </button>
                <span className="flex-1 text-center">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="px-3 py-1 border-l border-gray-300 text-gray-500"
                >
                  +
                </button>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="mt-8 flex space-x-4">
              <Button
                className="flex-1 bg-brasil-green hover:bg-brasil-green/90 py-6"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Adicionar ao Carrinho
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Entregas */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <h2 className="text-sm font-medium text-gray-900">Entrega</h2>
              <p className="mt-2 text-sm text-gray-500">
                Frete grátis para compras acima de R$199.
                Entrega em 2-5 dias úteis para todo o Brasil.
              </p>
            </div>
          </div>
        </div>

        {/* Tabs de Informação Adicional */}
        <div className="mt-16">
          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Detalhes</TabsTrigger>
              <TabsTrigger value="care">Cuidados</TabsTrigger>
              <TabsTrigger value="shipping">Envio & Devoluções</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-6 space-y-4">
              <div className="space-y-2">
                <p className="whitespace-pre-line text-gray-600">{productData.details}</p>
              </div>
            </TabsContent>
            <TabsContent value="care" className="mt-6 space-y-4">
              <div className="space-y-2">
                <p className="whitespace-pre-line text-gray-600">{productData.care}</p>
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="mt-6 space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Política de Envio</h3>
                <p className="text-gray-600">
                  Enviamos para todo o Brasil. Pedidos são processados em até 24 horas nos dias úteis.
                  O frete é grátis para compras acima de R$199.
                </p>
                <h3 className="font-medium mt-4">Política de Devoluções</h3>
                <p className="text-gray-600">
                  Você tem 30 dias para devolver o produto caso não esteja satisfeito.
                  O produto deve estar nas mesmas condições em que foi enviado, com etiquetas e embalagem original.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
