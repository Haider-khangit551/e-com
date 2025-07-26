// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { handleError, handleSuccess } from '../utils';

// const Login = () => {


//     const [loading, setLoading] = useState(false);
//     const [loginInfo, setLoginInfo] = useState({
//         email: '',
//         password: ''
//     })

//     const navigate = useNavigate()

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         const copyLoginInfo = { ...loginInfo }
//         copyLoginInfo[name] = value;
//         setLoginInfo(copyLoginInfo);
//     }

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         if (!loginInfo.email || !loginInfo.password) {
//             return handleError("Fill all the details");
//         }

//         try {
//             setLoading(true);
//             const res = await fetch('http://localhost:8080/auth/login', {
//                 method: "POST",
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(loginInfo)
//             });

//             const result = await res.json();
//             console.log("Login Response:", result); // Debug

//             const { success, message, user, error } = result;
//             const name = user?.name;
//             const token = user?.token;

//             if (success) {
//                 handleSuccess(message);
//                 localStorage.setItem('token', token);
//                 localStorage.setItem('loggedInUser', name);
//                 setTimeout(() => {
//                     navigate('/');
//                 }, 1000);
//             } else if (error) {
//                 const details = error?.details[0].message;
//                 handleError(details);
//             } else {
//                 handleError(message);
//             }
//         } catch (error) {
//             console.log(error);
//             handleError(error.message || "Something went wrong");
//         } finally {
//             setLoading(false);
//         }
//     };




//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//             <form
//                 onSubmit={handleLogin}
//                 className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md"
//             >
//                 <h2 className="text-2xl font-bold text-center mb-6">Login</h2>


//                 <div className="mb-4">
//                     <label className="block text-sm font-medium mb-1" htmlFor="email">
//                         Email
//                     </label>
//                     <input
//                         type="email"
//                         name="email"
//                         id="email"
//                         value={loginInfo.email}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                         required
//                     />
//                 </div>

//                 <div className="mb-6">
//                     <label className="block text-sm font-medium mb-1" htmlFor="password">
//                         Password
//                     </label>
//                     <input
//                         type="password"
//                         name="password"
//                         id="password"
//                         value={loginInfo.password}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                         required
//                     />
//                 </div>

//                 {/* <button
//                     type="submit"
//                     className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
//                 >
//                     Sign Up
//                 </button> */}


//                 <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 flex items-center justify-center"
//                 >
//                     {loading ? (
//                         <div className="flex items-center gap-2">
//                             <svg className="w-5 h-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
//                                 <circle
//                                     className="opacity-25"
//                                     cx="12"
//                                     cy="12"
//                                     r="10"
//                                     stroke="currentColor"
//                                     strokeWidth="4"
//                                 />
//                                 <path
//                                     className="opacity-75"
//                                     fill="currentColor"
//                                     d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
//                                 />
//                             </svg>
//                             <span>Logging in...</span>
//                         </div>
//                     ) : (
//                         'Login'
//                     )}
//                 </button>



//                 {/* Don't have account */}
//                 <p className="text-sm text-center text-gray-600 mt-4">
//                     Do not have an account?{' '}
//                     <Link
//                         to="/signup"
//                         className="text-blue-600 hover:underline font-medium"
//                     >
//                         Signup
//                     </Link>
//                 </p>
//             </form>
//         </div>
//     );
// };

// export default Login;






// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { handleError, handleSuccess } from '../utils';

// const Login = () => {
//     const [loading, setLoading] = useState(false);
//     const [loginInfo, setLoginInfo] = useState({
//         email: '',
//         password: ''
//     });

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setLoginInfo((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         if (!loginInfo.email || !loginInfo.password) {
//             return handleError("Fill all the details");
//         }

//         try {
//             setLoading(true);
//             const res = await fetch('http://localhost:8080/auth/login', {
//                 method: "POST",
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(loginInfo)
//             });

//             const result = await res.json();
//             const { success, message, user, error } = result;
//             const name = user?.name;
//             const token = user?.token;

//             if (success) {
//                 handleSuccess(message);
//                 localStorage.setItem('token', token);
//                 localStorage.setItem('loggedInUser', name);
//                 setTimeout(() => navigate('/'), 1000);
//             } else if (error) {
//                 handleError(error?.details[0].message);
//             } else {
//                 handleError(message);
//             }
//         } catch (error) {
//             console.log(error);
//             handleError(error.message || "Something went wrong");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen flex flex-col md:flex-row">
//             {/* Left Section */}
//             <div
//                 className="md:w-1/2 w-full flex items-center justify-center bg-[#f5e60d] p-10"
//             >
//                 <h2 className="text-4xl italic underline text-[#502ec3] font-bold text-center">
//                     Welcome Back! <br />
//                     Please login to continue.
//                 </h2>
//             </div>

//             {/* Right Section - Login Form */}
//             <div className="md:w-1/2 w-full flex items-center justify-center bg-gray-100 px-4 py-10">
//                 <form
//                     onSubmit={handleLogin}
//                     className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md"
//                 >
//                     <h2 className="text-2xl font-bold text-center mb-6 text-[#502ec3]">Login</h2>

//                     {/* Email */}
//                     <div className="mb-4">
//                         <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             id="email"
//                             value={loginInfo.email}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#502ec3]"
//                             required
//                         />
//                     </div>

//                     {/* Password */}
//                     <div className="mb-6">
//                         <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
//                         <input
//                             type="password"
//                             name="password"
//                             id="password"
//                             value={loginInfo.password}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#502ec3]"
//                             required
//                         />
//                     </div>

//                     {/* Submit */}
//                     <button
//                         type="submit"
//                         disabled={loading}
//                         className="w-full bg-[#502ec3] text-white py-2 rounded-md hover:bg-[#3f1fa3] transition duration-200 flex items-center justify-center"
//                     >
//                         {loading ? (
//                             <div className="flex items-center gap-2">
//                                 <svg className="w-5 h-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
//                                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//                                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z" />
//                                 </svg>
//                                 <span>Logging in...</span>
//                             </div>
//                         ) : (
//                             'Login'
//                         )}
//                     </button>

//                     {/* Signup link */}
//                     <p className="text-sm text-center text-gray-600 mt-4">
//                         Don't have an account?{' '}
//                         <Link to="/signup" className="text-[#502ec3] hover:underline font-medium">
//                             Signup
//                         </Link>
//                     </p>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;























import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!loginInfo.email || !loginInfo.password) {
            return handleError("Fill all the details");
        }

        try {
            setLoading(true);
            const res = await fetch('https://e-com-xdnq.onrender.com/auth/login', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginInfo)
            });

            const result = await res.json();
            const { success, message, user, error } = result;
            const name = user?.name;
            const token = user?.token;

            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', token);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => navigate('/'), 1000);
            } else if (error) {
                handleError(error?.details[0]?.message);
            } else {
                handleError(message);
            }
        } catch (err) {
            handleError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left side */}
            <div className="w-full md:w-1/2 bg-transparent flex flex-col justify-center items-center p-10 text-center">
                <img
                    src="https://rukminim2.flixcart.com/image/704/844/xif0q/earphone-cable-organizer/i/c/j/p9-wireless-headphone-for-man-woman-soft-sound-ancestors-original-imagx9rc5phw6e4r.jpeg?q=90&crop=false"
                    alt="Headphones"
                    className="w-[300px] h-[300px] mb-6"
                />
                <h1 className="text-5xl font-bold italic underline text-[#502ec3]">E-Com</h1>
                <p className="mt-4 text-xl text-[#502ec3] italic">Your one-stop shop for all electronics</p>
            </div>

            {/* Right side - Login Form */}
            <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6">
                <form
                    onSubmit={handleLogin}
                    className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md"
                >
                    <h2 className="text-2xl font-bold text-center mb-6 text-[#502ec3]">Login to Your Account</h2>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1 text-[#502ec3]" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={loginInfo.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#502ec3]"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-1 text-[#502ec3]" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={loginInfo.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#502ec3]"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#502ec3] text-white py-2 rounded-md hover:bg-purple-800 transition duration-200 flex items-center justify-center"
                    >
                        {loading ? (
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                                    />
                                </svg>
                                <span>Logging in...</span>
                            </div>
                        ) : (
                            'Login'
                        )}
                    </button>

                    <p className="text-sm text-center text-gray-600 mt-4">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-[#502ec3] hover:underline font-medium">
                            Signup
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
