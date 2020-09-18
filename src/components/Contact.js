
import React from 'react';

const Contact = (props) => {
  const { name, label, email, phone, website, summary, location, pdf } = props.info;

  return (
    <div className="contact__container" style={{display: 'flex'}}>
      <div className="contact__modal">
        <div className="contact">
          <h1 className="contact__header">Contact</h1>
          <div className="contact__text">
            <h3>
              <a
                href="https://www.linkedin.com/in/jeanne-locker/"
                style={{ textDecoration: 'none'}}
                target="_blank"
                rel="noopener noreferrer"
              >
                {website}
              </a>
            </h3> <br></br>

            <h3>
              <a
                href="mailto:jealocker@gmail.com?subject=Resume%20Inquiry"
                style={{textDecoration: 'none'}}
              >
                {email}
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
      
export default Contact;