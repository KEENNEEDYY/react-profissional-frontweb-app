import './styles.css';
import { Outlet } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";

export default function Admin() {
    return (
    <>
        <HeaderAdmin />
        <Outlet />
    </>
    )
}