import React, { useState, useRef, useEffect } from "react";
import Mic from "../Assets/Images/Mic.jpeg";

interface AudioPlayerProps {
  audioSrc: string[];
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentVoiceNote, setCurrentVoiceNote] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playPauseVoiceNote = () => {
    if (audioRef.current) {
      if (audioRef.current.paused || audioRef.current.ended) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  
  
  const nextVoiceNote = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      const nextIndex = (currentVoiceNote + 1) % audioSrc.length;
  
      audioRef.current.src = audioSrc[nextIndex];
      audioRef.current.load();
  
      audioRef.current.addEventListener('loadeddata', () => {
        if (audioRef.current) {
          audioRef.current.play();
          setCurrentVoiceNote(nextIndex);
          setIsPlaying(true);
          audioRef.current.removeEventListener('loadeddata', () => {});
        }
      });
    }
  };
  
  
  
  
  
useEffect(() => {
  if (isPlaying && audioRef.current) {
    const interval = setInterval(() => {
      setCurrentTime(audioRef.current?.currentTime || 0);
    }, 1000);
    return () => clearInterval(interval);
  }
}, [isPlaying]);
  

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime;
    }
  }, [currentTime]);

  return (
    <section className="text-center justify-center mb-10">
      <div className="w-full">
        <div className="h-2"></div>
        <div className="flex items-center justify-center">
          <div
            className="bg-Licorice text-brown-400 shadow-lg rounded-lg"
            style={{ width: "45rem !important" }}
          >
            <div className="flex">
              <div>
                <img
                  className=" mt-10 w-64 h-44 hidden md:block p-4 opacity-60"
                  src={Mic}
                  alt="Microphone"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-center">
                  <div>
                    <h3 className="text-2xl font-medium">
                      The Audio Portfolio
                    </h3>
                    <p className="text-sm mt-1">Arthur Earl Dent III</p>
                  </div>
                </div>
                <div className="flex flex-nowrap justify-center p-2 items-center mt-8">
                  <div>
                  </div>
<div className="text-brown rounded-full shadow-lg">
<button onClick={playPauseVoiceNote}>
    {isPlaying ? (
      <svg
        className="w-8 h-8"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
      </svg>
    ) : (
      <svg
        className="w-8 h-8"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
      </svg>
    )}
  </button>



</div>

                  <div className="p-2">
                    <button onClick={nextVoiceNote}>
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-8 py-4">
              <div className="flex justify-between text-sm text-grey-darker">
                <p>
                  {Math.floor(currentTime / 60)}:
                  {(currentTime % 60).toFixed(0).padStart(2, "0")}
                </p>
              </div>
              <div className="mt-1">
                <div className="h-1 bg-grey-dark rounded-full">
                  <div className="w-1/5 h-1 bg-red-light rounded-full relative">
                    <span className="w-4 h-4 bg-red absolute pin-r pin-b -mb-1 rounded-full shadow"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={audioSrc[currentVoiceNote]}></audio>
    </section>
  );
};

export default AudioPlayer;
