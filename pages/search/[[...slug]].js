import React from 'react';
import Head from "next/dist/next-server/lib/head";
import {useRouter} from "next/router";
import styles from "../../styles/globals.module.scss";
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
import Link from "next/link";
import DisciplineFilter from "../../src/components/sections/home/search/Filter/composeFilter";
import FilterSection from "../../src/components/sections/home/search/Filter";


const SearchPage = (props) => {

    const router = useRouter();

    // console.log(router.query);

    return <div>
        <Head>
            <title>Name search page - Afriuni</title>
        </Head>

        <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-1">
                    <FilterSection />
                </div>

                <div className="col-span-2">

                </div>
            </div>
        </div>


    </div>
}

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
export async function getStaticProps({ params }) {

    // console.log(params)
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    // const res = await fetch(`https://.../posts/${params.id}`)
    const post = [];

    // Pass post data to the page via props
    return {
        props: { post },
        // Re-generate the post at most once per second
        // if a request comes in
        revalidate: 1,
    }
}

export default SearchPage;