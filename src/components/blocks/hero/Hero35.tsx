'use client';
import CountUp from "components/reuseable/CountUp";
import CloudGroup from "icons/solid-duo/CloudGroup";
import React from "react";
import Typewriter from 'typewriter-effect';

export default function Hero35() {
  return (
    <div className="row gx-0 gy-10 gy-md-13 gy-lg-0 mt-16 mt-md-18 mb-16 mb-md-18 align-items-center matrix">
      <div className="col-lg-6 ms-auto position-relative order-lg-2">
        <div className="p-9 ps-0 p-xxl-11 ps-xxl-0">
          <div
            className="shape position-absolute d-block"
            style={{ top: "0", right: "0", width: "89%", height: "100%", zIndex: 0, backgroundColor: "rgb(177 195 180)" }}
          />

          <figure className="position-relative">
            <img src="/img/photos/about34.jpg" srcSet="/img/photos/about34@2x.jpg 2x" alt="" />
          </figure>
        </div>
      </div>

      <div className="col-lg-5">
        <h1 className="display-1 fs-80 text-uppercase">
          Matrix
        </h1>
        <h2 className="mb-5 fs-40">
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: ['global excellence', 'trusted partner', 'innovative solutions']
            }}
          />
        </h2>
        <p className="lead fs-18 lh-sm mb-6 pe-md-10">
          As a multifaceted organization, we deliver exceptional solutions tailored to our stakeholders.
          Backed by international accreditations and aligned with global benchmarks, we are a trusted partner to industry leaders worldwide,
          driving innovation and elevating the standards of excellence in every aspect of life we touch.
        </p>
      </div>
    </div>
  );
}
