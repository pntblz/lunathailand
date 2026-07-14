"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    {
      name: "Luna Eye Cream",
      price: "239 baht",
      image: "https://scontent.fbkk12-4.fna.fbcdn.net/v/t51.82787-15/514438893_17881441662342655_1848738539827637045_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1800&ctp=s1440x1800&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5akLJw6yEP4Q7kNvwGBsNr4&_nc_oc=Adp5tVllp3lUgOqIqiAKDcGu6Y5t06Vz5rw3WeD7w8ibpj01GBCoc3WNW-3RPKaexF0E2rO5HBNL5ivktuWb0pdS&_nc_zt=23&_nc_ht=scontent.fbkk12-4.fna&_nc_gid=cKkrVWhpcqZpKafhJwM5cw&_nc_ss=7b2a8&oh=00_AQCzoc7gnN95lIku9si-Giu0X_yCul8R2Si8eU63qsyYsQ&oe=6A5BFFA9",
      shopeeLink: "#",
    },
    {
      name: "Luna Lash boom it",
      price: "249 baht",
      image: "https://scontent.fbkk12-5.fna.fbcdn.net/v/t51.75761-15/496191344_17873559402342655_5467593312695710141_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1800&ctp=s1440x1800&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wsBc0gqv_3AQ7kNvwFtb6dy&_nc_oc=AdrGym1bwynTVptS3Jb-UMgBKjVW0bGjcD9PZIOf5JKDiohkzQy3aTtl_PM_bq8hU6bBYJLRcTsoMT2mzi0iYPlp&_nc_zt=23&_nc_ht=scontent.fbkk12-5.fna&_nc_gid=7QHtACZOOYWnoX-DFjRV6A&_nc_ss=7b2a8&oh=00_AQCTTm1aUNaw3DBGQE1M7sS7iBJkL5hH8kafTzaHCMJN7g&oe=6A5BCBE6",
      shopeeLink: "#",
    },
    {
      name: "Luna Lip Berry Frozen",
      price: "New Arrival",
      image: "https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-6/480574394_122207549906210229_146951145116054180_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rHJUgwydMvkQ7kNvwFMV3f7&_nc_oc=AdoEGNhEJCRXbj-e5JyZz9NwJYgAaZGBPocAhh3c_W24pnS1V7uw5JfgllOE4NDNgztAdfH5O87qRBIIeRj8QuSg&_nc_zt=23&_nc_ht=scontent.fbkk13-1.fna&_nc_gid=h6NcuqDx3NXntILmXRdbWQ&_nc_ss=7b2a8&oh=00_AQC6g37wrEPuUnLZMj2P_OnBCANOwvJxYPhPvQbJ0CK-wQ&oe=6A5BD761",
      shopeeLink: "#",
    },
    {
      name: "Luna Jelly Eye Mask",
      price: "Coming Soon",
      image: "https://scontent.fbkk12-5.fna.fbcdn.net/v/t39.30808-6/480455900_122207312402210229_5618724458349782034_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=f5hnkf5tT5sQ7kNvwFQwhls&_nc_oc=Adp7-IsLdBvECZGnPrjmLKSi8fZIqSNPKvg5YlP_iRkcB37GVLUMo9gxkTZ9csUUoEZXy0NbQgErJmDjbe2ReyAW&_nc_zt=23&_nc_ht=scontent.fbkk12-5.fna&_nc_gid=gXtOr0aMtnYp3sZcd9ZDKQ&_nc_ss=7b2a8&oh=00_AQCBVpawl5ZA67Rl8QQDqMDbyD4nugN1ImgDKDr9bAvPRg&oe=6A5C0216",
      shopeeLink: "#",
    },
    {
      name: "Luna Hydrobiome Moisturizer",
      price: "Premium Care",
      image: "https://scontent.fbkk13-2.fna.fbcdn.net/v/t51.82787-15/650894795_17912653416342655_2536528315488608974_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1800&ctp=s1440x1800&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=P310GK9OQUcQ7kNvwFftsyK&_nc_oc=AdoVlNil47YlFHUFxOAI0qCm2RyvF9gjLmuB7BY6X8zYupXXkWtaFOzYjwB7PjYFj56JISGoPX-BKB3npbRkaxpa&_nc_zt=23&_nc_ht=scontent.fbkk13-2.fna&_nc_gid=Jw7WQD81vS8O9fxRmlV56g&_nc_ss=7b2a8&oh=00_AQCjfTEb5XEAaSY847lebnnAa8Sx5BAvRG8WqoeQ06FyZw&oe=6A5BD848",
      shopeeLink: "#",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/80 border-b border-slate-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <img 
                  src="https://scontent.fbkk12-5.fna.fbcdn.net/v/t39.30808-6/600293670_122266768982210229_8423589881959478060_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=GA4aUDvmDNkQ7kNvwEaHB0X&_nc_oc=AdoU9FwC_D4hsBvzHerKHxIARO0xMnzLGhWUKQ5IwGDEV9jd8hwnSEKFIIsOqqInQTdtVY-9lhHTkFp3E0INQg4_&_nc_zt=23&_nc_ht=scontent.fbkk12-5.fna&_nc_gid=3GKQtLsYx-AsLAQIMQdOiA&_nc_ss=7b2a8&oh=00_AQBzw9YrIU-A2TWKjdx3kShZxoOz_uBw-kNJYolQ2dZuXg&oe=6A5BCD21" 
                  alt="Luna Thailand Logo" 
                  className="h-12 w-auto object-contain rounded-full shadow-sm"
                />
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10 items-center">
              <Link href="/" className="text-slate-700 hover:text-brand-blue transition-colors font-medium text-sm tracking-wider uppercase">Home</Link>
              <Link href="#products" className="text-slate-700 hover:text-brand-blue transition-colors font-medium text-sm tracking-wider uppercase">Products</Link>
              <Link href="#about" className="text-slate-700 hover:text-brand-blue transition-colors font-medium text-sm tracking-wider uppercase">Our Story</Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-800 hover:text-brand-blue transition-colors focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full bg-white border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-brand-blue hover:bg-slate-50 rounded-lg">Home</Link>
            <Link href="#products" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-brand-blue hover:bg-slate-50 rounded-lg">Products</Link>
            <Link href="#about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-brand-blue hover:bg-slate-50 rounded-lg">Our Story</Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-slate-900">
            <img
              src="https://scontent.fbkk12-6.fna.fbcdn.net/v/t39.30808-6/546861769_122248163852210229_6763724321963510309_n.jpg?stp=dst-jpg_tt6&cstp=mx1920x1008&ctp=s1920x1008&_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=B1lJ4qBWphwQ7kNvwHXRD5w&_nc_oc=AdpxQDc50FMv2SdjvlJYOcLDOSre7_3B5xREAiniXhg6aS48UjHSYrOH7sADlvkLi9iuTTJsLupHygEX2AW6WvZJ&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&_nc_gid=B9oMQ8__dfyJA9laOxj2yg&_nc_ss=7b2a8&oh=00_AQA8uXQ09pdAIqteVCQMen4Ediz_JL-RpqSZFnVydGabYA&oe=6A5BF64A"
              alt="Luna Cosmetics Banner"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          <div className="relative z-10 text-center px-6 w-full flex flex-col items-center justify-center bg-gradient-to-t from-black/60 via-transparent to-transparent h-full pt-32 pb-16">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-xl tracking-tight leading-tight max-w-4xl">
              Elevate Your <br className="hidden sm:block" /> Natural Beauty
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl font-light drop-shadow-md">
              Discover the secret to flawless, glowing skin with our premium, skin-loving cosmetic collections.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="#products" className="px-10 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 tracking-wide">
                Shop The Collection
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section id="products" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-brand-blue font-semibold tracking-widest uppercase text-sm mb-3">Best Sellers</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Our Premium Care</h2>
              <div className="w-16 h-1 bg-brand-blue mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {products.map((product, index) => (
                <div key={index} className="group flex flex-col bg-white">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100 mb-6 shadow-sm border border-slate-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  
                  <div className="flex flex-col flex-grow px-2 text-center">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h3>
                    <p className="text-slate-500 font-medium text-lg mb-6">{product.price}</p>
                    
                    <div className="mt-auto flex justify-center">
                      <a 
                        href={product.shopeeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-[#ee4d2d] text-white rounded-full font-semibold hover:bg-[#d74226] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                      >
                        <SiShopee size={20} />
                        Buy on Shopee
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Philosophy / About */}
        <section id="about" className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[600px]">
                <img 
                  src="https://scontent.fbkk12-4.fna.fbcdn.net/v/t51.82787-15/514438893_17881441662342655_1848738539827637045_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1800&ctp=s1440x1800&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5akLJw6yEP4Q7kNvwGBsNr4&_nc_oc=Adp5tVllp3lUgOqIqiAKDcGu6Y5t06Vz5rw3WeD7w8ibpj01GBCoc3WNW-3RPKaexF0E2rO5HBNL5ivktuWb0pdS&_nc_zt=23&_nc_ht=scontent.fbkk12-4.fna&_nc_gid=cKkrVWhpcqZpKafhJwM5cw&_nc_ss=7b2a8&oh=00_AQCzoc7gnN95lIku9si-Giu0X_yCul8R2Si8eU63qsyYsQ&oe=6A5BFFA9" 
                  alt="About Luna" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-brand-blue font-semibold tracking-widest uppercase text-sm mb-4">Our Story</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">Crafted for Confidence. Designed for You.</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  At LUNA OFFICIAL, we believe that makeup and skincare should empower you. Our premium products are meticulously crafted using the finest ingredients to ensure they complement your natural beauty while nourishing your skin. From our best-selling Eye Cream to our vibrant Lip Berry Frozen, every item is a testament to quality and elegance.
                </p>
                <div>
                  <Link href="#products" className="inline-flex items-center text-brand-blue font-semibold hover:text-brand-blue-dark transition-colors text-lg">
                    Explore our range 
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
              <img 
                src="https://scontent.fbkk12-5.fna.fbcdn.net/v/t39.30808-6/600293670_122266768982210229_8423589881959478060_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=GA4aUDvmDNkQ7kNvwEaHB0X&_nc_oc=AdoU9FwC_D4hsBvzHerKHxIARO0xMnzLGhWUKQ5IwGDEV9jd8hwnSEKFIIsOqqInQTdtVY-9lhHTkFp3E0INQg4_&_nc_zt=23&_nc_ht=scontent.fbkk12-5.fna&_nc_gid=3GKQtLsYx-AsLAQIMQdOiA&_nc_ss=7b2a8&oh=00_AQBzw9YrIU-A2TWKjdx3kShZxoOz_uBw-kNJYolQ2dZuXg&oe=6A5BCD21" 
                alt="Luna Logo" 
                className="h-16 w-auto object-contain rounded-full mb-6 border-2 border-slate-700"
              />
              <p className="text-slate-400 max-w-sm leading-relaxed text-sm md:text-base">
                Elevating your natural beauty with premium quality cosmetics. Discover the difference with LUNA OFFICIAL.
              </p>
            </div>
            
            <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white font-semibold tracking-wide uppercase text-sm mb-6">Menu</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link href="/" className="hover:text-brand-blue transition-colors">Home</Link></li>
                <li><Link href="#products" className="hover:text-brand-blue transition-colors">Shop Products</Link></li>
                <li><Link href="#about" className="hover:text-brand-blue transition-colors">Our Story</Link></li>
              </ul>
            </div>

            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white font-semibold tracking-wide uppercase text-sm mb-6">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/luna.officialthailand/" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all duration-300 shadow-md" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={22} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61556306893793&mibextid=LQQJ4d" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all duration-300 shadow-md" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={22} />
                </a>
                <a href="https://www.tiktok.com/@paopimol.mo" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all duration-300 shadow-md" target="_blank" rel="noopener noreferrer">
                  <FaTiktok size={22} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-slate-500 font-medium">
            <p>Copyright 2024 © MO LUNA OFFICIAL. All rights reserved.</p>
            <p className="mt-4 md:mt-0">Designed & Built in Thailand</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
