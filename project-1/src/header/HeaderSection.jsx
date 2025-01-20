import React from "react";

const HeaderSection = () => {
   
  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container d-flex justify-content-spacearound align-items-center py-3" >
          {/* Logo */}
          <div className="fs-3 text-danger fw-bold">zysk</div>

          {/* Navbar for Desktop */}
          <nav className="d-none d-md-flex d-flex gap-3">
            <a href="#" className="nav-link text-dark">
              Home
            </a>
            <a href="#" className="nav-link text-dark dropdown dropdown-toggle dropdown-item">
              Products
            </a>
            <a href="#" className="nav-link text-dark dropdown dropdown-toggle dropdown-item">
              Resources
            </a>
            <a href="#" className="nav-link text-dark">
              Pricing
            </a>
          </nav>

          {/* Hamburger Menu for Mobile */}
          <button
            className="btn d-md-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobileNav"
          >
            <i className="bi bi-list fs-3" ></i>
          </button>
        </div>

        {/* Mobile Navbar */}
        <div className="collapse" id="mobileNav">
          <nav className="d-md-none bg-light p-3">
            <a href="#" className="d-block text-dark mb-2">
              Home
            </a>
            <a href="#" className="d-block text-dark mb-2">
              Products
            </a>
            <a href="#" className="d-block text-dark mb-2">
              Resources
            </a>
            <a href="#" className="d-block text-dark">
              Pricing
            </a>
          </nav>
        </div>
      </header>
 <br /><br /><br />

    
    </div>
  );
};

export default HeaderSection;
