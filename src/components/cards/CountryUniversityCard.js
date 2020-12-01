import React from 'react';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt, faPlayCircle} from "@fortawesome/free-solid-svg-icons";


const CountryUniversityCard = (props) => {

    return <div className="bg-white border border-gray-200 md:p-6 p-4">
        <div className="flex justify-between space-x-4">
            <img src="../univAshesi.jpeg" alt="" className="object-cover w-28 rounded-md"/>
            <div>
                <Link href="/university/pretoria">
                    <a className="md:text-xl font-normal text-custom-primary truncate-2-lines max-h-12 leading-6">
                        Institut Universitaire de la Cote
                    </a>
                </Link>
                <div className="flex items-center justify-between mt-2 text-gray-600 text-sm md:text-base">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3" /> <span>Douala</span>
                    </div>
                    <div>30 Courses</div>
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center md:mt-3 mt-2 text-gray-600 text-sm md:text-base">
            <div className="w-28 text-center">10 photos</div>
            <div className="text-gray-400">Featured</div>
        </div>
    </div>
};


export default CountryUniversityCard;