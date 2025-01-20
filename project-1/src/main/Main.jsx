import React from 'react';
import image1 from "../assets/image-1.png";
import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"
import logo5 from "../assets/logo5.png"
import logo6 from "../assets/logo6.png"
import logo7 from "../assets/logo7.png"
import avatar1 from "../assets/avatar1.png"
import blogimage1 from "../assets/blogimage1.png"
import blogimage2 from "../assets/blogimage2.png"
import blogimage3 from "../assets/blogimage3.png"
import Avatar2 from "../assets/Avatar2.png"
import Avatar3 from "../assets/Avatar3.png"
import Avatar4 from "../assets/Avatar4.png"

const Main = () => {
    const features = [
        {
          icon: "🔔", // Replace with actual image/icon paths if needed
          title: "Share team inboxes",
          description:
            "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
        },
        {
          icon: "⚡",
          title: "Deliver instant answers",
          description:
            "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
        },
        {
          icon: "📊",
          title: "Manage your team with reports",
          description:
            "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.",
        },
        {
          icon: "💬",
          title: "Connect with customers",
          description:
            "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
        },
        {
          icon: "🔗",
          title: "Connect the tools you already use",
          description:
            "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
        },
        {
          icon: "🤝",
          title: "Our people make the difference",
          description:
            "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
        },
      ];
  return (
    <div>
        
      {/* Top Section */}
      <section className="text-center py-5 bg-light">
        <div className="mb-3">
          <span className="badge bg-danger text-light me-2">New feature</span>
          <a href="#" className="text-danger text-decoration-none">
            Check out the team dashboard →
          </a>
        </div>
        <h1 className="display-5 fw-bold">
          Beautiful analytics to grow smarter
        </h1>
        <p className="text-muted">
          Powerful, self-serve product and growth analytics to help you
          convert, engage, and retain more users. Trusted by over 4,000
          startups.
        </p>
        <div className="mt-4">
          <button className="btn btn-danger me-3">Sign up</button>
          <button className="btn btn-outline-secondary">Demo</button>
        </div>
      </section>

      {/* Card Section */}
      <section className="container py-5">
        <div className="row g-4">
            <div className="bg-dark text-light p-4">
              <img src={image1} className="img-fluid" alt="" />
          </div>

       
          
        </div>
      </section>
     <section>
     <div className="social-proof-section text-center my-5">
      <p className="mb-4 text-muted">Join 4,000+ companies already growing</p>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {/* Company Logos */}
        <img src={logo1} alt="Boltshift" className="company-logo mx-3" />
        <img src={logo2} alt="Lightbox" className="company-logo mx-3" />
        <img src={logo3} alt="FeatherDev" className="company-logo mx-3" />
        <img src={logo4} alt="Spherule" className="company-logo mx-3" />
        <img src={logo5} alt="GlobalBank" className="company-logo mx-3" />
        <img src={logo6} alt="Nietzsche" className="company-logo mx-3" />
        
        
      </div>
    </div>
     </section> <br />
     <section>
     <div className="features-section text-center py-5">
      <div className="container">
        {/* Header Section */}
        <h5 className="text-uppercase text-danger mb-2">Features</h5>
        <h2 className="mb-4">Analytics that feels like it’s from the future</h2>
        <p className="text-muted mb-5">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>

        {/* Features Grid */}
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="feature-card p-4 h-100">
                <div
                  className="icon-container mb-3 mx-auto"
                  style={{
                    fontSize: "2rem",
                    backgroundColor: "#f8f9fa",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {feature.icon}
                </div>
                <h5 className="mb-2">{feature.title}</h5>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
     </section>
     <section className="py-5 bg-light text-center">
      <div className="container">
        {/* Logo */}
        <div className="mb-3">
          <img
            src={logo7} // Replace with the actual logo URL
            alt="Sisyphus Logo"
            className="mb-2"
          />
         
        </div>

        {/* Testimonial Text */}
        <blockquote className="blockquote fs-4 fw-normal">
          "We’ve been using Untitled to kickstart every new project and can’t
          imagine working without it."
        </blockquote>

        {/* User Profile */}
        <div className="d-flex justify-content-center align-items-center mt-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/fcd7/e604/94e98ef4a34b3228a1783b7f500b0df6?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l25T1-8gLgc8aVXgxELuN~sKermJ8CNS8PLs7gpcgvrp4jnmHty25VALMCy6zaPIID3-Wu0L7YuEKyeMJqcRHEIa67HIfm2QysLxldZJe5iFmo40J6r4N0DAW-dLpsKQSL1vGZ2lDCbnVfd4oDhbAuygFno9Aw0t0YEc4pEHlnycNthrvdcSpGxhkaSlVgOyRqXaARRFgmxgTtTM43dV~LAYrqjFh1PjDN6mCmLCddyRgZi~9z1oDIB5-pKRUS5TjnKnAzAAh0AkrNBBG0PiZe9fPlg7h5pFk9ni8ihntOJDvwTbBjQInAUgZYRZK3YN6QbcgMJNpGjFqUpovUPeww__" // Replace with the actual profile picture URL
            alt="Candice Wu"
            className="rounded-circle me-3"
          />
          <div>
            <p className="fw-bold mb-0">Candice Wu</p>
            <small className="text-muted">Product Manager, Sisyphus</small>
          </div>
        </div>
      </div>
    </section> <br /><br /><br />
    <section>
    <div className="container my-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <p className="text-center text-muted mb-4">
        Everything you need to know about the product and billing.
      </p>

      <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Is there a free trial available?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Yes, you can try us for free for 30 days. If you want, we'll
              provide you with a free, personalized 30-minute onboarding call
              to get you up and running as soon as possible.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Can I change my plan later?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Yes, you can upgrade or downgrade your plan anytime from your
              account settings.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What is your cancellation policy?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              You can cancel your subscription anytime, and it will remain
              active until the end of the billing cycle.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Can other info be added to an invoice?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Yes, additional information such as company name or tax ID can be
              added to your invoice during checkout.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              How does billing work?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Billing is done monthly or annually, depending on your chosen
              plan. You will receive an invoice at the start of each cycle.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              How do I change my account email?
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              You can update your email in the account settings under the
              "Profile" section.
            </div>
          </div>
        </div>
      </div> <br /><br /><br /><br />

      <div className="text-center mt-5">
        <img src={avatar1} alt="" />
        <p>Still have questions?</p>
        <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        <button className="btn btn-danger">Get in touch</button>
      </div>
    </div>
    </section>
    <br /><br /><br />
    <section>
    <div className="container my-5">
      {/* Header Section */}
      <div className="text-center mb-4">
        <p className="text-danger fw-bold">Our blog</p>
        <h2 className="fw-bold">Lastest blog posts</h2>
        <p className="text-muted">
          Tool and strategies modern teams need to help their companies grow.
        </p>
      </div>

      {/* Blog Posts */}
      <div className="row gy-4">
        {/* Single Blog Post */}
        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <img
              src={blogimage1}
              className="card-img-top"
              alt="UX Review"
            />
            <div className="card-body">
              <p className="text-danger fw-bold mb-1">Design</p>
              <h5 className="card-title fw-bold">
                UX review presentations
                <span className="ms-2">&#8599;</span>
              </h5>
              <p className="text-muted">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
              <div className="d-flex align-items-center">
                <img
                  src={Avatar2}
                  alt="Author"
                  className="rounded-circle me-2"
                />
                <div>
                  <p className="mb-0 fw-bold">Olivia Rhye</p>
                  <p className="mb-0 text-muted">20 Jan 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Blog Post */}
        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <img
              src={blogimage2}
              className="card-img-top"
              alt="Migrating to Linear"
            />
            <div className="card-body">
              <p className="text-danger fw-bold mb-1">Product</p>
              <h5 className="card-title fw-bold">
                Migrating to Linear 101
                <span className="ms-2">&#8599;</span>
              </h5>
              <p className="text-muted">
                Linear helps streamline software projects, sprints, tasks, and
                bug tracking. Here’s how to get started.
              </p>
              <div className="d-flex align-items-center">
                <img
                  src={Avatar3}
                  alt="Author"
                  className="rounded-circle me-2"
                />
                <div>
                  <p className="mb-0 fw-bold">Phoenix Baker</p>
                  <p className="mb-0 text-muted">19 Jan 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Blog Post */}
        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <img
              src={blogimage3}
              className="card-img-top"
              alt="API Stack"
            />
            <div className="card-body">
              <p className="text-danger fw-bold mb-1">Software Engineering</p>
              <h5 className="card-title fw-bold">
                Building your API stack
                <span className="ms-2">&#8599;</span>
              </h5>
              <p className="text-muted">
                The rise of RESTful APIs has been met by a rise in tools for
                creating, testing, and managing them.
              </p>
              <div className="d-flex align-items-center">
                <img
                  src={Avatar4}
                  alt="Author"
                  className="rounded-circle me-2"
                />
                <div>
                  <p className="mb-0 fw-bold">Lana Steiner</p>
                  <p className="mb-0 text-muted">18 Jan 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-4">
        <button className="btn btn-danger px-4 py-2">View all posts</button>
      </div>
    </div>

    </section> <br /><br /><br />
    <section>
    <div className="container text-center py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <h2 className="mb-3">Start your free trial</h2>
          <p className="mb-4">Join over 4,000+ startups already growing with Untitled.</p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-2">
            <button className="btn btn-danger btn-lg">Get started</button>
            <button className="btn btn-outline-dark btn-lg">Learn more</button>
          </div>
        </div>
      </div>
    </div>
    </section>
    </div>
  )
}

export default Main