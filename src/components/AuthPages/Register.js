import React from 'react';
import Layout from "../Layout";
import RegisterForm from "./RegisterForm";

const Register = () => {
    return <React.Fragment>
        <Layout>
            <main className="flex justify-between w-full max-h-screen font-intern">
                <div className="flex flex-col pt-10 px-4 w-full md:pl-32 md:w-7/12">
                    <div className="mb-12">
                        <img src={require('../../assets/img/Group 1.png')} alt="coronaImg" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mb-2">Welcome to Coronatime</h1>
                        <h2 className="text-xl font-normal text-dark">Please enter required info to sign up</h2>
                    </div>

                    <RegisterForm/>
                </div>

                <div>
                    <img className="h-screen hidden md:flex" src={require('../../assets/img/Rectangle 1.png')} alt="capsuleImg" />
                </div>

                {/*@if (session()->has('success_message'))*/}
                {/*<div className="animate-pulse fixed bottom-8 left-4 bg-success px-5 py-3 rounded-xl">*/}
                {/*    <span className="text-white">success_message</span>*/}
                {/*</div>*/}
                {/*@endif*/}
                {/*@if (session()->has('error_message'))*/}
                {/*<div className="animate-pulse fixed bottom-8 left-4 bg-red-500 px-5 py-3 rounded-xl">*/}
                {/*    <span className="text-white">error_message</span>*/}
                {/*</div>*/}
                {/*@endif*/}
            </main>
        </Layout>
    </React.Fragment>;
};

export default Register;