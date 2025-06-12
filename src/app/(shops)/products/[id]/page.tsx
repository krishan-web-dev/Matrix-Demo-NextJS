import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Carousel from "components/reuseable/Carousel";
import Breadcrumb from "components/reuseable/Breadcrumb";
import { ProductCard } from "components/reuseable/product-cards";
import ThumbsCarousel from "components/reuseable/ThumbsCarousel";
// LOCAL CUSTOM COMPONENTS
import ProductActions from "../components/product-actions";
import ProductReviews from "../components/product-reviews";
import ProductDescription from "../components/product-description";
import ProductReviewAside from "../components/product-review-aside";
// CUSTOM DATA
import products from "data/product-list";
import data from "data/product-details-page";
import ProductMetas from "../components/product-metas";
import ProductFactSheet from "../components/product-factsheet";
import Link from "next/link";

export async function generateStaticParams() {
  return [1, 2, 3, 4, 5, 6].map((item) => ({ id: item.toString() }));
}

export default function ProductDetails() {
  const carouselBreakpoints = {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 }
  };

  return (
    <Fragment>
      {/* ========== breadcrumb section ========== */}
      <section className="wrapper bg-gray">
        <div className="container py-3 py-md-5">
          <Breadcrumb data={data.breadcrumb} className="mb-0" />
        </div>
      </section>

      {/* ========== product info section ========== */}
      <section className="wrapper bg-light">
        <div className="container">
          <div className="row d-flex align-items-start gx-md-8 gx-xl-12 gy-8">
            <div className="col-lg-6 position-lg-sticky" style={{ top: "6rem" }}>
              <ThumbsCarousel />
            </div>
            <div className="col-lg-6 product-info">
              <ProductActions />
              <Link href="#" className="btn btn-lg btn-primary btn-icon btn-icon-end mb-5">
                Factsheet <i className="uil uil-arrow-up-right" />
              </Link>

              <ProductMetas />
            </div>
          </div>

        </div>
      </section>
    </Fragment>
  );
}
