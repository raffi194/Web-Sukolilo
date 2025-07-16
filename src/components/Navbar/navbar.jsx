import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    return (
        <div>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-lg font-bold">
                        <img src="src/assets/Logo Robotiik (1).png" alt="Sukolilo Logo" className="h-8 inline-block mr-2" />
                    </div>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white">About</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
