import Image from "next/image";
// GLOBAL CUSTOM COMPONENTS
import SocialLinks from "components/reuseable/SocialLinks";
import NextLink from "components/reuseable/links/NextLink";
// CUSTOM DATA
import footerNav from "data/footer";

export default function Footer14() {
  return (
    <footer className="bg-dark section-frame mt-10 mb-2">
      <div className="container pb-13 pb-md-15 pt-md-16 pt-14">


        <div className="text-inverse mx-md-5 mt-n15 mt-lg-0">
          <div className="row gy-6 gy-lg-0">
            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <Image alt="logo" width={60} height={60} src="/img/logo-dark.png" />

                <p className="my-4">
                  © 2025 Matrix Pvt Ltd. <br className="d-none d-lg-block" />
                  All rights reserved.
                </p>

                <SocialLinks className="nav social social-white" />
              </div>
            </div>

            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">Get in Touch</h4>
                <address className="pe-xl-15 pe-xxl-17">No 850, Bulugaha Junction, Kelaniya, Srilanka</address>
                <NextLink title="info@slmatrix.com" href="mailto:#" />
                <br /> +94 (077) 9560 462
              </div>
            </div>

            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">Learn More</h4>
                <ul className="list-unstyled  mb-0">
                  {footerNav.map(({ title, url }) => (
                    <li key={title}>
                      <NextLink title={title} href={url} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-md-12 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">Our Newsletter</h4>
                <p className="mb-5">Subscribe to our newsletter to get our news &amp; deals delivered to you.</p>

                <div className="newsletter-wrapper">
                  <div id="mc_embed_signup2">
                    <form
                      method="post"
                      target="_blank"
                      className="validate dark-fields"
                      id="mc-embedded-subscribe-form2"
                      name="mc-embedded-subscribe-form"
                      action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a">
                      <div id="mc_embed_signup_scroll2">
                        <div className="mc-field-group input-group form-floating">
                          <input
                            type="email"
                            name="EMAIL"
                            id="mce-EMAIL2"
                            placeholder="Email Address"
                            className="required email form-control"
                          />

                          <label htmlFor="mce-EMAIL2">Email Address</label>
                          <input
                            value="Join"
                            type="submit"
                            name="subscribe"
                            id="mc-embedded-subscribe2"
                            className="btn btn-primary"
                          />
                        </div>

                        <div id="mce-responses2" className="clear">
                          <div className="response" id="mce-error-response2" style={{ display: "none" }} />
                          <div className="response" id="mce-success-response2" style={{ display: "none" }} />
                        </div>

                        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                          <input type="text" tabIndex={-1} name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc" />
                        </div>

                        <div className="clear" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
