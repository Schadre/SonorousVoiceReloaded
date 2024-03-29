import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Sonorousvoicelogo from "../Assets/Images/Sonorousvoicelogo.png";
import TestimonialCard from "../Components/TestimonialCard";
import audio1 from "../Assets/VoiceOvers/ArthurDent1.mp3";
import audio2 from "../Assets/VoiceOvers/ArthurDent2.mp3";
import audio3 from "../Assets/VoiceOvers/Navbar.wav";
import Netflix from "../Assets/Images/Netflix.png";
import OldDads from "../Assets/Images/Old Dads.jpeg";
import Epic from "../Assets/Images/Epic.png";
import Whisper from "../Assets/Images/WRLogoBlacknoBackground-vector.svg";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "../index.css";
import '@fortawesome/fontawesome-free/css/all.css';

const testimonials = [
  {
    personName: "Rob McClure",
    businessName: `Track Change Thrive`,
    position: "Owner/CEO",
    testimonial: `
    Art was amazing!  He was professional, timely, and very dedicated to my project.  I am extremely happy with his services and plan to use him in the future.`,
  },
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

const audioTracks = [
  { name: "The Love Doctor", src: audio3 },
  { name: "Commerical Deluxe", src: audio1 },
  { name: "Commerical Gold", src: audio2 },
];

function Home() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const playNextTrack = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex < audioTracks.length - 1 ? prevIndex + 1 : 0
    );
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <div className="flex"> 
        {sidebarVisible && <Sidebar />}
        <div
          className="cursor-pointer hamburger-icon"
          onClick={toggleSidebar}
          style={{ fontSize: "24px", padding: "1px" , color: "#140c0A" }}
          title="Menu"
        >
          <i className="fas fa-caret-right"></i>
        </div>
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
            <div className="flex flex-col justify-center items-center">
            {audioTracks.map((track, index) => (
              <section key={index}>
                <p className="text-brown-400 text-center">{track.name}</p>
                <AudioPlayer
                  className="shadow-none"
                  src={track.src}
                  onEnded={playNextTrack}
                  autoPlay={false}
                  style={{
                    backgroundColor: "#FFF2D7",
                  }}
                  customProgressBarSection={[RHAP_UI.MAIN_CONTROLS]}
                  customControlsSection={[]}
                />
              </section>
            ))}
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
