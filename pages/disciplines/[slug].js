import React from 'react';
import Head from "next/dist/next-server/lib/head";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookOpen, faChevronRight, faUniversity} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/globals.module.scss";
import ShowMoreText from "react-show-more-text";
import {faFileArchive} from "@fortawesome/free-regular-svg-icons";
import {ButtonRedPrimary} from "../../src/components/styleComponent/button";
import FeaturedCoursesSection from "../../src/components/general/featuredCourses";

const DisciplinesPage = (props) => {

    return <div>
        <Head>
            <title>Name of discipline - Afriuni</title>
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
                    <span>
                        Technology
                    </span>
                </div>
            </div>
        </div>

        <div className="container mx-auto md:px-48 px-6 pt-8 space-y-5">
            <div className="flex items-center space-x-5">
                <div>
                    <svg id="_-_Engineering" data-name="-_Engineering" className="h-16 md:h-20" viewBox="0 0 119.334 123.477">
                        <path id="Tracé_1" data-name="Tracé 1" d="M65.889,51.4c-4.213-.714-7.784-4.213-9.927-8.427-.428,2.071-1.071,4.214-1.071,4.214l-.214,1.928,4.142,5.428,3.356,4.428H70.1l6.285-5.642,1.785-4.856C74.6,51.188,70.6,52.83,65.889,51.4Z" transform="translate(1.598 15.228)" fill="#d38c52"/>
                        <path id="Tracé_2" data-name="Tracé 2" d="M75.851,41.964l-20-.571a20.2,20.2,0,0,1-.429,2.642c2.142,4.213,5.713,7.784,9.927,8.427,4.713,1.428,8.713-.214,12.212-3l.5-1.285Z" transform="translate(2.134 14.097)" fill="#db8c52"/>
                        <path id="Tracé_3" data-name="Tracé 3" d="M75.851,41.964l-20-.571a20.2,20.2,0,0,1-.429,2.642c2.142,4.213,5.713,7.784,9.927,8.427,4.713,1.428,8.713-.214,12.212-3l.5-1.285Z" transform="translate(2.134 14.097)" fill="#d38c52" opacity="0.45"/>
                        <path id="Tracé_4" data-name="Tracé 4" d="M67.925,63.586l-.643-7.07-5.356-.428a20.452,20.452,0,0,0-1.571-3.357l3.071-4.356-5.07-5-4.285,3.071a18.687,18.687,0,0,0-3.428-1.571l-.428-5.213-7.07-.643-1.285,5.07a16.209,16.209,0,0,0-3.642,1l-3.642-3.714-.214.143-5.642,4L31,50.231a15.292,15.292,0,0,0-2.142,3.142L23.648,52.8l-1.785,6.856,4.785,2.214A16.994,16.994,0,0,0,27,65.657l-4.285,3,3,6.427,5.142-1.428A14.937,14.937,0,0,0,33.5,76.226l-1.428,5.142,6.427,3,3-4.428a15.674,15.674,0,0,0,3.642.286l2.214,4.856,6.856-1.857-.286-2.714-.286-2.642c.5-.286,1-.643,1.5-.928.5-.357,1-.714,1.5-1.143L61.5,78.083l4.071-5.856-3.856-3.785a21.133,21.133,0,0,0,.928-3.5ZM51.285,71.3a8.034,8.034,0,0,1-1.5.857A11.34,11.34,0,0,1,38.216,52.731a13.264,13.264,0,0,1,1.357-.786A11.421,11.421,0,0,1,54,55.516,11.253,11.253,0,0,1,51.285,71.3Z" transform="translate(-21.862 12.4)" fill="#cf4c3a"/>
                        <path id="Tracé_5" data-name="Tracé 5" d="M54.927,42.184a16.768,16.768,0,0,1,1.785,1.357l-1.5-1.143Z" transform="translate(1.777 14.662)" fill="#f9cfb3"/>
                        <path id="Tracé_6" data-name="Tracé 6" d="M80.717,29.841c-.5.357-.214,1.214-.714,1.5h-.071a11.017,11.017,0,0,0-.357,1.214H78.146a34.02,34.02,0,0,1,.214-3.642c0-.643.071-1.285.071-1.928a109.1,109.1,0,0,1-16.925.928V59.621h0a8.629,8.629,0,0,0,4.142-.5,17.246,17.246,0,0,0,4.5-4,28.968,28.968,0,0,1,3.285-2.571,8.651,8.651,0,0,0,1.643-1.571,10.078,10.078,0,0,0,1.357-2.785c.428-1.5.214-3.928,1.357-5.142,1.071-1.071,2.071-1.571,2.857-3.071a18.213,18.213,0,0,0,1.571-8.713C82.216,30.412,81.788,29.055,80.717,29.841Z" transform="translate(6.481 3.795)" fill="#d38c52"/>
                        <path id="Tracé_7" data-name="Tracé 7" d="M53.255,29.645c-.071,1.143-.071,2-.071,3.071v1H51.256V31.5a1.764,1.764,0,0,0-.286-.643c-1.071-.786-1.5.571-1.571,1.428A18.213,18.213,0,0,0,50.97,41c.714,1.5,1.785,1.928,2.857,3.071,1.143,1.214.928,3.642,1.357,5.142A7.251,7.251,0,0,0,56.541,52,11.229,11.229,0,0,0,58.9,54.141l.071.071L60.683,55.5h0a7.824,7.824,0,0,1,.786.714c.143.214.357.357.5.571h0l2,2h0a11.038,11.038,0,0,0,2,1.428,8.745,8.745,0,0,0,4.142.5V29.145c-10.284-.357-15.069-2.571-16.925-3.785C53.113,26.717,53.327,28.217,53.255,29.645Z" transform="translate(-2.194 2.634)" fill="#db8c52"/>
                        <path id="Tracé_8" data-name="Tracé 8" d="M59.064,21.216a7.93,7.93,0,0,0-7.427,6.927v.143c1.857,1.214,6.642,3.5,16.925,3.785V21.5a8.2,8.2,0,0,1-1.357.071C64.492,21.573,61.778,21,59.064,21.216Z" transform="translate(-0.575 -0.363)" fill="#e8bb95"/>
                        <path id="Tracé_9" data-name="Tracé 9" d="M70.189,20.412c-.429-.286-1-.928-1.5-1-.714-.214-.286-.143-1,.286-2.285,1.428-3.714,2.785-6.142,3.142V33.481a109.1,109.1,0,0,0,16.925-.928,22.355,22.355,0,0,0-.428-5.785C77.188,23.483,72.688,21.912,70.189,20.412Z" transform="translate(6.511 -1.702)" fill="#d5a378"/>
                        <path id="Tracé_10" data-name="Tracé 10" d="M68.606,12.44c-.143,0-1.928.143-1.714.357-.928-.857-2.571-.928-3.714-1.143a14.3,14.3,0,0,0-1.714-.286V28.437c2.5-.357,3.928-1.714,6.142-3.142.714-.428.286-.5,1-.286.5.143,1.071.786,1.5,1,2.5,1.571,7,3.071,7.784,6.285a22.589,22.589,0,0,1,.428,5.785,17.4,17.4,0,0,1-.071,1.928,21.748,21.748,0,0,0-.214,3.642h1.5a6.032,6.032,0,0,0,.357-1.214c.428-1.285.786-2.642.928-3.285a39.662,39.662,0,0,0,.643-6.142c.571-5,.786-9.712-2.214-13.926C76.033,14.725,71.177,12.154,68.606,12.44Z" transform="translate(6.451 -7.369)" fill="#2a2722"/>
                        <path id="Tracé_11" data-name="Tracé 11" d="M53.446,18.072c-4.713,4.285-4,9.784-3.428,15.069a29.747,29.747,0,0,0,.714,5.642,10.668,10.668,0,0,1,.428,2.857v2.214h1.928v-1a21.794,21.794,0,0,1,.071-3.071c.071-1.428-.071-2.928,0-4.356v-.143a7.935,7.935,0,0,1,7.427-6.927c2.714-.214,5.428.357,8.141.357.5,0,.928-.071,1.357-.071V11.43C64.23,10.93,57.517,14.358,53.446,18.072Z" transform="translate(-2.028 -7.36)" fill="#3d3b36"/>
                        <path id="Tracé_12" data-name="Tracé 12" d="M61.651,54.468l-4.642,6.57,1.928,5.642,1.285,4.285,2.785-12.712a2.188,2.188,0,0,0-.214-1.643Z" transform="translate(3.266 23.445)" fill="#bad1dd"/>
                        <path id="Tracé_13" data-name="Tracé 13" d="M63.166,56.581a2.188,2.188,0,0,0-.214,1.643L65.665,70.65l1.357-4,1.785-5.285.143-.357-4.642-6.5Z" transform="translate(7.464 23.475)" fill="#9ab9ca"/>
                        <path id="Tracé_14" data-name="Tracé 14" d="M61.857,61.237l6.07-2.571L61,55.238A44.918,44.918,0,0,1,63,50.1c-8.356,2.5-21.425,6.356-21.71,6.713-7.856,9.784-9.141,31.137-9.141,46.277H82.781l-.286-2.142Z" transform="translate(-14.509 20.319)" fill="#005c79"/>
                        <path id="Tracé_15" data-name="Tracé 15" d="M81.788,50.1a50.7,50.7,0,0,1,2,5.142L76.86,58.666l6.07,2.571L61.72,101.3l-.214-.357v2.214h51.347c0-17.068-.571-38.207-9.355-46.277C103.141,56.523,90.072,52.6,81.788,50.1Z" transform="translate(6.481 20.319)" fill="#007aa1"/>
                        <path id="Tracé_16" data-name="Tracé 16" d="M66.337,58.657l.143-.357h0Z" transform="translate(9.935 26.184)" fill="#4b616c"/>
                        <path id="Tracé_17" data-name="Tracé 17" d="M73.586,45.593l-9,8.141L62.23,55.877a.533.533,0,0,1-.643,0l-.071-.071v.571c0,.857.143-.214.143-.143-.286,1.143-.357,1.785-.143,2.142l.786-1.643L64.159,59.3,65.3,60.947l4.642,6.5h0l.714-2.071,4.713-13.926c.143.071.357.071.571.143L73.8,45.307Z" transform="translate(6.399 16.895)" fill="#c1daec"/>
                        <path id="Tracé_18" data-name="Tracé 18" d="M67.407,55.888,55.909,45.6l-.214-.214-2.142,6.285a2.207,2.207,0,0,1,.571-.143L58.194,63.6l.714,2.071.643,1.857,4.642-6.57,1.857-2.642,1.071-1.571.071-.071h.214Z" transform="translate(0.794 16.955)" fill="#e4f4ff"/>
                        <path id="Tracé_19" data-name="Tracé 19" d="M64.743,70.61l-1.928-5.642-.643-1.857-.714-2.071L57.387,48.972c-.143.071-.357.071-.571.143-1.143.357-3.285,1-5.927,1.785a50.713,50.713,0,0,0-2,5.142l6.927,3.428-6.07,2.571,20.639,39.707V89.678L65.885,74.9Z" transform="translate(-2.54 19.515)" fill="#007aa1"/>
                        <path id="Tracé_20" data-name="Tracé 20" d="M81.818,50.9c-2.642-.786-4.785-1.428-5.927-1.785a2.208,2.208,0,0,0-.571-.143L70.606,62.9l-.714,2.071-.143.357L67.963,70.61l-1.357,4L61.464,89.75h0v12.069l.214.357L82.818,62.112l-6.07-2.571,6.927-3.428A31.552,31.552,0,0,0,81.818,50.9Z" transform="translate(6.451 19.515)" fill="#003d51"/>
                        <g id="Groupe_1" data-name="Groupe 1" transform="translate(42.695 0)">
                            <path id="Tracé_21" data-name="Tracé 21" d="M69.145,11.862h0L69,11.577C69.073,11.719,69.145,11.791,69.145,11.862Z" transform="translate(-30.855 -7.22)" fill="#ecbb1a"/>
                            <path id="Tracé_22" data-name="Tracé 22" d="M75.747,15.934a15.2,15.2,0,0,0-1.785-1.143l-.214.357a20.78,20.78,0,0,1,1.928,1.714c-3.142,4.856-6,10.855-8.57,15.854,3.071-9.07,5.713-15.5,6.713-17.925l-.071-.071.286-.428a3.406,3.406,0,0,1,.286-.571v-.286c-.786-.786-4.285-3.856-12.855-4.356h0V36.644A165.251,165.251,0,0,0,85.1,34.93v-.143A21.4,21.4,0,0,0,75.747,15.934Z" transform="translate(-36.244 -9.007)" fill="#ecbb1a"/>
                            <path id="Tracé_23" data-name="Tracé 23" d="M85.93,24.028a165.324,165.324,0,0,1-24.424,1.785v3.642c5.07,0,10.212-.143,15.283-.5a13.03,13.03,0,0,0,6.142-1.785c-.214.214-.357.428-.571.643A8.916,8.916,0,0,1,79.931,29.6a11,11,0,0,1-3.856,1.071q-7.284.643-14.569.643v2.142c4.571,0,9.07-.214,13.64-.571a11.2,11.2,0,0,0,6.07-2.428c.857-.071,1.714-.143,2.571-.286a3.118,3.118,0,0,0,2.928-3.214c-.071-.786-.214-1.643-.286-2.428A3.3,3.3,0,0,0,85.93,24.028Z" transform="translate(-36.214 1.682)" fill="#f2b100"/>
                            <path id="Tracé_24" data-name="Tracé 24" d="M47.055,24.456c-.071.786-.214,1.643-.286,2.428A3.127,3.127,0,0,0,49.7,30.1c.857.071,1.643.214,2.5.286a10.684,10.684,0,0,0,6.07,2.428c4.571.428,9.141.571,13.712.571v-2a145.924,145.924,0,0,1-14.712-.714A11,11,0,0,1,53.411,29.6,7.169,7.169,0,0,1,50.84,27.67c-.071-.143-.214-.214-.286-.357a13.6,13.6,0,0,0,6,1.643c5.142.357,10.284.5,15.426.5V25.813a175.629,175.629,0,0,1-24.424-1.785A1.454,1.454,0,0,1,47.055,24.456Z" transform="translate(-46.758 1.682)" fill="#f3b70e"/>
                            <path id="Tracé_25" data-name="Tracé 25" d="M61.506,28.187v1.857q7.284,0,14.569-.643a11,11,0,0,0,3.856-1.071,7.159,7.159,0,0,0,2.428-1.785c.214-.214.357-.428.571-.643a13.03,13.03,0,0,1-6.142,1.785C71.718,27.973,66.577,28.187,61.506,28.187Z" transform="translate(-36.214 3.021)" fill="#ecbb1a"/>
                            <path id="Tracé_26" data-name="Tracé 26" d="M71.345,9.036c-8.57.5-12.069,3.571-12.855,4.356a.884.884,0,0,1-.143.214v.071a.884.884,0,0,0,.143-.214v.286a5.616,5.616,0,0,0,.286.643l.286.357a.07.07,0,0,0-.071.071A188.89,188.89,0,0,1,65.7,32.746c-2.571-5-5.428-11-8.57-15.854l1.928-1.714-.143-.357a15.2,15.2,0,0,0-1.785,1.143,21.519,21.519,0,0,0-9.355,18.782v.143A164.264,164.264,0,0,0,71.345,36.6L89.77,35.531l-18.425-1V9.036Z" transform="translate(-46.053 -9.036)" fill="#f7dc54"/>
                            <path id="Tracé_27" data-name="Tracé 27" d="M49.013,25.985c.071.143.214.214.286.357A7.169,7.169,0,0,0,51.87,28.27a11.441,11.441,0,0,0,3.856,1.071c4.928.428,9.784.714,14.711.714V28.2c-5.142,0-10.284-.143-15.426-.5A15.756,15.756,0,0,1,49.013,25.985Z" transform="translate(-45.146 3.081)" fill="#f9cb31"/>
                            <path id="Tracé_28" data-name="Tracé 28" d="M54.862,12.505c-.143-.357-.286-.643-.286-.643v-.286a.884.884,0,0,1-.143.214h0L55,12.862l.143.357a20.788,20.788,0,0,0-1.928,1.714c3.142,4.856,6,10.855,8.57,15.854a181.431,181.431,0,0,0-6.713-17.925A1.562,1.562,0,0,0,54.862,12.505Z" transform="translate(-42.139 -7.22)" fill="#f3b70e"/>
                            <path id="Tracé_29" data-name="Tracé 29" d="M71.58,13l.571-1.071v-.071c0-.071-.071-.143-.143-.286v.286a3.257,3.257,0,0,1-.286.571l-.214.428c-1,2.428-3.642,8.927-6.713,17.925a171.056,171.056,0,0,1,8.57-15.854l-1.928-1.714Z" transform="translate(-33.862 -7.22)" fill="#f2b100"/>
                        </g>
                        <path id="Tracé_30" data-name="Tracé 30" d="M66.648,72.5l-5.142,15.14h0V52.079a.476.476,0,0,1,.714,0l.071.071,1.857,2.571,1.143,1.643-1.143,2.142a2.188,2.188,0,0,0-.214,1.643Z" transform="translate(6.481 21.622)" fill="#4b616c"/>
                        <path id="Tracé_31" data-name="Tracé 31" d="M63.6,51.887l-.214,35.708-4.5-14.783L61.668,60.1a2.188,2.188,0,0,0-.214-1.643l-1.143-2.142,1.857-2.642L63.239,52.1l.071-.071h0C63.453,51.958,63.525,51.887,63.6,51.887Z" transform="translate(4.605 21.599)" fill="#62767f"/>
                    </svg>
                </div>
                <div className="space-y-2">
                    <div className="text-black font-normal text-xl">About</div>
                    <h1 className="text-black text-3xl font-semibold">
                        Technology
                    </h1>
                </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-5">
                <div className="col-span-2 text-justify">
                    <ShowMoreText
                        /* Default options */
                        lines={5}
                        more='Read more'
                        less='Show less'
                        className='text-justify'
                        anchorClass='text-custom-primary font-normal'
                        expanded={false}
                    >

                        <p>
                            Technology is the set of knowledge, skills, experience and techniques through which humans
                            change, transform and use our environment in order to create tools, machines, products and
                            services that meet our needs and desires.
                            Etymologically the word comes from the Greek tekne (technical, art, skill) and logos (knowledge)
                        </p>

                        <p>
                            All objects around us in our daily lives are products of different technological advances that have
                            developed over the centuries of our existence, we have transformed natural resources to make
                            tools and machines that make our lives more easy, satisfy our curiosity an desire to excel.
                            Computers, tablets and smartphones, locomotives, cars and airplanes, the bulb
                        </p>
                    </ShowMoreText>


                </div>
                <div className="col-span-1 space-y-3 md:space-y-6">
                    <div className="flex space-x-3"> <FontAwesomeIcon icon={faUniversity} className="w-5" /> <span>25 Universities</span></div>
                    <div className="flex space-x-3"> <FontAwesomeIcon icon={faFileArchive} className="w-5" /> <span>18 Specialisations</span></div>
                    <div className="flex space-x-3"> <FontAwesomeIcon icon={faBookOpen} className="w-5" /> <span>173 Courses</span></div>
                </div>
            </div>


            <div>
                <div className="text-center md:mt-10">
                    <ButtonRedPrimary className="rounded-lg">
                        See all Technology Courses
                    </ButtonRedPrimary>
                </div>
            </div>
        </div>

        <div className="container mx-auto py-8">

            <div className="bg-white p-6">
                <div className="font-semibold text-xl md:text-3xl text-center my-5">Specialisations within Technology</div>

                <div className="md:px-10 md:py-5">
                    <ul className="list-disc md:col-count-3 list-inside space-y-3">
                        <li>
                            <Link href="#">
                                <a className="text-base md:text-lg text-custom-primary font-normal">Informatics & Information Sciences</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-base md:text-lg text-custom-primary font-normal">Industrial & Systems Engineering</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-base md:text-lg text-custom-primary font-normal">Business Information Systems</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-base md:text-lg text-custom-primary font-normal">Environmental Engineering</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-base md:text-lg text-custom-primary font-normal">Civil Engineering & Construction</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-base md:text-lg text-custom-primary font-normal">Cyber Security</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-base md:text-lg text-custom-primary font-normal">Informatics & Information Sciences</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-base md:text-lg text-custom-primary font-normal">Industrial & Systems Engineering</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-base md:text-lg text-custom-primary font-normal">Business Information Systems</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-base md:text-lg text-custom-primary font-normal">Environmental Engineering</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-base md:text-lg text-custom-primary font-normal">Civil Engineering & Construction</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-base md:text-lg text-custom-primary font-normal">Cyber Security</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-base md:text-lg text-custom-primary font-normal">Informatics & Information Sciences</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-base md:text-lg text-custom-primary font-normal">Industrial & Systems Engineering</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-base md:text-lg text-custom-primary font-normal">Business Information Systems</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-base md:text-lg text-custom-primary font-normal">Environmental Engineering</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-base md:text-lg text-custom-primary font-normal">Civil Engineering & Construction</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-base md:text-lg text-custom-primary font-normal">Cyber Security</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-base md:text-lg text-custom-primary font-normal">Informatics & Information Sciences</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-base md:text-lg text-custom-primary font-normal">Industrial & Systems Engineering</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-base md:text-lg text-custom-primary font-normal">Business Information Systems</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-base md:text-lg text-custom-primary font-normal">Environmental Engineering</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-base md:text-lg text-custom-primary font-normal">Civil Engineering & Construction</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="text-base md:text-lg text-custom-primary font-normal">Cyber Security</a>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>

            <FeaturedCoursesSection title="Interesting Technology courses" titleClassName="text-2xl md:text-4xl" sectionClassName="pt-4 md:pt-8 pb-6 md:pb-18"/>

            <div>
                <div className="text-center">
                    <ButtonRedPrimary className="rounded-lg">
                        See all Technology Courses
                    </ButtonRedPrimary>
                </div>
            </div>
        </div>


    </div>
}

export default DisciplinesPage;
