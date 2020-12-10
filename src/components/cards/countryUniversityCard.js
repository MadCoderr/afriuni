import React from 'react';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt, faPlayCircle} from "@fortawesome/free-solid-svg-icons";


const CountryUniversityCard = (props) => {

    return <div className="bg-white border border-gray-200 md:p-4 py-2 px-4">
        <div className="flex justify-between space-x-4">
            <div className="flex-none">
                <img src="../univAshesi.jpeg" alt="" className="object-cover w-28 h-full rounded-md"/>
            </div>
            <div className="flex-1">
                <Link href="/university/pretoria">
                    <a className="md:text-xl font-normal text-custom-primary truncate-2-lines max-h-14 leading-6">
                        Institut Universitaire de la Cote
                    </a>
                </Link>
                <div className="flex items-center justify-between my-2 text-gray-600 text-xs md:text-base">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="md:w-3 w-2.5" /> <span>Douala</span>
                    </div>
                    <div>30 Courses</div>
                </div>
                <div className="flex justify-between items-center text-gray-600 text-xs md:text-base">
                    <div className="w-28">10 photos</div>
                    <div className="text-gray-400 italic">Featured</div>
                </div>
            </div>

        </div>

    </div>
};


export default CountryUniversityCard;