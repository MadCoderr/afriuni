import React from 'react';
import Link from "next/link";

const CountryMenu = () => {

    return <>

        <h3 className="bg-custom-primary md:bg-white text-white md:text-custom-primary_2 text-base font-medium md:font-normal md:text-xl  md:mt-6 py-4 px-5 md:p-0">African Country</h3>

        <div className="flex flex-col md:flex-row md:space-x-5 md:py-5 bg-white h-full">


            <Link href="#">
                <a className="font-medium md:font-light hover:text-custom-secondary block py-4 border-b border-gray-400 md:border-0 md:py-0 px-5 md:px-0">
                    Nigeria
                </a>
            </Link>
            <Link href="#">
                <a className="font-medium md:font-light hover:text-custom-secondary block py-4 border-b border-gray-400 md:border-0 md:py-0 px-5 md:px-0">
                    Nigeria
                </a>
            </Link>


        </div>

    </>


};

export default CountryMenu;