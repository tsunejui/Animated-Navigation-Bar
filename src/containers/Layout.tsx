import { FC } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout:FC = () => {
    return (
        <>
            <NavBar />
            <div className="w-full absolute text-center items-center left-16">
                <Outlet />
            </div>
        </>
    )
}

export default Layout;