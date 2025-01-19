"use client";

import { Fragment, PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
// GLOBAL CUSTOM COMPONENTS
import { Footer17 } from "components/blocks/footer";
import Navbar3 from "@/components/blocks/navbar/navbar-3";

export default function AboutLayout({ children }: PropsWithChildren) {
    const pathname = usePathname();

    return (
        <Fragment>
            {/* ========== header section ========== */}
            <header className="wrapper bg-soft-primary glass__navbar">
                <Navbar3 logoAlt="logo-light" stickyBox={false} />
            </header>

            <main className="content-wrapper">{children}</main>

            {/* ========== footer section ========== */}
            <Footer17 />
        </Fragment>
    );
}
