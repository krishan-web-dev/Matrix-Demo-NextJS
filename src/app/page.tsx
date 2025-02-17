import { Fragment } from "react";
// -------- custom component -------- //

import { Footer14 } from "components/blocks/footer";
import { Testimonial4 } from "components/blocks/testimonial";
import Navbar3 from "@/components/blocks/navbar/navbar-3";
import { About36 } from "@/components/blocks/about";
import ShaderSlider from "@/components/blocks/slider/Shader-Slider";
import { Facts7 } from "@/components/blocks/facts";
import { Blog5 } from "@/components/blocks/blog";
import { Hero35 } from "@/components/blocks/hero";
import Scroll_Cards1 from "@/components/blocks/cards/Scroll_Cards_style1";
import Brands from "@/components/blocks/brands/Brands";


import animation from "utils/animation";
import YouTubePlayer from "@/components/blocks/video/Video";


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
        <section className="full__screen">
          <div className="container">
            <Hero35 />
          </div>
        </section>

        <section className="full__screen">
          <div className="container">
            <div className="row text-center" style={animation({ name: "slideInUp", delay: "0ms" })}>
              <div className="col-lg-10 mx-auto">
                <div className="position-relative">

                  <YouTubePlayer
                    videoUrl="https://youtu.be/wHc20DBUiPw?si=wTM7O2fKZ85udnJC"
                  //thumbnail="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Scroll_Cards1 />

        <section className="wrapper bg-gray">
          <div className="bg-noise"></div>
          <div className="container py-15 py-md-17">
            <About36 />
          </div>
        </section>

        <Facts7 />

        <section className="wrapper">
          <div className="bg-noise"></div>
          <Brands />
        </section>

        <section className="wrapper">
          <div className="container">
            <Testimonial4 />
          </div>
        </section>

        <Blog5 />

      </main>

      {/* ========== footer section ========== */}
      <Footer14 />
    </Fragment>
  );
}