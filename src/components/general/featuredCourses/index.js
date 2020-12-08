import React from 'react';
import HomeFeaturedCourseCard from "../../cards/homeFeaturedCourseCard";


const FeaturedCoursesSection = (props) => {

    return <div className={props.sectionClassName}>

        <div className="container mx-auto px-4">
            <h3 className={`font-medium text-custom-primary_2 text-center mt-5 md:mb-10 ${props.titleClassName}`}>{props.title}</h3>

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