import React from 'react'

export const Micro = () => {
  return (
    <>
  <div className="micro-side text-center">
    <div className="og-section pb-2">
      <ul className="nav nav-fill og-block">
        <li
          className="nav-item enqModal"
          data-form="lg"
          data-title="Organize Site Visit"
          data-btn="Arrange Site Visit"
          data-enquiry="Organize Site Visit"
          data-toggle="modal"
          data-target="#enqModal"
        >
          Organize Site Visit
        </li>
        <li className="nav-item driftc">
          <a href="tel:+919619095795" className="textcolor">
            <i className="mi mi-call" />
            +919619095795
          </a>
        </li>
      </ul>
      <button
        className="btn btn-sm btn-info micro-form-btn-sm effetGradient effectScale enqModal mt-1"
        data-form="sm"
        data-title="Immediate Call Back"
        data-btn="Request Call Now"
        data-enquiry="Request Call Back"
        data-toggle="modal"
        data-target="#enqModal"
      >
        <span className="mi mi-call action-icon" /> Request Call Back
      </button>
    </div>
    <span className="d-block form-heading font-weight-bold my-2">
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
      <input type="submit" defaultValue="Submit" id="vtigerFormSubmitBtn_41" />
    </form>
    <div className="ride-section">
      <img className="book-ride" src="./img/ride.png" alt="" />
      <button
        className="btn btn-info micro-form-btn enqModal effetMoveGradient effectScale"
        data-form="lg"
        data-title="Book A Free Site Visit"
        data-btn="Download Now"
        data-enquiry="Book A Free Site Visit Left Panel"
        data-redirect="enquiry"
        data-toggle="modal"
        data-target="#enqModal"
      >
        Book A Free Site Visit
      </button>
    </div>
  </div>
  <ul className="mob-action nav nav-fill d-sm-block d-lg-none">
    <li
      className="nav-item"
      onclick="javascript:location.href='tel:+919619095795'"
    >
      <span className="mi mi-call action-icon" /> Call
    </li>
    <li
      className="nav-item enqModal"
      data-form="lg"
      data-title="Enquire Now!"
      data-btn="Submit"
      data-enquiry="Enquire Footer Mobile"
      data-redirect="enquiry"
      data-toggle="modal"
      data-target="#enqModal"
    >
      <span className="mi mi-enquire action-icon" /> Enquire
    </li>
    <li
      className="nav-item"
      onclick="window.open('https://api.whatsapp.com/send?phone=+919619095795&text=I am Interested in Lodha Amara Project at Thane. Please Send me details.', '_blank');"
    >
      <span className="mi mi-whatsapp action-icon">
        <span className="path1" />
        <span className="path2" />
        <span className="path3" />
      </span>{" "}
      WhatsApp
    </li>
  </ul>
</>

  )
}
