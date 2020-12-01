import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SlideShowSection from "../src/components/sections/home/slideShow";
import AboutSection from "../src/components/sections/home/about";
import FieldStudySection from "../src/components/sections/home/fieldStudy";
import DestinationSection from "../src/components/sections/home/destination";
import FeaturedCoursesSection from "../src/components/sections/home/featuredCourses";
import FeaturedUniversitySection from "../src/components/sections/home/featuredUniversity";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

        <SlideShowSection/>
        <AboutSection/>
        <FieldStudySection/>
        <DestinationSection/>
        <FeaturedCoursesSection/>
        <FeaturedUniversitySection/>

    </div>
  )
}
