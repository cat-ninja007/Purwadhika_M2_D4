import React from 'react';

interface HamburgerButtonProps {
    toggleMenu: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ toggleMenu }) => {
    return (
        <div
            className="hamburger-button fixed top-10 right-10 bg-black text-white p-3 rounded-full cursor-pointer z-50"
            onClick={toggleMenu}
        >
           
            <div className="hamburger-icon w-20 h-20 flex flex-col justify-center items-center gap-2">
                <span className="block w-10 h-1 bg-white mb-1"></span>
                <span className="block w-10 h-1 bg-white"></span>
            </div>
        </div>
    );
};

export default HamburgerButton;

