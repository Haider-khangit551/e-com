import React, { useEffect, useState } from 'react'
import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'
import client3 from '../assets/client3.png'
import client4 from '../assets/client4.png'
import client5 from '../assets/client5.png'
import client6 from '../assets/client6.png'
import google from '../assets/google.jpg'
import apple from '../assets/apple.jpg'
import pay1 from '../assets/pay-1.jpg'
import pay2 from '../assets/pay-2.jpg'
import pay3 from '../assets/pay-3.jpg'
import pay4 from '../assets/pay-4.jpg'
import { Link } from 'react-scroll'
import { FaArrowUp } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-out'
        })
        AOS.refresh()


        const hadleScroll = () => {
            if (window.scrollY > 200) {
                setScroll(true);
            } else {
                setScroll(false)
            }
        }

        window.addEventListener('scroll', hadleScroll)
        return () => window.removeEventListener('scroll', hadleScroll)

    }, [])



    return (
        <div id='contact' className='w-full flex flex-col justify-center items-center'>

            {/* Clients Row */}
            <div data-aos="zoom-in" data-aos-delay="100" className='w-full bg-[#502ec3] lg:px-20 px-10 py-8 grid lg:grid-cols-6 grid-cols-2 sm:grid-cols-3 justify-center items-center gap-10'>
                {[client1, client2, client3, client4, client5, client6].map((img, i) => (
                    <img key={i} src={img} alt={`client-${i}`} className='w-[130px] opacity-70 cursor-pointer hover:opacity-100' />
                ))}
            </div>

            {/* Main Footer Grid */}
            <div className='w-full lg:px-20 px-5 py-[60px] grid lg:grid-cols-5 grid-cols-1 gap-10'>

                {/* About & Download */}
                <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-4xl font-bold text-[#502ec3] underline italic'>Shop</h1>
                        <p className='text-gray-500 text-justify'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum, nam alias officia pariatur eos eaque quis neque temporibus.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-black text-xl font-semibold capitalize'>Download App</h1>
                        <div className='flex gap-4'>
                            <img src={google} alt="Google Play" className='h-10' />
                            <img src={apple} alt="Apple Store" className='h-10' />
                        </div>
                    </div>
                </div>

                {/* Useful Links - Column 1 */}
                <div data-aos="zoom-in" data-aos-delay="200">
                    <h1 className='text-black text-xl font-semibold capitalize'>Useful Links</h1>
                    <ul className='mt-6 flex flex-col gap-2 text-gray-500'>
                        <li className='cursor-pointer hover:text-black'>Home</li>
                        <li className='cursor-pointer hover:text-black'>Shop</li>
                        <li className='cursor-pointer hover:text-black'>About</li>
                        <li className='cursor-pointer hover:text-black'>Contact</li>
                        <li className='cursor-pointer hover:text-black'>FAQs</li>
                    </ul>
                </div>

                {/* Column 2 */}
                <div data-aos="zoom-in" data-aos-delay="300">
                    <h1 className='text-black text-xl font-semibold capitalize'>Categories</h1>
                    <ul className='mt-6 flex flex-col gap-2 text-gray-500'>
                        <li className='cursor-pointer hover:text-black'>Speaker</li>
                        <li className='cursor-pointer hover:text-black'>Headsets</li>
                        <li className='cursor-pointer hover:text-black'>Buds</li>
                        <li className='cursor-pointer hover:text-black'>CD/DVD</li>
                        <li className='cursor-pointer hover:text-black'>Mobiles</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div data-aos="zoom-in" data-aos-delay="400">
                    <h1 className='text-black text-xl font-semibold capitalize'>Support</h1>
                    <ul className='mt-6 flex flex-col gap-2 text-gray-500'>
                        <li className='cursor-pointer hover:text-black'>Shipping</li>
                        <li className='cursor-pointer hover:text-black'>Returns</li>
                        <li className='cursor-pointer hover:text-black'>Privacy Policy</li>
                        <li className='cursor-pointer hover:text-black'>Terms & Conditions</li>
                        <li className='cursor-pointer hover:text-black'>Contact Us</li>
                    </ul>
                </div>

                {/* Payment Logos */}
                <div data-aos="zoom-in" data-aos-delay="500" className='lg:col-span-1 flex flex-col gap-4'>
                    <h1 className='text-black text-xl font-semibold capitalize'>Payment Methods</h1>
                    <div className='flex gap-3 flex-wrap'>
                        {[pay1, pay2, pay3, pay4].map((img, i) => (
                            <img key={i} src={img} alt={`pay-${i}`} className='h-8' />
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll to Top */}
            {/* <div className='w-full flex justify-center items-center py-6'>
                <Link to='contact' smooth duration={500} className='text-[#502ec3] flex items-center gap-2 hover:underline cursor-pointer'>
                    <FaArrowUp /> Back to top
                </Link> */}


            {/* </div> */}

            {
                scroll && (
                    <div id='icon-box' className='bg-[#502ec3] text-white p-3 rounded-full hover:bg-[#f5e60d] hover:text-black cursor-pointer fixed lg:bottom-6 right-6 bottom-6'>
                        <Link to='hero' spy={true} offset={-100} smooth={true}>
                            <FaArrowUp className='w-[35px] h-[35px] ' />
                        </Link>
                    </div>
                )
            }

        </div>
    )
}

export default Footer
