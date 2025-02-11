import React from "react";
import "./Contractors.css";
import img1 from "../../assets/image1.jpg";
import img2 from "../../assets/image2.jpg";

const Contractors = () => {
  return (
    <div className="general-contractor">
      <section className="hero">
        <div className="hero-content">
          <h1>AI-Powered Takeoff Software for General Contractors</h1>
          <p>
            Streamline your takeoffs with our smart solution that cuts your work
            time by 90% and helps you secure 30% more bids.
          </p>
          <div className="hero-buttons">
            <button className="cta-demo">Book a Demo</button>
            <button className="cta-experience">Experience the Tool</button>
          </div>
        </div>
      </section>

      <section className="challenges">
        <h2>Competing in a Fast-Paced Market</h2>
        <p>
          Manual takeoffs slow you down—wasting up to half of your bid cycle. With
          limited time to coordinate, refine estimates, or seize new
          opportunities, staying competitive becomes a challenge.
        </p>
      </section>

      <section className="process">
        <h2>Get Set Up in Just Three Simple Steps</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Upload Your Plans</h3>
            <p>Quickly upload your blueprint and project documents.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Define Your Scope</h3>
            <p>Enter project details and scope for tailored takeoffs.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Proceed & Automate</h3>
            <p>
              Let our AI handle the heavy lifting and generate precise takeoffs.
            </p>
          </div>
        </div>
      </section>

      <section className="benefits">
        <h2>Revolutionize Your Bidding Strategy</h2>
        <div className="benefit-container">
          <div className="benefit">
            <h3>Save Valuable Time</h3>
            <p>
              Automate your takeoffs end to end, freeing up hours for strategic
              planning and vendor coordination.
            </p>
            <button className="cta-demo">Get a Demo</button>
          </div>
          <div className="benefit">
            <h3>Accurate, Trade-Specific Details</h3>
            <p>
              Obtain precise quantities broken down by trade—whether it’s
              concrete, electrical, HVAC, or more.
            </p>
            <button className="cta-demo">Try It Out</button>
          </div>
          <div className="benefit">
            <h3>Win More Projects</h3>
            <p>
              Deliver faster, more competitive bids with improved accuracy and a
              streamlined workflow.
            </p>
            <button className="cta-demo">Learn More</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Our Clients Speak</h2>
        <div className="testimonial-container">
          <div className="testimonial">
            <div className="testimonial-image-container">
              <img
                src={img1}
                alt="Alex Johnson, Construction Consultant"
                className="testimonial-image"
              />
            </div>
            <p>
              "This software slashed our takeoff time dramatically and helped us secure a multi-million dollar project!"
            </p>
            <span>- Alex Johnson, Construction Consultant</span>
          </div>
          <div className="testimonial">
            <div className="testimonial-image-container">
              <img
                src={img2}
                alt="Samantha Brown, Operations Manager"
                className="testimonial-image"
              />
            </div>
            <p>
              "A true game-changer! The accuracy and speed of the tool have completely transformed our bidding process."
            </p>
            <span>- Samantha Brown, Operations Manager</span>
          </div>
        </div>
      </section>


      <section className="trades">
        <h2>Built for Every Trade</h2>
        <ul>
          <li>Concrete & Rebar</li>
          <li>HVAC & Mechanical</li>
          <li>Electrical & Plumbing</li>
          <li>Drywall & Framing</li>
          <li>Masonry & Flooring</li>
          <li>Paving & Roofing</li>
          <li>And More...</li>
        </ul>
      </section>

      <section className="cta-final">
        <h2>Ready to Transform Your Takeoffs?</h2>
        <div className="cta-buttons">
          <button className="cta-demo">Book a Demo</button>
          <button className="cta-free">Try It Free</button>
        </div>
      </section>
    </div>
  );
};

export default Contractors;
