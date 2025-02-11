import React from "react";
import "./Suppliers.css";
import img1 from "../../assets/image1.jpg";
import img2 from "../../assets/image2.jpg";

const Suppliers = () => {
  return (
    <div className="supplier-section">
      <section className="hero">
        <div className="hero-content">
          <h1>AI-Driven Solutions for Suppliers</h1>
          <p>
            Maximize efficiency and accuracy in material sourcing with our AI-powered tools.
            Reduce procurement costs and boost your operations' productivity.
          </p>
          <div className="hero-buttons">
            <button className="cta-demo">Book a Demo</button>
            <button className="cta-experience">Experience the Tool</button>
          </div>
        </div>
      </section>

      <section className="challenges">
        <h2>Facing Supply Chain Challenges</h2>
        <p>
          Manual sourcing and inventory tracking can cause delays, miscalculations, and unnecessary costs. 
          Time-consuming processes can hurt your bottom line and delay your operations.
        </p>
      </section>

      <section className="suppliers-services">
    <h2>Streamline Your Procurement in 3 Easy Steps</h2>
    <div className="suppliers-steps">
        <div className="suppliers-step">
            <div className="suppliers-step-number">1</div>
            <h3>Upload Your Inventory</h3>
            <p>Seamlessly upload your stock data and product catalog.</p>
        </div>
        <div className="suppliers-step">
            <div className="suppliersstep-number">2</div>
            <h3>Define Your Needs</h3>
            <p>Set your procurement criteria and target supplies.</p>
        </div>
        <div className="step">
            <div className="step-number">3</div>
            <h3>Let AI Optimize</h3>
            <p>Our AI will handle the sourcing, find best deals, and track inventory for you.</p>
        </div>
    </div>
</section>


      <section className="benefits">
        <h2>Enhance Your Procurement Strategy</h2>
        <div className="benefit-container">
          <div className="benefit">
            <h3>Reduce Procurement Time</h3>
            <p>
              Automate sourcing and minimize manual tasks, allowing your team to focus on more strategic activities.
            </p>
            <button className="cta-demo">Get a Demo</button>
          </div>
          <div className="benefit">
            <h3>Data-Driven Decisions</h3>
            <p>
              Make smarter purchasing decisions using AI-backed insights and real-time data.
            </p>
            <button className="cta-demo">Try It Out</button>
          </div>
          <div className="benefit">
            <h3>Save on Costs</h3>
            <p>
              Leverage AI to identify the best prices, ensuring cost-effective procurement.
            </p>
            <button className="cta-demo">Learn More</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-container">
          <div className="testimonial">
            <div className="testimonial-image-container">
              <img
                src={img1}
                alt="John Smith, Procurement Specialist"
                className="testimonial-image"
              />
            </div>
            <p>
              "The AI tool revolutionized our procurement process, saving us hours every week!"
            </p>
            <span>- John Smith, Procurement Specialist</span>
          </div>
          <div className="testimonial">
            <div className="testimonial-image-container">
              <img
                src={img2}
                alt="Rachel Lee, Supply Chain Manager"
                className="testimonial-image"
              />
            </div>
            <p>
              "We saw a significant reduction in operational costs and time spent on sourcing thanks to this tool."
            </p>
            <span>- Rachel Lee, Supply Chain Manager</span>
          </div>
        </div>
      </section>

      <section className="categories">
        <h2>Tailored for Every Industry</h2>
        <ul>
          <li>Construction Materials</li>
          <li>Electrical Components</li>
          <li>Plumbing & HVAC Supplies</li>
          <li>Raw Materials</li>
          <li>Building Equipment</li>
          <li>Packaging Materials</li>
          <li>And More...</li>
        </ul>
      </section>

      <section className="cta-final">
        <h2>Ready to Streamline Your Procurement?</h2>
        <div className="cta-buttons">
          <button className="cta-demo">Book a Demo</button>
          <button className="cta-free">Try It Free</button>
        </div>
      </section>
    </div>
  );
};

export default Suppliers;
