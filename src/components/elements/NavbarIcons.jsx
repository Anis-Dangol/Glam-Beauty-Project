import { CiHeart } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { IoBagOutline } from "react-icons/io5";
import NavbarLink from "./navbarlink";

const NavbarIcons = () => {
    return (
        <div className="flex flex-row py-4 gap-6">
            <NavbarLink to="/wishlist" key="/wishlist"> <CiHeart className="size-4" color="#5B4636" /></NavbarLink>
            <NavbarLink to="/account" key="/wishlist"> <AiOutlineUser className="size-4" color="#5B4636" /></NavbarLink>
            <NavbarLink to="/cart" key="/cart"> <IoBagOutline className="size-4" color="#5B4636"/></NavbarLink>
        </div>  
    )
}

export default NavbarIcons
