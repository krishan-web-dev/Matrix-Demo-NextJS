"use client";

export default function CardsStyle1() {
    return (
        <div>
            <section className="wrapper bg-light">
                <div className="container pt-10 pb-12 pt-md-14 pb-md-17">
                    <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                        <div className="col-md-4">
                            <div className="card shadow-lg card-item">
                                <a href="#0" aria-labelledby="person1"></a>
                                <img src='/img/auto-mobile-equipment.jpg' alt='' />
                                <div className="item__overlay">
                                    <h3 id="person1" aria-hidden="true">Person Name 1</h3>
                                    <div className="item__body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}