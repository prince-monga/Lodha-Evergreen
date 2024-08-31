import React from 'react'

export const Model = () => {
  return (
    <>
  <div
    className="modal fade"
    id="enqModal"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
  >
    <div
      className="modal-dialog modal-dialog-centered enq-modal"
      role="document"
    >
      <div className="modal-content">
        <div className="modal-body text-center">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
          <div className="modal-head">
            <span className="modal-title"> Request Brochure</span>
          </div>
          <div className="d-flex">
            <div className="flex-fill align-self-center flex-shrink-1 modal-highlight-bg d-none d-lg-block">
              <span className="modal-highlight-title">We Promise</span>
              <ul className="modal-highlight">
                <li>
                  <i className="mi mi-support-call" />
                  <span>Instant Call Back</span>
                </li>
                <li>
                  <i className="mi mi-support-visit" />
                  <span>Free Site Visit</span>
                </li>
                <li>
                  <i className="mi mi-support-price" />
                  <span>Unmatched Price</span>
                </li>
              </ul>
            </div>
            <div className="flex-fill align-self-center">
              <span className="popup-logo">
                <img src="./img/Logo.png" className="logo" />
              </span>
              <span className="modal-title-secondary">
                {" "}
                Register here and Avail the{" "}
                <span className="text-danger">Best Offers!!</span>
              </span>
              <meta
                httpEquiv="Content-Type"
                content="text/html;charset=UTF-8"
              />
              <link
                rel="stylesheet"
                href="https://company133638.od2.vtiger.com//layouts/v8/lib/intl-tel-input/build/css/intlTelInput.min.css"
              />
              <form
                id="__vtigerWebForm_41"
                name="Dosti Eden"
                action="https://company133638.od2.vtiger.com/modules/Webforms/capture.php"
                method="post"
                acceptCharset="utf-8"
                encType="multipart/form-data"
              >
                <input
                  type="hidden"
                  name="__vtrftk"
                  defaultValue="sid:1b3cdc7b40504e947d6886a08517ac877e7e3224,1678943220"
                />
                <input
                  type="hidden"
                  name="publicid"
                  defaultValue="da7a1fd81169fa3d8e5fb75fbd100f93"
                />
                <input type="hidden" name="urlencodeenable" defaultValue={1} />
                <input type="hidden" name="name" defaultValue="Dosti Eden" />
                <input type="hidden" name="__vtCurrency" defaultValue={1} />
                <input
                  type="hidden"
                  data-type="storage"
                  data-param="utm_medium"
                  name="cf_leads_campaigntype"
                  defaultValue=""
                />
                <input
                  type="hidden"
                  data-type="storage"
                  data-param="utm_term"
                  name="cf_leads_keyword"
                  defaultValue=""
                />
                <input
                  type="hidden"
                  data-type="storage"
                  data-param="utm_name"
                  name="cf_leads_searchterm"
                  defaultValue=""
                />
                <input
                  type="hidden"
                  data-type="storage"
                  data-param="utm_id"
                  name="cf_leads_campaignid"
                  defaultValue=""
                />
                <input
                  type="hidden"
                  data-type="storage"
                  data-param="utm_source"
                  name="cf_leads_campaignsource"
                  defaultValue=""
                />
                <input
                  type="hidden"
                  data-type="storage"
                  data-param="utm_content"
                  name="cf_leads_campaigncontent"
                  defaultValue=""
                />
                <input
                  type="hidden"
                  data-type="storage"
                  data-param="ip_address"
                  name="cf_leads_ipaddress"
                  defaultValue="<?php echo $_SERVER['REMOTE_ADDR'] ?>"
                />
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label>Last Name * </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          name="lastname"
                          maxLength={80}
                          data-label=""
                          defaultValue=""
                          required=""
                          placeholder="Name"
                        />{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Mobile Phone * </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          name="mobile"
                          maxLength={50}
                          data-label=""
                          defaultValue=""
                          required=""
                          data-type="phone"
                          placeholder="Mobile No."
                        />{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Primary Email</label>
                      </td>
                      <td>
                        <input
                          type="email"
                          name="email"
                          data-label="Primary Email"
                          defaultValue=""
                          placeholder="Email ID"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <select
                          name="cf_leads_projectsite"
                          data-label="label:Project+Site"
                          hidden=""
                        >
                          <option value="">Select Value</option>
                          <option value="Lodha Amara">Lodha Amara</option>
                          <option value="Lodha Sterling">Lodha Sterling</option>
                          <option value="Lodha Crown Thane">
                            Lodha Crown Thane
                          </option>
                          <option value="Lodha Crown Taloja">
                            Lodha Crown Taloja
                          </option>
                          <option value="Lodha Splendora">
                            Lodha Splendora
                          </option>
                          <option value="Lodha Pokhran">Lodha Pokhran</option>
                          <option value="Lodha Mulund">Lodha Mulund</option>
                          <option value="Lodha Powai">Lodha Powai</option>
                          <option value="Lodha Vikhroli">Lodha Vikhroli</option>
                          <option value="Lodha NCP">Lodha NCP</option>
                          <option value="Lodha Park">Lodha Park</option>
                          <option value="Lodha Mahalaxmi">
                            Lodha Mahalaxmi
                          </option>
                          <option value="Lodha World Towers">
                            Lodha World Towers
                          </option>
                          <option value="Lodha Commercial">
                            Lodha Commercial
                          </option>
                          <option value="Lodha One & Only">
                            Lodha One &amp; Only
                          </option>
                          <option value="Lodha Upper Thane">
                            Lodha Upper Thane
                          </option>
                          <option value="Lodha Premier">Lodha Premier</option>
                          <option value="Lodha Kandivali">
                            Lodha Kandivali
                          </option>
                          <option value="Lodha Malad">Lodha Malad</option>
                          <option value="Lodha Mira Road">
                            Lodha Mira Road
                          </option>
                          <option value="Lodha Pune">Lodha Pune</option>
                          <option value="Lodha Villa Dombivali">
                            Lodha Villa Dombivali
                          </option>
                          <option value="Lodha Serenity">Lodha Serenity</option>
                          <option value="Lodha Gamechanger">
                            Lodha Gamechanger
                          </option>
                          <option value="L&T Powai">L&amp;T Powai</option>
                          <option value="Birla Niyara">Birla Niyara</option>
                          <option value="Prestige Jasdan">
                            Prestige Jasdan
                          </option>
                          <option value="Prestige City">Prestige City</option>
                          <option value="Runwal Sanctuary">
                            Runwal Sanctuary
                          </option>
                          <option value="Runwal Bliss">Runwal Bliss</option>
                          <option value="Runwal Avenue">Runwal Avenue</option>
                          <option value="Runwal Gardens">Runwal Gardens</option>
                          <option value="Runwal My City">Runwal My City</option>
                          <option value="Runwal Enchanted">
                            Runwal Enchanted
                          </option>
                          <option value="Runwal Forest">Runwal Forest</option>
                          <option value="Wadhwa Atmosphere">
                            Wadhwa Atmosphere
                          </option>
                          <option value="Piramal Revanta">
                            Piramal Revanta
                          </option>
                          <option value="Piramal Mahalaxmi">
                            Piramal Mahalaxmi
                          </option>
                          <option value="Piramal Vaikunth">
                            Piramal Vaikunth
                          </option>
                          <option value="Dosti West County">
                            Dosti West County
                          </option>
                          <option value="Godrej Ascend">Godrej Ascend</option>
                          <option value="Godrej Exquisite">
                            Godrej Exquisite
                          </option>
                          <option value="Godrej Nirvan">Godrej Nirvan</option>
                          <option value="Raymond Thane">Raymond Thane</option>
                          <option value="Rustomjee Urbania">
                            Rustomjee Urbania
                          </option>
                          <option value="Unique Vista">Unique Vista</option>
                          <option value="Kalpataru Paramount">
                            Kalpataru Paramount
                          </option>
                          <option value="Kalpataru Parkcity">
                            Kalpataru Parkcity
                          </option>
                          <option value="Puraniks Thane">Puraniks Thane</option>
                          <option value="ICON">ICON</option>
                          <option value="Ashar Axis">Ashar Axis</option>
                          <option value="Ashar Arize">Ashar Arize</option>
                          <option value="Shapoorji Pallonji">
                            Shapoorji Pallonji
                          </option>
                          <option value="Others">Others</option>
                          <option value="Runwal Eirene">Runwal Eirene</option>
                          <option value="Lodha Palava">Lodha Palava</option>
                          <option value="Bhoomi Acres">Bhoomi Acres</option>
                          <option value="Shapoorji Vicinia">
                            Shapoorji Vicinia
                          </option>
                          <option value="Lodha Rare Fortune">
                            Lodha Rare Fortune
                          </option>
                          <option value="Runwal Zenith">Runwal Zenith</option>
                          <option value="Ashar Majiwada">Ashar Majiwada</option>
                          <option value="Lodha Crown Dombivli">
                            Lodha Crown Dombivli
                          </option>
                          <option value="Sai World Dream">
                            Sai World Dream
                          </option>
                          <option value="Regency Anantam">
                            Regency Anantam
                          </option>
                          <option value="Runwal Manpada Thane">
                            Runwal Manpada Thane
                          </option>
                          <option value="Lodha Andheri">Lodha Andheri</option>
                          <option value="Lodha Matunga">Lodha Matunga</option>
                          <option value="Raunak Serene">Raunak Serene</option>
                          <option value="Lodha Villa Royale">
                            Lodha Villa Royale
                          </option>
                          <option value="Birla Niyaara">Birla Niyaara</option>
                          <option value="Runwal Park view">
                            Runwal Park view
                          </option>
                          <option value="Lodha Trinity">Lodha Trinity</option>
                          <option value="Balaji Estate">Balaji Estate</option>
                          <option value="Unique Vistas">Unique Vistas</option>
                          <option value="Sheth Zuri">Sheth Zuri</option>
                          <option value="Dombivli">Dombivli</option>
                          <option value="VTP Magnum Opus">
                            VTP Magnum Opus
                          </option>
                          <option value="Brigade Utopia">Brigade Utopia</option>
                          <option value="Brigade Horizon">
                            Brigade Horizon
                          </option>
                          <option value="Godrej Serene">Godrej Serene</option>
                          <option value="Shapoorji Joyville Pune">
                            Shapoorji Joyville Pune
                          </option>
                          <option value="Godrej Wadala">Godrej Wadala</option>
                          <option value="Runwal Gradens">Runwal Gradens</option>
                          <option value="Lodha Hinjewadi">
                            Lodha Hinjewadi
                          </option>
                          <option value="Lodha NIBM">Lodha NIBM</option>
                          <option value="Venus Sky City">Venus Sky City</option>
                          <option value="Open Thane">Open Thane</option>
                          <option value="Sai World Dreams">
                            Sai World Dreams
                          </option>
                          <option value="Raunak Kalyan">Raunak Kalyan</option>
                          <option value="Dosti Eden" selected="">
                            Dosti Eden
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <select
                          name="leadsource"
                          data-label="leadsource"
                          hidden=""
                        >
                          <option value="">Select Value</option>
                          <option value="Facebook">Facebook</option>
                          <option value="Twitter">Twitter</option>
                          <option value="Mail Manager">Mail Manager</option>
                          <option value="Mail Converter">Mail Converter</option>
                          <option value="Web" selected="">
                            Web
                          </option>
                          <option value="SMS">SMS</option>
                          <option value="Data">Data</option>
                          <option value="MB">MB</option>
                          <option value="Refrence">Refrence</option>
                          <option value="Offline">Offline</option>
                          <option value="Cross">Cross</option>
                          <option value="Call">Call</option>
                          <option value="Whatsapp">Whatsapp</option>
                          <option value="Digital">Digital</option>
                          <option value="Website">Website</option>
                          <option value="Advertisement">Advertisement</option>
                          <option value="Partner">Partner</option>
                          <option value="Trade Show">Trade Show</option>
                          <option value="Word of mouth">Word of mouth</option>
                          <option value="FB">FB</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <input
                  type="submit"
                  defaultValue="Submit"
                  id="vtigerFormSubmitBtn_41"
                />
              </form>
            </div>
          </div>
          <small className="modal-call-btn">
            {/*CONTACT NO*/}
            <a
              href="tel:+919619095795"
              className="modal-call-btn"
              style={{
                display: "inline-block",
                justifyContent: "center",
                width: "fit-content",
                padding: "0.5rem 1rem",
                marginBottom: "0.5rem",
                backgroundColor: "var(--colorPrimary)",
                color: "var(--colorBtn)",
                textDecoration: "none",
                borderRadius: 4,
                fontSize: "20px !important",
                fontWeight: "bold"
              }}
            >
              <i className="mi mi-call" />
              +919619095795
            </a>
            {/*<a href="privacy-policy.php" >Privacy Policy</a>: We hate SPAM and promise to keep your information safe.*/}
          </small>
          {/*Privacy Policy LINK
<small class="modal-call-btn"><a href="privacy-policy.html"  style="color:#fff;">Privacy Policy</a>: We hate SPAM and promise to keep your information safe.</small>                */}
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade"
    id="enqModal2"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
  >
    <div
      className="modal-dialog modal-dialog-centered enq-modal1"
      role="document"
    >
      <div className="modal-content">
        <div className="modal-body text-center">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
          <div className="modal-head d-none">
            <span className="modal-title">Floor Plan</span>
          </div>
          <img src="https://d1zdkpwby52v4t.cloudfront.net/runwalenchanted/assets/img/floorplan/2BHK-658.jpg" />
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade"
    id="enqModal3"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
  >
    <div
      className="modal-dialog modal-dialog-centered enq-modal1"
      role="document"
    >
      <div className="modal-content">
        <div className="modal-body text-center">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
          <div className="modal-head d-none">
            <span className="modal-title">Floor Plan</span>
          </div>
          <img
            src="https://d1zdkpwby52v4t.cloudfront.net/runwalenchanted/assets/img/floorplan/masterplan.jpg"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  </div>
</>

  )
}
