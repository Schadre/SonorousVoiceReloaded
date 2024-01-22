import React from "react";
import Sidebar from "../Components/Sidebar";
import Sonorousvoicelogo from "../Assets/Images/Sonorousvoicelogo.png";
import Love from "../Assets/Images/Family.png";
import Unifrom from "../Assets/Images/Uniform.png";
import Fun from "../Assets/Images/Fun.jpg";

function About() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-2 h-fit w-fit-content justify-center">
          <div className="logo-container mt-10 mb-10">
            <img
              src={Sonorousvoicelogo}
              alt="Sonorous Voice Logo"
              className="mx-auto w-full md:1/2 lg:w-9/12"
            />
          </div>
          <section className="p-6">
            <div className="bg-Licorice p-2 lg:p-20 mx-auto rounded-xl text-center shadow-2xl lg:w-8/12 xl:w-7/12 mb-20">
              <h1 className="text text-centerfont-bold text-brown-400 text-4xl lg:text-5xl">
                About Me
              </h1>
              <p className="text-brown-400 sm:w-full md:w-3/4 lg:w-full mx-auto">
                Hello, I'm Arthur Dent, a voice professional with over 20 years
                of military experience. I started my journey as a Naval Officer
                and transitioned into the Voiceover industry in 2017. My
                authentic communication style, coupled with a warm and
                comforting voice, sets me apart. I've had the pleasure of
                serving a diverse range of clients, offering various voiceover
                services. What truly distinguishes me is my ability to connect
                with listeners on a personal level, making my work resonate.
                Beyond my career, I'm a devoted family man who cherishes quality
                time with loved ones. Balancing my passion for work with my
                commitment to family defines who I am. Whether behind the
                microphone or at home, I approach life with authenticity and
                unwavering passion. Thank you for getting to know me!
                <div className="flex flex-col rounded-xl justify-center gap-2 xl:flex-row lg:flex-row p-6">
                  <img
                    src={Love}
                    alt="Family"
                    className="mx-auto w-60 object-fit rounded-md"
                  />
                  <img
                    src={Unifrom}
                    alt="Military"
                    className="mx-auto w-60 object-fit rounded-md"
                  />
                  <img
                    src={Fun}
                    alt="Art"
                    className="mx-auto w-60 object-fit rounded-md"
                  />
                </div>
              </p>

            </div>
            </section>
        </div>
      </div>
    </>
  );
}

export default About;
