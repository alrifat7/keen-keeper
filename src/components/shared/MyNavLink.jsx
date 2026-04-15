import React from 'react';

const MyNavLink = ({ to, children, className }) => {
    return (
            <NavLink to={to} className={({isActive}) =>
            `flex items-center gap-1.5
        px-3  rounded-md 
        text-xl font-medium ${className} ${isActive ? " bg-green-950 py-2 text-white" : ""}`
            }>
                {children}
            </NavLink>
    );
};

export default MyNavLink;