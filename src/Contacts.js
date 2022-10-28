import React, { Fragment } from "react";
import Nav from './Nav';
function Contacts(){
    return(
        <Fragment>
          {/* <Nav></Nav> */}
        <section id="contact" className="contact-section">
      <div className="contact-section-header">
        <h2>Let's work together...</h2>
        <p>How do you take your coffee?</p>
      </div>
      <div className="contact-links">
        <a
          href="https://facebook.com/freecodecamp"
          target="_blank"
          className="btn contact-details"
          ><i className="fab fa-facebook-square"></i> Facebook</a
        >
        <a
          id="profile-link"
          href="https://github.com/freecodecamp"
          target="_blank"
          className="btn contact-details"
          ><i className="fab fa-github"></i> GitHub</a
        >
        <a
          href="https://twitter.com/freecodecamp"
          target="_blank"
          className="btn contact-details"
          ><i className="fab fa-twitter"></i> Twitter</a
        >
        <a href="/cdn-cgi/l/email-protection#e5809d8488958980a5809d8488958980cb868a88" className="btn contact-details"><i className="fas fa-at"></i> Send a mail</a
        >
        <a href="tel:555-555-5555" className="btn contact-details"
          ><i className="fas fa-mobile-alt"></i> Call me</a
        >
      </div>
    </section>

    <footer>
      {/* <p>
        **This is just a fake portfolio. All the projects and contact details
        given are not real.
      </p> */}
      <p>
        &copy; Created By ❤️
        <a href="https://www.freecodecamp.com/" target="_blank"
          > Pydi </a>
      </p>
    </footer>
        </Fragment>
    );
}

export default Contacts;