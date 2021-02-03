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
import {GET_FEATURED_COURSE} from "../src/queries/home/get-featuredCourse";

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
        <FeaturedCoursesSection title="Interesting Courses" titleClassName="text-2xl md:text-5xl" sectionClassName="pt-8 md:pt-16 pb-12 md:pb-32" data={props.featuredCourse.data}/>
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

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  today = dd + '/' + mm + '/' + yyyy;

  const featuredCourse = await client.query({
    query : GET_FEATURED_COURSE,
    variables: {
      type: "home",
      start_date : today
    },
  });

  return {
    props : {
      fieldStudy,
      destination,
      featuredCourse
    },
    revalidate: 1
  }
};
