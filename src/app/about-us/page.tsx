import { Hero27 } from "@/components/blocks/hero";
import Team from "@/components/blocks/team/Team";
import { Fragment } from "react";

const heroContent = [
    {
        title: " Innovating Today for a Smarter",
        highlight: "Tomorrow",
        description: "Empowering Businesses with Innovative Solutions for a Brighter Future",
        backgroundImage: "/img/photos/bg37.jpg",
    },
];


export default function About_US() {
    return (
        <Fragment>
            <Hero27 heroData={heroContent} />
            <Team />
        </Fragment>
    );
}
