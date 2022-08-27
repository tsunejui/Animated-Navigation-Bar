import { FC, useState } from "react";
import { FiX, FiAlignJustify } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const NavBar: FC = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <nav className={`w-64 bg-gray-900 min-h-screen pt-20 fixed top-0 left-0 
        transition ease-in-out duration-300 ${open ? "translate-x-0" : "-translate-x-3/4"}`}>
            {
                open ?
                    <div className="absolute top-4 right-6 cursor-pointer" onClick={handleToggle}>
                        <FiX size={'2.5rem'} color="white" />
                    </div> :
                    <div className="absolute top-4 right-4 cursor-pointer" onClick={handleToggle}>
                        <FiAlignJustify size={'2.5rem'} color="white" />
                    </div>
            }
            <ul className="text-white">
                <li className={`hover:bg-gray-700 cursor-pointer ${location.pathname === '/' && "font-bold"}`}>
                    <Link className="w-full h-full block p-4" to={'/'}>Home</Link>
                </li>
                <li className={`hover:bg-gray-700 cursor-pointer ${location.pathname === '/about' && "font-bold"}`}>
                    <Link className="w-full h-full block p-4" to={'/about'}>About</Link>
                </li>
                <li className={`hover:bg-gray-700 cursor-pointer ${location.pathname === '/contact' && "font-bold"}`}>
                    <Link className="w-full h-full block p-4" to={'/contact'}>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;