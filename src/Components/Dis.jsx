import React from 'react'
import { Link } from 'react-router-dom';
export const Dis = () => {
  return (
    <section
    style={{ textAlign: "justify", background: "#f7f7f7 !important" }}
    className="section shadow-sm lazyload"
    id="developer"
  >
    <small>
      <b>Disclaimer:</b>
      The content is for information purposes only and does not constitute an
      offer to avail of any service. Prices mentioned are subject to change
      without notice and properties mentioned are subject to availability.
      Images for representation purposes only. This is the official website of
      authorized marketing partner. We may also send updates to the mobile
      number/email id registered with us. All Rights Reserved.
      <hr />
      <p style={{ textAlign: "center" }}>
        © Copyright | <Link to="/terms-conditions">Terms &amp; Conditions</Link>{" "}
        | <Link to="/privacy-policy" >Privacy Policy</Link> |{" "}
        <Link to="/cookies-policy">Cookies Policy</Link>{" "}
      </p>
    </small>
  </section>
  )
}
