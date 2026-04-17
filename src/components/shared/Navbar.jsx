import React from 'react';
import { CiHome } from "react-icons/ci";
import { ImStatsDots } from 'react-icons/im';
import { RiTimeLine } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className=" px-5 flex items-center
        justify-between shadow h-18 container mx-auto">

    <h2 className="text-3xl font-bold 
            ">
    Keen<span className="font-semibold text-green-900">Keeper</span>
    </h2>

    <ul className="flex items-center gap-3  px-3  rounded-md 
        text-xl font-medium">
        <li>
            <NavLink to={"/"} className={({isActive}) =>
            `flex items-center gap-1.5
        px-3  rounded-md 
        text-xl font-medium ${isActive ? " bg-green-900 py-2 text-white" : ""}`
            }>
                <CiHome />
                Home
            </NavLink>
    </li>

    <li>

    <NavLink to={"/timeline"} className={({isActive}) =>
            `flex items-center gap-1.5
        px-3  rounded-md 
        text-xl font-medium ${isActive ? " bg-green-900 py-2 text-white" : ""}`
            }>
        <RiTimeLine />
        Timeline
    </NavLink>
    </li>

    <li>

    <NavLink to={"/stats"} className={({isActive}) =>
            `flex items-center gap-1.5
        px-3  rounded-md 
        text-xl font-medium ${isActive ? " bg-green-900 py-2 text-white" : ""}`
            }>  
            <ImStatsDots />
        Status
    </NavLink>
    </li>
    </ul>
</nav>
    );
};

export default Navbar;