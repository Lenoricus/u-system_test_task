import React from 'react';
import {BsChevronDown} from "react-icons/bs";
import {FiSettings} from "react-icons/fi";

const Navbar = () => {
    return (
        <div className="flex justify-end p-2 relative">
            <div className="flex items-center">
                <FiSettings  className="m-2 text-gray-500"/>
                <div className="w-px h-4/5 bg-gray-300 m-2"></div>
                <div className="flex items-center gap-2 cursor-pointer p-1 rounded-lg">
                    <img
                        className="rounded-full w-8 h-8"
                        src={"./avatar.png"}
                        alt="user-profile"
                    />
                    <span className="text-gray-500 text-14">null null</span>
                </div>
                <BsChevronDown  className="m-2 text-gray-500"/>
            </div>
        </div>
    );
};

export default Navbar;