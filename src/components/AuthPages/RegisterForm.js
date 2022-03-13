import React from "react";
import {Link} from "react-router-dom";

const RegisterForm = () => {
    return (
        <React.Fragment>
            <form action="#" method="post" className="flex flex-col w-full mt-4 md:w-6/12">

                <div className="flex flex-col relative">
                    <label htmlFor="username" className="mb-2">Username</label>
                    <input
                        className="px-4 py-4 rounded-lg border border-red-600 @else border-green-600 border-gray-200 mb-1 placeholder-dark"
                        type="text" name="username" placeholder="Enter unique username or email"/>

                    {/*@if ($username && !$errors->has('username'))*/}
                    <span>
                <img className="w-6 h-6 absolute top-12 right-4"
                     src={require('../../assets/img/validation/checkbox-circle-fill.png')} alt="checked"/>
            </span>
                    {/*@endif*/}
                </div>
                {/*@error('username')*/}
                <span className="text-sm text-red-600 flex mb-2 mt-1">
            <img className="mr-1 w-5 h-5" src={require('../../assets/img/validation/error-warning-fill.png')}
                 alt="error"/>
                    message
        </span>

                <div className="flex flex-col relative">
                    <label htmlFor="email" className="mb-2">Email</label>
                    <input
                        className="px-4 py-4 rounded-lg border @if ($email) @error('email') border-red-600 @else border-green-600 @enderror @else border-gray-200 @endif mb-2 placeholder-dark"
                        type="text" name="email" placeholder="Enter your email"/>

                    {/*@if ($email && !$errors->has('email'))*/}
                    <span>
                <img className="w-6 h-6 absolute top-12 right-4"
                     src={require('../../assets/img/validation/checkbox-circle-fill.png')} alt="checked"/>
            </span>
                    {/*@endif*/}

                    {/*@error('email')*/}
                    <span className="text-sm text-red-600 flex mb-2 mt-1">
                <img className="mr-1 w-5 h-5" src={require('../../assets/img/validation/error-warning-fill.png')}
                     alt="error"/>
                    message
            </span>
                </div>

                <div className="flex flex-col relative">
                    <label htmlFor="password" className="mb-2">Password</label>
                    <input className="px-4 py-4 rounded-lg border border-gray-200 mb-2 placeholder-dark"
                           type="password" name="password" id="password" placeholder="Fill in password"/>

                    <span className="text-sm text-red-600 flex mb-2 mt-1">
                <img className="mr-1 w-5 h-5" src={require('../../assets/img/validation/error-warning-fill.png')}
                     alt="error"/>
                    message
            </span>
                </div>

                <div className="flex flex-col relative">
                    <label htmlFor="password_confirmation" className="mb-2">Repeat password</label>
                    <input id="password_confirmation"
                           className="px-4 py-4 rounded-lg border border-gray-200 mb-2 placeholder-dark" type="password"
                           name="password_confirmation" placeholder="Repeat password"/>

                    <span className="text-sm text-red-600 flex mb-2 mt-1">
                <img className="mr-1 w-5 h-5" src={require('../../assets/img/validation/error-warning-fill.png')}
                     alt="error"/>
                    message
            </span>
                </div>

                <div className="flex items-center gap-1">
                    <input type="checkbox" id="remember" name="remember"
                           className="border border-gray-200 text-success transition duration-100 ease-in rounded-4 form-checkbox"/>
                    <label className="ml-1" htmlFor="remember">Remember this device</label>
                </div>
                <div>
                    <button type="submit"
                            className="py-4 transition duration-150 ease-in text-white font-semibold
        uppercase hover:bg-hover-success bg-success my-5 w-full rounded-md">Sign Up
                    </button>
                </div>

                <div className="flex items-center justify-center space-x-2">
                    <p className="text-dark">Already have an account?</p>
                    <Link className="font-semibold hover:underline" to="/login">Log In</Link>
                </div>
            </form>
        </React.Fragment>
    );
};

export default RegisterForm;