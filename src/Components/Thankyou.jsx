import React from 'react'

export const Thankyou = () => {
  return (
    <section
    className="section shadow-sm lazyloaded"
    id="devel
  oper"
  >
    <div className="thank-you-content">
      <header className="site-header" id="header">
        <h1
          className="site-header__title"
          data-lead-id="site-header-title"
          style={{ fontSize: "5.5rem", fontWeight: "bolder" }}
        >
          THANK YOU!
        </h1>
      </header>
      <div className="main-content">
        <i className="fa fa-check main-content__checkmark" id="checkmark" />
        <p
          className="main-content__body"
          data-lead-id="main-content-body"
          style={{
            textAlign: "center",
            fontFamily: "Roboto, sans-serif",
            fontSize: "1.80vw"
          }}
        >
          Thanks for Inquiring, One of our executives will call you shortly
        </p>
      </div>
      <footer className="site-footer" id="footer">
        {/* <p class="site-footer__fineprint" id="fineprint">Copyright ©2020 | All Rights Reserved</p> */}
      </footer>
    </div>
  </section>
  
  )
}
