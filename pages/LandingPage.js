import Link from "next/link";
import React from "react";

export default function LandingPage() {
  const scrollToTestimonials = () => {
    const element = document.getElementById("testimonials");
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="vsl_page bg-cover bg-center bg-no-repeat min-h-screen ">
      <div className=" mx-auto text-center">
        <center>
          <p className="notice mb-10">
            <span className="not"> WHO IS THIS FOR </span>- For Realtors Tired
            of
            <span className="bg-yellow-300 text-black px-1 font-bold">
              Unpredictable Lead{" "}
            </span>{" "}
            flow & Chasing Referrals{" "}
          </p>
          <div className="h_head ">
            <p className="hero_head">
              Close
              <span className="salescall"> 3+ Deals Monthly </span> — Without
              Posting Daily or Wondering Where Your Next Client Will Come From
            </p>
            <div className="hero_sub_div mt-4">
              <p className="hero_sub">
                {" "}
                Get the <span className="salescall">
                  Lead Pump™ System{" "}
                </span>{" "}
                that delivers Preapproved buyers & Motivated sellers on{" "}
                <span className="sales">AutoPilot</span>.
                <span className="text_under">
                  {" "}
                  No Monthly Fees, posting on Social Media
                </span>
                <span className="salescall text_under"> Referral-Begging</span>
              </p>
            </div>
          </div>
        </center>

        <center className="mt-10">
          <div className="button_bg">
          <p className="qualifier">Usually $997 <span className="free">FREE</span> TODAY</p>
            <center>
              <Link href="https://tally.so/r/wkkqkZ">
                <p className=" mb-2"></p>
                <button className="install mb-14">
                  GET ACCESS TO LEAD PUMP
                </button>
              </Link>
            </center>
          </div>
        </center>
      </div>

      <div className="bg-white screenshot">
        <center>
          <p className="testimonila_header rev_head text-white text-center">
            <span className="text-white mb-20">TESTIMONIAL SCREENSHOTS </span>
          </p>{" "}
        </center>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center tts mt-14 px-4">
          <img className="test_Card" src="./a1.png" alt="testimonial" />
          <img className="test_Card" src="./a2.png" alt="testimonial" />
          <img className="test_Card" src="./a6.png" alt="testimonial" />
          <img className="test_Card" src="./luka.jpg" alt="testimonial" />
        </div>
        <center>
          <div className="button_bg">
          <p className="qualifier">Usually $997 <span className="free">FREE</span> TODAY</p>

            <center>
              <Link href="https://tally.so/r/wkkqkZ">
                <button className="install mb-14">
                  GET ACCESS TO LEAD PUMP
                </button>
              </Link>
            </center>
          </div>
        </center>
      </div>
    </div>
  );
}
