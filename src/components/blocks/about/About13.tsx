import { Banner4 } from "../banner";
import ListColumn from "components/reuseable/ListColumn";
// CUSTOM DATA
import { aboutList1 } from "data/about";

export default function About13() {
  return (
    <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center mb-14 mb-md-18">
      <div className="col-md-8 col-lg-6 position-relative">
        <Banner4 />
      </div>

      <div className="col-lg-5 offset-lg-1">
        <h2 className="fs-15 text-uppercase text-primary mb-3">Who Are We?</h2>
        <h3 className="display-4 mb-6">Company that believes in the power of creative strategy.</h3>
        <p className="mb-6">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus
          ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </p>

        <ListColumn list={aboutList1} rowClass="gx-xl-8" />
      </div>
    </div>
  );
}
