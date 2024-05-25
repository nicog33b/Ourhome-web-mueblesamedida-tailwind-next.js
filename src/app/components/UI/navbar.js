import React from "react";
import Image from "next/image";

import { CiUser } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";

const NavbarWithBanner = () => {
  return (
    <div className="relative w-full">
      {/* Banner como fondo */}
      <div className="absolute w-full h-[33rem] z-0">
        <Image
          src="/banner.jpg"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="h-full w-full"
        />
      </div>

      {/* Navbar con transparencia */}
      <div className="fixed top-0 w-full z-10">
        <div className="bg-gray-300 bg-opacity-25 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              {/* Icono que sólo aparece en móvil */}
              <div className="md:hidden">
                <Image 
                  src="/more.png" 
                  width={36} 
                  height={36} 
                  alt="More" 
                  className="w-9 h-9 cursor-pointer hover:scale-125"
                />
              </div>
              {/* Logo central que siempre está visible */}
              <Image 
                src="/logo_final.png" 
                width={112} 
                height={64} 
                alt="Logo" 
                className="w-28 h-16 cursor-pointer hover:border-yellow-600 hover:scale-125"
              />
              <div className="block">
              <div className="flex items-center">
  {/* Iniciar sesión: visible solo en escritorio */}
  <a href="#" className="flex px-3 py-2 rounded-md text-sm font-medium items-center">
    <CiUser className="text-3xl font-bold text-black"></CiUser>
    <span className="hidden md:inline ml-2">Iniciar sesión</span>
  </a>
  {/* Ayuda: visible solo en escritorio */}
  <a href="#" className="flex px-3 py-2 rounded-md text-sm font-medium items-center">
    <IoHelpCircleOutline className="text-3xl font-bold text-black"></IoHelpCircleOutline>
    <span className="hidden md:inline ml-2">Ayuda</span>
  </a>
  {/* Carrito de compras: icono visible en todas las pantallas, texto solo en escritorio */}
  <a href="#" className="flex px-3 py-2 rounded-md text-sm font-medium items-center relative">
    <CiShoppingCart className="text-3xl font-bold text-black"></CiShoppingCart>
    {/* Contador de artículos en el carrito, siempre visible */}
    <span className="absolute right-0 top-1 rounded-full bg-zinc-800 text-white text-xs px-2 py-1">3</span>
  </a>
</div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarWithBanner;
