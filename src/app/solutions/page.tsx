import { Fragment } from "react";
// -------- custom component -------- //
import Navbar from "components/blocks/navbar/navbar-1";
import { Footer14 } from "components/blocks/footer";
import { Hero27 } from "@/components/blocks/hero";
import Scroll_Cards1 from "@/components/blocks/cards/Scroll_Cards_style1";
import NextLink from "components/reuseable/links/NextLink";


export default function Solutions() {
    return (
        <Fragment>
            {/* ========== header section ========== */}
            <header className="wrapper bg-soft-primary my-1">
                <Navbar
                    button={<NextLink title="Contact Me" href="#" className="btn btn-sm btn-primary" />}
                    navClassName="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light"
                />
            </header>

            {/* ========== main content ========== */}
            <main className="content-wrapper">

                <Hero27 />

                <Scroll_Cards1 />

            </main>

            {/* ========== footer section ========== */}
            <Footer14 />
        </Fragment>
    );
}