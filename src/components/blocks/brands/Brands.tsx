import Image from "next/image";
// CUSTOM DATA

import './style.scss';

export default function Brands() {
  const brands = [
    {
      src: '/img/brands/kgcrane.jpg',
      title: 'Compressed Air Solutions',
    },
    {
      src: '/img/brands/mutrade.png',
      title: 'Compressed Air Solutions',
    },
    {
      src: '/img/brands/Endo-Kogyo.png',
      title: 'Compressed Air Solutions',
    },
    {
      src: '/img/brands/wernerfinley.png',
      title: 'Compressed Air Solutions',
    },
    {
      src: '/img/brands/logo-rotary.png',
      title: 'Compressed Air Solutions',
    },
    // Add more card data as needed
  ];
  return (
    <section className="wrapper" style={{ position: "relative" }}>
      <div className="bg-noise"></div>
      <div className="container-fluid py-14 py-md-16 brands">
        <div className="row justify-content-md-center mb-12">
          <div className="col-md-8 text-center">
            <h3 className="display-2 ls-xs mb-2">Our Trusted by Brands</h3>
            <p className="lead fs-lg pe-xxl-5">
              We <span className="underline">bring solutions</span> to make life
              easier for our customers.
            </p>
          </div>
        </div>


        <div className="logo-loop_line">
          <div className="logo-loop_list">
            {brands.map((item, index) => (
              <div className="logo-loop_wrapper" key={index}>
                <Image src={item.src} alt="demo" width={450} height={301} />
              </div>
            ))}
          </div>
          <div className="logo-loop_list">
            {brands.map((item, index) => (
              <div className="logo-loop_wrapper" key={index}>
                <Image src={item.src} alt="demo" width={450} height={301} />
              </div>
            ))}
          </div>
        </div>
        <div className="logo-loop_line reverse">
          <div className="logo-loop_list">
            {brands.map((item, index) => (
              <div className="logo-loop_wrapper" key={index}>
                <Image src={item.src} alt="demo" width={450} height={301} />
              </div>
            ))}
          </div>
          <div className="logo-loop_list">
            {brands.map((item, index) => (
              <div className="logo-loop_wrapper" key={index}>
                <Image src={item.src} alt="demo" width={450} height={301} />
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
