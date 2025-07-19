"use client";
import React from "react";

const projects = [
  {
    title: "New Times",
    description: "A news app which uses the News API to fetch data and display it in a news format.",
    image: "/icons8-news-50.png",
    link: "https://www.linkedin.com/posts/sharjeel-khan-88a5ab230_reactjs-frontenddevelopment-newsapi-activity-7335095063447781376-DGVz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnAtSoByJ2SfjxwacWlZeybV_38RDJfdgQ"
  },
  {
    title: "Spotify Clone",
    description: "A music player app in which vanilla javascript is used to integrate local storage and fetch data from the API.",
    image: "/icons8-spotify-50.png",
    link: "https://www.linkedin.com/posts/sharjeel-khan-88a5ab230_music-player-app-for-codealpha-internship-activity-7248393780297428994-ef-g?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnAtSoByJ2SfjxwacWlZeybV_38RDJfdgQ"
  },
  {
    title: "Bazaryo",
    description: "An application for enhancing the shopping experience in an online seller markeplace.",
    image: "/icons8-shopping-bag-50.png",
    link: "https://www.linkedin.com/posts/sharjeel-khan-88a5ab230_reactjs-django-postgresql-activity-7352122319814717442-Qvos?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnAtSoByJ2SfjxwacWlZeybV_38RDJfdgQ"
  }
];

const Projects = () => (
  <section id="projects" className="min-h-screen bg-gradient-to-b from-[#393053] to-[#18122B] py-20 px-4 transition-colors duration-500">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-400 mb-12 font-display">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            className="block bg-[#23213a] rounded-xl shadow-lg hover:shadow-2xl hover:bg-[#2d254d] transition-all duration-300 p-6 group border border-purple-900/40"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={project.image} alt={project.title} className="w-16 h-16 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-100 mb-2 group-hover:text-purple-400 transition-colors duration-300 font-display">
              {project.title}
            </h3>
            <p className="text-gray-300 text-base text-center transition-colors duration-300">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
