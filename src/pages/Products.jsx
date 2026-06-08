import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  return (
    <>
      <div id="products" className="max-w-container-max mx-auto pt-24 -mt-24">
        

        <section className="px-margin-mobile md:px-margin-desktop mb-lg md:mb-lg flex flex-col md:flex-row justify-between items-center gap-md">
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar pb-xs -mb-xs">
            <div className="flex space-x-sm min-w-max" id="category-filters">
              <button
                className="category-btn px-md py-sm rounded-full bg-primary text-on-primary font-label-md text-label-md shadow-sm shadow-primary/20 transition-transform hover:scale-105"
                data-filter="all"
              >
                All Collection
              </button>
              <button
                className="category-btn px-md py-sm rounded-full bg-surface-container text-on-surface-variant border border-outline-variant/30 font-label-md text-label-md hover:bg-surface-container-high transition-colors"
                data-filter="sunglasses"
              >
                Sunglasses
              </button>
              <button
                className="category-btn px-md py-sm rounded-full bg-surface-container text-on-surface-variant border border-outline-variant/30 font-label-md text-label-md hover:bg-surface-container-high transition-colors"
                data-filter="eyeglasses"
              >
                Eyeglasses
              </button>
              <button
                className="category-btn px-md py-sm rounded-full bg-surface-container text-on-surface-variant border border-outline-variant/30 font-label-md text-label-md hover:bg-surface-container-high transition-colors"
                data-filter="frames"
              >
                Frames
              </button>
              <button
                className="category-btn px-md py-sm rounded-full bg-surface-container text-on-surface-variant border border-outline-variant/30 font-label-md text-label-md hover:bg-surface-container-high transition-colors"
                data-filter="contacts"
              >
                Contact Lenses
              </button>
            </div>
          </div>

          <div className="w-full md:w-auto relative group">
            <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors">
              search
            </span>
            <input
              className="w-full md:w-[250px] pl-lg pr-sm py-sm rounded-sm bg-surface border-b border-outline-variant/50 focus:border-primary focus:ring-0 focus:outline-none transition-all font-body-md text-body-md text-on-surface placeholder:text-outline-variant"
              placeholder="Search brands or styles..."
              type="text"
            />
          </div>
        </section>

        <section className="px-margin-mobile md:px-margin-desktop mb-lg">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter"
            id="product-grid"
          >
            <div
              className="product-card group flex flex-col rounded-xl overflow-hidden glass-panel"
              data-category="eyeglasses frames"
            >
              <div className="relative w-full aspect-[4/3] bg-surface-container-low overflow-hidden flex items-center justify-center p-md">
                <div className="absolute top-sm left-sm z-10 bg-surface-bright/90 backdrop-blur-sm text-primary font-caption text-caption px-sm py-xs rounded-full border border-primary/10">
                  Titanium
                </div>
                <img
                  alt="Aero Minimalist Frames"
                  className="product-image w-full h-full object-contain"
                  data-alt="A macro studio shot of elegant, minimalist titanium eyeglasses resting on a pristine white surface. The lighting is soft and directional, highlighting the metallic sheen and fine craftsmanship of the thin wireframes. The background is a very subtle, soft gradient of off-white and pale primary teal, maintaining a clinical, high-end optical boutique aesthetic."
                  src="https://lh3.googleusercontent.com/aida/AP1WRLuVCPwBR5mBRrbap3LGAsUdjwEu1NEfUpPs1kaCNWkPSaO3CrZ2Lu-B6UoEuMoK1v_pRwqqDj7dAIMH5vyU9HxXv8NpWFS5j9ShnOG-1bRfem-NvDlNj5YBWQ6e83ABDpL-pQgSb8ArMifk2fHsf2vLnbIDCF1jCjLAeorw2ENpi6Tj6mloATo-Un5Wx6AGA3UGYtzHW3GUFlBBuAumtCVJ8Ul7VYR67PSJAZIaUGgRvSJfNNf1t8zyuic"
                />

                <button
                  aria-label="Virtual Try-On"
                  className="absolute bottom-sm right-sm z-10 bg-surface/80 backdrop-blur-md p-xs rounded-full text-primary hover:bg-primary hover:text-on-primary transition-colors border border-primary/10 shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300 flex items-center justify-center"
                >
                  <span className="material-symbols-outlined">face</span>
                </button>
              </div>
              <div className="p-md flex flex-col flex-grow bg-surface-bright">
                <div className="flex justify-between items-start mb-xs">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Aero Minimalist
                  </h3>
                  <span className="font-label-md text-label-md text-primary font-bold">
                    ₹4,500
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow">
                  Ultra-lightweight titanium frame for all-day comfort.
                </p>
                <button className="w-full py-sm rounded-full bg-primary/5 text-primary border border-primary/20 font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>

            <div
              className="product-card group flex flex-col rounded-xl overflow-hidden glass-panel"
              data-category="sunglasses"
            >
              <div className="relative w-full aspect-[4/3] bg-surface-container-low overflow-hidden flex items-center justify-center p-md">
                <div className="absolute top-sm left-sm z-10 bg-surface-bright/90 backdrop-blur-sm text-primary font-caption text-caption px-sm py-xs rounded-full border border-primary/10">
                  Acetate
                </div>
                <img
                  alt="Classic Tortoise Shell Sunglasses"
                  className="product-image w-full h-full object-contain"
                  data-alt="A premium product photography shot of classic tortoise shell sunglasses against a soft, bright, slightly textured background. The lenses have a subtle gradient tint. Studio lighting creates soft, elegant reflections on the polished acetate frames, emphasizing their premium quality. The overall color palette is warm, sophisticated, and aligns with a high-end, modern minimalist optical brand identity."
                  src="https://lh3.googleusercontent.com/aida/AP1WRLtx5m5SVWn_6eMff9JeWGVCsACII63qAVgGK6Jg4AOjiJg9pqRCyUU06jS2oC8pJ4v7z0DlwIDITulObQWVOsFthXTiLlLpgLuuo8AiNLSI4hQkTDGfoFV6kHfnyNhq1SuuuVC_7fSz5O88t6oiWSKz5lNUKL93qF7LG4AADmu_DXltir1KlS-AWRYIL1bU8AWP9hnGvMylWbJJT-BUOp3-5-SZhf0almRwKD7DUT8WaCOLEuA49Tt1BPY"
                />
                <button
                  aria-label="Virtual Try-On"
                  className="absolute bottom-sm right-sm z-10 bg-surface/80 backdrop-blur-md p-xs rounded-full text-primary hover:bg-primary hover:text-on-primary transition-colors border border-primary/10 shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300 flex items-center justify-center"
                >
                  <span className="material-symbols-outlined">face</span>
                </button>
              </div>
              <div className="p-md flex flex-col flex-grow bg-surface-bright">
                <div className="flex justify-between items-start mb-xs">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Riviera Sun
                  </h3>
                  <span className="font-label-md text-label-md text-primary font-bold">
                    ₹6,200
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow">
                  Classic tortoise shell with polarized UV400 lenses.
                </p>
                <button className="w-full py-sm rounded-full bg-primary/5 text-primary border border-primary/20 font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>

            <div
              className="product-card group flex flex-col rounded-xl overflow-hidden glass-panel"
              data-category="eyeglasses frames"
            >
              <div className="relative w-full aspect-[4/3] bg-surface-container-low overflow-hidden flex items-center justify-center p-md">
                <div className="absolute top-sm left-sm z-10 bg-surface-bright/90 backdrop-blur-sm text-primary font-caption text-caption px-sm py-xs rounded-full border border-primary/10">
                  Blue-Light Block
                </div>
                <img
                  alt="Clear Geometric Frames"
                  className="product-image w-full h-full object-contain"
                  data-alt="A clean, contemporary photograph of clear, geometric eyeglasses featuring blue-light blocking lenses. The glasses are positioned on an architectural, smooth white pedestal against a pale primary teal backdrop. The lighting is pristine and clinical, highlighting the transparency of the frames and the subtle blue reflection on the lenses. The mood is modern, technological, and focused on eye health and aesthetic purity."
                  src="https://lh3.googleusercontent.com/aida/AP1WRLsZNM9y4SVzLQJj_0ApDwdxukovM89uDI4fbCMg3I9TgzifJZwJNDw5CSncdx2LwPWas8W9eyVpjox_fQKuW8hdKMlXqKieqIOhCJMsqt5bfdlXQ7iPJVAgCbBMYx0hJdaqEvb4WMygILTvUr44fBsd0ydrMXpd_-XYqQ3v54xdicqK3mEgp-sEzAE08p45XKTnyYKkHytX5XRUz0rW5fduyRQ3Q-MVQY9FoiaBbF61FxXHaYHy7gNMhYs"
                />
                <button
                  aria-label="Virtual Try-On"
                  className="absolute bottom-sm right-sm z-10 bg-surface/80 backdrop-blur-md p-xs rounded-full text-primary hover:bg-primary hover:text-on-primary transition-colors border border-primary/10 shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300 flex items-center justify-center"
                >
                  <span className="material-symbols-outlined">face</span>
                </button>
              </div>
              <div className="p-md flex flex-col flex-grow bg-surface-bright">
                <div className="flex justify-between items-start mb-xs">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Lumina Clear
                  </h3>
                  <span className="font-label-md text-label-md text-primary font-bold">
                    ₹3,800
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow">
                  Modern translucent frames protecting against digital strain.
                </p>
                <button className="w-full py-sm rounded-full bg-primary/5 text-primary border border-primary/20 font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="mt-md flex justify-center">
            <button className="px-lg py-sm rounded-full border border-primary text-primary hover:bg-primary hover:text-on-primary font-label-md text-label-md transition-all duration-300 flex items-center space-x-xs">
              <span>Load More Styles</span>
              <span className="material-symbols-outlined text-[18px]">
                expand_more
              </span>
            </button>
          </div>
        </section>

        <section className="px-margin-mobile md:px-margin-desktop mb-lg">
          <div className="bg-primary-fixed/10 rounded-xl p-lg md:p-lg flex flex-col md:flex-row items-center justify-between gap-lg relative overflow-hidden border border-primary/10">
            <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-primary-fixed rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="relative z-10 w-full md:w-1/2">
              <span className="flex items-center space-x-xs text-primary font-label-md text-label-md uppercase tracking-wider mb-sm">
                <span className="material-symbols-outlined text-[20px]">
                  location_on
                </span>
                <span>Experience in Person</span>
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-md">
                Visit our Tumsar Boutique
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-lg max-w-[400px]">
                Get personalized styling advice, precise measurements, and try
                on our exclusive collections in a comfortable, premium clinical
                setting.
              </p>
              <button className="px-lg py-sm bg-primary text-on-primary rounded-full font-label-md text-label-md hover:scale-105 transition-transform duration-300 shadow-sm shadow-primary/20">
                Get Directions
              </button>
            </div>
            <div
              className="relative z-10 w-full md:w-5/12 aspect-[4/3] rounded-lg overflow-hidden shadow-sm"
              id="boutique-image-container"
            >
              <img
                alt="Jaiswal Eye Care Boutique Interior"
                className="w-full h-[120%] object-cover -translate-y-[10%]"
                data-alt="A bright, modern interior shot of a high-end optical boutique. The space features clean lines, white shelving, and minimalist wooden accents. Neatly arranged eyeglasses are displayed like artwork. The ambient lighting is warm and welcoming, while targeted spotlights illuminate the products. The overall aesthetic is a blend of a precise medical clinic and a luxury retail store, utilizing a calm color palette consistent with the Jaiswal Eye Care brand."
                id="boutique-image"
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
