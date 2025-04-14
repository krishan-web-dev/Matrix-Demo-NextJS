import { Fragment } from "react";

// CUSTOM DATA
import data from "data/product-details-page";
import Accordion from "@/components/reuseable/accordion";
import AccordionElement from "@/components/reuseable/accordion/accordian";

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

                    <div className="accordion-wrapper" id="accordionExample">
                        <AccordionElement
                            title="Table Accordion"
                            id="collapseTable"
                            parentId="accordionExample"
                            defaultOpen={true}
                        >
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Item A</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Item B</td>
                                        <td>200</td>
                                    </tr>
                                </tbody>
                            </table>
                        </AccordionElement>

                        <AccordionElement
                            title="Second Accordion"
                            id="collapseTwo"
                            parentId="accordionExample"
                        >
                            <p>This is another content block inside the accordion.</p>
                        </AccordionElement>
                    </div>

                </div>
            </div>
        </Fragment>
    );
}