
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/produto/:id" element={<ProductDetail />} />
          <Route path="/carrinho" element={<CartPage />} />
          
          {/* Pharmacy routes */}
          <Route path="/medicamentos" element={<CategoryPage />} />
          <Route path="/vitaminas-suplementos" element={<CategoryPage />} />
          <Route path="/beleza" element={<CategoryPage />} />
          <Route path="/cosmeticos" element={<CategoryPage />} />
          <Route path="/mamae-bebe" element={<CategoryPage />} />
          <Route path="/cuidados-diarios" element={<CategoryPage />} />
          <Route path="/perfumes" element={<CategoryPage />} />
          <Route path="/desodorantes" element={<CategoryPage />} />
          <Route path="/produtos-pele" element={<CategoryPage />} />
          <Route path="/promocoes" element={<CategoryPage />} />
          
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
