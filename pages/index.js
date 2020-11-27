import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SlideShowSection from "../src/components/sections/Home/slideShow";
import AboutSection from "../src/components/sections/Home/about";
import FieldStudySection from "../src/components/sections/Home/fieldStudy";
import DestinationSection from "../src/components/sections/Home/destination";
import FeaturedCoursesSection from "../src/components/sections/Home/featuredCourses";
import FeaturedUniversitySection from "../src/components/sections/Home/featuredUniversity";

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
