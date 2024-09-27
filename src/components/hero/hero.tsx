import React from "react";
import data from "@/config/site-data.en";

const Hero = () => {
    return (
        <>
            <div className="relative bg-transparent pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]">
                <div className="container mx-auto">
                    <div className="mx-4 flex flex-wrap">
                        <div className="w-full px-4 lg:w-5/12">
                            <div className="hero-content">
                                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl gradient-text">
                                    {data.hero.title}
                                </h1>
                                <p className="mb-8 max-w-[480px] text-2xl dark:text-dark-6 text-amber-200">
                                    {data.hero.subtitle}
                                </p>
                            </div>
                        </div>
                        <div className="hidden px-4 lg:block lg:w-1/12"></div>
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="lg:ml-auto lg:text-right">
                                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                    <img
                                        src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                                        alt="hero"
                                        className="max-w-full lg:ml-auto"
                                    />
                                    <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                        width="93"
                        height="93"
                        viewBox="0 0 93 93"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3"/>
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3"/>
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3"/>
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3"/>
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3"/>
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3"/>
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3"/>
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3"/>
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3"/>
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3"/>
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3"/>
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3"/>
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3"/>
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3"/>
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3"/>
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3"/>
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3"/>
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3"/>
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3"/>
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3"/>
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3"/>
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3"/>
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3"/>
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3"/>
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3"/>
                    </svg>
                  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;

