import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SlideShowSection from "../src/components/sections/home/slideShow";
import AboutSection from "../src/components/sections/home/about";
import FieldStudySection from "../src/components/sections/home/fieldStudy";
import DestinationSection from "../src/components/sections/home/destination";
import FeaturedCoursesSection from "../src/components/general/featuredCourses";
import FeaturedUniversitySection from "../src/components/sections/home/featuredUniversity";
import client from "../src/apollo/client";
import {GET_CATEGORIE} from "../src/queries/get-categories";
import {GET_COUNTRIES} from "../src/queries/get-countries";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

        <SlideShowSection/>
        <AboutSection/>
        <FieldStudySection data={props.fieldStudy.data}/>
        <DestinationSection data={props.destination.data}/>
        <FeaturedCoursesSection title="Interesting Courses" titleClassName="text-2xl md:text-5xl" sectionClassName="pt-8 md:pt-16 pb-12 md:pb-32"/>
        <FeaturedUniversitySection/>

    </div>
  )
}

export async function getStaticProps (context){

  const destination = await client.query({
    query : GET_COUNTRIES
  });

  const fieldStudy = await client.query({
    query : GET_CATEGORIE
  });

  return {
    props : {
      fieldStudy,
      destination
    },
    revalidate: 1
  }
};
