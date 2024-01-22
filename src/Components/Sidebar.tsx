import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [navigation] = useState([
        { name: 'Home', to: '/'},
        { name: 'About', to: '/about'},
        { name: 'Contact', to: '/contact'},
        { name: 'Podcast', to: '/podcast'},
    ]);

    return (
        <section className="flex w-48 bg-Licorice text-white flex-col justify-start pt-10">
            <nav className="flex flex-col space-y-6 p-4 ">
                {navigation.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.to}
                        className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${
                            isActive ? 'bg-brown-900' : 'text-brown-400 hover:bg-brown-900'
                        }`
                    }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </nav>
        </section>
    );
};

export default Sidebar;
