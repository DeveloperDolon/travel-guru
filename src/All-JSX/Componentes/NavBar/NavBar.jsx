
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logos.png";
import "./NavBar.css";

const NavBar = () => {
    return (
        <header className="p-4">
            <div className="navbar justify-between gap-3 md:items-center items-start">
                <div className="justify-between md:gap-0 gap-5 flex-grow md:flex-nowrap flex-wrap">
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink className="text-base font-medium hover:text-yellow-500 hover:bg-white" to={"/news"}  >News</NavLink>
                            </li>
                            <li>
                                <NavLink className="text-base font-medium hover:text-yellow-500 hover:bg-white" to={"/destination"}  >Destination</NavLink>
                            </li>
                            <li>
                                <NavLink className="text-base font-medium hover:text-yellow-500 hover:bg-white" to={"/blog"}  >Blog</NavLink>
                            </li>
                            <li>
                                <NavLink className="text-base font-medium hover:text-yellow-500 hover:bg-white" to={"/contact"}  >Contact</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <img className="w-28" src={logo} alt="" />
                    </div>

                    <div className="md:w-[60%] w-full">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-white dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-white border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search your Destination..." required/>
                        </div>
                    </div>
                </div>
                    
                <div className="hidden lg:flex">
                    <ul className="menu  menu-horizontal px-1 text-white space-x-4">
                        <li>
                            <NavLink className="text-base font-medium hover:text-yellow-500 hover:bg-white" to={"/news"}  >News</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-base font-medium hover:text-yellow-500 hover:bg-white" to={"/destination"}  >Destination</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-base font-medium hover:text-yellow-500 hover:bg-white" to={"/blog"}  >Blog</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-base font-medium hover:text-yellow-500 hover:bg-white" to={"/contact"}  >Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <a className="btn px-10 bg-[#F9A51A] border-none capitalize text-lg">Login</a>
                </div>
            </div>
        </header>
    );
};

export default NavBar;