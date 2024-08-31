import React from 'react'

export const Nav = () => {
  return (
    <header className="micro-nav fixed-top pload">
    <nav className="navbar navbar-expand-lg navbar-light bg-white micro-navbar">
      <a className="navbar-brand" href="/ ">
        <img src="./img/Logo.png" className="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav nav-fill">
          <li className="nav-item">
            <a className="nav-link" href="/#home">
              <i className="mi mi-home nav-icon" />
              <span className="d-sm-inline d-md-none"> Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#pricing">
              <i className="mi mi-price nav-icon" /> Price
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#sitefloorplan">
              <i className="mi mi-siteplan nav-icon" /> Site &amp; Floor Plan
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#amenities">
              <i className="mi mi-ami nav-icon" /> Amenities
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#location">
              <i className="mi mi-location nav-icon" /> Location
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#gallery">
              <i className="mi mi-gallery nav-icon" /> Gallery
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#sitevisit">
              <i className="mi mi-sitevisit nav-icon" /> Virtual Tour Request
            </a>
          </li>
          <li className="nav-item overflow-hidden">
            <a
              className="nav-link enqModal"
              href="/"
              data-form="md"
              data-title="Request Brochure"
              data-btn="Download now"
              data-enquiry="Request Brochure Toolbar"
              data-redirect="brochure"
              data-redirect-file="brochure.html"
              data-toggle="modal"
              data-target="#enqModal"
            >
              <i className="mi mi-download nav-icon d-inline-block animated slideInDown infinite" />{" "}
              Brochure
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  
  )
}
