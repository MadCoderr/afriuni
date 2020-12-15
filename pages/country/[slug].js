import React from 'react';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBookOpen,
    faChevronDown,
    faChevronLeft,
    faChevronRight, faPlay,
    faPlayCircle,
    faUniversity
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/globals.module.scss";
import Head from "next/dist/next-server/lib/head";
import CountryUniversityCard from "../../src/components/cards/countryUniversityCard";
import Dropdown, {ItemDropdown} from "../../src/components/general/dropdown";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';

import {useMediaQuery} from "react-responsive";
import DestinationCard from "../../src/components/cards/destinationCard";



const CountryPage = (props) => {

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [isCurrentMobile, setIsCurrentMobile] = React.useState(false);

    React.useEffect(() => {
        if(isMobile){
            setIsCurrentMobile(true)
        }else{
            setIsCurrentMobile(false);
        }
    }, [isMobile]);

    return <div>
        <Head>
            <title>Listing of country - Afriuni</title>
        </Head>

        <div className="bg-white">
            <div className="container mx-auto px-4 py-5">
                <div className="flex items-center justify-start space-x-3 text-sm text-custom-primary">
                    <Link href="/">
                        <a>
                            Home
                        </a>
                    </Link>
                    <FontAwesomeIcon icon={faChevronRight} className="w-2"/>
                    <Link href="/country">
                        <a>
                            Countries
                        </a>
                    </Link>
                    <FontAwesomeIcon icon={faChevronRight} className="w-2"/>
                    <span>
                        South Africa
                    </span>
                </div>
            </div>
        </div>

        <div className="container mx-auto md:px-4 md:my-10">
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-0">

                <div className="md:col-span-2">

                    <div className="bg-white border border-gray-200 md:py-4 md:px-6 py-4 px-4 md:mb-6 mb-4">
                        <div className="flex justify-between">
                            <div className="md:w-full w-10/12">
                                <h1 className="text-3xl font-medium text-black">
                                    South Africa
                                </h1>
                                {!isCurrentMobile && (
                                    <div className="md:flex items-center my-4 space-x-20 font-normal hidden">
                                        <div className="flex items-center space-x-3">
                                            <FontAwesomeIcon icon={faBookOpen} className="w-6" /> <span className="text-custom-primary text-lg">265 Courses</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <FontAwesomeIcon icon={faUniversity} className="w-6"/> <span className="text-custom-primary text-lg">10 Universities</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="w-2/12 md:w-auto">
                                <img src="../Flag_of_South_Africa.svg" alt="" className="object-fill md:h-20"/>
                            </div>
                        </div>
                        {isCurrentMobile && (
                            <div className="flex items-center text-lg my-4 w-full justify-between font-normal md:hidden">
                                <div className="flex items-center space-x-3">
                                    <FontAwesomeIcon icon={faBookOpen} className="w-4" /> <span className="text-sm text-custom-primary">265 Courses</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FontAwesomeIcon icon={faUniversity} className="w-4"/> <span className="text-sm text-custom-primary">10 Universities</span>
                                </div>
                            </div>
                        )}
                        <div className="flex items-center md:space-x-8 w-full justify-between md:justify-start">
                            <div className="md:text-lg text-sm font-normal"><span className="font-medium">Academy year</span> : Fev - Nov</div>
                            <div>
                                <div className="text-black text-sm md:text-base flex items-center space-x-2 rounded-lg">
                                    <span className="md:px-2 px-1.5 md:py-1.5 py-1.5 rounded-full border border-black"><FontAwesomeIcon icon={faPlay} className="md:w-2 w-1.5" /></span> <span className="underline font-normal">Watch Video</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="md:mb-6 mb-4">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                                <CountryUniversityCard />
                                <CountryUniversityCard />
                        </div>
                    </div>
                    {isCurrentMobile && (
                        <div className="mb-4 bg-white">

                            <div className="grid grid-cols-3 divide-x divide-gray-200 border-b border-gray-200">

                                <div className="py-3 px-2 break-words items-center text-center text-xs">
                                    <div className="break-words inline text-custom-primary font-normal">Diploma/Certificate</div>
                                    <div className="text-gray-400 mt-1">(10 Courses)</div>
                                </div>
                                <div className="py-3 px-2 break-words items-center text-center text-xs">
                                    <div className="break-words inline text-custom-primary font-normal">Diploma/Certificate</div>
                                    <div className="text-gray-400 mt-1">(10 Courses)</div>
                                </div>
                                <div className="py-3 px-2 break-words items-center text-center text-xs">
                                    <div className="break-words inline text-custom-primary font-normal">Diploma/Certificate</div>
                                    <div className="text-gray-400 mt-1">(10 Courses)</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 divide-x divide-gray-200 border-b border-gray-200">

                                <div className="py-3 px-2 break-words items-center text-center text-xs">
                                    <div className="break-words inline text-custom-primary font-normal">Diploma/Certificate</div>
                                    <div className="text-gray-400 mt-1">(10 Courses)</div>
                                </div>
                                <div className="py-3 px-2 break-words items-center text-center text-xs">
                                    <div className="break-words inline text-custom-primary font-normal">Diploma/Certificate</div>
                                    <div className="text-gray-400 mt-1">(10 Courses)</div>
                                </div>
                                <div className="py-3 px-2 break-words items-center text-center">

                                </div>
                            </div>

                        </div>
                    )}

                    <div className="bg-white border border-gray-200 mb-6">
                        <div className="md:p-4 py-2 px-4 font-normal text-2xl border-b border-gray-200 text-black text-custom-secondary">
                            University in south africa <span>(25)</span>
                        </div>
                        <div className="md:p-6 p-4">

                            <div className="flex items-center space-x-6">
                                <div className="md:w-1/3 w-1/2">
                                    <Dropdown title={"City/Province"}
                                              className="bg-gray-200 flex md:pl-4 pl-2 justify-between items-center text-black font-normal truncate rounded-lg md:text-base text-sm"
                                              maxHeight="250px"
                                              classChevron="md:p-4 p-3 bg-custom-primary text-white"
                                              classDropdown="mt-1 rounded-md shadow-lg"
                                              position="center">
                                        <ItemDropdown value={"Country"} classInactive="font-medium text-custom-primary">Select city/province</ItemDropdown>
                                        <ItemDropdown value={"Cameroon"} classInactive="text-custom-primary">Cameroon</ItemDropdown>
                                        <ItemDropdown value={"South Africa"} classInactive="text-custom-primary">South Africa</ItemDropdown>
                                        <ItemDropdown value={"France"} classInactive="text-custom-primary">France</ItemDropdown>
                                    </Dropdown>
                                </div>
                                <div className="w-1/2 md:w-1/3">
                                    <Dropdown title={"School Type"}
                                              className="bg-gray-200 md:pl-4 pl-2 flex justify-between items-center font-normal text-black truncate rounded-lg md:text-base text-sm"
                                              maxHeight="250px"
                                              classChevron="md:p-4 p-3 bg-custom-primary text-white"
                                              classDropdown="mt-1 rounded-md shadow-lg"
                                              position="center">
                                        <ItemDropdown value={"Country"} classInactive="font-medium text-custom-primary">Select School Type</ItemDropdown>
                                        <ItemDropdown value={"Cameroon"} classInactive="text-custom-primary">Cameroon</ItemDropdown>
                                        <ItemDropdown value={"South Africa"} classInactive="text-custom-primary">South Africa</ItemDropdown>
                                        <ItemDropdown value={"France"} classInactive="text-custom-primary">France</ItemDropdown>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="">

                                <div className="md:text-2xl text-xl font-normal text-black mt-5 md:mt-12 mb-3">
                                    Johanesburg
                                </div>
                                <div className="md:pl-5 md:text-lg text-custom-primary font-normal">
                                    <ul className="space-y-2">
                                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link> <span className="text-gray-400 text-xs md:text-base ml-2 md:ml-5 font-thin italic">(20 Courses)</span></li>
                                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link> <span className="text-gray-400 text-xs md:text-base ml-2 md:ml-5 font-thin italic">(20 Courses)</span></li>
                                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link> <span className="text-gray-400 text-xs md:text-base ml-2 md:ml-5 font-thin italic">(20 Courses)</span></li>
                                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link> <span className="text-gray-400 text-xs md:text-base ml-2 md:ml-5 font-thin italic">(20 Courses)</span></li>
                                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link> <span className="text-gray-400 text-xs md:text-base ml-2 md:ml-5 font-thin italic">(20 Courses)</span></li>
                                    </ul>
                                </div>
                                <div className="md:text-2xl text-xl font-normal text-black mt-5 md:mt-12 mb-3">
                                    Johanesburg
                                </div>
                                <div className="md:pl-5 md:text-lg text-custom-primary font-normal">
                                    <ul className="space-y-2">
                                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link> <span className="text-gray-400 text-xs md:text-base ml-2 md:ml-5 font-thin italic">(20 Courses)</span></li>
                                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link> <span className="text-gray-400 text-xs md:text-base ml-2 md:ml-5 font-thin italic">(20 Courses)</span></li>
                                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link> <span className="text-gray-400 text-xs md:text-base ml-2 md:ml-5 font-thin italic">(20 Courses)</span></li>
                                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link> <span className="text-gray-400 text-xs md:text-base ml-2 md:ml-5 font-thin italic">(20 Courses)</span></li>
                                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link> <span className="text-gray-400 text-xs md:text-base ml-2 md:ml-5 font-thin italic">(20 Courses)</span></li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>





                </div>
                <div className="md:col-span-1">

                    {!isCurrentMobile && (

                        <div className="bg-white border border-gray-200 mb-6 text-black">
                            <div className="grid grid-cols-2 divide-x divide-gray-200 border-b border-gray-200">

                                <div className="p-4 flex flex-col items-center text-center">
                                    <div className="text-custom-primary font-normal">Diploma/Certificate</div>
                                    <div className="text-gray-600">(10 Courses)</div>
                                </div>
                                <div className="p-4 flex flex-col items-center text-center">
                                    <div className="text-custom-primary font-normal">Diploma/Certificate</div>
                                    <div className="text-gray-600">(10 Courses)</div>
                                </div>

                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-200 border-b border-gray-200">

                                <div className="p-4 flex flex-col items-center text-center">
                                    <div className="text-custom-primary font-normal">Diploma/Certificate</div>
                                    <div className="text-gray-600">(10 Courses)</div>
                                </div>
                                <div className="p-4 flex flex-col items-center text-center">
                                    <div className="text-custom-primary font-normal">Diploma/Certificate</div>
                                    <div className="text-gray-600">(10 Courses)</div>
                                </div>

                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-200 border-b border-gray-200">

                                <div className="p-4 flex flex-col items-center text-center">
                                    <div className="text-custom-primary font-normal">Diploma/Certificate</div>
                                    <div className="text-gray-600">(10 Courses)</div>
                                </div>
                                <div className="p-4 flex flex-col items-center text-center">
                                    <div className="text-custom-primary font-normal">Diploma/Certificate</div>
                                    <div className="text-gray-600">(10 Courses)</div>
                                </div>

                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-200 border-b border-gray-200">

                                <div className="p-4 flex flex-col items-center text-center">
                                    <div className="text-custom-primary font-normal">Diploma/Certificate</div>
                                    <div className="text-gray-600">(10 Courses)</div>
                                </div>
                                <div className="p-4 flex flex-col items-center font-normal text-center">
                                    {/*<div>Diploma/Certificate</div>*/}
                                    {/*<div>10 programmes</div>*/}
                                </div>

                            </div>
                        </div>
                    )}

                    <div className="bg-white border border-gray-200 mb-6">
                        <div className="md:p-4 py-2 px-4 font-normal md:text-2xl text-xl border-b border-gray-200 text-custom-secondary">
                            Courses in south Africa
                        </div>
                        <div>
                            <Accordion className={styles.accordion} allowZeroExpanded>
                                <AccordionItem activeClassName="bg-custom-primary bg-opacity-10 text-black font-normal">
                                    <AccordionItemHeading>
                                        <AccordionItemButton className={styles.accordion_heading}>
                                            <div className="text-base md:text-xl">
                                                Ingenieurie (15)
                                            </div>
                                            <div className="px-6 md:py-4 py-3 w-auto flex justify-center">
                                                <AccordionItemState>
                                                    {({ expanded }) => (expanded ? <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 text-base text-gray-600" /> : <FontAwesomeIcon icon={faChevronLeft} className="w-3 text-base text-custom-secondary" />)}
                                                </AccordionItemState>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="px-8 md:py-5 py-3">
                                        <ul className="list-disc leading-relaxed space-y-2 list-inside font-light text-sm md:text-base">
                                            <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa) list-disc list-disc</a></Link></li>
                                            <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                                            <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                                            <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                                            <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                                        </ul>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem activeClassName="bg-custom-primary bg-opacity-10 text-black font-normal">
                                    <AccordionItemHeading>
                                        <AccordionItemButton className={styles.accordion_heading}>
                                            <div className="text-base md:text-xl">
                                                Ingenieurie (15)
                                            </div>
                                            <div className="px-6 md:py-4 py-3 w-auto flex justify-center">
                                                <AccordionItemState>
                                                    {({ expanded }) => (expanded ? <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 text-base text-gray-600" /> : <FontAwesomeIcon icon={faChevronLeft} className="w-3 text-base text-custom-secondary" />)}
                                                </AccordionItemState>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="px-8 md:py-5 py-3">
                                        <ul className="list-disc leading-relaxed space-y-2 list-inside font-light text-sm md:text-base">
                                            <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa) list-disc list-disc</a></Link></li>
                                            <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                                            <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                                            <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                                            <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                                        </ul>
                                    </AccordionItemPanel>
                                </AccordionItem>

                            </Accordion>

                        </div>
                    </div>

                    {isCurrentMobile && (
                        <div className="bg-white border border-gray-200 mb-6">
                            <div className="md:p-4 py-2 px-4 font-normal text-xl border-b border-gray-200 text-custom-secondary">
                                Other Countries in Africa
                            </div>
                            <div>
                                <div className="px-2 py-3 grid md:grid-cols-5 grid-cols-3 gap-x-3 md:gap-x-6 gap-y-4 md:gap-y-8">

                                    <DestinationCard/>
                                    <DestinationCard/>
                                    <DestinationCard/>
                                    <DestinationCard/>
                                    <DestinationCard/>
                                    <DestinationCard/>
                                    <DestinationCard/>
                                    <DestinationCard/>
                                    <DestinationCard/>
                                    <DestinationCard/>


                                </div>
                            </div>
                        </div>
                    )}

                </div>

            </div>

        </div>
    </div>
};

// This function gets called at build time
export async function getStaticPaths() {

    return {
        // Only `/posts/1` and `/posts/2` are generated at build time
        paths: [],
        // Enable statically generating additional pages
        // For example: `/posts/3`
        fallback: true,
    }
}

// This also gets called at build time
export async function getStaticProps({params}) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1

    // Pass post data to the page via props
    return {
        props: { slug: params.slug },
        // Re-generate the post at most once per second
        // if a request comes in
        revalidate: 1,
    }
}


export default CountryPage;
