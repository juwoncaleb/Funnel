import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    <div className="vsl_page bg-cover bg-center bg-no-repeat min-h-screen px-6 ">
      <div className=" mx-auto text-center">
        <center>
          <p className="notice mb-10">
            <span className="not"> IMPORTANT NOTICE</span>- For real estate
            agent stuck between $100k-$200k GCI , LOOKING TO SCALE PASS THAT
          </p>
          <div className="h_head mt-6">
            <p className="hero_head">
              <span className="salescall">3 Deals Closed Monthly </span> –
              Guaranteed! Never Pay for Marketing Again - Install a{" "}
              <span className="salescall">LEAD PUMP system</span> Get
              Prequalified Leads After We’re Gone! No Monthly Fees, posting on
              Social Media
              <span className="salescall"> Referral-Begging</span>
            </p>
          </div>
        </center>

        <center className="mt-10">
          <div className="button_bg">
            <center>
              <p className="Trigger mb-2">
                Do you need Homebuyers and highly motivated HomeSellers today?
              </p>
              <Link href="./Book">
                <button className="install mb-14">
                  INSTALL THIS SYSTEM - LIMITED SPACE AVAILABLE
                </button>
              </Link>
            </center>
          </div>
        </center>
        <div className="flex justify-center mt-10">
          <div>
            <iframe
              className="video"
              src="https://killerplayer.com/watch/video/7ad7082b-e455-4e0b-ab68-1e7a81012276"
              frameBorder="0"
              allow="autoplay; gyroscope; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <p className="notice mb-10 mt-10">
          <span className="not">IMPORTANT NOTICE:</span> To avoid{" "}
          <span className="bg-yellow-300 text-black px-1 font-bold">
            CANCELLATION
          </span>{" "}
          of your appointment, please watch this video. It explains how our
          system works. We speak with agents who believe our system can help
          them — so we don’t waste your <span className="bg-yellow-300 text-black px-1 font-bold">
            TIME
          </span>{" "}  or ours.
        </p>
      </div>
      <div className="testimonial_block">
        <center>
          <p className="testimonila_header rev_head mt-6 text-white">
            Every successful Agent, we worked with started just like <br />
            <span className="salescall">YOU</span>
          </p>
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
        <center>
          <Link href='./Book'>
          <button className="install mb-6">
            INSTALL THIS SYSTEM - LIMITED SPACE AVAILABLE
          </button>
          </Link>
          
        </center>
        <div></div>
      </div>
      <div className="bg-white screenshot">
        <center>
          <p className="testimonila_header rev_head text-white text-center">
            <span className="text-black">SCREENSHOTS </span>
          </p>{" "}
        </center>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 justify-items-center mt-10 px-4">
          <img className="test_Card" src="./lil.png" alt="testimonial" />
          <img className="test_Card" src="./c1.png" alt="testimonial" />
          <img src="./tip.jpg"/>
          <img className="test_Card" src="./qw.png" alt="testimonial" />

          <img className="test_Card" src="./lp.png" alt="testimonial" />
          <img src="./tip1.jpg"/>
          <img className="test_Card" src="./zo.png" alt="testimonial" />
          <img className="test_Card" src="./last.png" alt="testimonial" />
        </div>
        <center>
          <Link href='./Book'>
           <button className="install mb-6 mt-10">
            INSTALL THIS SYSTEM - LIMITED SPACE AVAILABLE
          </button>
          </Link>
         
        </center>
      </div>
    </div>
  );
}
