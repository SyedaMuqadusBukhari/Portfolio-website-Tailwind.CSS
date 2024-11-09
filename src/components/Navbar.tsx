import React from "react"
import {IoMdMenu} from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";
import { useState } from "react";


const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)

   const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
   }

    return(
        <div className="container pt-8">
            <div className="flex-justify-between items-center">
                <div className="text-xl font-medium gap-10 lg:gap-16">Muqadus Bukhari</div>
                <ul className="gap-10 lg:gap-16 hidden md:flex flex-justify-between items-center">
                    <li className="menuLink"><a href="#hero">Home</a></li>
                    <li className="menuLink"><a href="#about">About</a></li>
                    <li className="menuLink"><a href="#project">Project</a></li>
                    <li className="menuLink"><a href="#skills">Skills</a></li>
                    <li className="menuLink"><a href="#education">Education</a></li>
                    <li className="menuLink"><a href="#contact">Contact</a></li>
                </ul>
                <div className="md:hidden" onClick={toggleMenu}>
                    {isMenuOpen ? <MdOutlineClear size={30} />:
                    <IoMdMenu size={30} />
                    }

                </div>
            </div>

            {isMenuOpen && (
                <ul className="flex flex-col gap-4 mt-4 md:hidden">
                    <li className="menu.link">
                        <a href="#Hero" onClick={toggleMenu}>Home</a>
                        </li>

                        <li className="menu.link">
                        <a href="#About" onClick={toggleMenu}>About</a>
                        </li>

                        <li className="menu.link">
                        <a href="#Projects" onClick={toggleMenu}>Projects</a>
                        </li>

                        <li className="menu.link">
                        <a href="#Skills" onClick={toggleMenu}>Skills</a>
                        </li>

                        <li className="menu.link">
                        <a href="#Contact" onClick={toggleMenu}>Contact</a>
                        </li>

                        <li className="menu.link">
                        <a href="#Education" onClick={toggleMenu}>Education</a>
                        </li>
                </ul>
            )}

        </div>
    )
}
export default Navbar