"use client";

import Typewriter from "typewriter-effect";
import ReplaceMe from "components/ReplaceMe";
import DocLayout from "components/layouts/DocLayout";
import CodeHighlight from "components/reuseable/CodeHighlight";
// MARKUPS
import { typerMarkup, replaceMeMarkup } from "markups/elements/text-animation";
// CUSTOM DATA
const quickAccess = [
  { title: "Typer", url: "snippet-1" },
  { title: "Rotator", url: "snippet-2" }
];

export default function TextAnimations() {
  return (
    <DocLayout
      pageTitle="Text Animations"
      quickAccessLinks={quickAccess}
      descriptionClass="lead"
      description={
        <>
          Add animations to text easily with pure HTML interface. For further plugin documentation please visit{" "}
          <a href="https://github.com/tameemsafi/typewriterjs" target="_blank" className="hover more" rel="noreferrer">
            TypewriterJS docs
          </a>{" "}
          or{" "}
          <a href="https://adrianklimek.github.io/replaceme/" target="_blank" className="hover more" rel="noreferrer">
            ReplaceMe.js docs
          </a>
        </>
      }>
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">Typer</h2>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-9">
                <h2 className="display-1 mb-0">
                  Sandbox is effortless and powerful with <br />
                  <span className="typer text-primary">
                    <Typewriter
                      options={{
                        loop: true,
                        autoStart: true,
                        strings: ["easy usage", "fast transactions", "secure payments"]
                      }}
                    />
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-1">
              View example's code
            </a>
          </div>

          <div id="collapse-1" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{typerMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">Pills</h2>

        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-9">
                <h2 className="display-1 mb-0">
                  Sandbox is effortless and powerful with{" "}
                  <ReplaceMe className="rotator-fade text-primary">
                    easy usage,fast transactions,secure payments
                  </ReplaceMe>
                </h2>
              </div>
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-2">
              View example's code
            </a>
          </div>

          <div id="collapse-2" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{replaceMeMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
}
