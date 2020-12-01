import React from 'react';
import Link from "next/link";
import HomeFeaturedCourseCard from "../../../cards/homeFeaturedCourseCard";


const FeaturedCoursesSection = (props) => {

    return <div className="pt-8 md:pt-16 pb-12 md:pb-32">

        <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-5xl font-medium text-custom-primary2 text-center mt-5 md:mb-10">Interesting Courses</h3>

            <div className="mt-5 md:mt-10 space-y-4 md:space-y-0 md:grid md:grid-cols-3 grid-cols-none gap-x-4 gap-y-2 md:gap-y-6 grid-flow-row auto-cols-fr">

                <HomeFeaturedCourseCard title="Electronic and Computer Engineering, PhD"/>
                <HomeFeaturedCourseCard title="Computer Engineering"/>
                <HomeFeaturedCourseCard title="Electronic and Computer Engineering, PhD"/>
                <HomeFeaturedCourseCard title="Computer Engineering"/>
                <HomeFeaturedCourseCard title="Electronic and Computer Engineering, PhD"/>
                <HomeFeaturedCourseCard title="Computer Engineering"/>

            </div>

        </div>

    </div>

};

export default FeaturedCoursesSection;