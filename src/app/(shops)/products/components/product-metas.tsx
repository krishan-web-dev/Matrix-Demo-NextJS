import { Fragment } from "react";

// CUSTOM DATA
import data from "data/product-details-page";
import Accordion from "@/components/reuseable/accordion";

export default function ProductMetas() {
    return (
        <Fragment>

            <div className="card">
                <div className="card-body mb-n2">
                    {data.metaList.map(({ id, title, description }, i) => (
                        <div className="accordion-wrapper" key={i}>
                            <Accordion
                                no={id}
                                expand={false}
                                //type="shadow-lg"
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