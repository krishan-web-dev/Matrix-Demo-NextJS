import Link from "next/link";
import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Hero15, Hero23 } from "components/blocks/hero";
import { Footer12, Footer18 } from "components/blocks/footer";
import { Process21 } from "components/blocks/process";
import { Services1, Services37, ServicesMatrix } from "components/blocks/services";
import { About35, About36, About4, About9 } from "components/blocks/about";
import { Testimonial4 } from "components/blocks/testimonial";
import { Portfolio9 } from "components/blocks/portfolio";
import { Clients4 } from "@/components/blocks/clients";
import { Blog4 } from "@/components/blocks/blog";

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
                        <About9 />
                    </div>
                </section>
                <ServicesMatrix />
                <Services37 />
                <Services1 />

                {/* ========== our solutions section ========== */}
                <Process21 />

                <section className="wrapper bg-light">
                    <div className="container py-15 py-md-17">
                        {/* ========== what make us different section ========== */}
                        <About36 />
                    </div>
                </section>
                <Clients4 />
                {/* ========== happy customer section ========== */}
                <section className="wrapper bg-light">
                    <div className="container">
                        {/* ========== what make us different section ========== */}
                        <Testimonial4 />
                    </div>
                </section>

                <section className="wrapper bg-gray">
                    <div className="container py-15">
                        <Blog4 />
                    </div>
                </section>
            </main>

            {/* ========== footer section ========== */}
            <Footer12 />
        </Fragment>
    );
}