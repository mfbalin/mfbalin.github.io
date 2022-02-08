import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });

      var publications = this.props.data.publications.map(function(publications) {
        return (
          <div key={publications.title}>
            <a href={publications.link}>{publications.title}</a>
            <p className="info">
              {publications.venue}
              <span>&bull;</span> <em className="date">{publications.year}</em>
            </p>
            <p className="newline">{publications.authors}</p>
          </div>
        );
      });

      var talks = this.props.data.talks.map(function(talks) {
        return (
          <div key={talks.title}>
            <a href={talks.link}>{talks.title}</a>
            <p className="info">
              {talks.venue}
              <span>&bull;</span> <em className="date">{talks.year}</em>
            </p>
          </div>
        );
      });

      var work = this.props.data.work.map(function(work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p className="newline">{work.description}</p>
          </div>
        );
      });
      var skills = this.props.data.skills.map(function(skills) {
        var projectImage = "images/tech/" + skills.image;
        return (
          <div key={skills.name} className="columns feature-item">
            <img className="skill" alt={skills.name} src={projectImage} />
            <h5>{skills.name}</h5>
            <p>{skills.description}</p>
          </div>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>News</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">  <p className="info">
          Summer 2021
        </p>
        <p className="newline">I will be joining Pacific Northwest National Laboratory for an research internship this summer.</p></div>
            </div>
          </div>
        </div>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row publications">
          <div className="three columns header-col">
            <h1>
              <span>Publications</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{publications}</div>
            </div>
          </div>
        </div>

        <div className="row talks">
          <div className="three columns header-col">
            <h1>
              <span>Talks</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{talks}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Favorite Tech</span>
            </h1>
          </div>

          <div>
            <div className="nine columns main-col">
              <p className="lead center">{skillmessage}</p>
            </div>
            <ul className="bgrid-quarters s-bgrid-thirds cf">{skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
