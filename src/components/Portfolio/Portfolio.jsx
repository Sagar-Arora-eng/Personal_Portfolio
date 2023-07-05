import React from "react";
import "./portfolio.css";
import ME from "../../assests/Sagar.PNG";
import Project1 from "../../assests/stopwatch.PNG";
import Project2 from "../../assests/superhero.PNG";
import Project3 from "../../assests/MovieMadness.PNG";
import Project4 from "../../assests/placementCell.PNG";
import Project5 from "../../assests/articleSummarizer.PNG";

const data = [
  {
    id: 1,
    image: Project1,
    title: "Crypto currency dashboard & financial visualization",
    github: "https://github.com/Sagar-Arora-eng/stopwatch.github.io",
    demo: "https://sagar-arora-eng.github.io/stopwatch.github.io/",
  },
  {
    id: 2,
    image: Project2,
    title:
      "Superhero Hunter website is a vanilla js website built for the marvel and dc fanatics, just search any superhero and get the information about it. Also there is a favourite section which you can use to save your favourite heroes for fast access using local storage functionality.",
    github: "https://github.com/Sagar-Arora-eng/SuperHero_Hunt",
    demo: "https://sagar-arora-eng.github.io/SuperHero_Hunt/index.html",
  },
  {
    id: 3,
    image: Project3,
    title: "Crypto currency dashboard & financial visualization",
    github: "https://github.com/Sagar-Arora-eng/MovieMadness",
    demo: "https://movie-madness-hazel.vercel.app/",
  },
  {
    id: 4,
    image: Project4,
    title: "Crypto currency dashboard & financial visualization",
    github: "https://github.com/Sagar-Arora-eng/Cn-Placement-Cell",
    demo: "https://placementcell-yyfg.onrender.com/",
  },
  {
    id: 5,
    image: Project5,
    title: "Crypto currency dashboard & financial visualization",
    github: "https://github.com/Sagar-Arora-eng/article-summarizer",
    demo: "https://jocular-marshmallow-6f79b9.netlify.app/",
  },
  {
    id: 6,
    image: ME,
    title: "Crypto currency dashboard & financial visualization",
    github: "https://github.com",
    demo: "https://dribbble.com/Sagar-Arora",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
