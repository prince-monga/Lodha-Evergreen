import React from 'react'
import { Link } from 'react-router-dom';
export const Main = () => {
  return (
    <main className="pload">
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n    .card-d-custom\n    {\n\t\twidth: 95%;\n\t\tjustify-content: center;\n\t\ttext-align: center;\n\t\tmargin: 0 auto 15px;\n        \n    }\n"
      }}
    />
    <div
      id="home"
      className="carousel slide micro-main-slider"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item lazyloaded">
          <div className="desktopview">
            <img
              height={400}
              width={1200}
              loading="lazy"
              className="lazyload d-block micro-main-slider-img"
              src="./img/Webbanner.webp"
            />
          </div>
          <div className="mobileview">
            <img
              height={225}
              width={768}
              loading="lazy"
              className="lazyload d-block micro-main-slider-img"
              src="./img/Phonebanner.webp"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="info-box overflow-hidden">
      <span className="pro-status">Booking Open: Limited Time Only</span>{" "}
      <span className="pro-title">Lodha Evergreen</span>
      <div
        style={{ flexWrap: "wrap", display: "inline-flex", paddingBottom: 10 }}
      >
        <span className="pro-add">At Vikhroli</span>
        <span className="pro-dev">by Lodha Group</span>
      </div>
      <div className="card-d card-d-custom">
        <div>
          <span className="heading2">Land Parcel </span>
          <span className="heading1">10+ Acres</span>
        </div>
        <div>
          <span className="heading2">Floors </span>
          <span className="heading1">25-30 Storeys</span>
        </div>
        <div>
          <span className="heading2">Possession </span>
          <span className="heading1">2026</span>
        </div>
      </div>
      <span className="d-block mb-1 text-capitalize of-box offer-bg-animation">
        <span className="offer-text-outer">
          {" "}
          <span className="offer-text">
            - Spot Booking Offer
            <br /> - Early Buy Discount <br /> - Avail 25:45:30 Payment Plan
          </span>
        </span>
      </span>
      <span
        className="d-block"
        style={{
          fontSize: 14,
          width: "100%",
          background: "transparent",
          fontWeight: "bold",
          textAlign: "center",
          color: "#fff"
        }}
      ></span>
      <span className="pro-tag-line">
        {" "}
        <b>2 BHK</b> homes starting of{" "}
      </span>{" "}
      <span className="pro-price">
        ₹ 1.82 Cr <small style={{ fontSize: 16 }}>Onwards</small>
      </span>
      <button
        className="btn btn-info micro-form-btn enqModal effetMoveGradient effectScale"
        data-form="lg"
        data-title="Download Brochure"
        data-btn="Download Now"
        data-enquiry="Download Brochure Left Panel"
        data-redirect="enquiry"
        data-toggle="modal"
        data-target="#enqModal"
      >
        Download Brochure
      </button>
    </div>
    <div className="mob-form d-sm-block d-md-none d-lg-none">
      <span className="d-block form-heading font-weight-bold">
        Get The Best Quote
      </span>
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
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
                  <option value="Lodha Crown Thane">Lodha Crown Thane</option>
                  <option value="Lodha Crown Taloja">Lodha Crown Taloja</option>
                  <option value="Lodha Splendora">Lodha Splendora</option>
                  <option value="Lodha Pokhran">Lodha Pokhran</option>
                  <option value="Lodha Mulund">Lodha Mulund</option>
                  <option value="Lodha Powai">Lodha Powai</option>
                  <option value="Lodha Vikhroli">Lodha Vikhroli</option>
                  <option value="Lodha NCP">Lodha NCP</option>
                  <option value="Lodha Park">Lodha Park</option>
                  <option value="Lodha Mahalaxmi">Lodha Mahalaxmi</option>
                  <option value="Lodha World Towers">Lodha World Towers</option>
                  <option value="Lodha Commercial">Lodha Commercial</option>
                  <option value="Lodha One & Only">Lodha One &amp; Only</option>
                  <option value="Lodha Upper Thane">Lodha Upper Thane</option>
                  <option value="Lodha Premier">Lodha Premier</option>
                  <option value="Lodha Kandivali">Lodha Kandivali</option>
                  <option value="Lodha Malad">Lodha Malad</option>
                  <option value="Lodha Mira Road">Lodha Mira Road</option>
                  <option value="Lodha Pune">Lodha Pune</option>
                  <option value="Lodha Villa Dombivali">
                    Lodha Villa Dombivali
                  </option>
                  <option value="Lodha Serenity">Lodha Serenity</option>
                  <option value="Lodha Gamechanger">Lodha Gamechanger</option>
                  <option value="L&T Powai">L&amp;T Powai</option>
                  <option value="Birla Niyara">Birla Niyara</option>
                  <option value="Prestige Jasdan">Prestige Jasdan</option>
                  <option value="Prestige City">Prestige City</option>
                  <option value="Runwal Sanctuary">Runwal Sanctuary</option>
                  <option value="Runwal Bliss">Runwal Bliss</option>
                  <option value="Runwal Avenue">Runwal Avenue</option>
                  <option value="Runwal Gardens">Runwal Gardens</option>
                  <option value="Runwal My City">Runwal My City</option>
                  <option value="Runwal Enchanted">Runwal Enchanted</option>
                  <option value="Runwal Forest">Runwal Forest</option>
                  <option value="Wadhwa Atmosphere">Wadhwa Atmosphere</option>
                  <option value="Piramal Revanta">Piramal Revanta</option>
                  <option value="Piramal Mahalaxmi">Piramal Mahalaxmi</option>
                  <option value="Piramal Vaikunth">Piramal Vaikunth</option>
                  <option value="Dosti West County">Dosti West County</option>
                  <option value="Godrej Ascend">Godrej Ascend</option>
                  <option value="Godrej Exquisite">Godrej Exquisite</option>
                  <option value="Godrej Nirvan">Godrej Nirvan</option>
                  <option value="Raymond Thane">Raymond Thane</option>
                  <option value="Rustomjee Urbania">Rustomjee Urbania</option>
                  <option value="Unique Vista">Unique Vista</option>
                  <option value="Kalpataru Paramount">Kalpataru Paramount</option>
                  <option value="Kalpataru Parkcity">Kalpataru Parkcity</option>
                  <option value="Puraniks Thane">Puraniks Thane</option>
                  <option value="ICON">ICON</option>
                  <option value="Ashar Axis">Ashar Axis</option>
                  <option value="Ashar Arize">Ashar Arize</option>
                  <option value="Shapoorji Pallonji">Shapoorji Pallonji</option>
                  <option value="Others">Others</option>
                  <option value="Runwal Eirene">Runwal Eirene</option>
                  <option value="Lodha Palava">Lodha Palava</option>
                  <option value="Bhoomi Acres">Bhoomi Acres</option>
                  <option value="Shapoorji Vicinia">Shapoorji Vicinia</option>
                  <option value="Lodha Rare Fortune">Lodha Rare Fortune</option>
                  <option value="Runwal Zenith">Runwal Zenith</option>
                  <option value="Ashar Majiwada">Ashar Majiwada</option>
                  <option value="Lodha Crown Dombivli">
                    Lodha Crown Dombivli
                  </option>
                  <option value="Sai World Dream">Sai World Dream</option>
                  <option value="Regency Anantam">Regency Anantam</option>
                  <option value="Runwal Manpada Thane">
                    Runwal Manpada Thane
                  </option>
                  <option value="Lodha Andheri">Lodha Andheri</option>
                  <option value="Lodha Matunga">Lodha Matunga</option>
                  <option value="Raunak Serene">Raunak Serene</option>
                  <option value="Lodha Villa Royale">Lodha Villa Royale</option>
                  <option value="Birla Niyaara">Birla Niyaara</option>
                  <option value="Runwal Park view">Runwal Park view</option>
                  <option value="Lodha Trinity">Lodha Trinity</option>
                  <option value="Balaji Estate">Balaji Estate</option>
                  <option value="Unique Vistas">Unique Vistas</option>
                  <option value="Sheth Zuri">Sheth Zuri</option>
                  <option value="Dombivli">Dombivli</option>
                  <option value="VTP Magnum Opus">VTP Magnum Opus</option>
                  <option value="Brigade Utopia">Brigade Utopia</option>
                  <option value="Brigade Horizon">Brigade Horizon</option>
                  <option value="Godrej Serene">Godrej Serene</option>
                  <option value="Shapoorji Joyville Pune">
                    Shapoorji Joyville Pune
                  </option>
                  <option value="Godrej Wadala">Godrej Wadala</option>
                  <option value="Runwal Gradens">Runwal Gradens</option>
                  <option value="Lodha Hinjewadi">Lodha Hinjewadi</option>
                  <option value="Lodha NIBM">Lodha NIBM</option>
                  <option value="Venus Sky City">Venus Sky City</option>
                  <option value="Open Thane">Open Thane</option>
                  <option value="Sai World Dreams">Sai World Dreams</option>
                  <option value="Raunak Kalyan">Raunak Kalyan</option>
                  <option value="Dosti Eden" selected="">
                    Dosti Eden
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <select name="leadsource" data-label="leadsource" hidden="">
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
          type="hidden"
          id="phoneLibScript_41"
          defaultValue="https://company133638.od2.vtiger.com//layouts/v8/lib/intl-tel-input/build/js/intlTelInput.min.js"
          disabled=""
        />
        <input
          type="hidden"
          id="phoneUtilScript_41"
          defaultValue="https://company133638.od2.vtiger.com//layouts/v8/lib/intl-tel-input/build/js/utils.js"
          disabled=""
        />
        <input type="submit" defaultValue="Submit" id="vtigerFormSubmitBtn_41" />
      </form>
    </div>
    <section className="section shadow-sm lazyload" id="overview">
      <h1 className="d-block section-heading color-primary text-capitalize">
        Welcome To Lodha Vikhroli Evergreen
      </h1>
      <p>
        {" "}
        The newest launch by the Lodha Group - Lodha Codename Evergreen is a
        residential address that plunges you into the depths of extravagance and
        luxury. A magnificent 10-acre property, its soaring towers offer spacious
        2 BHK residences, elegant interiors, and refined experiences. Lifestyle
        amenities such as a sports turf, gym, cafe-cum-library, swimming pool, and
        workspaces give you immediate access to the best of leisure and fitness.
      </p>
      <p>
        <span className="more-cont" style={{ display: "none" }}>
          <span className="d-block">
            {" "}
            Moreover, the property is right at LBS Road and close to popular
            commute routes such as Vikhroli Railway Station, JVLR, and the Eastern
            Express Highway. It enables you to quickly reach the popular locales
            of Powai, Ghatkopar, and BKC. The surrounding locale also comprises
            incredible landmarks that include R City Mall, St. Joseph's High
            School, Rude Lounge restaurant, and Godrej Memorial Hospital. Overall,
            Lodha Codename Evergreen is for the elite - where your lifestyle is
            enriched with premium luxuries and a happening locale with the best of
            Mumbai laid out for you!
          </span>
        </span>{" "}
        <a href="#!" className="btn btn-link btn-sm more">
          Read more
        </a>
      </p>
      <p></p>
      <button
        className="btn btn-info micro-form-btn effetMoveGradient enqModal"
        data-form="md"
        data-title="Request Brochure"
        data-btn="Download Now"
        data-enquiry="Request Brochure Welcome Text"
        data-redirect="brochure"
        data-redirect-file="brochure.html"
        data-toggle="modal"
        data-target="#enqModal"
      >
        <span className="d-inline-block mi mi-download mr-1 animated slideInDown infinite" />{" "}
        Request Brochure
      </button>
    </section>
    <section className="section shadow-sm lazyloaded" id="pricing">
      {" "}
      <span className="section-link" />{" "}
      <span className="head text-capitalize">Price</span>
      <div className="row">
        <div className="col-md-8">
          <table className="table table-striped table-borderless border micro-price-table table-pricing">
            <thead>
              <tr>
                <th scope="col" className="border border-bottom-0 mb-w">
                  Type
                </th>
                <th scope="col" className="border border-bottom-0 mb-w">
                  Carpet Area
                </th>
                <th scope="col" className="border border-bottom-0 border-right-0">
                  Price
                </th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-left-0 border-top-0 border-bottom-0 price-type">
                  2 BHK
                </td>
                <td className="border border-left-0 border-top-0 border-bottom-0 price-carpet">
                  540-550 Sq.ft
                  <small className="d-inline-block d-md-none">
                    (Carpet Area)
                  </small>
                </td>
                <td className="price-amt">
                  <i className="mi mi-rs-light" /> 1.82 Cr Onwards
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-info effetGradient effectScale enqModal"
                    data-form="lg"
                    data-title="Send me costing details"
                    data-btn="Send now"
                    data-enquiry="Price Breakup"
                    data-redirect="floorplan"
                    data-toggle="modal"
                    data-target="#enqModal"
                  >
                    Price Breakup
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border border-left-0 border-top-0 border-bottom-0 price-type">
                  2 BHK
                </td>
                <td className="border border-left-0 border-top-0 border-bottom-0 price-carpet">
                  <button
                    className="btn btn-sm btn-info effetGradient effectScale enqModal"
                    data-form="lg"
                    data-title="Send me costing details"
                    data-btn="Send now"
                    data-enquiry="Price Breakup"
                    data-redirect="floorplan"
                    data-toggle="modal"
                    data-target="#enqModal"
                  >
                    On Request
                  </button>
                  <small className="d-inline-block d-md-none">
                    (Carpet Area)
                  </small>
                </td>
                <td className="price-amt">
                  <i className="mi mi-rs-light" /> 2.20 Cr Onwards
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-info effetGradient effectScale enqModal"
                    data-form="lg"
                    data-title="Send me costing details"
                    data-btn="Send now"
                    data-enquiry="Price Breakup"
                    data-redirect="floorplan"
                    data-toggle="modal"
                    data-target="#enqModal"
                  >
                    Price Breakup
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <a
            href="#"
            className="text-decoration-none enqModal"
            data-form="lg"
            data-title="Send me costing details"
            data-btn="Send Now"
            data-enquiry="Complete Costing Details"
            data-toggle="modal"
            data-target="#enqModal"
          >
            <div className="at-property-item shadow-sm border border-grey mt-1">
              <div className="at-property-img lazyloaded" data-expand={-1}>
                <img
                  loading="lazy"
                  data-sizes="auto"
                  className="w-100 lazyautosizes ls-is-cached lazyloaded ls-inview"
                  src="./img/costing.jpg"
                  width={350}
                  height={250}
                />
                <div className="at-property-overlayer" />{" "}
                <span className="btn btn-default at-property-btn">
                  Enquire Now
                </span>{" "}
              </div>
              <div className="at-property-dis effetGradient">
                <h5>Complete Costing Details</h5>{" "}
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
    <section
      className="section shadow-sm lazyload"
      id="sitefloorplan"
      data-script="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js "
      data-link="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css"
    >
      <span className="section-link" />{" "}
      <h2 className="head text-capitalize">
        Site &amp; Floor Plan Of Lodha Vikhroli Evergreen
      </h2>{" "}
      <span className="d-block section-heading-sub text-capitalize">
        Master Plan
      </span>
      <a
        data-fancybox="masterplan"
        href="./img/masterplan.jpg"
        data-srcset="./img/masterplan.jpg"
      >
        <div className="at-property-item mt-1">
          <div className="at-property-img master-plan text-center">
            <img
              data-sizes="auto"
              className="lazyload shadow-sm border border-grey"
              src="./img/masterplan.jpg"
            />
            <div className="at-property-overlayer" />
            <span className="at-property-btn">View Master Plan </span>
          </div>
        </div>
      </a>
      {/* <button class="btn btn-sm btn-info effetGradient effectScale enqModal" data-form="lg" data-title="Send me plan details" data-btn="Send Now" data-enquiry="Get Floor Plan" data-redirect="enquiry" data-toggle="modal" data-target="#enqModal">On Request</button> */}
      <span className="d-block section-heading-sub text-capitalize">
        Floor Plan
      </span>
      <div className="row row-cols-1 row-cols-md-3">
        <div className="col-md-4">
          <a
            href="#"
            className="text-decoration-none enqModal"
            data-form="lg"
            data-title="Send me plan details"
            data-btn="Send now"
            data-enquiry="Get Floor Plan"
            data-redirect="enquiry"
            data-toggle="modal"
            data-target="#enqModal"
          >
            <div className="at-property-item shadow-sm border border-grey mt-1">
              <div className="at-property-img">
                <img
                  data-sizes="auto"
                  loading="lazy"
                  className="lazyload floor-plan-img"
                  src="./img/plan1.jpg"
                />
                <div className="at-property-overlayer" />
                <span className="btn btn-default at-property-btn" role="button">
                  Enquire Now
                </span>
              </div>
              <div className="at-property-dis effetGradient">
                <h5> 2BHK-540-550 Sq.ft. </h5>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
    <section className="section shadow-sm lazyload" id="amenities">
      <span className="section-link" />{" "}
      <h2 className="head text-capitalize">
        Amenities Of Lodha Vikhroli Evergreen
      </h2>
      <div id="ami-3" className="ami-3 owl-carousel owl-theme">
        <div className="item-wrp">
          <div className="ami_sec">
            <img
              src="./img/aminities/Amenities_3/library_01.webp"
              loading="lazy"
              className="ami_sec lazyload"
            />
            <p> CAFE CUM LIBRARY </p>
          </div>
          <div className="ami_sec">
            <img
              src="./img/aminities/Amenities_5/GRANDCLUBHOUSE.webp"
              loading="lazy"
              className="ami_sec lazyload"
            />
            <p> CLUB HOUSE </p>
          </div>
          <div className="ami_sec">
            <img
              src="./img/aminities/Amenities/creche1.webp"
              loading="lazy"
              className="ami_sec lazyload"
            />
            <p>CRECHE</p>
          </div>
        </div>
        <div className="item-wrp">
          <div className="ami_sec">
            <img
              src="./img/aminities/Amenities_3/garden_01.webp"
              loading="lazy"
              className="ami_sec lazyload"
            />
            <p>GARDEN</p>
          </div>
          <div className="ami_sec">
            <img
              src="./img/aminities/Amenities_3/gym_01.webp"
              loading="lazy"
              className="ami_sec lazyload"
            />
            <p>GYM</p>
          </div>
          <div className="ami_sec">
            <img
              src="./img/aminities/Amenities_4/indoorgamesarea_1.webp"
              loading="lazy"
              className="ami_sec lazyload"
            />
            <p>INDOOR GAME ROOM</p>
          </div>
        </div>
        <div className="item-wrp">
          <div className="ami_sec">
            <img
              src="./img/aminities/Amenities/indoorgames1.webp"
              loading="lazy"
              className="ami_sec lazyload"
            />
            <p> INDOOR GAMES </p>
          </div>
          <div className="ami_sec">
            <img
              src="./img/aminities/Amenities_4/joggingtrack_1.webp"
              loading="lazy"
              className="ami_sec lazyload"
            />
            <p>JOGGING TRACK</p>
          </div>
          <div className="ami_sec">
            <img
              src="./img/aminities/Amenities/kidsplayarea1.webp"
              loading="lazy"
              className="ami_sec lazyload"
            />
            <p> Kids’ Play Area </p>
          </div>
        </div>
        <div className="item-wrp">
          <div className="ami_sec">
            <img
              src="./img/aminities/Amenities/partyhall1.webp"
              loading="lazy"
              className="ami_sec lazyload"
            />
            <p>PARTY HALL</p>
          </div>
          <div className="ami_sec">
            <img
              src="./img/aminities/Amenities/sports1.webp"
              loading="lazy"
              className="ami_sec lazyload"
            />
            <p> SPORTS TURF</p>
          </div>
          <div className="ami_sec">
            <img
              src="./img/aminities/Amenities/squash1.webp"
              loading="lazy"
              className="ami_sec lazyload"
            />
            <p> SQUASH COURT </p>
          </div>
        </div>
      </div>
    </section>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n\n\n\t\tiframe {width: 100%;height: 38vh;border: 2px solid #d7d7d7;}\n\n\t\t@media only screen and (max-width: 1024px) {\n\t\tiframe {width: 100%;height: 32vh;border: 2px solid #d7d7d7;}\n\t\t} \n\n\t\t@media only screen and (max-width: 992px) {\n\t\tiframe {width: 100%;height: 18vh;border: 2px solid #d7d7d7;}\n\t\t} \n\n\t\t@media only screen and (max-width: 800px) {\n\t\tiframe {width: 100%;height: 26vh;border: 2px solid #d7d7d7;}\n\t\t} \n\n\t\t@media only screen and (max-width: 768px) {\n\t\tiframe {width: 100%;height: 20vh;border: 2px solid #d7d7d7;}\n\t\t}  \n\n\t\t@media only screen and (max-width: 500px) {\n\t\tiframe {width: 100%;height: 50vh;border: 2px solid #d7d7d7;}\n}  \n"
      }}
    />
    <section className="section shadow-sm lazyloaded" id="gallery">
      <span className="section-link" />{" "}
      <h2 className="head text-capitalize">
        Gallery Of Lodha Vikhroli Evergreen
      </h2>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-2">
          <a data-fancybox="gallery-0" href="./img/gallery/G1.webp">
            {" "}
            <img
              data-src="./img/gallery/G1.webp"
              loading="lazy"
              className="gallery-thumb lazyloaded"
              src="./img/gallery/G1.webp"
            />
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-2">
          <a data-fancybox="gallery-0" href="./img/gallery/G2.webp">
            {" "}
            <img
              data-src="./img/gallery/G2.webp"
              loading="lazy"
              className="gallery-thumb lazyloaded"
              src="./img/gallery/G2.webp"
            />{" "}
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-2">
          <a data-fancybox="gallery-0" href="./img/gallery/G3.webp">
            {" "}
            <img
              data-src="./img/gallery/G3.webp"
              loading="lazy"
              className="gallery-thumb lazyloaded"
              src="./img/gallery/G3.webp"
            />{" "}
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-2">
          <a data-fancybox="gallery-0" href="./img/gallery/G4.webp">
            {" "}
            <img
              data-src="./img/gallery/G4.webp"
              loading="lazy"
              className="gallery-thumb lazyloaded"
              src="./img/gallery/G4.webp"
            />{" "}
          </a>
        </div>
      </div>
    </section>
    <section id="location" className="section shadow-sm lazyloaded">
      <span className="section-link" id="location" />
      <h2 className="head text-capitalize">
        Address of Lodha Vikhroli Evergreen
      </h2>
      <div className="row mb-3">
        <div className="col-md-7 col-sm-12 map-view">
          <span className="d-block section-heading-sub text-capitalize">
            Map View
          </span>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15080.083566643398!2d72.9237971!3d19.1067394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c734b78eeb5d%3A0xe342fe341fbeac45!2sLodha%20Codename%20Evergreen%2C%20Vikhroli!5e0!3m2!1sen!2sin!4v1677844983978!5m2!1sen!2sin"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />{" "}
        </div>
        <div className="col-md-5 col-sm-12 lmap-div text-center">
          <span className="d-block section-heading-sub text-capitalize text-center">
            Location Map
          </span>
          <a
            href="#"
            className="text-decoration-none enqModal"
            data-form="lg"
            data-title="Send me Location Map"
            data-btn="Send now"
            data-enquiry="View Location Map"
            data-toggle="modal"
            data-target="#enqModal"
          >
            <div className="at-property-item mb-2">
              <div
                className="at-property-img master-plan lazyloaded"
                data-expand={-1}
              >
                <img
                  className="shadow-sm border border-grey lazyautosizes ls-is-cached lazyloaded ls-inview"
                  src="./img/LocationMap.webp"
                  sizes="349px"
                />
                <div className="at-property-overlayer" />
                <span className="at-property-btn">View Location Map</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <p />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div className="col my-2">
          <i className="mi mi-loc-list-2 color-primary loc-icon" /> Vikhroli
          Railway Station – 5 min
        </div>
        <div className="col my-2">
          <i className="mi mi-loc-list-2 color-primary loc-icon" /> Powai - 11 min
        </div>
        <div className="col my-2">
          <i className="mi mi-loc-list-2 color-primary loc-icon" /> JVLR – 15 min
        </div>
        <div className="col my-2">
          <i className="mi mi-loc-list-2 color-primary loc-icon" /> Eastern
          Express Highway – 20 min
        </div>
        <div className="col my-2">
          <i className="mi mi-loc-list-2 color-primary loc-icon" /> R City Mall –
          5 min
        </div>
        <div className="col my-2">
          <i className="mi mi-loc-list-2 color-primary loc-icon" /> St. Joseph's
          High School - 3 min
        </div>
      </div>
    </section>
    <section className="section shadow-sm lazyloaded" id="sitevisit">
      {" "}
      <span className="section-link" />{" "}
      <span className="head text-capitalize">Virtual Tour Request</span>
      <a
        href="#"
        className="enqModal"
        data-form="lg"
        data-title="Virtual Site Visit"
        data-btn="Start Tour"
        data-enquiry="Virtual Tour Request"
        data-redirect="virtualtour"
        data-toggle="modal"
        data-target="#enqModal"
      >
        <div className="at-property-item my-2 pt-md-0">
          <div className="at-property-img vsv-img lazyloaded" data-expand={-1}>
            <picture>
              <source
                className=" w-100 lazyloading"
                media="(max-width: 750px)"
                data-srcset="./img/Phonebanner.webp"
                type="image/webp"
                sizes="730px"
                srcSet="./img/Phonebanner.webp"
              />
              <source
                className=" w-100 lazyloading"
                media="(min-width: 751px)"
                data-srcset="./img/webp/Phonebanner.webp"
                type="image/webp"
                sizes="730px"
                srcSet="./img/Phonebanner.webp"
              />
              <img
                data-sizes="auto"
                loading="lazy"
                className="w-100 lazyautosizes ls-is-cached lazyloaded ls-inview"
                data-srcset=""
                sizes="730px"
                srcSet="./img/Phonebanner.webp 750w,./img/Phonebanner.webp"
              />
            </picture>
            <div className="vsv-text-bk">
              <div className="vsv-text-bg">
                <div className="vsv-icon lazyloaded" />{" "}
                <span className="text-uppercase h1 font-weight-bold mb-0 d-none d-lg-block">
                  Virtual Tour
                </span>{" "}
                <span className="text-capitalize text-center d-none d-lg-block">
                  Lodha Vikhroli Evergreen
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </section>
    <section className="section shadow-sm lazyload" id="developer">
      <div className="d-block pt-2 pb-1 text-center">
        <img
          src="./img/Logo.png"
          loading="lazy"
          style={{ maxWidth: "100%", height: 65, display: "inline-block" }}
        />
      </div>
      <span className="d-block section-heading-sub text-capitalize">
        About Lodha Group
      </span>
      <p>
        One of India's leading real estate firms, the Lodha Group is renowned for
        building urban dream homes that offer refined living. The developer caters
        to all segments, from luxury to budget residences and has built iconic
        landmarks all across Mumbai, Thane, and Navi Mumbai. Lodha properties are
        known to feature quality interiors, state-of-the-art amenities, vast open
        spaces, and manicured green landscapes. A few of their standout properties
        are Lodha World Towers in Lower Parel, Lodha Palava in Dombivli, Lodha
        Crown in Thane, and Lodha Bellagio in Powai.
      </p>
      <span className="d-block section-heading-sub text-capitalize">
        {" "}
        RERA Information{" "}
      </span>
      <div className="rera-no">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div className="rera-box">
              <div className="rera-img">
                <img
                  src="img/barcode-1.webp"
                  loading="lazy"
                  style={{
                    maxWidth: "100%",
                    height: 100,
                    display: "inline-block"
                  }}
                />
              </div>
              <div className="rera-details">
                <p> Lodha Vikhroli Evergreen </p>
                <p>
                  {" "}
                  Project Maha RERA - <b> P51800046322</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <span className="pro-rera text-center-mob">
          {" "}
          Lodha Vikhroli Evergreen Hour has been registered via MahaRERA
          registration number: P51800046322 and is available on the website{" "}
          <a href="https://maharera.mahaonline.gov.in/">
            https://maharera.mahaonline.gov.in/
          </a>{" "}
          under registered projects.
        </span>
      </div>
    </section>
   
  </main>
  
  
  )
}
