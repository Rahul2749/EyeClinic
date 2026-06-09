import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Products.css";

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Aero Minimalist",
    price: "₹4,500",
    description: "Ultra-lightweight titanium frame for all-day comfort.",
    category: "Frames",
    badge: "Titanium",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLuVCPwBR5mBRrbap3LGAsUdjwEu1NEfUpPs1kaCNWkPSaO3CrZ2Lu-B6UoEuMoK1v_pRwqqDj7dAIMH5vyU9HxXv8NpWFS5j9ShnOG-1bRfem-NvDlNj5YBWQ6e83ABDpL-pQgSb8ArMifk2fHsf2vLnbIDCF1jCjLAeorw2ENpi6Tj6mloATo-Un5Wx6AGA3UGYtzHW3GUFlBBuAumtCVJ8Ul7VYR67PSJAZIaUGgRvSJfNNf1t8zyuic"
  },
  {
    id: 2,
    name: "Riviera Sun",
    price: "₹6,200",
    description: "Classic tortoise shell with polarized UV400 lenses.",
    category: "Sunglasses",
    badge: "Acetate",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLtx5m5SVWn_6eMff9JeWGVCsACII63qAVgGK6Jg4AOjiJg9pqRCyUU06jS2oC8pJ4v7z0DlwIDITulObQWVOsFthXTiLlLpgLuuo8AiNLSI4hQkTDGfoFV6kHfnyNhq1SuuuVC_7fSz5O88t6oiWSKz5lNUKL93qF7LG4AADmu_DXltir1KlS-AWRYIL1bU8AWP9hnGvMylWbJJT-BUOp3-5-SZhf0almRwKD7DUT8WaCOLEuA49Tt1BPY"
  },
  {
    id: 3,
    name: "Lumina Clear",
    price: "₹3,800",
    description: "Modern translucent frames protecting against digital strain.",
    category: "Eyeglasses",
    badge: "Blue-Light Block",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLsZNM9y4SVzLQJj_0ApDwdxukovM89uDI4fbCMg3I9TgzifJZwJNDw5CSncdx2LwPWas8W9eyVpjox_fQKuW8hdKMlXqKieqIOhCJMsqt5bfdlXQ7iPJVAgCbBMYx0hJdaqEvb4WMygILTvUr44fBsd0ydrMXpd_-XYqQ3v54xdicqK3mEgp-sEzAE08p45XKTnyYKkHytX5XRUz0rW5fduyRQ3Q-MVQY9FoiaBbF61FxXHaYHy7gNMhYs"
  },
  {
    id: 4,
    name: "Lumina Daily Contacts",
    price: "₹2,500",
    description: "Ultra-hydrating daily contact lenses for dry eyes.",
    category: "Contact Lenses",
    badge: "Daily Hydrogel",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLsZNM9y4SVzLQJj_0ApDwdxukovM89uDI4fbCMg3I9TgzifJZwJNDw5CSncdx2LwPWas8W9eyVpjox_fQKuW8hdKMlXqKieqIOhCJMsqt5bfdlXQ7iPJVAgCbBMYx0hJdaqEvb4WMygILTvUr44fBsd0ydrMXpd_-XYqQ3v54xdicqK3mEgp-sEzAE08p45XKTnyYKkHytX5XRUz0rW5fduyRQ3Q-MVQY9FoiaBbF61FxXHaYHy7gNMhYs"
  }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Stagger product cards
      gsap.from(".product-card", {
        scrollTrigger: {
          trigger: "#product-grid",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });

      // 3D Magnetic Tilt for Product Cards
      const cards = document.querySelectorAll('.product-card');
      cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;

          gsap.to(card, {
            rotateX: -y, rotateY: x,
            transformPerspective: 800,
            duration: 0.4, ease: 'power1.out'
          });
          
          // Image zoom spring
          const img = card.querySelector('.product-image');
          if (img) {
            gsap.to(img, {
              scale: 1.08,
              duration: 0.6,
              ease: 'back.out(1.5)'
            });
          }
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            rotateX: 0, rotateY: 0,
            duration: 0.6, ease: 'elastic.out(1, 0.5)'
          });
          
          const img = card.querySelector('.product-image');
          if (img) {
            gsap.to(img, {
              scale: 1,
              duration: 0.6,
              ease: 'power2.out'
            });
          }
        });
      });
    });
    return () => ctx.revert();
  }, [selectedCategory, searchQuery]); // Re-register animations when content filters

  const categories = ["All", "Sunglasses", "Eyeglasses", "Frames", "Contact Lenses"];

  const filteredProducts = PRODUCTS_DATA.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div id="products" className="max-w-container-max mx-auto scroll-mt-24 pb-space-3xl">
        <div className="relative">
          <section className="px-margin-mobile md:px-margin-desktop mb-space-lg flex flex-col md:flex-row justify-between items-center gap-6 sticky top-20 z-40 bg-c-surface/90 backdrop-blur-md py-4 border-b border-c-border">
            <div className="w-full md:w-auto overflow-x-auto no-scrollbar">
              <div className="flex space-x-4 min-w-max" id="category-filters">
                {categories.map(cat => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-6 py-2 rounded-full font-body text-[0.875rem] font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-c-primary text-white shadow-md scale-105"
                          : "bg-white text-c-muted border border-c-border hover:text-c-teal hover:border-c-teal"
                      }`}
                    >
                      {cat === "All" ? "All Collection" : cat}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="w-full md:w-auto relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-c-muted group-focus-within:text-c-teal transition-colors">
                search
              </span>
              <input
                className="w-full md:w-[280px] pl-12 pr-4 py-3 rounded-full bg-white border border-c-border focus:border-c-teal focus:ring-2 focus:ring-c-teal/20 transition-all font-body text-[0.9375rem] text-c-text placeholder:text-c-muted"
                placeholder="Search brands or styles..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </section>

          {/* Product Grid */}
          <section className="px-margin-mobile md:px-margin-desktop mb-space-2xl">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="product-grid">
                {filteredProducts.map(product => (
                  <div key={product.id} className="product-card group flex flex-col bg-white rounded-xl border border-c-border hover:shadow-[0_20px_50px_rgba(11,110,115,0.08)] transition-all duration-300">
                    <div className="relative w-full aspect-[4/3] bg-[#F4F7F7] overflow-hidden flex items-center justify-center p-8 rounded-t-xl">
                      <div className="absolute top-4 left-4 z-10 bg-c-amber/15 text-c-amber font-mono text-[0.65rem] font-medium tracking-widest uppercase px-3 py-1.5 rounded-full">
                        {product.badge}
                      </div>
                      <img
                        alt={product.name}
                        className="product-image w-full h-full object-contain transition-transform"
                        src={product.image}
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-display text-[1.5rem] font-semibold text-c-text">
                          {product.name}
                        </h3>
                        <span className="font-display text-[1.25rem] text-c-teal font-semibold">
                          {product.price}
                        </span>
                      </div>
                      <p className="font-body text-[0.9375rem] text-c-muted mb-6 flex-grow leading-[1.6]">
                        {product.description}
                      </p>
                      <div className="mt-auto">
                        <a href="#details" className="inline-flex items-center text-c-text font-body text-[0.875rem] font-semibold uppercase tracking-widest relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-c-accent after:transition-all after:duration-300">
                          View Details <span className="material-symbols-outlined text-[16px] ml-1 text-c-accent">arrow_forward</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border border-c-border">
                <span className="material-symbols-outlined text-[48px] text-c-muted mb-4">info</span>
                <p className="font-body text-[1.1rem] text-c-text font-medium">No eyewear found matching your filter or query.</p>
                <button onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }} className="mt-4 text-c-teal hover:underline font-body font-medium">Reset Filters</button>
              </div>
            )}
            
            <div className="mt-12 flex justify-center">
              <button className="px-8 py-3 rounded-full border border-c-border text-c-text font-body font-medium text-[0.9375rem] hover:border-c-teal hover:text-c-teal transition-all duration-300 flex items-center space-x-2 bg-white">
                <span>Load More Styles</span>
                <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </button>
            </div>
          </section>
        </div>

        {/* Visit Boutique Banner */}
        <section className="px-margin-mobile md:px-margin-desktop mb-space-lg">
          <div className="bg-c-primary rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-c-teal to-c-accent filter blur-[120px] opacity-30 rounded-full translate-x-1/3 -translate-y-1/3"></div>
            
            <div className="relative z-10 w-full md:w-1/2">
              <span className="flex items-center space-x-2 text-c-accent font-mono text-[0.75rem] uppercase tracking-[0.15em] mb-4">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                <span>Experience in Person</span>
              </span>
              <h2 className="font-display text-[2.5rem] font-semibold text-white mb-4 leading-tight">
                Visit our Tumsar Boutique
              </h2>
              <p className="font-body text-[1.0625rem] text-white/80 mb-8 max-w-[450px] leading-[1.7]">
                Get personalized styling advice, precise measurements, and try on our exclusive collections in a comfortable, premium clinical setting.
              </p>
              <button className="btn-primary">
                Get Directions <span className="material-symbols-outlined ml-1 text-[18px] align-middle">arrow_forward</span>
              </button>
            </div>
            
            <div className="relative z-10 w-full md:w-5/12 aspect-[4/3] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <img
                alt="Jaiswal Eye Care Boutique Interior"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AP1WRLv6HfMUv4hUE0mclBFeR3YJg4jIgXFOCcfmgsg7UoSPZx2yiecXw1brlpKCSdbsqMyakVmammUVwSbkEUc5YT_TAm6Dm6KCty2gyC35dKp-n35ClhMJVMds1-GWQTe00jGOgSgXn2DSiIia_S0HxJ-p7blwxKhgtIhkaKgQo-9iths1HUobEB3ZhzZOl_77-DUBYOCUNqZDOmciufsnyQsr4chUW3R34afit7YXx7YD1WLscMDQNpPvag"
              />
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Products;
