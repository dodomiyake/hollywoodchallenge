import React from "react";
import productImg from "../images/image-product-desktop.jpg";
import cartIcon from "../images/icon-cart.svg";

const ProductCard = () => {
    return (
        <main className="min-h-screen bg-cream flex flex-col items-center justify-center p-4">
            <article className="bg-white rounded-[15px] overflow-hidden shadow-sm w-full max-w-[340px] md:max-w-[600px] md:flex">
                {/* IMAGE */}
                <figure className="h-[240px] md:h-auto md:w-1/2">
                    <img
                        src={productImg}
                        alt="Gabrielle Essence Eau De Parfum"
                        className="w-full h-full object-cover"
                    />
                </figure>

                {/* CONTENT */}
                <section className="p-6 md:p-8 md:w-1/2 flex flex-col gap-3 md:gap-4 text-left">
                    <p className="uppercase tracking-[0.3em] text-xs text-grey font-montserrat">
                        Perfume
                    </p>

                    <h1 className="text-[32px] font-fraunces font-bold text-black leading-[32px]">
                        Gabrielle Essence Eau De Parfum
                    </h1>

                    <p className="text-grey text-sm font-montserrat leading-[23px] mt-1">
                        A floral, solar and voluptuous interpretation composed by Olivier
                        Polge, Perfumer-Creator for the House of CHANEL.
                    </p>

                    {/* PRICE */}
                    <div className="flex items-center gap-5 mt-1">
                        <span 
                            className="text-green500 text-[32px] font-bold font-fraunces leading-[32px]"
                            aria-label="Current price: $149.99"
                        >
                            $149.99
                        </span>
                        <span 
                            className="line-through text-grey text-[13px] font-montserrat"
                            aria-label="Original price: $169.99"
                        >
                            $169.99
                        </span>
                    </div>

                    {/* BUTTON */}
                    <button 
                        className="w-full bg-green500 hover:bg-green700 text-white py-[15px] rounded-lg flex items-center justify-center gap-3 text-sm font-bold font-montserrat mt-2 transition-colors duration-200"
                        aria-label="Add to Cart"
                    >
                        <img src={cartIcon} alt="" className="w-4 h-4" aria-hidden="true" />
                        Add to Cart
                    </button>
                </section>
            </article>
            
            {/* Attribution */}
            <footer className="text-center text-grey text-sm mt-4">
                Challenge by{" "}
                <a 
                    href="https://www.frontendmentor.io?ref=challenge" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green500 hover:text-green700 transition-colors duration-200"
                >
                    Frontend Mentor
                </a>
                . Coded by{" "}
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a 
                    href="#"  
                    className="text-green500 hover:text-green700 transition-colors duration-200"
                >
                    Oluwadamilola Ajayi
                </a>
                .
            </footer>
        </main>
    );
};

export default ProductCard;
