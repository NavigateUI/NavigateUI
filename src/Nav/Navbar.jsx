import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ setIsOpen }) => {
    const [isDocOpen, setDocIsOpen] = useState(true);
    const [isComponentOpen, setComponentIsOpen] = useState(true);

    return (
        <>
            <div className="fixed inset-0 top-0 z-[999] h-screen w-[330px] select-none overflow-y-scroll border-r bg-white px-5 lg:sticky lg:left-0 lg:px-0">
                <div className="group flex h-full w-full flex-col space-y-6">
                    <div>
                        <h1 className="p-8 text-3xl text-gray-800">
                            <span className="text-[#0095FF]">U</span>nifyUI
                        </h1>
                        <hr />
                    </div>
                    {/* container   */}
                    <div className="flex flex-col px-4 font-sans text-lg text-gray-600 duration-300 ">
                        {/* Docs  */}
                        <div onClick={() => setDocIsOpen(!isDocOpen)} className="flex  items-center justify-between rounded-lg px-6 py-2 duration-300 hover:bg-sky-50">
                            <div className="flex items-center gap-4">
                                <svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0095FF]">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M12 6.90909C10.8999 5.50893 9.20406 4.10877 5.00119 4.00602C4.72513 3.99928 4.5 4.22351 4.5 4.49965C4.5 6.54813 4.5 14.3034 4.5 16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90909C13.1001 5.50893 14.7959 4.10877 18.9988 4.00602C19.2749 3.99928 19.5 4.21847 19.5 4.49461C19.5 6.78447 19.5 14.3064 19.5 16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90909L12 20.5"
                                            stroke="currentColor"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M19.2353 6H21.5C21.7761 6 22 6.22386 22 6.5V19.539C22 19.9436 21.5233 20.2124 21.1535 20.0481C20.3584 19.6948 19.0315 19.2632 17.2941 19.2632C14.3529 19.2632 12 21 12 21C12 21 9.64706 19.2632 6.70588 19.2632C4.96845 19.2632 3.64156 19.6948 2.84647 20.0481C2.47668 20.2124 2 19.9436 2 19.539V6.5C2 6.22386 2.22386 6 2.5 6H4.76471"
                                            stroke="currentColor"
                                            strokeLinejoin="round"
                                        ></path>
                                    </g>
                                </svg>
                                <span>Docs</span>
                            </div>
                            <svg className={`${isDocOpen ? 'duration-300' : '-rotate-180 duration-300 '}`} width={35} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M7 14.5L12 9.5L14.5 12L17 14.5" stroke="#0095FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}
                                    <path d="M7 14.5L12 9.5L14.5 12" stroke="#363853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}
                                </g>
                            </svg>
                        </div>
                        {/* doc div  */}
                        <div className={`grid text-slate-600 transition-all duration-300 ease-in-out    ${isDocOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="my-2 ml-8 flex flex-col space-y-2 overflow-hidden border-l  px-6 text-lg ">
                                <Link onClick={() => setIsOpen(false)} className="px-6  py-2 duration-300  hover:rounded-lg hover:bg-sky-50 " to="/">
                                    Introduction
                                </Link>
                                <Link onClick={() => setIsOpen(false)} className="px-6 py-2  duration-300  hover:rounded-lg hover:bg-sky-50 " to="/Components/button">
                                    Quick Start
                                </Link>
                            </div>
                        </div>
                        {/* Component  */}
                        <div onClick={() => setComponentIsOpen(!isComponentOpen)} className="flex  items-center justify-between rounded-lg px-6 py-2 duration-300 hover:bg-sky-50">
                            <div className="flex items-center gap-4">
                                <svg width={25} fill="#0095FF" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <title>shapes</title>{' '}
                                        <path d="M9.072 14.75h13.855c0 0 0.001 0 0.001 0 0.414 0 0.75-0.336 0.75-0.75 0-0.138-0.037-0.267-0.102-0.379l0.002 0.004-6.929-12c-0.142-0.211-0.379-0.349-0.649-0.349s-0.508 0.137-0.648 0.346l-0.002 0.003-6.928 12c-0.063 0.108-0.1 0.237-0.1 0.375 0 0.414 0.336 0.75 0.75 0.75v0zM16 3.5l5.629 9.75h-11.258zM7.838 17.25c-0.049-0.001-0.107-0.002-0.164-0.002-3.729 0-6.752 3.023-6.752 6.752s3.023 6.752 6.752 6.752c0.058 0 0.115-0.001 0.173-0.002l-0.008 0c0.049 0.001 0.107 0.002 0.164 0.002 3.729 0 6.752-3.023 6.752-6.752s-3.023-6.752-6.752-6.752c-0.058 0-0.115 0.001-0.173 0.002l0.008-0zM7.838 29.25c-0.048 0.002-0.103 0.002-0.159 0.002-2.901 0-5.252-2.352-5.252-5.252s2.352-5.252 5.252-5.252c0.056 0 0.112 0.001 0.168 0.003l-0.008-0c0.048-0.002 0.103-0.002 0.159-0.002 2.901 0 5.252 2.352 5.252 5.252s-2.352 5.252-5.252 5.252c-0.056 0-0.112-0.001-0.168-0.003l0.008 0zM28 17.25h-8c-1.518 0.002-2.748 1.232-2.75 2.75v8c0.002 1.518 1.232 2.748 2.75 2.75h8c1.518-0.002 2.748-1.232 2.75-2.75v-8c-0.002-1.518-1.232-2.748-2.75-2.75h-0zM29.25 28c-0.001 0.69-0.56 1.249-1.25 1.25h-8c-0.69-0.001-1.249-0.56-1.25-1.25v-8c0.001-0.69 0.56-1.249 1.25-1.25h8c0.69 0.001 1.249 0.56 1.25 1.25v0z"></path>{' '}
                                    </g>
                                </svg>
                                <span>Components</span>
                            </div>
                            <svg className={`${isComponentOpen ? 'duration-300 ' : '-rotate-180 duration-300 '}`} width={35} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M7 14.5L12 9.5L14.5 12L17 14.5" stroke="#0095FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M7 14.5L12 9.5L14.5 12" stroke="#363853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </g>
                            </svg>
                        </div>

                        {/* Component div */}
                        <div className={`grid  text-slate-600  transition-all duration-300 ease-in-out    ${isComponentOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="my-2 ml-8 flex flex-col space-y-2 overflow-hidden border-l  px-6 text-lg ">
                                <Link onClick={() => setIsOpen(false)} className="px-6 py-2 duration-300  hover:rounded-lg hover:bg-sky-50 " to="/Components/accordion">
                                    Accordion
                                </Link>
                                <Link onClick={() => setIsOpen(false)} className="px-6 py-2 duration-300  hover:rounded-lg hover:bg-sky-50 " to="/Components/hero">
                                    Hero
                                </Link>
                                <Link onClick={() => setIsOpen(false)} className="px-6 py-2 duration-300  hover:rounded-lg hover:bg-sky-50 " to="/Components/button">
                                    Button
                                </Link>
                                <Link onClick={() => setIsOpen(false)} className="px-6 py-2 duration-300  hover:rounded-lg hover:bg-sky-50 " to="/Components/card">
                                    Card
                                </Link>
                                <Link onClick={() => setIsOpen(false)} className="px-6 py-2 duration-300  hover:rounded-lg hover:bg-sky-50 " to="/Components/form">
                                    Form
                                </Link>
                                <Link onClick={() => setIsOpen(false)} className="px-6 py-2 duration-300  hover:rounded-lg hover:bg-sky-50 " to="/Components/loading">
                                    Loaders
                                </Link>
                                <Link onClick={() => setIsOpen(false)} className="px-6 py-2 duration-300  hover:rounded-lg hover:bg-sky-50 " to="/Components/slider">
                                    Slider
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
Navbar.propTypes = {
    setIsOpen:PropTypes.func
};
export default Navbar;
