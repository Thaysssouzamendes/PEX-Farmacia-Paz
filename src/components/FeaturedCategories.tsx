
import { Link } from "react-router-dom";
import { Pill, Heart, Droplet, Bandage } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Remédios",
    icon: <Pill className="w-8 h-8" />,
    description: "Medicamentos e vitaminas para sua saúde",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    link: "/remedios"
  },
  {
    id: 2,
    name: "Perfumes",
    icon: <Heart className="w-8 h-8" />,
    description: "Fragrâncias exclusivas para todos os gostos",
    image: "https://images.unsplash.com/photo-1594285676775-5e099882801c",
    link: "/perfumes"
  },
  {
    id: 3,
    name: "Desodorantes",
    icon: <Droplet className="w-8 h-8" />,
    description: "Proteção e frescor para o dia todo",
    image: "https://images.unsplash.com/photo-1626766920334-3026d3a8cd6e",
    link: "/desodorantes"
  },
  {
    id: 4,
    name: "Produtos de Pele",
    icon: <Bandage className="w-8 h-8" />,
    description: "Cuidados especiais para sua pele",
    image: "https://images.unsplash.com/photo-1607006344380-b6775a0824ae",
    link: "/produtos-pele"
  }
];

const FeaturedCategories = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-10 text-center">Categorias em Destaque</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            to={category.link}
            className="group relative overflow-hidden rounded-lg h-64 flex flex-col items-center justify-center text-center bg-cover"
            style={{ backgroundImage: `url(${category.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
            <div className="relative z-10 flex flex-col items-center p-6">
              <div className="bg-white rounded-full p-3 mb-4 text-farmacia-yellow">
                {category.icon}
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">
                {category.name}
              </h3>
              <p className="text-white/90 text-sm mb-4 hidden md:block">
                {category.description}
              </p>
              <div className="inline-block bg-farmacia-yellow text-white font-medium py-2 px-4 rounded transition-transform transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300">
                Ver produtos
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
