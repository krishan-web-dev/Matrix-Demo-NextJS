import { Fragment } from "react";
import clsx from "clsx";
// CUSTOM DATA
import data from "data/product-details-page";
import Accordion from "@/components/reuseable/accordion";

export default function ProductDescription() {
  return (
    <Fragment>

      <div className="card">
        <div className="card-body mb-n2">
          {data.tabList.map(({ id, title, description }, i) => (
            <div className="accordion-wrapper" key={i} id={title}>
              <Accordion
                no="One"
                expand={false}
                type="shadow-lg"
                heading={title}
                body={description}
              />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
