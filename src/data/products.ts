
export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  gender: 'remedios' | 'perfumes' | 'desodorantes' | 'produtos-pele' | 'promocoes';
  discount?: number;
  description?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Analgésico Dorflex",
    price: 12.90,
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "Remédios",
    gender: "remedios",
    discount: 15,
    description: "Alívio rápido da dor de cabeça, enxaqueca e dores musculares."
  },
  {
    id: 2,
    name: "Perfume La Vie",
    price: 159.90,
    imageUrl: "https://images.unsplash.com/photo-1594285676775-5e099882801c",
    category: "Perfumes",
    gender: "perfumes",
    description: "Fragrância feminina floral e sofisticada para ocasiões especiais."
  },
  {
    id: 3,
    name: "Termômetro Digital",
    price: 29.90,
    imageUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    category: "Remédios",
    gender: "remedios",
    discount: 10,
    description: "Medição precisa de temperatura em apenas 10 segundos."
  },
  {
    id: 4,
    name: "Vitamina C Efervescente",
    price: 25.90,
    imageUrl: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6",
    category: "Remédios",
    gender: "remedios",
    description: "Suplemento vitamínico para fortalecer a imunidade."
  },
  {
    id: 5,
    name: "Desodorante Rexona",
    price: 18.90,
    imageUrl: "https://images.unsplash.com/photo-1626766920334-3026d3a8cd6e",
    category: "Desodorantes",
    gender: "desodorantes",
    discount: 20,
    description: "48 horas de proteção contra o suor e odores."
  },
  {
    id: 6,
    name: "Kit Primeiros Socorros",
    price: 79.90,
    imageUrl: "https://images.unsplash.com/photo-1603398938378-e54eab446dde",
    category: "Remédios",
    gender: "remedios",
    description: "Kit completo para emergências com itens essenciais."
  },
  {
    id: 7,
    name: "Creme Hidratante Facial",
    price: 45.90,
    imageUrl: "https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f",
    category: "Produtos de Pele",
    gender: "produtos-pele",
    discount: 25,
    description: "Hidratante facial para peles secas e sensíveis."
  },
  {
    id: 8,
    name: "Anti-Inflamatório Nimesulida",
    price: 14.90,
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951b55104",
    category: "Remédios",
    gender: "remedios",
    discount: 30,
    description: "Alívio rápido de inflamações e dores intensas."
  },
  {
    id: 9,
    name: "Medidor de Pressão Digital",
    price: 139.90,
    imageUrl: "https://images.unsplash.com/photo-1588543385566-413e13a01af3",
    category: "Remédios",
    gender: "remedios",
    discount: 15,
    description: "Aparelho digital preciso para monitoramento da pressão arterial."
  },
  {
    id: 10,
    name: "Gel Antiacne",
    price: 29.90,
    imageUrl: "https://images.unsplash.com/photo-1607006344380-b6775a0824ae",
    category: "Produtos de Pele",
    gender: "produtos-pele",
    description: "Tratamento eficaz para acne e espinhas."
  },
  {
    id: 11,
    name: "Perfume Azzaro Pour Homme",
    price: 189.90,
    imageUrl: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc",
    category: "Perfumes",
    gender: "perfumes",
    description: "Fragrância masculina clássica e sofisticada."
  },
  {
    id: 12,
    name: "Desodorante Aerosol Dove",
    price: 16.90,
    imageUrl: "https://images.unsplash.com/photo-1595965933125-819f7ffd9822",
    category: "Desodorantes",
    gender: "desodorantes",
    discount: 20,
    description: "Suave e delicado para peles sensíveis. Sem álcool."
  },
  {
    id: 13,
    name: "Protetor Solar FPS 50",
    price: 59.90,
    imageUrl: "https://images.unsplash.com/photo-1594285676775-5e099882801c",
    category: "Produtos de Pele",
    gender: "produtos-pele",
    discount: 10,
    description: "Proteção UVA/UVB para todos os tipos de pele."
  },
  {
    id: 14,
    name: "Perfume Chanel Nº5",
    price: 499.90,
    imageUrl: "https://images.unsplash.com/photo-1594285676775-5e099882801c",
    category: "Perfumes",
    gender: "perfumes",
    description: "O clássico perfume feminino de todos os tempos."
  },
  {
    id: 15,
    name: "Desodorante Roll-on Nivea",
    price: 12.90,
    imageUrl: "https://images.unsplash.com/photo-1626766920334-3026d3a8cd6e",
    category: "Desodorantes",
    gender: "desodorantes",
    description: "Proteção 24 horas com fórmula sem alumínio."
  },
  {
    id: 16,
    name: "Sabonete Facial Neutrogena",
    price: 24.90,
    imageUrl: "https://images.unsplash.com/photo-1607006344380-b6775a0824ae",
    category: "Produtos de Pele",
    gender: "produtos-pele",
    description: "Limpeza profunda para pele oleosa."
  },
  {
    id: 17,
    name: "Joshson Baby Shampoo",
    price: 19.90,
    imageUrl: "https://images.unsplash.com/photo-1607006344380-b6775a0824ae",
    category: "Mamãe e Bebê",
    gender: "promocoes",
    discount: 15,
    description: "Shampoo suave para bebês. Não causa ardência nos olhos."
  },
  {
    id: 18,
    name: "Shapoom Anti-Caspa",
    price: 32.90,
    imageUrl: "https://images.unsplash.com/photo-1594285676775-5e099882801c",
    category: "Cuidados Diários",
    gender: "promocoes",
    discount: 20,
    description: "Combate a caspa e hidrata os cabelos."
  },
  {
    id: 19,
    name: "Melatonina 3mg",
    price: 45.90,
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951b55104",
    category: "Vitaminas e Suplementos",
    gender: "remedios",
    discount: 10,
    description: "Suplemento natural para melhorar a qualidade do sono."
  },
  {
    id: 20,
    name: "Frauda Premium Tamanho M",
    price: 89.90,
    imageUrl: "https://images.unsplash.com/photo-1607006344380-b6775a0824ae",
    category: "Mamãe e Bebê",
    gender: "promocoes",
    discount: 25,
    description: "Pacote com 30 unidades. Máxima absorção e conforto."
  }
];
