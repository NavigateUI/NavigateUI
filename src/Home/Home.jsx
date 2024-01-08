import { useState } from 'react';
import Navbar from '../Nav/Navbar';
import Banner from './Banner/Banner';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex gap-5">
            <div className={` ${isOpen ? 'fixed z-[999]' : 'hidden'}`}>
                <Navbar setIsOpen={setIsOpen}></Navbar>
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className="fixed top-0 z-[998] flex w-screen gap-5 bg-white p-4">
                <svg width={40} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g id="Menu / Menu_Alt_03">
                            <path
                                id="Vector1"
                                d="M5 17H13"
                                stroke="#0095FF" // Red
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                id="Vector2"
                                d="M5 12H19"
                                stroke="#000000" // Green
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                id="Vector3"
                                d="M5 7H13"
                                stroke="#0095FF" // Blue
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </g>
                    </g>
                </svg>
                <div>
                    <h1 className="text-3xl  text-gray-800">
                        <span className="text-[#0095FF]">U</span>nifyUI
                    </h1>
                </div>
            </div>
            <div onClick={() => setIsOpen(false)} className={`mx-auto  my-10 w-full ${isOpen ? 'opacity-30 duration-500' : 'opacity-100 duration-500'} lg:opacity-100`}>
                <Banner isOpen={isOpen}></Banner>
            </div>
        </div>
    );
};

export default Home;
