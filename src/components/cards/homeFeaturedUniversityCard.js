import React from 'react';
import Link from "next/link";

const HomeFeaturedUniversityCard = (props) => {



    return <div className="bg-white rounded-xl flex flex-col justify-between h-full">

        <img src="univAshesi.jpeg" alt="" className="h-24 md:h-48 w-full rounded-t-xl flex-none"/>
        <div className="border-l border-r border-b border-gray-200 rounded-b-xl p-2 md:p-6 -mt-10 md:-mt-16 flex-1 flex-col flex">
            <div className="flex-none">
                <div className="border border-gray-200 p-2 inline-block bg-white rounded-xl md:mb-2">
                    <img src="logoUni.jpg" alt="" className="w-6 md:w-12"/>
                </div>
            </div>
            <Link href="/">
                <a className="text-custom-primary font-medium block text-sm md:text-2xl mb-2 md:my-2 truncate-2-lines max-h-8 leading-4 md:max-h-12 md:leading-6 flex-1">
                    {props.title}
                </a>
            </Link>
            <div className="flex md:flex-row flex-col space-y-1 md:space-y-0 md:justify-between md:items-center flex-1">
                <div className="text-gray-400 text-xs md:text-base">Stellenbosch, South Africa</div>
                <div className="text-custom-secondary text-xs md:text-base">10 Courses</div>
            </div>
        </div>
    </div>
};

export default HomeFeaturedUniversityCard