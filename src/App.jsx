import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import gsap from "gsap";

function App() {
  let [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,

      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".girl", {
      scale: 1,
      rotate: 0,
      bottom: "-70%",
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", {
        x: `${xMove * 0.4}%`,
        duration: 0.3, // faster animation
        ease: "power2.out",
      });
      gsap.to(".sky", {
        x: xMove,
        duration: 0.3, // faster animation
        ease: "power2.out",
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
        duration: 0.3, // faster animation
        ease: "power2.out",
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full bg-black h-screen">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex items-center gap-5">
                <div className="lines flex flex-col gap-1">
                  <div className="line w-10 h-[6px] bg-white"></div>
                  <div className="line w-10 h-[6px] bg-white"></div>
                  <div className="line w-10 h-[6px] bg-white"></div>
                </div>
                <h3 className="text-5xl -mt-[5px] leading-none text-orange-400">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="sky scale-[1.5] rotate-[-20deg] absolute top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute bg scale-[1.7] rotate-[-3deg] top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text absolute flex flex-col top-29 left-1/2 -translate-x-1/2">
                <h1 className="text-9xl leading-none -ml-10 bg-gradient-to-b from-[#5C5BD3] to-[#F44DBB] bg-clip-text text-transparent">
                  grand
                </h1>
                <h1 className="text-9xl leading-none ml-10 bg-gradient-to-b from-[#5C5BD3] to-[#F44DBB] bg-clip-text text-transparent">
                  theft
                </h1>
                <h1 className="text-9xl leading-none -ml-10 bg-gradient-to-b from-[#5C5BD3] to-[#F44DBB] bg-clip-text text-transparent">
                  auto
                </h1>
              </div>
              <img
                className="absolute girl scale-[3] rotate-[-20deg] -bottom-[150%] left-1/2 -translate-x-1/2"
                src="./girl.png"
                alt=""
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-4xl text-orange-400 ">Scroll Down</h3>
              </div>
              <img
                className="h-[70px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center px-10  bg-black">
            <div className="cntnr flex text-white w-full h-[80%]">
              <div className="limg relative w-1/2 h-full ">
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2"
                  src="./girl3.png"
                  alt=""
                />
              </div>
              <div className="rg w-[40%] py-30">
                <h1 className="text-6xl font-bold font-[Helvetica_Now_Display] bg-gradient-to-b from-[#5C5BD3] to-[#F44DBB] bg-clip-text text-transparent leading-none">
                  COMING
                </h1>
                <h1 className="text-6xl font-[Helvetica_Now_Display] font-bold bg-gradient-to-b from-[#5C5BD3] to-[#F44DBB] bg-clip-text text-transparent leading-none">
                  MAY 26 2026
                </h1>
                <p className="mt-10 text-2xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  unde aut ab numquam commodi quod, sed quas, illo vel officia,
                  odit recusandae molestiae impedit perspiciatis adipisci qui
                  optio nemo nam!
                </p>
                <p className="mt-5 text-2xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo expedita fugit adipisci eos?Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Debitis rem illo officiis
                  modi, minus architecto praesentium quis molestiae eligendi
                  consequatur libero ducimus cum quaerat necessitatibus
                  obcaecati repellendus doloremque accusamus optio.
                </p>
                <a
                  href="https://youtu.be/VQRLujxTm3c?si=9-b94RTTsvTqblYI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-amber-500 cursor-pointer text-4xl text-black mt-10 rounded-2xl px-10 py-10">
                    Watch Trailer Now
                  </button>
                </a>
              </div>
            </div>
          </div>
          <footer className="w-full py-8 bg-black border-t border-gray-800">
            <div className="container mx-auto px-10">
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <span className="bg-gradient-to-b from-[#5C5BD3] to-[#F44DBB] font-bold bg-clip-text text-transparent text-xl font-[Helvetica_Now_Display]">
                    Made by Sanjay Singh Kanwasi
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://portfolio-react-sanjay.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-external-link-line text-2xl cursor-pointer text-white hover:text-orange-400 transition-colors"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sanjay-singh-kanwasi-057177200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-linkedin-box-line text-2xl cursor-pointer text-white hover:text-orange-400 transition-colors"></i>
                  </a>
                  <a
                    href="https://github.com/Sanjaykanwasi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-github-line text-2xl cursor-pointer text-white hover:text-orange-400 transition-colors"></i>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
