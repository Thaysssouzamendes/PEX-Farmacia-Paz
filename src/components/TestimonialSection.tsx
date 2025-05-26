
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    location: "Rio de Janeiro, RJ",
    testimonial: "A FarmaPAZ tem um atendimento excepcional! Os farmacêuticos são muito atenciosos e me ajudaram a encontrar o medicamento certo com o melhor preço.",
    rating: 5
  },
  {
    id: 2,
    name: "João Santos",
    location: "São Paulo, SP",
    testimonial: "Sempre compro meus medicamentos na FarmaPAZ. A entrega é rápida e os preços são muito competitivos. Recomendo a todos!",
    rating: 5
  },
  {
    id: 3,
    name: "Ana Oliveira",
    location: "Belo Horizonte, MG",
    testimonial: "Excelente variedade de produtos e os farmacêuticos são muito bem preparados. Tive uma dúvida sobre interação medicamentosa e fui prontamente atendida.",
    rating: 4
  },
  {
    id: 4,
    name: "Carlos Mendes",
    location: "Curitiba, PR",
    testimonial: "A FarmaPAZ tem os melhores preços da cidade e sempre encontro todos os medicamentos que preciso. O programa de fidelidade também é ótimo!",
    rating: 5
  }
];

const TestimonialSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">O Que Dizem Nossos Clientes</h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-2xl ${i < testimonial.rating ? 'text-farmacia-yellow' : 'text-gray-300'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <blockquote className="text-lg italic text-gray-700 mb-6">
                    "{testimonial.testimonial}"
                  </blockquote>
                  <div className="font-medium">
                    <div className="text-farmacia-yellow">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="mr-2" />
            <CarouselNext className="ml-2" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialSection;
