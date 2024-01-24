import React from "react";
import Sidebar from "../Components/Sidebar";
import Sonorousvoicelogo from "../Assets/Images/Sonorousvoicelogo.png";
import TestimonialCard from "../Components/TestimonialCard";
import audio1 from "../Assets/VoiceOvers/ArthurDent1.mp3";
import audio2 from "../Assets/VoiceOvers/ArthurDent2.mp3";
import Netflix from "../Assets/Images/Netflix.png";
import OldDads from "../Assets/Images/Old Dads.jpeg";
import Epic from "../Assets/Images/Epic.png";
import Whisper from "../Assets/Images/WRLogoBlacknoBackground-vector.svg";
import ReactAudioPlayer from "react-audio-player";

const testimonials = [
  {
    personName: "Gabe White",
    businessName: `WhisperRoom, Inc.`,
    position: "CEO",
    testimonial: `Arthur Dent is the real deal. We had the opportunity to work together on a couple of
    projects for WhisperRoom and his professionalism, friendly attitude, insight, and
    valuable input made it a very enjoyable experience. His voice has a soothing sound,
    natural flow, and authoritative style that can be paired with a wide variety of projects.
    Additionally, I was impressed with his eye for copy and the subtle suggestions he had
    for the script. His recommendations were spot on. The scripts were brought to life by his
    voice, and the turnaround time was fast. Highly recommended!`,
  },
  {
    personName: "",
    businessName: `Rich Danhankl`,
    position: "",
    testimonial: `Thank you Arthur, After listening to demos all day, we were very excited to hear yours! You probably get
    this all the time, but your voice is reminiscent of the great James Earl Jones! We’d love
    to have you on our roster if you’re interested.`,
  },
];

const isPlaying = false;

function Home() {
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
          <section className="justify-center p-10">
            <h1 className=" text text-center font-bold text-brown-400 text-4xl mb-5">
              Demos
            </h1>
            <div className="flex justify-center">
              <ReactAudioPlayer className="mb-1" src={audio1} autoPlay={isPlaying} controls/>
            </div>
            <div className="flex justify-center">
              <ReactAudioPlayer src={audio2} autoPlay={isPlaying} controls />
            </div>
          </section>

          <section className="flex flex-wrap justify-center p-4 mb-10 gap-2">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                personName={testimonial.personName}
                businessName={testimonial.businessName}
                position={testimonial.position}
                testimonial={testimonial.testimonial}
              />
            ))}
          </section>
          <h1 className=" text text-center font-bold text-brown-400 text-4xl">
            Corporate Collaborations
          </h1>
          <section className="flex flex-wrap text-center justify-center p-4 gap-2">
            <section className="flex flex-col text-center justify-center">
              <section className="flex flex-col p-4 gap-2">
                <img
                  src={Netflix}
                  alt="Netflix Logo"
                  className="h-full w-full object-cover shadow-lg"
                />
                <img
                  src={OldDads}
                  alt="Old Dads"
                  className="h-full w-full object-cover shadow-lg"
                />
                <img
                  src={Whisper}
                  alt="Whisper Room Logo"
                  className="h-full w-full object-cover"
                />
                <img
                  src={Epic}
                  alt="Epic Invite Logo"
                  className="h-full w-full object-cover shadow-lg"
                />
              </section>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
