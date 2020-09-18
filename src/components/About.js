import React from 'react';

const About = () => {
  // const { area, endDate, institution, studyType } = props.education;
//   const ed = props.education;
//   console.log(ed)
  return (
    <div className="about__container" style={{display: 'flex'}}>
      <div className="about__modal">
        <div className="about">
          <h1 className="about__header">About</h1>
          <div className="about__text">
                Hi! I'm Jeanne. I just graduated from college and would really like to find a job! So I made this resume site to show off to people.
                In my spare time I like to read about movies and also knit things.
                  <br></br>
                  <br></br>
        </div>
        </div>
      </div>
    </div>
  );
}
    
export default About;