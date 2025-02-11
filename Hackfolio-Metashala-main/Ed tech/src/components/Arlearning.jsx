import React from "react";

import mgcms from "../assets/simple_alphabet.glb";
import hamzatyellow from "../assets/rutherfords_scattering_experiment (1).glb";
import dgc from "../assets/lead.glb";
import dosi from "../assets/taj_mahal.glb";
import geig from "../assets/geigcount.glb";
import image1 from "../assets/chemical_spill.jpg";
import image2 from "../assets/biohazard.jpg";
import image3 from "../assets/radiological_disaster.jpg";

const Arlearning = () => {
  const scenarios = [
    {
      id: 1,
      title: "Chemical Spill Response",
      image: image1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod velit eu mauris cursus.",
    },
    {
      id: 2,
      title: "Biological Hazard Training",
      image: image2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod velit eu mauris cursus.",
    },
    {
      id: 3,
      title: "Radiological Incident Drill",
      image: image3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod velit eu mauris cursus.",
    },
  ];

  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <div>
      <div className="md:ml-[20%]">
        <h1 className="mt-5 text-2xl text-center">AR Visualization</h1>
        <div className="flex md:flex-row flex-col flex-wrap">
          <section
            className="container max-w-lg bg-slate-600 m-5 px-10 h-[800px]"
            data-aos="fade-up"
            date-aos-delay="200"
          >
            <div className="row text-base">
              <div className="flex flex-col ">
                <div className="icon-box">
                  <h4 className="font-bold tracking-widest text-lg mt-10 mb-5">
                    ALL ALPHABETS
                  </h4>
                  <p className="description bg-zinc-700 text-white rounded-lg p-4">
                    The English alphabet consists of 26 letters, including
                    vowels (A, E, I, O, U) and consonants. It forms the basis of
                    written and spoken communication in English language.
                  </p>
                </div>
              </div>
              <div id="card" className="block my-3 ">
                <model-viewer
                  src={mgcms}
                  style={{
                    width: "100%",
                    height: "400px",
                    backgroundColor: "#70BCD1",
                    "--poster-color": "#ffffff00",
                  }}
                  ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
                  poster="logo.png"
                  alt="mgcms"
                  shadow-intensity="1"
                  camera-controls
                  auto-rotate
                  ar
                ></model-viewer>
              </div>
            </div>
          </section>
          <section
            className="container max-w-lg bg-slate-600 m-5 px-10 h-[800px]"
            data-aos="fade-up"
            date-aos-delay="200"
          >
            <div className="row">
              <div className="col-lg-6 d-flex flex-column text-base justify-content-center p-5">
                <div className="icon-box">
                  <h4 className="font-bold tracking-widest mt-10 mb-5 text-lg">
                    RUTHERFORD MODEL
                  </h4>
                  <p className="description bg-zinc-700 text-white rounded-lg p-4">
                    Ernest Rutherford's 1911 model depicted the atom with a
                    dense, positively charged nucleus orbited by negatively
                    charged electrons, revolutionizing atomic understanding.
                  </p>
                </div>
              </div>
              <div id="card" className="flex justify-center my-3">
                <model-viewer
                  className="text-5xl flex justify-center"
                  style={{
                    width: "100%",
                    height: "400px",
                    backgroundColor: "#70BCD1",
                    "--poster-color": "#ffffff00",
                  }}
                  src={hamzatyellow}
                  ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
                  poster="logo.png"
                  alt="mgcms"
                  shadow-intensity="1"
                  camera-controls
                  auto-rotate
                  ar
                ></model-viewer>
              </div>
            </div>
          </section>
          <section
            className="container max-w-lg bg-slate-600 m-5 px-10 h-[800px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="row">
              <div className="col-lg-6 d-flex flex-column text-base justify-content-center p-5">
                <div className="icon-box">
                  <h4 className="font-bold tracking-widest mt-10 mb-5 text-lg">
                    ATOM MOLECULE
                  </h4>
                  <p className="description bg-zinc-700 text-white rounded-lg p-4">
                    The atom model describes the structure of matter. It
                    consists of a nucleus containing protons and neutrons,
                    surrounded by electrons orbiting in distinct energy levels,
                    forming the basis of modern physics.
                  </p>
                </div>
              </div>
              <div id="card" className="flex justify-center my-3">
                <model-viewer
                  className="text-5xl flex justify-center"
                  style={{
                    width: "100%",
                    height: "400px",
                    backgroundColor: "#70BCD1",
                    "--poster-color": "#ffffff00",
                  }}
                  src={dgc}
                  alt="Digital Geiger Counter"
                  shadow-intensity="1"
                  camera-controls
                  auto-rotate
                  ar
                ></model-viewer>
              </div>
            </div>
          </section>

          <section
            className="container max-w-lg bg-slate-600 m-5 px-10 h-[800px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="row">
              <div className="col-lg-6 d-flex flex-column text-base justify-content-center p-5">
                <div className="icon-box">
                  <h4 className="font-bold tracking-widest mt-10 mb-5 text-lg">
                    TAJ MAHAL
                  </h4>
                  <p className="description bg-zinc-700 text-white rounded-lg p-4">
                    The Taj Mahal, located in Agra, India, is an iconic white
                    marble mausoleum built by Emperor Shah Jahan in memory of
                    his wife Mumtaz Mahal. It is a UNESCO World Heritage Site.
                  </p>
                </div>
              </div>
              <div id="card" className="flex justify-center my-3">
                <model-viewer
                  className="text-5xl flex justify-center"
                  style={{
                    width: "100%",
                    height: "400px",
                    backgroundColor: "#70BCD1",
                    "--poster-color": "#ffffff00",
                  }}
                  src={dosi}
                  alt="Digital Dosimeter"
                  shadow-intensity="1"
                  camera-controls
                  auto-rotate
                  ar
                ></model-viewer>
              </div>
            </div>
          </section>

          <section
            className="container max-w-lg bg-slate-600 m-5 px-10 h-[800px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="row">
              <div className="col-lg-6 d-flex flex-column text-base justify-content-center p-5">
                <div className="icon-box">
                  <h4 className="font-bold tracking-widest mt-10 mb-5 text-lg">
                    Heart
                  </h4>
                  <p className="description bg-zinc-700 text-white rounded-lg p-4">
                    <a href="" onClick={handleClick}>
                      Heart Diagram
                    </a>
                  </p>

                  {/* Embedded Sketchfab code for Human Heart */}
                  <div className="sketchfab-embed-wrapper">
                    <iframe
                      title="[Animation] Human Heart"
                      frameBorder="0"
                      allowFullScreen
                      mozallowfullscreen="true"
                      webkitallowfullscreen="true"
                      allow="autoplay; fullscreen; xr-spatial-tracking"
                      xr-spatial-tracking
                      execution-while-out-of-viewport
                      execution-while-not-rendered
                      web-share
                      src="https://sketchfab.com/models/775d6629622740de8a5ed61a959c7506/embed"
                    ></iframe>
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: "normal",
                        margin: "5px",
                        color: "#4A4A4A",
                      }}
                    >
                      <a
                        href="https://sketchfab.com/3d-models/animation-human-heart-775d6629622740de8a5ed61a959c7506?utm_medium=embed&utm_campaign=share-popup&utm_content=775d6629622740de8a5ed61a959c7506"
                        target="_blank"
                        rel="nofollow"
                        style={{ fontWeight: "bold", color: "#1CAAD9" }}
                      >
                        [Animation] Human Heart
                      </a>{" "}
                      by{" "}
                      <a
                        href="https://sketchfab.com/Zubis3D?utm_medium=embed&utm_campaign=share-popup&utm_content=775d6629622740de8a5ed61a959c7506"
                        target="_blank"
                        rel="nofollow"
                        style={{ fontWeight: "bold", color: "#1CAAD9" }}
                      >
                        Zubis3D
                      </a>{" "}
                      on{" "}
                      <a
                        href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=775d6629622740de8a5ed61a959c7506"
                        target="_blank"
                        rel="nofollow"
                        style={{ fontWeight: "bold", color: "#1CAAD9" }}
                      >
                        Sketchfab
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* New Solar System Section */}
          <section
            className="container max-w-lg bg-slate-600 m-5 px-10 h-[800px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="row">
              <div className="col-lg-6 d-flex flex-column text-base justify-content-center p-5">
                <div className="icon-box">
                  <h4 className="font-bold tracking-widest mt-10 mb-5 text-lg">
                    Solar System
                  </h4>
                  <p className="description bg-zinc-700 text-white rounded-lg p-4">
                    <a href="" onClick={handleClick}>
                      Solar System Diagram
                    </a>
                  </p>

                  {/* Embedded Sketchfab code for Solar System */}
                  <div className="sketchfab-embed-wrapper">
                    <iframe
                      title="Solar System"
                      frameBorder="0"
                      allowFullScreen
                      mozallowfullscreen="true"
                      webkitallowfullscreen="true"
                      allow="autoplay; fullscreen; xr-spatial-tracking"
                      xr-spatial-tracking
                      execution-while-out-of-viewport
                      execution-while-not-rendered
                      web-share
                      src="https://sketchfab.com/models/f7896d085f474ef28631d88129268411/embed"
                    ></iframe>
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: "normal",
                        margin: "5px",
                        color: "#4A4A4A",
                      }}
                    >
                      <a
                        href="https://sketchfab.com/3d-models/solar-system-f7896d085f474ef28631d88129268411?utm_medium=embed&utm_campaign=share-popup&utm_content=f7896d085f474ef28631d88129268411"
                        target="_blank"
                        rel="nofollow"
                        style={{ fontWeight: "bold", color: "#1CAAD9" }}
                      >
                        Solar System
                      </a>{" "}
                      by{" "}
                      <a
                        href="https://sketchfab.com/KangaroOz-3D?utm_medium=embed&utm_campaign=share-popup&utm_content=f7896d085f474ef28631d88129268411"
                        target="_blank"
                        rel="nofollow"
                        style={{ fontWeight: "bold", color: "#1CAAD9" }}
                      >
                        KangaroOz 3D
                      </a>{" "}
                      on{" "}
                      <a
                        href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=f7896d085f474ef28631d88129268411"
                        target="_blank"
                        rel="nofollow"
                        style={{ fontWeight: "bold", color: "#1CAAD9" }}
                      >
                        Sketchfab
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Arlearning;
