import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar4 from "components/blocks/navbar/navbar-4";
import { Hero24 } from "components/blocks/hero";
import { About25 } from "components/blocks/about";
import { Banner2 } from "components/blocks/banner";
import { Footer15 } from "components/blocks/footer";
import { Contact12 } from "components/blocks/contact";
import { Services27 } from "components/blocks/services";
import { Portfolio5 } from "components/blocks/portfolio";
import { Testimonial19 } from "components/blocks/testimonial";

export default function Demo24() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper bg-gray">
        <Navbar4 onePageDemo />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero24 />

        {/* ========== our service section ========== */}
        <Services27 />

        {/* ========== banner section ========== */}
        <Banner2 />

        {/* ========== portfolio section ========== */}
        <Portfolio5 />

        {/* ========== happy customer section ========== */}
        <Testimonial19 />

        {/* ========== about me section ========== */}
        <About25 />

        {/* ========== contact section ========== */}
        <Contact12 />
      </main>

      {/* ========== footer section ========== */}
      <Footer15 />
    </Fragment>
  );
}
