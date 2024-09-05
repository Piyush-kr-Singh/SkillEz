import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkMode from './DarkMode';
import { useAuth } from '../store/auth';
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { CgClose } from 'react-icons/cg'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleLinkedInClick = () => {
        window.scrollTo(0, 0);
    };

    const { isLoggedIn } = useAuth();

    return (
        <div className='w-full h-[70px] bg-[#EEF5FF] dark:bg-slate-900 shadow-lg dark:border-b-2 border-slate-100 dark:border-slate-800 p-4 z-10 fixed top-0 left-0 right-0 duration-300'>
            <nav className='max-w-[1290px] mx-auto flex justify-between items-center h-full'>
                <Link to="/" onClick={handleLinkedInClick}>
                    <h1 className='text-2xl font-semibold cursor-pointer sm:text-4xl text-blue-500'>
                        SkillEz
                    </h1>
                </Link>

                <ul className='md:flex hidden items-center gap-10 py-4'>
                    <li className='cursor-pointer hidden md:block'><DarkMode /></li>

                    <li className='text-2xl dark:text-violet-500 text-black'>
                        <Link to="/" onClick={handleLinkedInClick}>Home</Link>
                    </li>
                    <li className='text-2xl dark:text-violet-500 text-black'>
                        <Link to="/about" onClick={handleLinkedInClick}>About</Link>
                    </li>
                    <li className='text-2xl dark:text-violet-500 text-black'>
                        <Link to="/service" onClick={handleLinkedInClick}>Service</Link>
                    </li>
                    <li className='text-2xl dark:text-violet-500 text-black'>
                        <Link to="/contact" onClick={handleLinkedInClick}>Contact</Link>
                    </li>

                    {
                        isLoggedIn ?
                            <li className='text-2xl dark:text-violet-500 text-black'>
                                <Link to="/logout" onClick={handleLinkedInClick}>Logout</Link>
                            </li>
                            :
                            <>
                                <li className='text-2xl dark:text-violet-500 text-black'>
                                    <Link to="/sendotp" onClick={handleLinkedInClick}>Register</Link>
                                </li>
                                <li className='text-2xl dark:text-violet-500 text-black'>
                                    <Link to="/login" onClick={handleLinkedInClick}>Login</Link>
                                </li>
                            </>
                    }
                </ul>


                <ul className={`fixed top-0 z-50 bg-[#EEF5FF] dark:bg-slate-900 w-2/3 h-screen shadow-2xl md:hidden flex flex-col gap-10 text-lg p-7 pt-20 duration-300
                ${open ? 'right-0' : 'right-[-100%]'}`}>
                    <li className='cursor-pointer absolute top-[11%]'><DarkMode /></li>
                    <li className='text-2xl dark:text-violet-500 text-black mt-20'>
                        <Link to="/" onClick={handleLinkedInClick}>Home</Link>
                    </li>
                    <li className='text-2xl dark:text-violet-500 text-black'>
                        <Link to="/about" onClick={handleLinkedInClick}>About</Link>
                    </li>
                    <li className='text-2xl dark:text-violet-500 text-black'>
                        <Link to="/service" onClick={handleLinkedInClick}>Service</Link>
                    </li>
                    <li className='text-2xl dark:text-violet-500 text-black'>
                        <Link to="/contact" onClick={handleLinkedInClick}>Contact</Link>
                    </li>

                    {
                        isLoggedIn ?
                            <li className='text-2xl dark:text-violet-500 text-black'>
                                <Link to="/logout" onClick={handleLinkedInClick}>Logout</Link>
                            </li>
                            :
                            <>
                                <li className='text-2xl dark:text-violet-500 text-black'>
                                    <Link to="/sendotp" onClick={handleLinkedInClick}>Register</Link>
                                </li>
                                <li className='text-2xl dark:text-violet-500 text-black'>
                                    <Link to="/login" onClick={handleLinkedInClick}>Login</Link>
                                </li>
                            </>
                    }
                </ul>


                {
                    open ? <CgClose onClick={() => setOpen(!open)} className='text-black dark:text-white text-2xl md:hidden z-50 cursor-pointer' />
                        :
                        <HiOutlineMenuAlt1 onClick={() => setOpen(!open)} className='text-black dark:text-white text-2xl md:hidden z-50 cursor-pointer ' />
                }

            </nav>
        </div>
    );
};

export default Navbar;