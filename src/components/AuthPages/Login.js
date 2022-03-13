import React from 'react';

import LoginForm from "./LoginForm";
import Layout from "../Layout";

const Login = () => {
    return (<React.Fragment>
        <Layout>
            <main className="flex justify-between w-full max-h-screen font-intern pb-6">
                <div className="flex flex-col pt-10 px-4 w-full md:pl-32 md:w-7/12">

                    <div className="mb-12">
                        <img src={require('../../assets/img/Group 1.png')} alt="coronaImg"/>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
                        <h2 className="text-xl font-normal text-dark">Welcome back! Please enter your details</h2>
                    </div>

                    <LoginForm/>
                </div>

                <div>
                    <img className="h-screen md:block hidden" src={require('../../assets/img/Rectangle 1.png')}
                         alt="capsuleImg"/>
                </div>

                {/*<div className="animate-pulse fixed bottom-8 left-4 bg-success px-5 py-3 rounded-xl">*/}
                {/*    <span className="text-white">session('success_message')</span>*/}
                {/*</div>*/}
                {/* Error message */}
                {/*<div className="animate-pulse fixed bottom-8 left-4 bg-red-500 px-5 py-3 rounded-xl">*/}
                {/*    <span className="text-white">error message</span>*/}
                {/*</div>*/}
            </main>
        </Layout>
    </React.Fragment>);
};

export default Login;