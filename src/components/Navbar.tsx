
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, Search, Pill, Heart, Droplet, Bandage, Baby, ShowerHead, Bird } from "lucide-react";
import { Button } from "@/components/ui/button";
import CartDrawer from "./CartDrawer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  cartOpen?: boolean;
  onCartOpenChange?: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartOpen = false, onCartOpenChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b sticky top-0 bg-farmacia-yellow z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Bird className="h-8 w-8 text-white mr-2" />
              <div className="text-2xl font-bold text-farmacia-white">
                <span className="text-white">FarmaPAZ</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {/* Todas as Categorias Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-gray-200 bg-transparent hover:bg-farmacia-yellow/20">
                    Todas as Categorias
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white p-4 rounded-md w-[400px]">
                    <div className="grid grid-cols-2 gap-3">
                      <Link to="/medicamentos" className="flex items-center p-2 rounded hover:bg-gray-100">
                        <Pill className="mr-2 h-4 w-4" /> Medicamentos
                      </Link>
                      <Link to="/vitaminas-suplementos" className="flex items-center p-2 rounded hover:bg-gray-100">
                        <Pill className="mr-2 h-4 w-4" /> Vitaminas e Suplementos
                      </Link>
                      <Link to="/beleza" className="flex items-center p-2 rounded hover:bg-gray-100">
                        <Heart className="mr-2 h-4 w-4" /> Beleza
                      </Link>
                      <Link to="/cosmeticos" className="flex items-center p-2 rounded hover:bg-gray-100">
                        <Droplet className="mr-2 h-4 w-4" /> Cosméticos
                      </Link>
                      <Link to="/mamae-bebe" className="flex items-center p-2 rounded hover:bg-gray-100">
                        <Baby className="mr-2 h-4 w-4" /> Mamãe e Bebê
                      </Link>
                      <Link to="/cuidados-diarios" className="flex items-center p-2 rounded hover:bg-gray-100">
                        <ShowerHead className="mr-2 h-4 w-4" /> Cuidados Diários
                      </Link>
                      <Link to="/perfumes" className="flex items-center p-2 rounded hover:bg-gray-100">
                        <Heart className="mr-2 h-4 w-4" /> Perfumes
                      </Link>
                      <Link to="/desodorantes" className="flex items-center p-2 rounded hover:bg-gray-100">
                        <Droplet className="mr-2 h-4 w-4" /> Desodorantes
                      </Link>
                      <Link to="/produtos-pele" className="flex items-center p-2 rounded hover:bg-gray-100">
                        <Bandage className="mr-2 h-4 w-4" /> Produtos de Pele
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Main Category Links */}
            <Link to="/medicamentos" className="text-white hover:text-gray-200 font-medium flex items-center">
              <Pill className="mr-1 h-4 w-4" /> Medicamentos
            </Link>
            <Link to="/vitaminas-suplementos" className="text-white hover:text-gray-200 font-medium flex items-center">
              <Pill className="mr-1 h-4 w-4" /> Vitaminas e Suplementos
            </Link>
            <Link to="/beleza" className="text-white hover:text-gray-200 font-medium flex items-center">
              <Heart className="mr-1 h-4 w-4" /> Beleza
            </Link>
            <Link to="/cosmeticos" className="text-white hover:text-gray-200 font-medium flex items-center">
              <Droplet className="mr-1 h-4 w-4" /> Cosméticos
            </Link>
            <Link to="/mamae-bebe" className="text-white hover:text-gray-200 font-medium flex items-center">
              <Baby className="mr-1 h-4 w-4" /> Mamãe e Bebê
            </Link>
            <Link to="/cuidados-diarios" className="text-white hover:text-gray-200 font-medium flex items-center">
              <ShowerHead className="mr-1 h-4 w-4" /> Cuidados Diários
            </Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-farmacia-yellow/20">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-farmacia-yellow/20">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative text-white hover:bg-farmacia-yellow/20" onClick={() => onCartOpenChange?.(true)}>
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-white text-farmacia-yellow text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" className="text-white" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-2 pb-4">
            <div className="flex flex-col space-y-3">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-white hover:text-gray-200 font-medium px-3 py-2 flex items-center justify-between w-full">
                  Todas as Categorias <Menu className="h-4 w-4 ml-2" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64">
                  <div className="grid gap-1">
                    <DropdownMenuItem asChild>
                      <Link to="/medicamentos" className="flex items-center p-2">
                        <Pill className="mr-2 h-4 w-4" /> Medicamentos
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/vitaminas-suplementos" className="flex items-center p-2">
                        <Pill className="mr-2 h-4 w-4" /> Vitaminas e Suplementos
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/beleza" className="flex items-center p-2">
                        <Heart className="mr-2 h-4 w-4" /> Beleza
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/cosmeticos" className="flex items-center p-2">
                        <Droplet className="mr-2 h-4 w-4" /> Cosméticos
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/mamae-bebe" className="flex items-center p-2">
                        <Baby className="mr-2 h-4 w-4" /> Mamãe e Bebê
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/cuidados-diarios" className="flex items-center p-2">
                        <ShowerHead className="mr-2 h-4 w-4" /> Cuidados Diários
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/perfumes" className="flex items-center p-2">
                        <Heart className="mr-2 h-4 w-4" /> Perfumes
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/desodorantes" className="flex items-center p-2">
                        <Droplet className="mr-2 h-4 w-4" /> Desodorantes
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/produtos-pele" className="flex items-center p-2">
                        <Bandage className="mr-2 h-4 w-4" /> Produtos de Pele
                      </Link>
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link to="/medicamentos" className="text-white hover:text-gray-200 font-medium px-3 py-2 flex items-center">
                <Pill className="mr-2 h-4 w-4" /> Medicamentos
              </Link>
              <Link to="/vitaminas-suplementos" className="text-white hover:text-gray-200 font-medium px-3 py-2 flex items-center">
                <Pill className="mr-2 h-4 w-4" /> Vitaminas e Suplementos
              </Link>
              <Link to="/beleza" className="text-white hover:text-gray-200 font-medium px-3 py-2 flex items-center">
                <Heart className="mr-2 h-4 w-4" /> Beleza
              </Link>
              <Link to="/cosmeticos" className="text-white hover:text-gray-200 font-medium px-3 py-2 flex items-center">
                <Droplet className="mr-2 h-4 w-4" /> Cosméticos
              </Link>
              <Link to="/mamae-bebe" className="text-white hover:text-gray-200 font-medium px-3 py-2 flex items-center">
                <Baby className="mr-2 h-4 w-4" /> Mamãe e Bebê
              </Link>
              <Link to="/cuidados-diarios" className="text-white hover:text-gray-200 font-medium px-3 py-2 flex items-center">
                <ShowerHead className="mr-2 h-4 w-4" /> Cuidados Diários
              </Link>
              <div className="flex space-x-4 px-3 py-2">
                <Button variant="ghost" size="icon" className="text-white">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="relative text-white" onClick={() => onCartOpenChange?.(true)}>
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-white text-farmacia-yellow text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    3
                  </span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Cart Drawer */}
      <CartDrawer isOpen={cartOpen} onClose={() => onCartOpenChange?.(false)} />
    </nav>
  );
};

export default Navbar;
