import { BsFillArrowRightCircleFill} from "react-icons/bs";
import logo from "../../assets/images/logo.png"
const Navbar = () => {
    return (
        <div>
            <div className="navbar  w-[80%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Products</a></li>
                            <li><a>About Us</a></li>
                            <li><a>Contact Us</a></li>
                        </ul>
                    </div>
                    <img src={logo} className="h-[80px]" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-medium">
                        <li><a>Home</a></li>
                        <li><a>Products</a></li>
                        <li><a>About Us</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="flex text-xl  justify-center items-center gap-4   bg-[#ff1d25b0] px-4 py-2 rounded-full text-white">
                    Shop now
                    <BsFillArrowRightCircleFill/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;