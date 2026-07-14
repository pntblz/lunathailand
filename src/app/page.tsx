"use client";

import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { FaInstagram, FaTiktok, FaLine } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    {
      name: "Luna Eye Cream",
      price: "239 THB",
      image: "https://scontent.fbkk12-4.fna.fbcdn.net/v/t51.82787-15/514438893_17881441662342655_1848738539827637045_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1800&ctp=s1440x1800&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5akLJw6yEP4Q7kNvwGBsNr4&_nc_oc=Adp5tVllp3lUgOqIqiAKDcGu6Y5t06Vz5rw3WeD7w8ibpj01GBCoc3WNW-3RPKaexF0E2rO5HBNL5ivktuWb0pdS&_nc_zt=23&_nc_ht=scontent.fbkk12-4.fna&_nc_gid=cKkrVWhpcqZpKafhJwM5cw&_nc_ss=7b2a8&oh=00_AQCzoc7gnN95lIku9si-Giu0X_yCul8R2Si8eU63qsyYsQ&oe=6A5BFFA9",
      shopeeLink: "https://s.shopee.co.th/50XSZDPf5H",
      badge: "BEST SELLER"
    },
    {
      name: "Luna Lash Boom It",
      price: "249 THB",
      image: "https://scontent.fbkk12-5.fna.fbcdn.net/v/t51.75761-15/496191344_17873559402342655_5467593312695710141_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1800&ctp=s1440x1800&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wsBc0gqv_3AQ7kNvwFtb6dy&_nc_oc=AdrGym1bwynTVptS3Jb-UMgBKjVW0bGjcD9PZIOf5JKDiohkzQy3aTtl_PM_bq8hU6bBYJLRcTsoMT2mzi0iYPlp&_nc_zt=23&_nc_ht=scontent.fbkk12-5.fna&_nc_gid=7QHtACZOOYWnoX-DFjRV6A&_nc_ss=7b2a8&oh=00_AQCTTm1aUNaw3DBGQE1M7sS7iBJkL5hH8kafTzaHCMJN7g&oe=6A5BCBE6",
      shopeeLink: "https://s.shopee.co.th/4AyLZhyBu5",
      badge: "HOT"
    },
    {
      name: "Luna Lip Berry Frozen",
      price: "249 THB",
      image: "https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-6/480574394_122207549906210229_146951145116054180_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rHJUgwydMvkQ7kNvwFMV3f7&_nc_oc=AdoEGNhEJCRXbj-e5JyZz9NwJYgAaZGBPocAhh3c_W24pnS1V7uw5JfgllOE4NDNgztAdfH5O87qRBIIeRj8QuSg&_nc_zt=23&_nc_ht=scontent.fbkk13-1.fna&_nc_gid=h6NcuqDx3NXntILmXRdbWQ&_nc_ss=7b2a8&oh=00_AQC6g37wrEPuUnLZMj2P_OnBCANOwvJxYPhPvQbJ0CK-wQ&oe=6A5BD761",
      shopeeLink: "https://s.shopee.co.th/8KnuXQfTWQ",
      badge: "NEW"
    },
    {
      name: "Luna Hydrobiome Moisturizer",
      price: "490 THB",
      image: "https://scontent.fbkk13-2.fna.fbcdn.net/v/t51.82787-15/650894795_17912653416342655_2536528315488608974_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1800&ctp=s1440x1800&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=P310GK9OQUcQ7kNvwFftsyK&_nc_oc=AdoVlNil47YlFHUFxOAI0qCm2RyvF9gjLmuB7BY6X8zYupXXkWtaFOzYjwB7PjYFj56JISGoPX-BKB3npbRkaxpa&_nc_zt=23&_nc_ht=scontent.fbkk13-2.fna&_nc_gid=Jw7WQD81vS8O9fxRmlV56g&_nc_ss=7b2a8&oh=00_AQCjfTEb5XEAaSY847lebnnAa8Sx5BAvRG8WqoeQ06FyZw&oe=6A5BD848",
      shopeeLink: "https://s.shopee.co.th/9zw8WRagaJ",
      badge: "PREMIUM"
    },
    {
      name: "Luna Jelly Eye Mask",
      price: "390 THB",
      image: "https://scontent.fbkk12-5.fna.fbcdn.net/v/t39.30808-6/480455900_122207312402210229_5618724458349782034_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=f5hnkf5tT5sQ7kNvwFQwhls&_nc_oc=Adp7-IsLdBvECZGnPrjmLKSi8fZIqSNPKvg5YlP_iRkcB37GVLUMo9gxkTZ9csUUoEZXy0NbQgErJmDjbe2ReyAW&_nc_zt=23&_nc_ht=scontent.fbkk12-5.fna&_nc_gid=gXtOr0aMtnYp3sZcd9ZDKQ&_nc_ss=7b2a8&oh=00_AQCBVpawl5ZA67Rl8QQDqMDbyD4nugN1ImgDKDr9bAvPRg&oe=6A5C0216",
      shopeeLink: "https://s.shopee.co.th/9zw8WLYqbo",
      badge: "BEST SELLER"
    },
    {
      name: "Luna 2 Step Glow Intensive Mask",
      price: "189 THB / pc | 795 THB / box (5 pcs)",
      image: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t51.82787-15/589589554_17900514666342655_4641035599660589610_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1800&ctp=s1440x1800&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wSiKaKXUqvcQ7kNvwG-bD9e&_nc_oc=AdphHoHcg_TnSrDQQpB_9CfMiHWnbbJKmhF37XU3l3L9dF2BzjrRQxA-0PY6U_lKW-gHEALNMponcto6gqB9WdHJ&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&_nc_gid=wMwJh2bETwfgzq-8E6GxLg&_nc_ss=7b2a8&oh=00_AQCshijZw6RXtYUyS3o9d7yHf67CQ7jL1rokg7MJippEdg&oe=6A5BFD46",
      shopeeLink: "https://s.shopee.co.th/8pkB8MctPm",
      badge: "NEW"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      
      {/* Soft Ambient Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-rose/10 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-brand-blue-light/30 blur-[100px]" />
      </div>

      {/* Floating Action Button (Mobile) */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        href="https://shopee.co.th/momoskin"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#ee4d2d] to-[#ff7337] text-white rounded-full shadow-[0_8px_30px_rgba(238,77,45,0.4)] hover:shadow-[0_10px_40px_rgba(238,77,45,0.6)] transition-all active:scale-95"
      >
        <SiShopee size={28} />
      </motion.a>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur-2xl border-b border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.02)] transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <img 
                  src="https://scontent.fbkk12-5.fna.fbcdn.net/v/t39.30808-6/600293670_122266768982210229_8423589881959478060_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=GA4aUDvmDNkQ7kNvwEaHB0X&_nc_oc=AdoU9FwC_D4hsBvzHerKHxIARO0xMnzLGhWUKQ5IwGDEV9jd8hwnSEKFIIsOqqInQTdtVY-9lhHTkFp3E0INQg4_&_nc_zt=23&_nc_ht=scontent.fbkk12-5.fna&_nc_gid=3GKQtLsYx-AsLAQIMQdOiA&_nc_ss=7b2a8&oh=00_AQBzw9YrIU-A2TWKjdx3kShZxoOz_uBw-kNJYolQ2dZuXg&oe=6A5BCD21" 
                  alt="Luna Thailand Logo" 
                  className="h-10 w-10 object-contain rounded-full shadow-sm ring-2 ring-white/80"
                />
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10 items-center">
              <Link href="/" className="text-brand-dark hover:text-brand-rose transition-colors font-medium text-[13px] tracking-[0.2em] uppercase">Home</Link>
              <Link href="#products" className="text-brand-dark hover:text-brand-rose transition-colors font-medium text-[13px] tracking-[0.2em] uppercase">Products</Link>
              <Link href="#about" className="text-brand-dark hover:text-brand-rose transition-colors font-medium text-[13px] tracking-[0.2em] uppercase">Our Story</Link>
              <a 
                href="https://shopee.co.th/momoskin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#ee4d2d] to-[#ff7337] text-white rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <SiShopee size={16} />
                Official Store
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-brand-dark hover:text-brand-rose transition-colors focus:outline-none p-2"
              >
                {isMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-b border-brand-rose/10 shadow-2xl transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-6 pt-4 pb-8 space-y-3 flex flex-col">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="block py-3 text-[15px] font-medium text-brand-dark hover:text-brand-rose tracking-widest uppercase border-b border-brand-rose/10">Home</Link>
            <Link href="#products" onClick={() => setIsMenuOpen(false)} className="block py-3 text-[15px] font-medium text-brand-dark hover:text-brand-rose tracking-widest uppercase border-b border-brand-rose/10">Products</Link>
            <Link href="#about" onClick={() => setIsMenuOpen(false)} className="block py-3 text-[15px] font-medium text-brand-dark hover:text-brand-rose tracking-widest uppercase border-b border-brand-rose/10">Our Story</Link>
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
      </motion.nav>

      <main className="flex-grow relative z-10">
        
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-[60vh] md:h-[85vh] flex items-center justify-center pt-4 md:pt-8"
        >
          <div className="absolute inset-0 z-0 mx-4 sm:mx-8 mb-4 sm:mb-8 mt-0 rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src="https://scontent.fbkk12-6.fna.fbcdn.net/v/t39.30808-6/546861769_122248163852210229_6763724321963510309_n.jpg?stp=dst-jpg_tt6&cstp=mx1920x1008&ctp=s1920x1008&_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=B1lJ4qBWphwQ7kNvwHXRD5w&_nc_oc=AdpxQDc50FMv2SdjvlJYOcLDOSre7_3B5xREAiniXhg6aS48UjHSYrOH7sADlvkLi9iuTTJsLupHygEX2AW6WvZJ&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&_nc_gid=B9oMQ8__dfyJA9laOxj2yg&_nc_ss=7b2a8&oh=00_AQA8uXQ09pdAIqteVCQMen4Ediz_JL-RpqSZFnVydGabYA&oe=6A5BF64A"
              alt="Luna Cosmetics Banner"
              className="w-full h-full object-cover"
            />
            {/* Elegant Gradient Overlay (Warm) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#2D2A26]/10 via-[#2D2A26]/30 to-[#2D2A26]/70"></div>
          </div>
          
          <div className="relative z-10 text-center px-6 w-full flex flex-col items-center justify-end pb-16 md:pb-28 h-full">
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block py-1.5 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-xs tracking-[0.3em] uppercase mb-4 sm:mb-6 shadow-xl"
            >
              Discover Your Inner Glow
            </motion.span>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-2xl tracking-tight leading-[1.1] max-w-4xl"
            >
              Elevate Your <br className="hidden sm:block" /> 
              <span className="text-white">Natural Beauty</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-sm sm:text-lg text-white/90 mb-6 sm:mb-10 max-w-xl font-light drop-shadow-md mx-auto leading-relaxed"
            >
              Experience the finest ingredients crafted to perfection for Thai skin. Unlock a radiant, flawless look every day.
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Link href="#products" className="group relative inline-flex items-center justify-center px-10 py-4 bg-white/95 backdrop-blur-md text-brand-dark rounded-full font-semibold transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(201,160,135,0.4)] hover:bg-white transform hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10 tracking-wide flex items-center gap-2">
                  Shop The Collection
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-brand-rose/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              </Link>
            </motion.div>
          </div>
        </motion.section>



        {/* Featured Products Section */}
        <section id="products" className="py-20 md:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center mb-16 md:mb-24"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-4">Our Premium Care</h2>
              <p className="text-slate-500 max-w-2xl text-lg font-light">Curated essentials for your daily beauty ritual.</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 md:gap-12">
              {products.map((product, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index} 
                  className="group relative bg-white/70 backdrop-blur-xl rounded-[1.25rem] sm:rounded-2xl p-2 sm:p-4 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(201,160,135,0.15)] transition-all duration-500 border border-white/60 transform hover:-translate-y-2 flex flex-col"
                >
                  {/* Product Badge */}
                  {product.badge && (
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10">
                      <span className="bg-brand-dark/90 backdrop-blur-sm text-white text-[9px] sm:text-[11px] font-bold px-2 sm:px-3 py-1 rounded-sm tracking-widest uppercase shadow-sm">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1rem] sm:rounded-xl bg-[#F5EAE1]/30 mb-3 sm:mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-brand-rose/0 group-hover:bg-brand-rose/10 transition-colors duration-500"></div>
                  </div>
                  
                  <div className="flex flex-col flex-grow px-1 sm:px-4 pb-2 sm:pb-4 text-center">
                    <h3 className="text-[14px] sm:text-xl font-bold text-brand-dark mb-1 leading-tight line-clamp-2">{product.name}</h3>
                    <p className="text-brand-rose font-semibold text-[12px] sm:text-lg mb-4 sm:mb-8">{product.price}</p>
                    
                    <div className="mt-auto">
                      <a 
                        href={product.shopeeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 sm:gap-2 w-full py-2.5 sm:py-4 bg-white border border-slate-200 text-brand-dark rounded-lg sm:rounded-xl font-semibold text-[11px] sm:text-sm hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all duration-300 transform active:scale-95 group/btn"
                      >
                        <SiShopee className="w-3 h-3 sm:w-4 sm:h-4 text-[#ee4d2d] group-hover/btn:text-white transition-colors" />
                        <span className="whitespace-nowrap uppercase tracking-wider">Buy Now</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Philosophy / About - Luxury Styled */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          id="about" 
          className="py-32 relative overflow-hidden bg-gradient-to-b from-transparent via-[#F5EAE1]/30 to-white"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring" }}
              className="flex justify-center mb-10"
            >
               <img 
                  src="https://scontent.fbkk12-5.fna.fbcdn.net/v/t39.30808-6/600293670_122266768982210229_8423589881959478060_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=GA4aUDvmDNkQ7kNvwEaHB0X&_nc_oc=AdoU9FwC_D4hsBvzHerKHxIARO0xMnzLGhWUKQ5IwGDEV9jd8hwnSEKFIIsOqqInQTdtVY-9lhHTkFp3E0INQg4_&_nc_zt=23&_nc_ht=scontent.fbkk12-5.fna&_nc_gid=3GKQtLsYx-AsLAQIMQdOiA&_nc_ss=7b2a8&oh=00_AQBzw9YrIU-A2TWKjdx3kShZxoOz_uBw-kNJYolQ2dZuXg&oe=6A5BCD21" 
                  alt="Luna Thailand Logo" 
                  className="h-28 w-28 object-contain rounded-full shadow-2xl ring-4 ring-white"
                />
            </motion.div>
            
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-brand-rose font-bold tracking-[0.25em] uppercase text-xs mb-4 block"
            >
              The Philosophy
            </motion.span>
            
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-brand-dark mb-8 leading-tight"
            >
              Crafted for Confidence. <br className="hidden md:block"/> Designed for You.
            </motion.h2>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-slate-600 text-base md:text-xl mb-12 leading-loose font-light"
            >
              At <strong className="font-semibold text-brand-dark">LUNA OFFICIAL</strong>, we believe that makeup and skincare should empower you. Our premium products are meticulously crafted using the finest ingredients to ensure they complement your natural beauty while nourishing your skin from within. Every item is a testament to quality, elegance, and modern skincare science.
            </motion.p>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex justify-center"
            >
              <a href="https://line.me/R/ti/p/@852dtxtf?oat_content=url&ts=01181604" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00B900] text-white rounded-full font-semibold hover:shadow-[0_10px_30px_rgba(0,185,0,0.3)] transition-all duration-300 transform hover:-translate-y-1">
                <FaLine size={22} />
                <span className="tracking-wide">Chat with us on LINE</span>
              </a>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <img 
                src="https://scontent.fbkk12-5.fna.fbcdn.net/v/t39.30808-6/600293670_122266768982210229_8423589881959478060_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=GA4aUDvmDNkQ7kNvwEaHB0X&_nc_oc=AdoU9FwC_D4hsBvzHerKHxIARO0xMnzLGhWUKQ5IwGDEV9jd8hwnSEKFIIsOqqInQTdtVY-9lhHTkFp3E0INQg4_&_nc_zt=23&_nc_ht=scontent.fbkk12-5.fna&_nc_gid=3GKQtLsYx-AsLAQIMQdOiA&_nc_ss=7b2a8&oh=00_AQBzw9YrIU-A2TWKjdx3kShZxoOz_uBw-kNJYolQ2dZuXg&oe=6A5BCD21" 
                alt="Luna Logo" 
                className="h-12 w-12 object-contain rounded-full mb-6 shadow-sm"
              />
              <p className="text-slate-500 max-w-xs leading-relaxed text-sm font-light">
                Elevating your natural beauty with premium quality cosmetics. Discover the difference today.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <h4 className="text-brand-dark font-bold tracking-[0.15em] uppercase text-xs mb-6">Connect With Us</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/luna.officialth/" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-brand-rose hover:text-brand-rose transition-all duration-300 transform hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={20} />
                </a>
                <a href="https://www.tiktok.com/@kantlalita.mo" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-brand-dark hover:text-brand-dark transition-all duration-300 transform hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
                  <FaTiktok size={18} />
                </a>
                <a href="https://line.me/R/ti/p/@852dtxtf" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#00B900] hover:text-[#00B900] transition-all duration-300 transform hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
                  <FaLine size={22} />
                </a>
                <a href="https://shopee.co.th/momoskin" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#ee4d2d] hover:text-[#ee4d2d] transition-all duration-300 transform hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
                  <SiShopee size={22} />
                </a>
              </div>
            </div>

          </div>
          
          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs text-slate-400 font-medium tracking-widest uppercase">
            <p>COPYRIGHT © {new Date().getFullYear()} MO LUNA OFFICIAL. ALL RIGHTS RESERVED.</p>
            <p className="mt-4 md:mt-0">DESIGNED IN THAILAND</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
