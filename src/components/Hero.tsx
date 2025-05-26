
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-farmacia-lightyellow via-white to-farmacia-lightyellow/50">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Sua saúde em
              <br />
              <span className="text-farmacia-yellow">primeiro lugar</span>
            </h1>
            <p className="text-lg text-gray-600">
              Na FarmáciaPAZ você encontra os melhores medicamentos, produtos de saúde e beleza com atendimento de qualidade e preços acessíveis.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button className="bg-farmacia-yellow hover:bg-amber-500 text-white text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                Comprar agora <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-farmacia-yellow text-farmacia-yellow hover:bg-farmacia-yellow/10 text-lg py-6 transition-all duration-300">
                Consultar promoções
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88" 
              alt="FarmáciaPAZ" 
              className="rounded-lg shadow-xl transform translate-y-6 md:translate-y-0 md:translate-x-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
