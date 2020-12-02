import React from 'react';
import Link from "next/link";
import HomeFeaturedUniversityCard from "../../../cards/homeFeaturedUniversityCard";



const FeaturedUniversitySection = (props) => {


    return <div className="pt-6 md:pt-14 pb-6 md:pb-14 bg-white transform skew-y-3 relative">


        <div className="bg-white h-24 absolute bottom-0 right-0 left-0 transform -skew-y-3 translate-y-3 md:translate-y-12 z-0" />

        <div className="container mx-auto px-4 transform -skew-y-3">

            <h3 className="text-center md:text-left text-2xl md:text-5xl font-medium text-custom-primary_2 mt-5 md:mb-10">Featured Universities</h3>

            <div className="mt-5 md:mt-10 grid md:grid-cols-3 grid-cols-2 gap-x-2 gap-y-3 md:gap-y-6 grid-flow-row auto-rows-fr auto-cols-fr">

                <HomeFeaturedUniversityCard title="American University in Cairo"/>
                <HomeFeaturedUniversityCard title="Strathmore University"/>
                <HomeFeaturedUniversityCard/>

            </div>


        </div>


    </div>
};

export default FeaturedUniversitySection;