import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';

const About = () => (
  <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="about"
  >
    <div className="w-100">
      <h1 className="mb-0">
        {config.firstName}
        <span className="text-primary">{config.lastName}</span>
      </h1>
      <div className="subheading mb-5">
        {config.address} · {config.phone} ·
        <a href={`mailto:${config.email}`}>{config.email}</a>
      </div>
      <p className="lead mb-5">
        {config.about.trim()}
      </p>
      <div className="social-icons">
        {config.socialLinks.map(social => {
          const { icon, url } = social;
          return (
            <a key={url} href={url}>
              <i className={`fab ${icon}`}></i>
            </a>
          );
        })}
      </div>
    </div>
  </section>
)

const Education = () => (
  <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="education"
  >
    <div className="w-100">
      <h2 className="mb-5">Education</h2>

      {config.educations.map(education => (
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">{education.school}</h3>
            <div className="subheading mb-3">{education.degree}</div>
            {education.extraInfo.map(info => (
              <div>{info}</div>
            ))}
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">${education.time}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
)

const Experience = () => (
  <section
    className="resume-section p-3 p-lg-5 d-flex justify-content-center"
    id="experience"
  >
    <div className="w-100">
      <h2 className="mb-5">Experience</h2>

      {config.experiences.map(exp => (
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">{exp.title}</h3>
            <div className="subheading mb-3">{exp.content}</div>
            <p>{exp.intro}</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">{exp.time}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Paper = () => {

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="paper"
    >
      <div className="w-100">
        <h2 className="mb-5">Paper</h2>
        
        {config.papers.map(paper => (
        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <img height="125px" src={paper.thumbnail}></img>
          <div className="resume-content ml-3">
            <h3 className="mb-0">{paper.title}</h3>
            <div>{paper.conference}</div>
            <div>{paper.authors.join(', ')}</div>
            <div>
              {paper.links.map(link => (
                <div className="d-inline-block mr-3">
                  <a href={link.href}>{link.content}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};

const Movie = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="movie"
    >
      <div className="w-100">
        <h2 className="mb-5">Movie</h2>
      </div>
    </section>
  );
};

const Animation = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="animation"
    >
      <div className="w-100">
        <h2 className="mb-5">Animation</h2>
      </div>
    </section>
  );
};

const Ad = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="ad"
    >
      <div className="w-100">
        <h2 className="mb-5">Ad</h2>
      </div>
    </section>
  );
};

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <About />
      <hr className="m-0" />
      <Education />
      <hr className="m-0" />
      <Experience />
      <hr className="m-0" />
      <Paper />
      <hr className="m-0" />
      <Movie />
      <hr className="m-0" />
      <Animation />
      <hr className="m-0" />
      <Ad />
    </div>
  </Layout>
);

export default IndexPage;
