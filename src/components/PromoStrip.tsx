
import { useState } from "react";
import { X } from "lucide-react";

const PromoStrip = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-farmacia-yellow to-amber-400 text-gray-900 py-3 relative shadow-md">
      <div className="container mx-auto px-4">
        <p className="text-center font-semibold">
          🚚 Frete grátis em compras acima de R$100! Consulte medicamentos com desconto.
        </p>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-black/10 rounded-full p-1 transition-colors"
          onClick={() => setIsVisible(false)}
          aria-label="Fechar"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default PromoStrip;
