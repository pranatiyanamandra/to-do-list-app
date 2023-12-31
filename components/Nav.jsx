"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
const Nav = () => {
    // const { data: session } = useSession();
    const [toggleDropdown, setToggleDropdown] = useState(false);
    // const [providers, setProviders] = useState(null);

    useEffect(() => {
        // (async () => {
        //     const res = await getProviders();
        //     setProviders(res);
        //   })();
    }, [])

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex-gap-2 flex-center">
                <Image src="/assets/images/to-do-icon.png" width={30} height={30} alt="ToDo Logo" className="object-contain" />
                <p className="max-sm:hidden font-satoshi font-semibold text-lg text-black tracking-wide">To-Do App</p>
            </Link>

            <div className="sm:flex hidden">

                <div className="flex gap-3 md:gap-5">
                    <Link href="/create-task"
                        className="rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center">
                        Create Task
                    </Link>
                    <Link href="/analytics"
                        className="rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center">
                        Analytics
                    </Link>
                    <button type="button" className="rounded-full border border-black bg-transparent py-1.5 px-5 text-black transition-all hover:bg-black hover:text-white text-center text-sm font-inter flex items-center justify-center" onClick={signOut}>Sign Out</button>
                    {/* <Link href="/profile">
                            <Image src="/assets/images/profile.svg" width={37} height={37} className="rounded-full" alt="profile"></Image>
                        </Link> */}

                </div>
            </div>

            <div className="sm:hidden flex relative">

                <div className="flex">
                    <Image
                        src="/assets/images/profile.png"
                        width={37}
                        height={37}
                        className="rounded-full"
                        onClick={() => setToggleDropdown((prev) => !prev)}
                        alt="profile" />
                    {toggleDropdown ? (
                        <div className="absolute right-0 top-full mt-3 w-full p-5 rounded-lg bg-white min-w-[210px] flex flex-col gap-2 justify-end items-end">
                            {/* <Link 
                            href="/profile" 
                            className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
                            onClick={()=>setToggleDropdown(false)}
                            >
                            My Profile  
                            </Link> */}
                            <Link
                                href="/create-task"
                                className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
                                onClick={() => setToggleDropdown(false)}
                            >
                                Create Task
                            </Link>
                            <Link
                                href="/analytics"
                                className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
                                onClick={() => setToggleDropdown(false)}
                            >
                                Analytics
                            </Link>
                            <button type="button"
                                className="mt-5 w-full black_btn"
                                onClick={() => { setToggleDropdown(false); signOut(); }}
                            >Sign Out</button>
                        </div>
                    ) : <></>}


                </div>
            </div>
        </nav>
    )
}

export default Nav