import { Counter1 } from "components/reuseable/counter";
// CUSTOM DATA
import { factList5 } from "data/facts";

export default function Facts7() {
  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay bg-overlay-800 text-white"
      style={{ backgroundImage: 'url(/img/photos/automation-technology-use-cases.jpg)' }}
    >
      <div className="container py-14 pt-md-17 pb-md-17">
        <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-2 text-white align-items-center">
          <div className="col-lg-4">
            <h3 className="display-4 text-white mb-3 pe-xxl-15">We are proud of our projects</h3>
            <p className="lead fs-lg mb-0 pe-xxl-10">We bring solutions to make life easier for our customers.</p>
          </div>

          <div className="col-lg-8 mt-lg-2">
            <div className="row align-items-center counter-wrapper gy-6 text-center">
              {factList5.map(({ id, title, amount }) => (
                <Counter1 key={id} title={title} number={amount} titleColor="text-white" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
