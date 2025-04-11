import React, { useEffect, useRef } from "react";
import InfiniteCarousel from "./component/InfiniteCarousel";

export default function Review() {
  const calendlyRef = useRef(null);

  const handleScroll = () => {
    calendlyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="">
      <div className="vsl_div">
        <center>
          <p className=" AGent_text text-white">
            To avoid{" "}
            <span className="bg-yellow-300 text-black px-1 font-bold">
              CANCELLATION
            </span>{" "}
            of your appointment, please watch this video. It explains how our
            system works
          </p>
          <div>
            <iframe
              className="video"
              src="https://killerplayer.com/watch/video/7ad7082b-e455-4e0b-ab68-1e7a81012276"
              frameBorder="0"
              allow="autoplay; gyroscope; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>
        </center>
      </div>
      <div className="rest_review">
        <div className="caution flex justify-center gap-20">
          <img className="book" src="./right.png" />
          <div className="cautpn">
            <p className="secre mb-6">Right to Reservation</p>
            <p className="rese">
              We take on 5 new clients every 3 months so we can you our full
              attention and do amazing work.- We{" "}
              <span className="chase_bold">CHASE</span> perfection and
              excellence.
            </p>
            <button onClick={handleScroll} className="next_btn mt-10 mb-14">
              Book a Call
            </button>{" "}
          </div>
        </div>
       
      </div>
    </div>
  );
}
