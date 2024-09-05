import React from 'react'
import { useAuth } from '../store/auth'
import { NavLink } from 'react-router-dom'
import { Fade } from 'react-reveal';


const ServiceCard = () => {

    const handleTop = () => {
        window.scrollTo(0, 0);
    };
    const { services } = useAuth();
    return (
        <>
            <div className="bg-[#eef5ff] dark:bg-slate-900 dark:text-white duration-300 w-full">
                <Fade duration={1000} distance="30px" bottom>
                    <section className="container mx-auto p-2 max-w-[1290px]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mx-auto pt-8 pb-8">
                            {Array.isArray(services) && services.map((curElem, index) => {
                                const { price, description, service, provider, thumbnailImage, readMore, formsLink } = curElem;
                                console.log(curElem)
                                return (
                                    <div key={index} className="bg-gray-100 dark:bg-slate-800 rounded-sm overflow-hidden shadow-md transform transition-transform duration-300 ease-in-out border border-2-black p-1 text-white">
                                        <div className="mb-4 overflow-hidden">
                                            {/* Image */}
                                            <img
                                                src={thumbnailImage}
                                                alt="our service"
                                                className="w-full h-auto transform hover:scale-110 transition-transform duration-300 ease-in-out"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <div className="grid grid-cols-2 mb-4">
                                                {/* Provider and Price */}
                                                <p className="font-semibold font-monts text-[15px] text-violet-700 dark:text-[#ffffff]">{provider}</p>
                                                <p className="text-right font-semibold text-[15px] tracking-wide font-monts text-blue-500 dark:text-white">{price}</p>
                                            </div>
                                            {/* Service Title and Description */}
                                            <h2 className="text-xl font-medium mb-2 font-fira text-slate-900 dark:text-[#a3a9b3]">{service}</h2>
                                            <p className='text-slate-900 dark:text-[#B6BBC4] text-[13px]'>{description}</p>
                                        </div>

                                        <div className='flex gap-1'>
                                            <NavLink to={readMore} onClick={handleTop} className="w-full rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white">
                                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                                                <span className="relative font-monts uppercase text-[14px]">Read More</span>
                                            </NavLink>



                                            <NavLink to={formsLink} onClick={handleTop} className="w-full rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white">
                                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                                                <span className="relative font-monts uppercase text-[14px]">Buy Now</span>
                                            </NavLink>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </Fade>
            </div>
        </>
    )
}

export default ServiceCard
