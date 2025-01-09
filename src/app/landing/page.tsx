import Link from "next/link";
import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Hero15 } from "components/blocks/hero";
import { Footer18 } from "components/blocks/footer";
import { Pricing12 } from "components/blocks/pricing";
import { Process21 } from "components/blocks/process";
import { Services37, ServicesMatrix } from "components/blocks/services";
import { About35, About36, About4 } from "components/blocks/about";
import { Testimonial28 } from "components/blocks/testimonial";
import { Portfolio9 } from "components/blocks/portfolio";

export default function LandingPage() {
    return (
        <Fragment>
            {/* ========== header section ========== */}
            <header className="wrapper bg-light mb-2">
                <Navbar
                    //language
                    button={
                        <Link href="#" className="btn btn-sm btn-primary rounded">
                            Contact
                        </Link>
                    }
                />
            </header>

            <main className="content-wrapper">
                {/* ========== hero section ========== */}
                <Hero15 />

                {/* ========== what we do section ========== */}
                <section className="bg-light">
                    <div className="container py-15 py-md-17 pb-md-17">
                        <About4 />
                    </div>
                </section>
                <ServicesMatrix />
                <Services37 />
                <Portfolio9 />

                {/* ========== happy customer section ========== */}
                <Testimonial28 />

                {/* ========== why choose us section ========== */}
                <About35 />

                {/* ========== our solutions section ========== */}
                <Process21 />

                <section className="wrapper bg-light">
                    <div className="container py-15 py-md-17">
                        {/* ========== what make us different section ========== */}
                        <About36 />

                        {/* ========== our pricing & faq section ========== */}
                        <Pricing12 />
                    </div>
                </section>
            </main>

            {/* ========== footer section ========== */}
            <Footer18 />
        </Fragment>
    );
}