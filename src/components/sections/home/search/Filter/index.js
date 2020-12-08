import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemState
} from "react-accessible-accordion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import ComposeFilter from "./composeFilter";
import Link from "next/link";
import ElementFilter from "./elementFilter";


const FilterSection = (props) => {

    const [specialisationData, setSpecialisationData] = React.useState([]);
    const [degreeTypeData, setDegreeTypeData] = React.useState([]);
    const [countriesData, setCountriesData] = React.useState([]);

    React.useEffect(() => {

        const specialisation = [
            {
                slug : "engenierie",
                name : "Engenierie",
                count: 200,
                children : [
                    {
                        slug : 'children-one',
                        name : 'Children one'
                    },
                    {
                        slug : 'children-one2',
                        name : 'Children one'
                    },
                    {
                        slug : 'children-one3',
                        name : 'Children one'
                    },
                    {
                        slug : 'children-one4',
                        name : 'Children one'
                    },
                    {
                        slug : 'children-one5',
                        name : 'Children one'
                    }
                ]
            },
            {
                slug : "journalism-media",
                name : "Journalism & Media",
                count : 196,
                children : [
                    {
                        slug : 'children-two',
                        name : 'Children two'
                    },
                    {
                        slug : 'children-two2',
                        name : 'Children two'
                    },
                    {
                        slug : 'children-two3',
                        name : 'Children two'
                    },
                    {
                        slug : 'children-two4',
                        name : 'Children two'
                    },
                    {
                        slug : 'children-two5',
                        name : 'Children two'
                    }
                ]
            },
            {
                slug : "agriculture-forestry",
                name : "Agriculture & Forestry",
                count : 300,
                children : [
                    {
                        slug : 'children-three',
                        name : 'Children three'
                    },
                    {
                        slug : 'children-three2',
                        name : 'Children three'
                    },
                    {
                        slug : 'children-three3',
                        name : 'Children three'
                    },
                    {
                        slug : 'children-three4',
                        name : 'Children three'
                    },
                    {
                        slug : 'children-three5',
                        name : 'Children three'
                    }
                ]
            },
            {
                slug : "business-management",
                name : "Business & management",
                count: 99,
                children : [
                    {
                        slug : 'children-foor',
                        name : 'Children foor'
                    },
                    {
                        slug : 'children-foor2',
                        name : 'Children foor'
                    },
                    {
                        slug : 'children-foor3',
                        name : 'Children foor'
                    },
                    {
                        slug : 'children-foor4',
                        name : 'Children foor'
                    },
                    {
                        slug : 'children-foor5',
                        name : 'Children foor'
                    }
                ]
            }
        ]

        setSpecialisationData(specialisation)

        const degreeType = [
            {
                slug : "engenierie",
                name : "Diploma/Certificat",
                count: 200
            },
            {
                slug : "journalism-media",
                name : "Master Degree",
                count : 196
            },
            {
                slug : "agriculture-forestry",
                name : "Bachelors Degree",
                count : 300
            },
            {
                slug : "business-management",
                name : "phD/Doctorate",
                count: 99
            }
        ]

        setDegreeTypeData(degreeType);

        const countries = [
            {
                slug : "engenierie",
                name : "Cameroon",
                count: 200,
                children : [
                    {
                        slug: "douala",
                        name: "Douala"
                    },
                    {
                        slug: "yaounde",
                        name: "Yaounde"
                    },
                    {
                        slug: "bertoua",
                        name: "Bertoua"
                    }
                ]
            },
            {
                slug : "journalism-media",
                name : "South Africa",
                count : 196,
                children: [
                    {
                        slug : "ville1",
                        name : "town one"
                    },
                    {
                        slug : "ville2",
                        name : "town two"
                    },
                    {
                        slug : "ville3",
                        name : "town three"
                    }
                ]
            },
            {
                slug : "agriculture-forestry",
                name : "Ghana",
                count : 300,
                children: [
                    {
                        slug : "ville1",
                        name : "town one 2"
                    },
                    {
                        slug : "ville2",
                        name : "town two 2"
                    },
                    {
                        slug : "ville3",
                        name : "town three 2"
                    }
                ]
            },
            {
                slug : "business-management",
                name : "Kenya",
                count: 99,
                children: [
                    {
                        slug : "ville1",
                        name : "town one 3"
                    },
                    {
                        slug : "ville2",
                        name : "town two 3"
                    },
                    {
                        slug : "ville3",
                        name : "town three 3"
                    }
                ]
            }
        ]

        setCountriesData(countries)


    }, []);


    return <div>
        <Accordion  allowZeroExpanded allowMultipleExpanded preExpanded={[0]} className="border-0">
            <AccordionItem uuid={0} className="mb-7 bg-white border border-gray-200 outline-none">
                <AccordionItemHeading>
                    <AccordionItemButton className="bg-white pl-6 flex justify-between items-center outline-none">
                        <div className="font-normal text-xl text-red-500">
                            Specialisation
                        </div>
                        <div className="px-6 md:py-5 py-3 md:w-1/5 w-auto flex justify-center">
                            <AccordionItemState>
                                {({ expanded }) => (expanded ? <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 text-base" /> : <FontAwesomeIcon icon={faChevronLeft} className="w-3 text-base" />)}
                            </AccordionItemState>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="px-8 py-5 bg-white">
                    <ComposeFilter data={specialisationData} backTitle={"All Fields of Study"}/>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={1} className="mb-7 bg-white border border-gray-200 outline-none">
                <AccordionItemHeading>
                    <AccordionItemButton className="bg-white pl-6 flex justify-between items-center outline-none">
                        <div className="font-normal text-xl text-red-500">
                            Degree Type
                        </div>
                        <div className="px-6 md:py-5 py-3 md:w-1/5 w-auto flex justify-center">
                            <AccordionItemState>
                                {({ expanded }) => (expanded ? <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 text-base" /> : <FontAwesomeIcon icon={faChevronLeft} className="w-3 text-base" />)}
                            </AccordionItemState>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="px-8 py-5 bg-white">
                    <ElementFilter data={degreeTypeData}/>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={2} className="mb-7 bg-white border border-gray-200 outline-none">
                <AccordionItemHeading>
                    <AccordionItemButton className="bg-white pl-6 flex justify-between items-center outline-none">
                        <div className="font-normal text-xl text-red-500">
                            Countries
                        </div>
                        <div className="px-6 md:py-5 py-3 md:w-1/5 w-auto flex justify-center">
                            <AccordionItemState>
                                {({ expanded }) => (expanded ? <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 text-base" /> : <FontAwesomeIcon icon={faChevronLeft} className="w-3 text-base" />)}
                            </AccordionItemState>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="px-8 py-5 bg-white">
                    <ComposeFilter data={countriesData} backTitle={"All countries"}/>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={4} className="mb-7 bg-white border border-gray-200 outline-none">
                <AccordionItemHeading>
                    <AccordionItemButton className="bg-white pl-6 flex justify-between items-center outline-none">
                        <div className="font-normal text-xl text-red-500">
                            Admissions
                        </div>
                        <div className="px-6 md:py-5 py-3 md:w-1/5 w-auto flex justify-center">
                            <AccordionItemState>
                                {({ expanded }) => (expanded ? <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 text-base" /> : <FontAwesomeIcon icon={faChevronLeft} className="w-3 text-base" />)}
                            </AccordionItemState>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="px-8 py-5 bg-white">
                    <ul className="list-disc leading-relaxed space-y-3 list-inside">
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa) list-disc list-disc</a></Link></li>
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={2} className="mb-7 bg-white border border-gray-200 outline-none">
                <AccordionItemHeading>
                    <AccordionItemButton className="bg-white pl-6 flex justify-between items-center outline-none">
                        <div className="font-normal text-xl text-red-500">
                            Duration
                        </div>
                        <div className="px-6 md:py-5 py-3 md:w-1/5 w-auto flex justify-center">
                            <AccordionItemState>
                                {({ expanded }) => (expanded ? <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 text-base" /> : <FontAwesomeIcon icon={faChevronLeft} className="w-3 text-base" />)}
                            </AccordionItemState>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="px-8 py-5 bg-white">
                    <ul className="list-disc leading-relaxed space-y-3 list-inside">
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa) list-disc list-disc</a></Link></li>
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={2} className="mb-7 bg-white border border-gray-200 outline-none">
                <AccordionItemHeading>
                    <AccordionItemButton className="bg-white pl-6 flex justify-between items-center outline-none">
                        <div className="font-normal text-xl text-red-500">
                            Tuitions Fees
                        </div>
                        <div className="px-6 md:py-5 py-3 md:w-1/5 w-auto flex justify-center">
                            <AccordionItemState>
                                {({ expanded }) => (expanded ? <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 text-base" /> : <FontAwesomeIcon icon={faChevronLeft} className="w-3 text-base" />)}
                            </AccordionItemState>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="px-8 py-5 bg-white">
                    <ul className="list-disc leading-relaxed space-y-3 list-inside">
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa) list-disc list-disc</a></Link></li>
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={2} className="mb-7 bg-white border border-gray-200 outline-none">
                <AccordionItemHeading>
                    <AccordionItemButton className="bg-white pl-6 flex justify-between items-center outline-none">
                        <div className="font-normal text-xl text-red-500">
                            Attendance
                        </div>
                        <div className="px-6 md:py-5 py-3 md:w-1/5 w-auto flex justify-center">
                            <AccordionItemState>
                                {({ expanded }) => (expanded ? <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 text-base" /> : <FontAwesomeIcon icon={faChevronLeft} className="w-3 text-base" />)}
                            </AccordionItemState>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="px-8 py-5 bg-white">
                    <ul className="list-disc leading-relaxed space-y-3 list-inside">
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa) list-disc list-disc</a></Link></li>
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={2} className="mb-7 bg-white border border-gray-200 outline-none">
                <AccordionItemHeading>
                    <AccordionItemButton className="bg-white pl-6 flex justify-between items-center outline-none">
                        <div className="font-normal text-xl text-red-500">
                            Language of Study
                        </div>
                        <div className="px-6 md:py-5 py-3 md:w-1/5 w-auto flex justify-center">
                            <AccordionItemState>
                                {({ expanded }) => (expanded ? <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 text-base" /> : <FontAwesomeIcon icon={faChevronLeft} className="w-3 text-base" />)}
                            </AccordionItemState>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="px-8 py-5 bg-white">
                    <ul className="list-disc leading-relaxed space-y-3 list-inside">
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa) list-disc list-disc</a></Link></li>
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                        <li><Link href="/university/pretoria"><a>IIE MSA (Norash South Africa)</a></Link></li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={2} className="mb-7 bg-white border border-gray-200 outline-none">
                <AccordionItemHeading>
                    <AccordionItemButton className="bg-white pl-6 flex justify-between items-center outline-none">
                        <div className="font-normal text-xl text-red-500">
                            Delivery Mode
                        </div>
                        <div className="px-6 md:py-5 py-3 md:w-1/5 w-auto flex justify-center">
                            <AccordionItemState>
                                {({ expanded }) => (expanded ? <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 text-base" /> : <FontAwesomeIcon icon={faChevronLeft} className="w-3 text-base" />)}
                            </AccordionItemState>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="px-8 py-5 bg-white">
                    <ul className="list-disc leading-relaxed space-y-3 list-inside">
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
}

export default FilterSection;