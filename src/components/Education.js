import React from 'react';

const Education = (props) => {
  // const { area, endDate, institution, studyType } = props.education;
  const ed = props.education;
  return (
    <div className="education__container" style={{display: 'flex'}}>
      <div className="education__modal">
        <div className="education">
          <h1 className="education__header">Education</h1>
          <br></br>
          {
          ed.map((key, index) => {
              return (
                <div className="education__text">
                  <h4 className="education__subheader">{ed[index].institution}</h4>
                  { ed[index].studyType !== "" ? <h5>{ed[index].studyType} in {ed[index].area}</h5> : null}
                  { ed[index].studyType !== "" ? <br></br> : null}
                  <h5>Class of {ed[index].endDate}</h5>
                  <br></br>
                  <br></br>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}
    
export default Education;