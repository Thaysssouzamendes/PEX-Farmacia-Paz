
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-brasil-green">404</h1>
          <p className="text-2xl text-gray-700 mt-4 mb-8">Oops! Página não encontrada</p>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            A página que você está procurando pode ter sido removida, 
            ter seu nome alterado ou está temporariamente indisponível.
          </p>
          <Link to="/">
            <Button className="bg-brasil-green hover:bg-brasil-green/90">
              Voltar para a página inicial
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
