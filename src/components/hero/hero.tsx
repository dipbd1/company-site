import React from "react";
import data from "@/config/site-data.en";

import Hero3DComponent from "@/components/3D/hero_3d.component";


const Hero = () => {

    // as per my study
    // if we use framer motion here, it will cause us to have a bad seo
    // we are not popular, but want to google to show most of the details in first page

    return (
        <>
            <div className="relative bg-transparent pb-[110px] pt-[40px] md:pt-[104px] dark:bg-dark lg:pt-[120px]">
                <div className="container mx-auto">
                    <div className="mx-4 flex flex-wrap">
                        <div className="w-full px-4 lg:w-5/12">
                            <div className="hero-content">
                                <h1 className="mb-5 text-4xl font-bold !leading-[1] text-dark dark:text-white sm:text-[48px] lg:text-[56px] xl:text-6xl gradient-text">
                                    {data.hero.title}
                                </h1>
                                <p className="mb-8 max-w-[480px] text-xl dark:text-dark-6 text-yellow-300">
                                    {data.hero.subtitle}
                                </p>
                            </div>
                        </div>
                        <div className="hidden px-4 lg:block lg:w-1/12"></div>
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="lg:ml-auto lg:text-right">
                                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                    {/*<img*/}
                                    {/*    src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"*/}
                                    {/*    alt="hero"*/}
                                    {/*    className="max-w-full lg:ml-auto"*/}
                                    {/*/>*/}
                                    <Hero3DComponent/>
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

