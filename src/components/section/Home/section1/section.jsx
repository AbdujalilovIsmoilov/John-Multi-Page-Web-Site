import React, { useEffect } from "react";
import "./section.scss";
import Aos from "aos";
import "../../../../../node_modules/aos/dist/aos.css";

const section = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <section className="section">
        <div className="section__post">
          <div className="container">
            <div className="section__post_titles">
              <p
                className="section__post_titles-text"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Recent posts
              </p>
              <a
                href="#"
                className="section__post_titles-link"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                View all
              </a>
            </div>
            <div className="section__post_container">
              <div
                className="section__post_container_box"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h2
                  className="section__post_container_box-title"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  Making a design system from scratch
                </h2>
                <div className="section__post_container_box_dates">
                  <p
                    className="section__post_container_box_dates-text"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    {new Date().getDate()} Feb {new Date().getFullYear()}
                  </p>
                  |
                  <p className="section__post_container_box_dates-text">
                    Design, Pattern
                  </p>
                </div>
                <p
                  className="section__post_container_box-description"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="section__post_container_box">
                <h2
                  className="section__post_container_box-title"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  Creating pixel perfect icons in Figma
                </h2>
                <div
                  className="section__post_container_box_dates"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <p
                    className="section__post_container_box_dates-text"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    {new Date().getDate()} Feb {new Date().getFullYear()}
                  </p>
                  |
                  <p
                    className="section__post_container_box_dates-text"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    Design, Pattern
                  </p>
                </div>
                <p
                  className="section__post_container_box-description"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default section;
