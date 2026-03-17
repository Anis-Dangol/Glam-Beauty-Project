import { CiHeart } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { IoBagOutline } from "react-icons/io5";
import NavbarLink from "./navbarlink";

const NavbarIcons = () => {
    return (
        <div className="flex flex-row py-4 gap-6">
            <NavbarLink to="/asdasd" key="/asdasd"> <CiHeart className="size-4" color="#5B4636" /></NavbarLink>
            <NavbarLink to="/asdasds" key="/asdasds"> <AiOutlineUser className="size-4" color="#5B4636" /></NavbarLink>
            <NavbarLink to="/asdasd" key="/asdasd"> <IoBagOutline className="size-4" color="#5B4636"/></NavbarLink>
        </div>  
    )
}

export default NavbarIcons
