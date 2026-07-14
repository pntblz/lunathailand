"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, Link as LinkIcon } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    {
      name: "Luna Eye Cream",
      price: "239 baht",
      image: "/product-mockup.png",
      link: "https://www.instagram.com/p/DLuOY4kvwpb/",
    },
    {
      name: "Luna Lash boom it",
      price: "249 baht",
      image: "/product-mockup.png",
      link: "https://www.instagram.com/p/DJRaFWbvOIA/",
    },
    {
      name: "Luna Lip Berry Frozen",
      price: "New Arrival",
      image: "/product-mockup.png",
      link: "https://www.instagram.com/p/DDecqBnvehq/",
    },
    {
      name: "Luna Jelly Eye Mask",
      price: "Coming Soon",
      image: "/product-mockup.png",
      link: "https://www.instagram.com/p/DLAKEe4vikf/",
    },
    {
      name: "Luna Hydrobiome Moisturizer",
      price: "Premium Care",
      image: "/product-mockup.png",
      link: "https://www.instagram.com/p/DVx5l5MD4Xc/",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-brand-blue/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold tracking-widest text-slate-800">
                LUNA<span className="text-brand-blue">.</span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/" className="text-slate-600 hover:text-brand-blue transition-colors font-medium">HOME</Link>
              <Link href="#products" className="text-slate-600 hover:text-brand-blue transition-colors font-medium">PRODUCT</Link>
              <Link href="#review" className="text-slate-600 hover:text-brand-blue transition-colors font-medium">REVIEW</Link>
              <Link href="#about" className="text-slate-600 hover:text-brand-blue transition-colors font-medium">ABOUT</Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-brand-blue transition-colors focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-lg border-b border-brand-blue/20 shadow-lg">
            <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col items-center">
              <Link href="/" className="block px-3 py-3 text-base font-medium text-slate-800 hover:text-brand-blue w-full text-center">HOME</Link>
              <Link href="#products" className="block px-3 py-3 text-base font-medium text-slate-800 hover:text-brand-blue w-full text-center">PRODUCT</Link>
              <Link href="#review" className="block px-3 py-3 text-base font-medium text-slate-800 hover:text-brand-blue w-full text-center">REVIEW</Link>
              <Link href="#about" className="block px-3 py-3 text-base font-medium text-slate-800 hover:text-brand-blue w-full text-center">ABOUT</Link>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden bg-brand-blue-light">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-banner.png"
              alt="Luna Cosmetics Banner"
              fill
              className="object-cover opacity-60"
              priority
            />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
            <span className="inline-block py-1 px-3 rounded-full bg-white/80 text-brand-blue font-semibold text-sm tracking-wider mb-6 shadow-sm backdrop-blur-sm">NEW COLLECTION</span>
            <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 mb-6 drop-shadow-sm leading-tight">
              Unveil Your <br/> <span className="text-brand-blue">Natural Glow</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 mb-10 max-w-2xl font-light">
              Experience the premium quality of MO LUNA OFFICIAL cosmetics. Designed to bring out the best in you, naturally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#products" className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-brand-blue transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Shop Collection
              </Link>
              <Link href="#about" className="px-8 py-4 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-50 transition-all duration-300 shadow-md border border-slate-100">
                Discover More
              </Link>
            </div>
          </div>
        </section>

        {/* Campaign Banner - LUNA X WATSON */}
        <section className="w-full py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-slate-800 mb-4 tracking-tight">Next Station: <span className="text-brand-blue">LUNA X WATSON</span></h2>
            <p className="text-slate-600 text-lg mb-8">In all stores @Bangkok. Stay tuned.</p>
            <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full opacity-50"></div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-24 bg-gradient-to-b from-white to-brand-blue-light/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Our Premium Products</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">Discover our curated collection of high-quality cosmetics designed for the modern look.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {products.map((product, index) => (
                <a 
                  key={index} 
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 transform hover:-translate-y-2"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-50 p-6 flex items-center justify-center">
                    <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-8 group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Hover Overlay Icon */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg text-brand-blue transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                        <FaInstagram size={24} />
                      </div>
                    </div>
                  </div>
                  <div className="p-8 text-center bg-white relative z-30">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-brand-blue transition-colors">{product.name}</h3>
                    <p className="text-slate-500 font-medium tracking-wide">{product.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 pt-16 pb-8 text-slate-300 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-3xl font-bold tracking-widest text-white mb-6">
                LUNA<span className="text-brand-blue">.</span>
              </span>
              <p className="text-slate-400 max-w-xs leading-relaxed">
                Elevating your natural beauty with premium quality cosmetics from Thailand.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link href="/" className="hover:text-brand-blue transition-colors">Home</Link></li>
                <li><Link href="#products" className="hover:text-brand-blue transition-colors">Products</Link></li>
                <li><Link href="#about" className="hover:text-brand-blue transition-colors">About Us</Link></li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <h4 className="text-white font-semibold text-lg mb-6">Connect With Us</h4>
              <div className="flex space-x-5">
                <a href="https://www.instagram.com/luna.officialthailand/" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all duration-300" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={20} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61556306893793&mibextid=LQQJ4d" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all duration-300" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={20} />
                </a>
                <a href="https://www.tiktok.com/@paopimol.mo" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all duration-300" target="_blank" rel="noopener noreferrer">
                  <LinkIcon size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>Copyright 2024 © MO LUNA OFFICIAL</p>
            <p className="mt-4 md:mt-0">Made with ❤️ in Thailand</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
