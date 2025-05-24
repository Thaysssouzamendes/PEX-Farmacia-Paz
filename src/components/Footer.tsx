
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Bird } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <div className="flex items-center text-2xl font-bold">
                <Bird className="h-6 w-6 text-farmacia-yellow mr-2" />
                Farmácia<span className="text-farmacia-yellow">PAZ</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Cuidando da sua saúde e bem-estar desde 1985. Encontre medicamentos, produtos de higiene e cosméticos com os melhores preços.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-farmacia-yellow">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-farmacia-yellow">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-farmacia-yellow">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li><Link to="/remedios" className="text-gray-400 hover:text-farmacia-yellow">Remédios</Link></li>
              <li><Link to="/perfumes" className="text-gray-400 hover:text-farmacia-yellow">Perfumes</Link></li>
              <li><Link to="/desodorantes" className="text-gray-400 hover:text-farmacia-yellow">Desodorantes</Link></li>
              <li><Link to="/produtos-pele" className="text-gray-400 hover:text-farmacia-yellow">Produtos de Pele</Link></li>
              <li><Link to="/promocoes" className="text-gray-400 hover:text-farmacia-yellow">Promoções</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informações</h3>
            <ul className="space-y-2">
              <li><Link to="/sobre" className="text-gray-400 hover:text-farmacia-yellow">Sobre nós</Link></li>
              <li><Link to="/entregas" className="text-gray-400 hover:text-farmacia-yellow">Entregas</Link></li>
              <li><Link to="/termos" className="text-gray-400 hover:text-farmacia-yellow">Termos e Condições</Link></li>
              <li><Link to="/privacidade" className="text-gray-400 hover:text-farmacia-yellow">Política de Privacidade</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Av. Paulista, 1000, São Paulo, SP</li>
              <li className="text-gray-400">Tel: (11) 1234-5678</li>
              <li className="text-gray-400">Email: contato@farmaciapaz.com.br</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Farmácia PAZ. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
