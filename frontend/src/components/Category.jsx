import React, { useEffect } from 'react'
import cat1 from '../assets/cat1.jpg'
import cat2 from '../assets/cat2.jpg'
import cat3 from '../assets/cat3.jpg'
import cat4 from '../assets/cat4.jpg'
import cat5 from '../assets/cat5.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Category = () => {

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-out'
        })
        AOS.refresh()

    }, [])

    return (
        <div id='category' className='w-full bg-gray-100 lg:px-20 px-5 pt-[130px] pb-[80px] flex lg:flex-row flex-col justify-center items-center gap-20'>
            <div data-aos="zoom-in" data-aos-delay="50" className='lg:w-[15%] w-full flex flex-col justify-center lg:items-start items-center gap-[20px]'>
                <h1 className='text-[#502ec3] text-xl font-semibold text-center'>Items You Love</h1>
                <h1 className='text-black font-semibold text-[42px] leading-[40px] text-center'>Most Like Category</h1>
                <button className='bg-[#502ec3] hover:bg-[#f5e60d] text-white hover:text-black px-8 py-3 rounded-lg font-semibold mt-[60px]'>VIEW ALL</button>
            </div>
            <div className='lg:w-[85%] w-full grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10'>
                <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center ga-6'>
                    <img src={cat1} alt="" className='rounded-full' />
                    <h1 className='text-blxl text-xl font-semibold hover:text-[#502ec3] cursor-pointer'>Portable Speaker</h1>
                </div>

                <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center ga-6'>
                    <img src={cat2} alt="" className='rounded-full' />
                    <h1 className='text-blxl text-xl font-semibold hover:text-[#502ec3] cursor-pointer'>Portable Speaker</h1>
                </div>

                <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center ga-6'>
                    <img src={cat3} alt="" className='rounded-full' />
                    <h1 className='text-blxl text-xl font-semibold hover:text-[#502ec3] cursor-pointer'>Portable Speaker</h1>
                </div>

                <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center ga-6'>
                    <img src={cat4} alt="" className='rounded-full' />
                    <h1 className='text-blxl text-xl font-semibold hover:text-[#502ec3] cursor-pointer'>Portable Speaker</h1>
                </div>

                <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center ga-6'>
                    <img src={cat5} alt="" className='rounded-full' />
                    <h1 className='text-blxl text-xl font-semibold hover:text-[#502ec3] cursor-pointer'>Portable Speaker</h1>
                </div>
            </div>
        </div>
    )
}

export default Category







// import React, { useEffect } from 'react'
// import cat1 from '../assets/cat1.jpg'
// import cat2 from '../assets/cat2.jpg'
// import cat3 from '../assets/cat3.jpg'
// import cat4 from '../assets/cat4.jpg'
// import cat5 from '../assets/cat5.jpg'
// import AOS from 'aos'
// import 'aos/dist/aos.css'

// const Category = () => {
//     useEffect(() => {
//         AOS.init({
//             offset: 100,
//             duration: 500,
//             easing: 'ease-in-out'
//         })
//     }, [])

//     const categories = [
//         { img: cat1, name: 'Cameras' },
//         { img: cat2, name: 'Headphones' },
//         { img: cat3, name: 'Speakers' },
//         { img: cat4, name: 'Watches' },
//         { img: cat5, name: 'Gaming' },
//     ]

//     return (
//         <div id='category' className='w-full bg-gray-100 px-5 lg:px-20 pt-[130px] pb-[80px]'>
//             <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>

//                 {/* Left Text Section */}
//                 <div data-aos="zoom-in" data-aos-delay="50" className='lg:w-1/4 w-full flex flex-col justify-center lg:items-start items-center gap-[20px] text-center lg:text-left'>
//                     <h1 className='text-[#502ec3] text-xl font-semibold'>Items You Love</h1>
//                     <h1 className='text-black font-semibold text-[36px] leading-[40px]'>Most Liked Categories</h1>
//                     <button className='bg-[#502ec3] hover:bg-[#f5e60d] text-white hover:text-black px-8 py-3 rounded-lg font-semibold mt-[40px]'>
//                         VIEW ALL
//                     </button>
//                 </div>

//                 {/* Right Cards Section */}
//                 <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full lg:w-3/4'>

//                     {categories.map((cat, index) => (
//                         <div key={index} data-aos="zoom-in" data-aos-delay={100 + index * 100} className='bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 cursor-pointer'>
//                             <img src={cat.img} alt={cat.name} className='w-full h-[150px] object-cover' />
//                             <div className='p-3 text-center font-semibold text-gray-700'>
//                                 {cat.name}
//                             </div>
//                         </div>
//                     ))}

//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Category
