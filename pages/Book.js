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
            Every successful Agent, we worked with started just like <br />
            <span className="salescall">YOU</span>
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
            <button onClick={handleScroll} className="next_btn mt-10 mb-14">
              Book a Call
            </button>{" "}
        </center>
      </div>
      <div className="rest_review">
        <center>
          <button className="bord">See you Soon!</button>
        </center>
        <center>
          <div className="broker_ext mt-6 ">
            <p className="text-center">
              This is not a sales call. It is simply a conversation to see if
              our system will be beneficial for you and if we will be a good fit
              for each other.
            </p>
          </div>
        </center>
        <div
          ref={calendlyRef}
          className="calendly-inline-widget"
          data-url="https://calendly.com/calebomojuwon/quick-call"
          style={{ minWidth: "320px", height: "700px" }}
        ></div>

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
           <div className="bg-white screenshot">
                <center>
                  <p className="testimonila_header rev_head text-white text-center">
                    <span className="text-white mb-20">A while back, they had the same issues you’re going through.</span>
                  </p>{" "}
                </center>
                <div className="flex justify-center">
          <div className="relative w-full max-w-3xl">
            <iframe
              src="https://player.vimeo.com/video/1070872120?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              className="w-full h-full"
              title="Richard"
              style={{
                border: "none", // Remove the iframe border
                aspectRatio: "16/9", // Maintain the aspect ratio of the video
              }}
            ></iframe>
          </div>
        </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center tts mt-14 px-4">
                  <img className="test_Card" src="./a1.png" alt="testimonial" />
                  <img className="test_Card" src="./a2.png" alt="testimonial" />
                  <img className="test_Card" src="./a6.png" alt="testimonial" />
                  <img className="test_Card" src="./luka.jpg" alt="testimonial" />
                </div>
                <center>
                <button onClick={handleScroll} className="next_btn mt-10 mb-14">
              Book a Call
            </button>{" "}
                </center>
              </div>
      </div>
    </div>
  );
}
