import React from 'react';
import Head from "next/dist/next-server/lib/head";
import Link from "next/link";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from '../../styles/globals.module.scss';
import DestinationCard from "../../src/components/cards/destinationCard";


const CountriesPage = (props) => {



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
                </div>

                <div className="px-4 py-5 md:w-2/3">
                    <h1 className={styles.h1}>About listing country</h1>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque eaque error exercitationem facere fugit, incidunt ipsam iusto maiores natus placeat possimus quam reiciendis unde voluptatibus. Iste iure omnis quas?
                    </div>
                </div>
            </div>
        </div>

        <div className="container mx-auto md:px-4 md:my-6 border-t border-gray-200 md:border-0">
            <div className="bg-white md:p-10 py-6 px-3">
                <h3 className="text-2xl md:text-3xl font-normal text-custom-primary_2 text-center mb-5 md:mb-10">Study Destinations</h3>
                <div className="grid md:grid-cols-5 grid-cols-2 gap-x-3 md:gap-x-6 gap-y-4 md:gap-y-8">

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



    </div>
};

export default CountriesPage;