import React from 'react'
import zysklogo from "../assets/zysklogo.png"
const Footer = () => {
  return (
    <div>
        <footer className="bg-light py-4">
      <div className="container">
        <div className="row">
          {/* Product Column */}
          <div className="col-6 col-md-2">
            <h5 className="text-muted">Product</h5>
            <ul className="list-unstyled">
              <li>Overview</li>
              <li>Features</li>
              <li>
                Solutions <span className="badge bg-success">New</span>
              </li>
              <li>Tutorials</li>
              <li>Pricing</li>
              <li>Releases</li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="col-6 col-md-2">
            <h5 className="text-muted">Company</h5>
            <ul className="list-unstyled">
              <li>About us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>News</li>
              <li>Media kit</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="col-6 col-md-2">
            <h5 className="text-muted">Resources</h5>
            <ul className="list-unstyled">
              <li>Blog</li>
              <li>Newsletter</li>
              <li>Events</li>
              <li>Help centre</li>
              <li>Tutorials</li>
              <li>Support</li>
            </ul>
          </div>

          {/* Use Cases Column */}
          <div className="col-6 col-md-2">
            <h5 className="text-muted">Use cases</h5>
            <ul className="list-unstyled">
              <li>Startups</li>
              <li>Enterprise</li>
              <li>Government</li>
              <li>SaaS centre</li>
              <li>Marketplaces</li>
              <li>Ecommerce</li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="col-6 col-md-2">
            <h5 className="text-muted">Social</h5>
            <ul className="list-unstyled">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>GitHub</li>
              <li>AngelList</li>
              <li>Dribbble</li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="col-6 col-md-2">
            <h5 className="text-muted">Legal</h5>
            <ul className="list-unstyled">
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Licenses</li>
              <li>Settings</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <img
            src={zysklogo}
            alt="Zysk Logo"
            className="mb-2"
            style={{ height: '30px' }}
          />
          <p className="text-muted mb-0">
            © 2077 zysktechnologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer