import { FC } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout:FC = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default Layout;