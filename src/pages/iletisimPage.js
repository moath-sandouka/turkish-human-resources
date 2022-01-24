import React from "react";
import emailjs from "emailjs-com";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import mapsLogo from "../assets/images/google-maps-icon.png";
import IstanbulOfficeImg from "../assets/images/İSTANBUL OFS.jpeg";
import AntalyaOfficeImg from "../assets/images/ANTALYA OFİS.jpg";

function Iletisim() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zpn9hs4",
        "template_c18eace",
        e.target,
        "user_wlrd46vYXvi7a4N8IV10D"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="container-fluid">
      <div className="container-fluid mt-3 mb-3">
        <div className="container mt-5 mb-5 pr-0 pl-0">
          <h2 className="text-center font-weight-bold black section-title mb-5 mt-5">
            İLETİŞİM
          </h2>
          <h2 className="text-left font-weight-bold black section-title mb-5">
            Bize Ulaşın...
          </h2>
          <div className="d-flex flex-row justify-content-between flex-wrap">
            <div className="col-12 col-sm-12 col-md-6 d-flex flex-column justify-content-start pt-3 pb-3 flex-wrap text-left align-items-left pl-0 pr-0">
              <div className="d-flex flex-row justify-content-start flex-wrap">
                <span className="col-12 col-sm-12 col-md-6 mb-5">
                  <strong>
                    İSTANBUL
                    <br /> Marmara Bölge Ofisimiz
                  </strong>
                  <br />
                  <br /> Ataköy 7.8.9.10 Kısım Mh.
                  <br /> Çoban Çeşme E-5 Yan Yol Cd.
                  <a href="https://www.google.com/maps/place/Route+%C4%B0stanbul/@40.9925,28.825547,15z/data=!4m2!3m1!1s0x0:0xe40b5695e3d96612?sa=X&ved=2ahUKEwjXrKDRpv3uAhVuyoUKHS8JC_4Q_BIwE3oECB4QBQ">
                    <br />
                    <em>
                      ROUTE İSTANBUL No:6 B Blok Kat:13
                      <br />
                      Daire:136 Bakırköy/ İstanbul
                    </em>
                    <img className="pl-1" src={mapsLogo} width="20" />
                  </a>
                  <br /> E-Posta : info@ubcinsankaynaklari.com <br />
                  Telefon : +090 542 106 34 07
                </span>
                <img
                  src={IstanbulOfficeImg}
                  className="header-hiring-company-img w-100 col-12 col-sm-12 col-md-6"
                />
              </div>
              <div className="d-flex flex-row justify-content-start flex-wrap mt-4">
                <span className=" col-12 col-sm-12 col-md-6 ">
                  <strong>
                    ANTALYA
                    <br /> Akdeniz Bölge Ofisimiz
                  </strong>
                  <br />
                  <a href="https://www.google.com/maps/place/Ali+Pe%C3%A7en+Plaza/@36.9070816,30.7142202,15z/data=!4m8!1m2!2m1!1sEtiler+Mah.+K%C4%B1z%C4%B1lar%C4%B1k+Caddesi,+Ali+Pe%C3%A7en+Plaza+Kat+4+no:12+ANTALYA!3m4!1s0x14c3858af3fe6d8d:0x6dda54f8fd52f401!8m2!3d36.9006448!4d30.7163972">
                    <br /> Yenigün mah.Kızılırmak Cadd,
                    <br />
                    <em>
                      Ali Peçen Plaza A1 Blok Kat 4 No:11 Muratpaşa / ANTALYA
                    </em>
                    <img className="pl-1" src={mapsLogo} width="20" />
                  </a>
                  <br />
                  E-Posta : ik@ubcinsankaynaklari.com
                  <br />
                  Telefon : +90 0242 504 34 44
                </span>
                <img
                  src={AntalyaOfficeImg}
                  className="header-hiring-company-img w-100 col-12 col-sm-12 col-md-6"
                />
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 row justify-content-center pt-3 pb-3 flex-wrap text-left align-items-left pl-3 pr-2">
              <form
                className="white-background shadow-2 contact-us-form"
                onSubmit={sendEmail}
              >
                <div className="form-row mb-1">
                  <div className="col-12 col-md-6 mb-3">
                    <label htmlFor="contactUsNameInput">Adınız</label>
                    <input
                      type="text"
                      className="form-control"
                      id="contactUsNameInput"
                      placeholder="Adınız"
                      name="contactUsNameInput"
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6 mb-3">
                    <label htmlFor="contactUsEmailInput">E-Posta</label>
                    <input
                      type="email"
                      className="form-control"
                      id="contactUsEmailInput"
                      placeholder="name@example.com"
                      name="contactUsEmailInput"
                      required
                    />
                  </div>
                </div>
                <div className="form-row mb-1">
                  <div className="col-12 col-md-6 mb-3 w-100">
                    <label htmlFor="contactUsMobileInput">Telefon</label>
                    <IntlTelInput
                      fieldId="contactUsMobileInput"
                      inputClassName="form-control pr-5 padding-left-120"
                      separateDialCode="true"
                      preferredCountries={["tr"]}
                      fieldName="contactUsMobileInput"
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6 mb-3">
                    <label htmlFor="contactUsTrustCode">Güvenlik Kodu</label>
                    <input
                      type="text"
                      className="form-control"
                      id="contactUsTrustCode"
                      name="contactUsTrustCode"
                    />
                  </div>
                </div>
                <div className="form-row mb-2">
                  <div className="col-12 col-md-12 mb-3 w-100">
                    <label htmlFor="contactUsMessageInput">Mesajınız</label>
                    <textarea
                      className="form-control"
                      maxLength="200"
                      id="contactUsMessageInput"
                      name="contactUsMessageInput"
                      placeholder="Mesajınız"
                      rows="3"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="col-6 col-md-6 mb-3">
                    <div>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="contactToEmailAddress"
                        id="contactToEmailAddressRadio1"
                        value="info@ubcinsankaynaklari.com"
                        checked
                      />
                      <label
                        className="form-check-label"
                        for="contactToEmailAddressRadio1"
                      >
                        İSTANBUL - <em>Marmara Bölge Ofisimiz</em>
                      </label>
                    </div>
                  </div>
                  <div className="col-6 col-md-6 mb-3">
                    <div>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="contactToEmailAddress"
                        id="contactToEmailAddressRadio2"
                        value="ik@ubcinsankaynaklari.com"
                      />
                      <label
                        className="form-check-label"
                        for="contactToEmailAddressRadio2"
                      >
                        ANTALYA - <em>Akdeniz Bölge Ofisimiz</em>
                      </label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-2 btn-2h w-100 pl-1" type="submit">
                  GÖNDER
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Iletisim;
