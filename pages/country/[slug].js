import React from 'react';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBookOpen,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faPlayCircle,
    faUniversity
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/globals.module.scss";
import Head from "next/dist/next-server/lib/head";
import CountryUniversityCard from "../../src/components/cards/CountryUniversityCard";
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

                    <div className="bg-white border border-gray-200 md:p-8 py-8 px-4 md:mb-6 mb-4">
                        <div className="flex justify-between">
                            <div className="md:w-full w-2/3">
                                <h1 className="text-3xl font-medium text-black">
                                    Republic of south Africa
                                </h1>
                                {!isCurrentMobile && (
                                    <div className="md:flex items-center text-custom-primary text-lg my-7 space-x-20 font-normal hidden">
                                        <div className="flex items-center space-x-3">
                                            <FontAwesomeIcon icon={faBookOpen} className="w-6" /> <span>265 Courses</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <FontAwesomeIcon icon={faUniversity} className="w-6"/> <span>10 Universities</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="w-1/3 md:w-auto">
                                <img src="../Flag_of_South_Africa.svg" alt="" className="object-fill md:h-20"/>
                            </div>
                        </div>
                        {isCurrentMobile && (
                            <div className="flex items-center text-custom-primary text-lg my-7 w-full justify-between font-normal md:hidden">
                                <div className="flex items-center space-x-3">
                                    <FontAwesomeIcon icon={faBookOpen} className="w-4" /> <span className="text-sm">265 Courses</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FontAwesomeIcon icon={faUniversity} className="w-4"/> <span className="text-sm">10 Universities</span>
                                </div>
                            </div>
                        )}
                        <div className="flex items-center md:space-x-8 w-full justify-between md:justify-start">
                            <div className="md:text-lg text-sm font-normal"><span className="font-medium">Academy year</span> : Fev - Nov</div>
                            <div>
                                <div className="bg-gray-200 text-black text-xs md:text-base md:px-4 px-2 py-2 flex items-center space-x-2 rounded-lg">
                                    <FontAwesomeIcon icon={faPlayCircle} className="md:w-5 w-3" /> <span>Watch Video</span>
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

                                <div className="py-5 px-2 break-words items-center font-normal text-xs text-center">
                                    <div className="break-words inline">Diploma/Certificate</div>
                                    <div className="text-gray-400 mt-1">(10 Courses)</div>
                                </div>
                                <div className="py-5 px-2 break-words items-center font-normal text-xs text-center">
                                    <div className="break-words inline">Diploma/Certificate</div>
                                    <div className="text-gray-400 mt-1">(10 Courses)</div>
                                </div>
                                <div className="py-5 px-2 break-words items-center font-normal text-xs text-center">
                                    <div className="break-words inline">Diploma/Certificate</div>
                                    <div className="text-gray-400 mt-1">(10 Courses)</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 divide-x divide-gray-200 border-b border-gray-200">

                                <div className="py-5 px-2 break-words items-center font-normal text-xs text-center">
                                    <div className="break-words inline">Diploma/Certificate</div>
                                    <div className="text-gray-400 mt-1">(10 Courses)</div>
                                </div>
                                <div className="py-5 px-2 break-words items-center font-normal text-xs text-center">
                                    <div className="break-words inline">Diploma/Certificate</div>
                                    <div className="text-gray-400 mt-1">(10 Courses)</div>
                                </div>
                                <div className="py-5 px-2 break-words items-center font-normal text-xs text-center">

                                </div>
                            </div>

                        </div>
                    )}

                    <div className="bg-white border border-gray-200 mb-6">
                        <div className="md:p-6 p-4 font-normal text-2xl border-b border-gray-200 text-black">
                            University in south africa <span className="text-red-400">(25)</span>
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

                                <div className="md:text-2xl text-xl font-normal text-black mt-8 md:mt-12 mb-3">
                                    Johanesburg
                                </div>
                                <div className="md:pl-5 md:text-lg text-custom-primary font-normal">
                                    <ul className="space-y-2">
                                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link> <span className="text-gray-400 text-xs md:text-base ml-2 md:ml-5">(20 Courses)</span></li>
                                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link> <span className="text-gray-400 text-xs md:text-base ml-2 md:ml-5">(20 Courses)</span></li>
                                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link> <span className="text-gray-400 text-xs md:text-base ml-2 md:ml-5">(20 Courses)</span></li>
                                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link> <span className="text-gray-400 text-xs md:text-base ml-2 md:ml-5">(20 Courses)</span></li>
                                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link> <span className="text-gray-400 text-xs md:text-base ml-2 md:ml-5">(20 Courses)</span></li>
                                    </ul>
                                </div>
                                <div className="md:text-2xl text-xl font-normal text-black mt-8 md:mt-12 mb-3">
                                    Johanesburg
                                </div>
                                <div className="md:pl-5 md:text-lg text-custom-primary font-normal">
                                    <ul className="space-y-2">
                                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link> <span className="text-gray-400 text-xs md:text-base ml-2 md:ml-5">(20 Courses)</span></li>
                                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link> <span className="text-gray-400 text-xs md:text-base ml-2 md:ml-5">(20 Courses)</span></li>
                                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link> <span className="text-gray-400 text-xs md:text-base ml-2 md:ml-5">(20 Courses)</span></li>
                                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link> <span className="text-gray-400 text-xs md:text-base ml-2 md:ml-5">(20 Courses)</span></li>
                                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link> <span className="text-gray-400 text-xs md:text-base ml-2 md:ml-5">(20 Courses)</span></li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>





                </div>
                <div className="md:col-span-1">

                    {!isCurrentMobile && (

                        <div className="bg-white border border-gray-200 mb-6 text-black">
                            <div className="p-6 font-normal text-lg border-b border-gray-200 text-black">
                                Study Programmes in south africa
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-200 border-b border-gray-200">

                                <div className="p-10 flex flex-col items-center font-normal text-center">
                                    <div>Diploma/Certificate</div>
                                    <div>10 programmes</div>
                                </div>
                                <div className="p-10 flex flex-col items-center font-normal text-center">
                                    <div>Diploma/Certificate</div>
                                    <div>10 programmes</div>
                                </div>

                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-200 border-b border-gray-200">

                                <div className="p-10 flex flex-col items-center font-normal text-center">
                                    <div>Diploma/Certificate</div>
                                    <div>10 programmes</div>
                                </div>
                                <div className="p-10 flex flex-col items-center font-normal text-center">
                                    <div>Diploma/Certificate</div>
                                    <div>10 programmes</div>
                                </div>

                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-200 border-b border-gray-200">

                                <div className="p-10 flex flex-col items-center font-normal text-center">
                                    <div>Diploma/Certificate</div>
                                    <div>10 programmes</div>
                                </div>
                                <div className="p-10 flex flex-col items-center font-normal text-center">
                                    <div>Diploma/Certificate</div>
                                    <div>10 programmes</div>
                                </div>

                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-200 border-b border-gray-200">

                                <div className="p-10 flex flex-col items-center font-normal text-center">
                                    <div>Diploma/Certificate</div>
                                    <div>10 programmes</div>
                                </div>
                                <div className="p-10 flex flex-col items-center font-normal text-center">
                                    {/*<div>Diploma/Certificate</div>*/}
                                    {/*<div>10 programmes</div>*/}
                                </div>

                            </div>
                        </div>
                    )}

                    <div className="bg-white border border-gray-200 mb-6">
                        <div className="md:p-6 p-4 font-normal text-2xl border-b border-gray-200 text-black">
                            Courses in south Africa
                        </div>
                        <div>

                            <Accordion className={styles.accordion}>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className={styles.accodion_heading}>
                                            <div className="text-lg">
                                                Ingenieurie (15)
                                            </div>
                                            <div className="bg-white text-red-400 md:bg-custom-primary px-6 md:py-5 py-3 md:text-white md:w-1/5 w-auto flex justify-center">
                                                <AccordionItemState>
                                                    {({ expanded }) => (expanded ? <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 text-base" /> : <FontAwesomeIcon icon={faChevronLeft} className="w-3 text-base" />)}
                                                </AccordionItemState>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="px-16 py-5 bg-custom-primary bg-opacity-50 md:bg-white md:bg-opacity-100 text-black md:text-custom-primary">
                                        <ul className="list-disc leading-relaxed space-y-3">
                                            <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa) list-disc list-disc</a></Link></li>
                                            <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                                            <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                                            <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                                            <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                                        </ul>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className={`${styles.accodion_heading} ${<AccordionItemState>{({ expanded }) => (expanded ? 'bg-custom-primary bg-opacity-50' : '')}</AccordionItemState>}`}>
                                            <div className={`text-lg`}>
                                                Ingenieurie (15)
                                            </div>
                                            <div className="bg-white text-red-400 md:bg-custom-primary px-6 md:py-5 py-3 md:text-white md:w-1/5 w-auto flex justify-center">
                                                <AccordionItemState>
                                                    {({ expanded }) => (expanded ? <FontAwesomeIcon icon={faChevronDown} className="w-4 text-base" /> : <FontAwesomeIcon icon={faChevronLeft} className="w-3 text-base" />)}
                                                </AccordionItemState>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="px-16 py-5 bg-custom-primary bg-opacity-50 md:bg-white md:bg-opacity-100 text-black md:text-custom-primary">
                                        <ul className="list-disc leading-relaxed space-y-3">
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

                </div>

            </div>

        </div>
    </div>
};


export default CountryPage;
