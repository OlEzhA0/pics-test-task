import React from "react";
import "./Testimonials.scss";

export const Testimonials = () => (
  <div className="Testimonials container">
    <div className="Testimonials__Container">
      <p className="Testimonials__Text">
        For somebody getting in touch for the first time with classical
        dam-services, it is a perfect starter with more than fair pricing and a
        24/7 scaling option for all features.
      </p>
      <div className="Testimonials__DownSite">
        <p className="Testimonials__About">
          <span className="Testimonials__Author">Benjamin Frischbier</span>
          <br />
          Art Direction
          <br />
          SAE Institute GmbH
        </p>
        <span className="Testimonials__Logo">
          <picture>
            <source
              srcSet="https://landing-assets.pics.io/img/picsio/client-sae-institute.webp"
              type="image/webp"
            />
            <source
              srcSet="https://landing-assets.pics.io/img/picsio/client-sae-institute.png"
              type="image/jpeg"
            />
            <img
              loading="lazy"
              src="https://landing-assets.pics.io/img/picsio/client-sae-institute.png"
              width="93"
              height="68"
              alt="SAE Institute GmbH"
            />
          </picture>
        </span>
      </div>
    </div>
  </div>
);
