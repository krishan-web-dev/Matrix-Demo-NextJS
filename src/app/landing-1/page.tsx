import { Fragment } from "react";
// -------- custom component -------- //
import Navbar from "components/blocks/navbar/navbar-1";
import { FAQ2 } from "components/blocks/faq";
import { Hero20, Hero9 } from "components/blocks/hero";
import { Footer8 } from "components/blocks/footer";
import { Process9 } from "components/blocks/process";
import { Clients3 } from "components/blocks/clients";
import { Pricing6 } from "components/blocks/pricing";
import { Services12 } from "components/blocks/services";
import { Testimonial10, Testimonial4 } from "components/blocks/testimonial";
import Navbar3 from "@/components/blocks/navbar/navbar-3";
import LandingPage from '../landing/page';
import { CardsStyle1 } from "@/components/blocks/cards";
import { About36, About9 } from "@/components/blocks/about";
import ShaderSlider from "@/components/blocks/slider/Shader-Slider";

export default function LandingPage1() {
    return (
        <Fragment>
            {/* ========== header ========== */}
            <header className="wrapper bg-soft-primary glass__navbar">
                <Navbar3 logoAlt="logo-light" stickyBox={false} />
            </header>

            {/* ========== main content ========== */}
            <main className="content-wrapper">
                <ShaderSlider />

                <section className="brand-bg-default full__screen">
                    <div className="container">
                        <About9 />
                    </div>
                </section>

                <CardsStyle1 />

                <section className="wrapper bg-light">
                    <div className="container py-15 py-md-17">
                        <About36 />
                    </div>
                </section>

                <section className="wrapper bg-light">
                    <div className="container">
                        <Testimonial4 />
                    </div>
                </section>

            </main>

            {/* ========== footer section ========== */}
            <Footer8 />
        </Fragment>
    );
}
