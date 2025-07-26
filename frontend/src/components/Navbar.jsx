import React, { useEffect, useState, useRef } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { Link } from 'react-scroll';
import { FaXmark, FaBars, FaPhoneVolume } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from '../utils';

const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ offset: 100, duration: 500, easing: 'ease-in-out' });
        AOS.refresh();
    }, []);


    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }), []

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const profileRef = useRef();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const handleLogout = () => {
        console.log('User logged out');
        localStorage.removeItem('token')
        localStorage.removeItem('loggedInUser')
        setIsProfileOpen(false);
        navigate('/login')
        handleSuccess('Logout successfully')
       
    };


    const navItems = [
        { link: 'Home', path: 'hero' },
        { link: 'Category', path: 'category' },
        { link: 'Brands', path: 'contact' },
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);



    return (
        <>
            <div className="w-full px-16 py-2 bg-[#f5e60d] lg:flex hidden justify-between items-center gap-6">
                <h1 className="text-sm flex items-center gap-2">
                    <FaPhoneVolume className="size-[18px]" />
                    <span>+91 xxx xxx xxx</span>
                </h1>
                <h1 className="text-sm flex items-center gap-2">
                    <FaMapMarkerAlt className="size-[18px]" />
                    <span>Bareilly</span>
                </h1>
                <h1 className="text-sm flex items-center gap-2">
                    <MdEmail className="size-[18px]" />
                    <span>ecom123@gmail.com</span>
                </h1>
            </div>

            <nav className="w-full bg-gray-100 flex justify-between items-center gap-7 lg:px-16 px-6 py-5 sticky top-0 z-50">
                <h1 className="text-[#502ec3] font-bold lg:text-[30px] text-3xl underline italic">E-Com</h1>

                {/* Desktop Menu */}
                <ul className="lg:flex justify-center items-center gap-10 hidden">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            className="text-black text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-[#502ec3] hover:text-white"
                            to={item.path}
                            spy={true}
                            offset={-100}
                            smooth={true}
                        >
                            {item.link}
                        </Link>
                    ))}
                </ul>

                {/* Desktop Icons */}
                <div className="lg:flex hidden justify-center items-center gap-6 text-black relative">
                    <div className="relative" ref={profileRef}>
                        <div
                            className="flex items-center gap-2 cursor-pointer hover:text-[#502ec3]"
                            onClick={() => setIsProfileOpen((prev) => !prev)}
                        >
                            <IoPerson className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300" />
                            <span className="font-semibold">{loggedInUser}</span>
                        </div>
                        {isProfileOpen && (
                            <div className="absolute top-10 left-0 bg-white border border-gray-300 rounded shadow-md p-2 z-50">
                                <button
                                    className="text-sm font-medium text-red-500 hover:underline"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>

                    <FaHeart className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-[#502ec3]" />
                    <div className="relative">
                        <FaShoppingCart className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-[#502ec3]" />
                        <div className="bg-[#502ec3] hover:bg-[#f5e60d] px-3 py-1 text-white hover:text-black rounded-full absolute -top-[24px] -right-[15px] font-bold cursor-pointer">
                            2
                        </div>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="flex justify-center items-center lg:hidden mt-3" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <FaXmark className="text-[#502ec3] text-3xl cursor-pointer" />
                    ) : (
                        <FaBars className="text-[#502ec3] text-3xl cursor-pointer" />
                    )}
                </div>

                {/* Mobile Menu */}
                <div
                    className={`${isMenuOpen ? 'flex' : 'hidden'
                        } w-full bg-[#502ec3] p-4 absolute top-[80px] left-0 flex-col gap-2 z-50`}
                    onClick={closeMenu}
                >
                    <ul className="flex flex-col justify-center items-center gap-3 w-full">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-[#f5e60d] hover:text-white"
                                to={item.path}
                                spy={true}
                                offset={-100}
                                smooth={true}
                            >
                                {item.link}
                            </Link>
                        ))}

                        {/* Mobile profile logout */}
                        <li className="text-white flex flex-col items-center gap-2 mt-3">
                            <div className="flex items-center gap-2">
                                <IoPerson className="w-5 h-5" />
                                <span className="font-semibold">John</span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="text-red-300 text-sm font-medium hover:underline"
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;






















// import React, { useEffect, useState, useRef } from 'react';
// import { FaHeart, FaShoppingCart } from 'react-icons/fa';
// import { IoPerson } from 'react-icons/io5';
// import { Link } from 'react-scroll';
// import { FaXmark, FaBars, FaPhoneVolume } from 'react-icons/fa6';
// import { FaMapMarkerAlt } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useNavigate } from 'react-router-dom';
// import { handleSuccess } from '../utils';

// const Navbar = () => {
//     const [loggedInUser, setLoggedInUser] = useState('');
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isProfileOpen, setIsProfileOpen] = useState(false);
//     const profileRef = useRef();
//     const navigate = useNavigate();

//     useEffect(() => {
//         AOS.init({ offset: 100, duration: 500, easing: 'ease-in-out' });
//         AOS.refresh();
//     }, []);

//     useEffect(() => {
//         setLoggedInUser(localStorage.getItem('loggedInUser'));
//     }, []);

//     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//     const closeMenu = () => setIsMenuOpen(false);

//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         localStorage.removeItem('loggedInUser');
//         setIsProfileOpen(false);
//         setLoggedInUser('');
//         navigate('/login');
//         handleSuccess('Logout successfully');
//     };

//     const navItems = [
//         { link: 'Home', path: 'hero' },
//         { link: 'Category', path: 'category' },
//         { link: 'Brands', path: 'contact' },
//     ];

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (profileRef.current && !profileRef.current.contains(event.target)) {
//                 setIsProfileOpen(false);
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);

//     return (
//         <>

//             <div className="w-full px-16 py-2 bg-[#f5e60d] lg:flex hidden justify-between items-center gap-6">
//                 <h1 className="text-sm flex items-center gap-2">
//                     <FaPhoneVolume className="size-[18px]" />
//                     <span>+91 xxx xxx xxx</span>
//                 </h1>
//                 <h1 className="text-sm flex items-center gap-2">
//                     <FaMapMarkerAlt className="size-[18px]" />
//                     <span>Bareilly</span>
//                 </h1>
//                 <h1 className="text-sm flex items-center gap-2">
//                     <MdEmail className="size-[18px]" />
//                     <span>ecom123@gmail.com</span>
//                 </h1>
//             </div>


//             <nav className="w-full bg-gray-100 flex justify-between items-center gap-7 lg:px-16 px-6 py-5 sticky top-0 z-50">

//                 <h1 className="text-[#502ec3] font-bold lg:text-[30px] text-3xl underline italic">E-Com</h1>

//                 {/* Desktop Menu */}
//                 <ul className="lg:flex justify-center items-center gap-10 hidden">
//                     {navItems.map((item, index) => (
//                         <Link
//                             key={index}
//                             className="text-black text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-[#502ec3] hover:text-white"
//                             to={item.path}
//                             spy={true}
//                             offset={-100}
//                             smooth={true}
//                         >
//                             {item.link}
//                         </Link>
//                     ))}
//                 </ul>

//                 {/* Desktop Icons */}
//                 <div className="lg:flex hidden justify-center items-center gap-6 text-black relative">
//                     {/* Profile Dropdown */}
//                     <div className="relative" ref={profileRef}>
//                         <div
//                             className="flex items-center gap-2 cursor-pointer hover:text-[#502ec3]"
//                             onClick={() => setIsProfileOpen((prev) => !prev)}
//                         >
//                             <IoPerson className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300" />
//                             <span className="font-semibold">{loggedInUser}</span>
//                         </div>
//                         {isProfileOpen && (
//                             <div className="absolute top-10 left-0 bg-white border border-gray-300 rounded shadow-md p-2 z-50">
//                                 <button
//                                     className="text-sm font-medium text-red-500 hover:underline"
//                                     onClick={handleLogout}
//                                 >
//                                     Logout
//                                 </button>
//                             </div>
//                         )}
//                     </div>

//                     <FaHeart className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-[#502ec3]" />

//                     <div className="relative">
//                         <FaShoppingCart className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-[#502ec3]" />
//                         <div className="bg-[#502ec3] hover:bg-[#f5e60d] px-3 py-1 text-white hover:text-black rounded-full absolute -top-[24px] -right-[15px] font-bold cursor-pointer">
//                             2
//                         </div>
//                     </div>
//                 </div>

//                 {/* Mobile Right Icons (Person + Menu Toggle) */}
//                 <div className="flex items-center gap-4 lg:hidden">
//                     {/* Profile on mobile */}
//                     <div className="relative" ref={profileRef}>
//                         <div
//                             className="flex items-center gap-2 cursor-pointer hover:text-[#502ec3]"
//                             onClick={() => setIsProfileOpen((prev) => !prev)}
//                         >
//                             <IoPerson className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300" />
//                             <span className="text-xl font-semibold">{loggedInUser}</span>
//                         </div>
//                         {isProfileOpen && (
//                             <div className="absolute top-10 left-0 bg-white border border-gray-300 rounded shadow-md p-2 z-50">
//                                 <button
//                                     className="text-sm font-medium text-red-500 hover:underline"
//                                     onClick={handleLogout}
//                                 >
//                                     Logout
//                                 </button>
//                             </div>
//                         )}
//                     </div>

//                     {/* Mobile Toggle */}
//                     <div onClick={toggleMenu}>
//                         {isMenuOpen ? (
//                             <FaXmark className="text-[#502ec3] text-3xl cursor-pointer" />
//                         ) : (
//                             <FaBars className="text-[#502ec3] text-3xl cursor-pointer" />
//                         )}
//                     </div>
//                 </div>

//                 {/* Mobile Menu Dropdown */}
//                 <div
//                     className={`${isMenuOpen ? 'flex' : 'hidden'
//                         } w-full bg-[#502ec3] p-4 absolute top-[80px] left-0 flex-col gap-2 z-50`}
//                     onClick={closeMenu}
//                 >
//                     <ul className="flex flex-col justify-center items-center gap-3 w-full">
//                         {navItems.map((item, index) => (
//                             <Link
//                                 key={index}
//                                 className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-[#f5e60d] hover:text-white"
//                                 to={item.path}
//                                 spy={true}
//                                 offset={-100}
//                                 smooth={true}
//                             >
//                                 {item.link}
//                             </Link>
//                         ))}
//                     </ul>
//                 </div>
//             </nav>
//         </>
//     );
// };

// export default Navbar;
