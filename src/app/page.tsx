"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaTiktok, FaLine } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    {
      name: "Luna Lash Boom It",
      price: "249 baht",
      image: "https://scontent.fbkk12-5.fna.fbcdn.net/v/t51.75761-15/496191344_17873559402342655_5467593312695710141_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1800&ctp=s1440x1800&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wsBc0gqv_3AQ7kNvwFtb6dy&_nc_oc=AdrGym1bwynTVptS3Jb-UMgBKjVW0bGjcD9PZIOf5JKDiohkzQy3aTtl_PM_bq8hU6bBYJLRcTsoMT2mzi0iYPlp&_nc_zt=23&_nc_ht=scontent.fbkk12-5.fna&_nc_gid=7QHtACZOOYWnoX-DFjRV6A&_nc_ss=7b2a8&oh=00_AQCTTm1aUNaw3DBGQE1M7sS7iBJkL5hH8kafTzaHCMJN7g&oe=6A5BCBE6",
      shopeeLink: "https://s.shopee.co.th/4AyLZhyBu5",
    },
    {
      name: "Luna Eye Cream",
      price: "239 baht",
      image: "https://scontent.fbkk12-4.fna.fbcdn.net/v/t51.82787-15/514438893_17881441662342655_1848738539827637045_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1800&ctp=s1440x1800&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5akLJw6yEP4Q7kNvwGBsNr4&_nc_oc=Adp5tVllp3lUgOqIqiAKDcGu6Y5t06Vz5rw3WeD7w8ibpj01GBCoc3WNW-3RPKaexF0E2rO5HBNL5ivktuWb0pdS&_nc_zt=23&_nc_ht=scontent.fbkk12-4.fna&_nc_gid=cKkrVWhpcqZpKafhJwM5cw&_nc_ss=7b2a8&oh=00_AQCzoc7gnN95lIku9si-Giu0X_yCul8R2Si8eU63qsyYsQ&oe=6A5BFFA9",
      shopeeLink: "https://s.shopee.co.th/50XSZDPf5H",
    },
    {
      name: "Luna Lip Berry Frozen",
      price: "New Arrival",
      image: "https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-6/480574394_122207549906210229_146951145116054180_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rHJUgwydMvkQ7kNvwFMV3f7&_nc_oc=AdoEGNhEJCRXbj-e5JyZz9NwJYgAaZGBPocAhh3c_W24pnS1V7uw5JfgllOE4NDNgztAdfH5O87qRBIIeRj8QuSg&_nc_zt=23&_nc_ht=scontent.fbkk13-1.fna&_nc_gid=h6NcuqDx3NXntILmXRdbWQ&_nc_ss=7b2a8&oh=00_AQC6g37wrEPuUnLZMj2P_OnBCANOwvJxYPhPvQbJ0CK-wQ&oe=6A5BD761",
      shopeeLink: "https://s.shopee.co.th/8KnuXQfTWQ",
    },
    {
      name: "Luna Hydrobiome Moisturizer",
      price: "Premium Care",
      image: "https://scontent.fbkk13-2.fna.fbcdn.net/v/t51.82787-15/650894795_17912653416342655_2536528315488608974_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1800&ctp=s1440x1800&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=P310GK9OQUcQ7kNvwFftsyK&_nc_oc=AdoVlNil47YlFHUFxOAI0qCm2RyvF9gjLmuB7BY6X8zYupXXkWtaFOzYjwB7PjYFj56JISGoPX-BKB3npbRkaxpa&_nc_zt=23&_nc_ht=scontent.fbkk13-2.fna&_nc_gid=Jw7WQD81vS8O9fxRmlV56g&_nc_ss=7b2a8&oh=00_AQCjfTEb5XEAaSY847lebnnAa8Sx5BAvRG8WqoeQ06FyZw&oe=6A5BD848",
      shopeeLink: "https://s.shopee.co.th/9zw8WRagaJ",
    },
    {
      name: "Luna Jelly Eye Mask",
      price: "Best Seller",
      image: "https://scontent.fbkk12-5.fna.fbcdn.net/v/t39.30808-6/480455900_122207312402210229_5618724458349782034_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=f5hnkf5tT5sQ7kNvwFQwhls&_nc_oc=Adp7-IsLdBvECZGnPrjmLKSi8fZIqSNPKvg5YlP_iRkcB37GVLUMo9gxkTZ9csUUoEZXy0NbQgErJmDjbe2ReyAW&_nc_zt=23&_nc_ht=scontent.fbkk12-5.fna&_nc_gid=gXtOr0aMtnYp3sZcd9ZDKQ&_nc_ss=7b2a8&oh=00_AQCBVpawl5ZA67Rl8QQDqMDbyD4nugN1ImgDKDr9bAvPRg&oe=6A5C0216",
      shopeeLink: "https://s.shopee.co.th/9zw8WLYqbo",
    },
    {
      name: "Luna Face Mask",
      price: "Coming Soon",
      image: "https://scontent.fbkk12-5.fna.fbcdn.net/v/t39.30808-6/600293670_122266768982210229_8423589881959478060_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=GA4aUDvmDNkQ7kNvwEaHB0X&_nc_oc=AdoU9FwC_D4hsBvzHerKHxIARO0xMnzLGhWUKQ5IwGDEV9jd8hwnSEKFIIsOqqInQTdtVY-9lhHTkFp3E0INQg4_&_nc_zt=23&_nc_ht=scontent.fbkk12-5.fna&_nc_gid=3GKQtLsYx-AsLAQIMQdOiA&_nc_ss=7b2a8&oh=00_AQBzw9YrIU-A2TWKjdx3kShZxoOz_uBw-kNJYolQ2dZuXg&oe=6A5BCD21", // Using logo as fallback for now
      shopeeLink: "https://s.shopee.co.th/8pkB8MctPm",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFCFB]">
      
      {/* Soft Ambient Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-blue-light/40 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-pink-100/40 blur-[100px]" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur-2xl border-b border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <img 
                  src="https://scontent.fbkk12-5.fna.fbcdn.net/v/t39.30808-6/600293670_122266768982210229_8423589881959478060_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=GA4aUDvmDNkQ7kNvwEaHB0X&_nc_oc=AdoU9FwC_D4hsBvzHerKHxIARO0xMnzLGhWUKQ5IwGDEV9jd8hwnSEKFIIsOqqInQTdtVY-9lhHTkFp3E0INQg4_&_nc_zt=23&_nc_ht=scontent.fbkk12-5.fna&_nc_gid=3GKQtLsYx-AsLAQIMQdOiA&_nc_ss=7b2a8&oh=00_AQBzw9YrIU-A2TWKjdx3kShZxoOz_uBw-kNJYolQ2dZuXg&oe=6A5BCD21" 
                  alt="Luna Thailand Logo" 
                  className="h-10 w-10 object-contain rounded-full shadow-sm ring-2 ring-white"
                />
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10 items-center">
              <Link href="/" className="text-slate-600 hover:text-brand-blue-dark transition-colors font-medium text-[13px] tracking-[0.2em] uppercase">Home</Link>
              <Link href="#products" className="text-slate-600 hover:text-brand-blue-dark transition-colors font-medium text-[13px] tracking-[0.2em] uppercase">Products</Link>
              <Link href="#about" className="text-slate-600 hover:text-brand-blue-dark transition-colors font-medium text-[13px] tracking-[0.2em] uppercase">Our Story</Link>
              <a 
                href="https://shopee.co.th/momoskin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#ee4d2d] to-[#ff7337] text-white rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <SiShopee size={16} />
                Official Store
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-800 hover:text-brand-blue transition-colors focus:outline-none p-2"
              >
                {isMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-2xl transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-6 pt-4 pb-8 space-y-3 flex flex-col">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="block py-3 text-[15px] font-medium text-slate-700 hover:text-brand-blue tracking-widest uppercase border-b border-slate-100/50">Home</Link>
            <Link href="#products" onClick={() => setIsMenuOpen(false)} className="block py-3 text-[15px] font-medium text-slate-700 hover:text-brand-blue tracking-widest uppercase border-b border-slate-100/50">Products</Link>
            <Link href="#about" onClick={() => setIsMenuOpen(false)} className="block py-3 text-[15px] font-medium text-slate-700 hover:text-brand-blue tracking-widest uppercase border-b border-slate-100/50">Our Story</Link>
            <a 
              href="https://shopee.co.th/momoskin" 
              onClick={() => setIsMenuOpen(false)}
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 mt-4 py-3.5 w-full bg-gradient-to-r from-[#ee4d2d] to-[#ff7337] text-white rounded-xl font-semibold shadow-md"
            >
              <SiShopee size={18} />
              Visit Shopee Store
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow relative z-10">
        
        {/* Hero Section */}
        <section className="relative w-full h-[85vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0 m-4 sm:m-8 rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src="https://scontent.fbkk12-6.fna.fbcdn.net/v/t39.30808-6/546861769_122248163852210229_6763724321963510309_n.jpg?stp=dst-jpg_tt6&cstp=mx1920x1008&ctp=s1920x1008&_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=B1lJ4qBWphwQ7kNvwHXRD5w&_nc_oc=AdpxQDc50FMv2SdjvlJYOcLDOSre7_3B5xREAiniXhg6aS48UjHSYrOH7sADlvkLi9iuTTJsLupHygEX2AW6WvZJ&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&_nc_gid=B9oMQ8__dfyJA9laOxj2yg&_nc_ss=7b2a8&oh=00_AQA8uXQ09pdAIqteVCQMen4Ediz_JL-RpqSZFnVydGabYA&oe=6A5BF64A"
              alt="Luna Cosmetics Banner"
              className="w-full h-full object-cover"
            />
            {/* Elegant Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70"></div>
          </div>
          
          <div className="relative z-10 text-center px-6 w-full flex flex-col items-center justify-end pb-24 h-full">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-xs tracking-[0.3em] uppercase mb-6 shadow-xl">
              Discover Your Inner Glow
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl tracking-tight leading-[1.1] max-w-4xl">
              Elevate Your <br className="hidden sm:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white">Natural Beauty</span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 mb-10 max-w-xl font-light drop-shadow-md mx-auto leading-relaxed">
              Experience the finest ingredients crafted to perfection for Thai skin. Unlock a radiant, flawless look every day.
            </p>
            <Link href="#products" className="group relative inline-flex items-center justify-center px-10 py-4 bg-white/90 backdrop-blur-md text-slate-900 rounded-full font-semibold transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:bg-white transform hover:-translate-y-1 overflow-hidden">
              <span className="relative z-10 tracking-wide">Shop The Collection</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </Link>
          </div>
        </section>

        {/* Featured Products Section */}
        <section id="products" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight mb-4">Our Premium Care</h2>
              <p className="text-slate-500 max-w-2xl text-lg font-light">Curated essentials for your daily beauty ritual.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {products.map((product, index) => (
                <div key={index} className="group relative bg-white/60 backdrop-blur-xl rounded-[2rem] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 border border-white/50 transform hover:-translate-y-2 flex flex-col">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-slate-50 mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  
                  <div className="flex flex-col flex-grow px-4 pb-4 text-center">
                    <h3 className="text-xl font-bold text-slate-800 mb-1">{product.name}</h3>
                    <p className="text-brand-blue-dark font-medium text-lg mb-6">{product.price}</p>
                    
                    <div className="mt-auto">
                      <a 
                        href={product.shopeeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-[#ee4d2d] to-[#ff7337] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform active:scale-95"
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

        {/* Brand Philosophy / About - REDESIGNED */}
        <section id="about" className="py-32 relative overflow-hidden">
          {/* Decorative background shape */}
          <div className="absolute top-0 left-0 w-full h-full bg-brand-blue-light/20 -skew-y-3 transform origin-top-left -z-10"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="flex justify-center mb-10">
               <img 
                  src="https://scontent.fbkk12-5.fna.fbcdn.net/v/t39.30808-6/600293670_122266768982210229_8423589881959478060_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=GA4aUDvmDNkQ7kNvwEaHB0X&_nc_oc=AdoU9FwC_D4hsBvzHerKHxIARO0xMnzLGhWUKQ5IwGDEV9jd8hwnSEKFIIsOqqInQTdtVY-9lhHTkFp3E0INQg4_&_nc_zt=23&_nc_ht=scontent.fbkk12-5.fna&_nc_gid=3GKQtLsYx-AsLAQIMQdOiA&_nc_ss=7b2a8&oh=00_AQBzw9YrIU-A2TWKjdx3kShZxoOz_uBw-kNJYolQ2dZuXg&oe=6A5BCD21" 
                  alt="Luna Thailand Logo" 
                  className="h-32 w-32 object-contain rounded-full shadow-2xl ring-4 ring-white"
                />
            </div>
            
            <span className="text-brand-blue-dark font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight">Crafted for Confidence. <br className="hidden md:block"/> Designed for You.</h2>
            
            <p className="text-slate-600 text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              At <strong className="font-semibold text-slate-800">LUNA OFFICIAL</strong>, we believe that makeup and skincare should empower you. Our premium products are meticulously crafted using the finest ingredients to ensure they complement your natural beauty while nourishing your skin from within. Every item is a testament to quality, elegance, and modern skincare science.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://line.me/R/ti/p/@852dtxtf?oat_content=url&ts=01181604" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00B900] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#00B900]/30 transition-all duration-300 transform hover:-translate-y-1">
                <FaLine size={22} />
                Chat with us on LINE
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-20 pb-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <img 
                src="https://scontent.fbkk12-5.fna.fbcdn.net/v/t39.30808-6/600293670_122266768982210229_8423589881959478060_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=GA4aUDvmDNkQ7kNvwEaHB0X&_nc_oc=AdoU9FwC_D4hsBvzHerKHxIARO0xMnzLGhWUKQ5IwGDEV9jd8hwnSEKFIIsOqqInQTdtVY-9lhHTkFp3E0INQg4_&_nc_zt=23&_nc_ht=scontent.fbkk12-5.fna&_nc_gid=3GKQtLsYx-AsLAQIMQdOiA&_nc_ss=7b2a8&oh=00_AQBzw9YrIU-A2TWKjdx3kShZxoOz_uBw-kNJYolQ2dZuXg&oe=6A5BCD21" 
                alt="Luna Logo" 
                className="h-14 w-14 object-contain rounded-full mb-4 shadow-sm"
              />
              <p className="text-slate-500 max-w-xs leading-relaxed text-sm">
                Elevating your natural beauty with premium quality cosmetics. Discover the difference.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <h4 className="text-slate-800 font-bold tracking-wide uppercase text-sm mb-6">Connect With Us</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/luna.officialth/" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={22} />
                </a>
                <a href="https://www.tiktok.com/@kantlalita.mo" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-black hover:text-white transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
                  <FaTiktok size={20} />
                </a>
                <a href="https://line.me/R/ti/p/@852dtxtf" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-[#00B900] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
                  <FaLine size={24} />
                </a>
                <a href="https://shopee.co.th/momoskin" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-[#ee4d2d] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
                  <SiShopee size={22} />
                </a>
              </div>
            </div>

          </div>
          
          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 font-medium tracking-wide">
            <p>COPYRIGHT © {new Date().getFullYear()} MO LUNA OFFICIAL. ALL RIGHTS RESERVED.</p>
            <p className="mt-4 md:mt-0">DESIGNED IN THAILAND</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
