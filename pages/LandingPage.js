import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    <div
      className="vsl_page bg-cover bg-center bg-no-repeat min-h-screen px-6 pt-16"
      style={{ backgroundImage: "url('/vp.jpg')" }}
    >
      <div className=" mx-auto text-center">
        <center>
          <div className="h_head">
            <p className="hero_head">
              Close <span className="salescall">3+ Deals</span> Monthly
              —Without Posting on Social Media,<span className="salescall">Paying</span> Monthly for Marketing
              or Relying Only on Referrals.
            </p>
          </div>
        </center>
        <center>
          <div className="warnifnsub mt-2 mb-2">
            <p className="warning mt-6">
              <span className="importance"> IMPORTANT NOTICE-</span>
              For Real estate Brokers and Team Lead stuck between{" "}
              <span className="salescall">$100k-$200k,</span> Looking to earn
              $300k GCI in the next 14 months{" "}
            </p>
          </div>
        </center>
        <div className="flex justify-center mt-10">
          <div>
            <iframe
              className="video"
              src="https://killerplayer.com/watch/video/7ad7082b-e455-4e0b-ab68-1e7a81012276"
              frameborder="0"
              allow="autoplay; gyroscope; picture-in-picture;"
              allowfullscreen
            ></iframe>
            <center className="mt-4">
              <div className="button_bg">
                <center>
                  <p className="Trigger mb-2">
                    Do you need Homebuyers and highly motivated HomeSellers
                    today?
                  </p>
                  <Link href="./Book">
                    <button className="next_btn mb-6">Next Step</button>
                  </Link>
                </center>
              </div>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
