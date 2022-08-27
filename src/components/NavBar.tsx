import { FC } from "react";

const NavBar: FC = () => {
    return (
        <nav className="w-64 bg-gray-900 min-h-screen pt-20 fixed top-0 left-0">
            <ul className="text-white">
                <li className="p-3 hover:bg-gray-700 cursor-pointer">Home</li>
                <li className="p-3 hover:bg-gray-700 cursor-pointer">About</li>
                <li className="p-3 hover:bg-gray-700 cursor-pointer">Contact</li>
            </ul>
        </nav>
    )
}

export default NavBar;