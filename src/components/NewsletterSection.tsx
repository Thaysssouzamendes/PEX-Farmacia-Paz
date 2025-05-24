
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email ${email} cadastrado com sucesso!`);
    setEmail("");
  };

  return (
    <div className="bg-brasil-green py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Inscreva-se em nossa newsletter
        </h2>
        <p className="text-white/90 mb-8 max-w-xl mx-auto">
          Receba novidades, promoções exclusivas e dicas de moda diretamente no seu e-mail.
        </p>
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <Input
            type="email"
            placeholder="Seu melhor e-mail"
            required
            className="flex-grow bg-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" className="bg-brasil-yellow hover:bg-brasil-yellow/90 text-black font-medium">
            Inscrever-se
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSection;
