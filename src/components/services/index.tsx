import data from "@/config/site-data.en";


const gradientColors = [
    'from-blue-500 to-purple-500',
    'from-purple-500 to-purple-500',
    'from-purple-500 to-pink-500',
];

const Services = () => {
    return <section className="">
        <div
            className="relative mx-auto h-full px-4 pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">

            <div className="">
                <div className="max-w-xl mx-auto text-center">
                    <div className="inline-flex px-4 py-1.5 mx-auto rounded-full  ">
                        <p className="text-4xl font-semibold tracking-wider uppercase">Industries:</p>
                    </div>
                    <p className="text-base leading-relaxed text-yellow-400 group-hover:text-white"> We offer a
                        wide range of services to meet your software needs...</p>
                </div>


                <div className="grid grid-cols-1 gap-2 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mt-4">
                    {data.services.map((services, index) => (
                        <a key={index} href="#"
                           className={`transition-all duration-1000 bg-gradient-to-r ${gradientColors[index % 3]} hover:shadow-xl m-2 p-4 relative z-40 group flex flex-col rounded-3xl overflow-hidden border-emerald-500`}>
                            <div
                                className=" absolute bg-transparent left-0 top-0 w-24 h-1 z-30  transition-all duration-200 group-hover:bg-white group-hover:w-1/2  ">
                            </div>
                            <svg className="w-16 h-16 fill-gray-400 group-hover:fill-white"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-18.5c-4.254 0-7.699 3.445-7.699 7.699 0 4.254 3.445 7.699 7.699 7.699 4.254 0 7.699-3.445 7.699-7.699 0-4.254-3.445-7.699-7.699-7.699zm0 13.398c-3.14 0-5.699-2.559-5.699-5.699s2.559-5.699 5.699-5.699 5.699 2.559 5.699 5.699-2.559 5.699-5.699 5.699z"/>
                            </svg>
                            <h3 className="mt-8 text-3xl font-bold text-purple-900 group-hover:text-white">
                                {services.title}
                            </h3>
                            <p className="text-slate-300 leading-6 mt-2">{services.description}</p>
                            <div className="mt-auto">
                                <div className='flex flex-row flex-wrap justify-between mt-2'>
                                        <span
                                            className="mt-2 inline-flex items-center justify-center px-3 py-1 text-xs font-medium leading-none text-blue-800 bg-blue-100 rounded-full group-hover:bg-white group-hover:text-blue-500">
                                        {services.category}</span>
                                    <button
                                        className="mt-2 bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 rounded">Learn
                                        More
                                    </button>
                                </div>
                            </div>
                            <div
                                className="absolute bg-blue-500/50 bottom-0 right-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2">
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>

    </section>
}

export default Services;