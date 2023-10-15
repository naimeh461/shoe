import Logo from "../../assets/images/logo.png";
import { socialMedia } from "../../utilities/utilities";

const Footer = () => {
    return (
        <div className="mt-20 ">
            <footer className="footer p-10 text-white bg-black">
                <div className='flex flex-col items-start w-[80%] mx-auto'>
                    <a href='/'>
                        <img
                            src={Logo}
                            alt='logo'
                            width={60}
                            height={0}
                            className='m-0 bg-white rounded-full p--2'
                        />
                    </a>
                    <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
                        Get shoes ready for the new term at your nearest Nike store. Find
                        Your perfect Size In Store. Get Rewards
                    </p>
                    <div className='flex items-center gap-5 mt-8'>
                        {socialMedia.map((icon) => (
                            <div
                                className='flex justify-center items-center w-6 h-6 bg-white p-1 rounded-full'
                                key={icon.alt}
                            >
                                <img src={icon.src} alt={icon.alt} width={24} height={24} />
                            </div>
                        ))}
                    </div>
                </div>
                <nav className="">
                    <header className="footer-title text-2xl">Services</header>
                    <div className="flex flex-col gap-6 text-base">
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                </nav>
                <nav className="">
                    <header className="footer-title text-2xl">Company</header>
                    <div className="flex flex-col gap-6 text-base">
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                </nav>
                <nav className="">
                    <header className="footer-title text-2xl">Legal</header>
                    <div className="flex flex-col gap-6 text-base">
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;