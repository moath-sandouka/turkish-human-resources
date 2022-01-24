import React from "react";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import emailjs from "emailjs-com";

function Iletisim() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zpn9hs4",
        "template_cv_apply",
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
        <div className="container mt-5 mb-5">
          <h2 className="text-center font-weight-bold black section-title mb-5 mt-5">
            İŞ BAŞVURU
          </h2>
          <p className="text-center font-weight-bold black section-title mb-5">
            İş başvurularınız için, aşağıdaki formu doldurmanız gerekmektedir.
            <br />
            Sizlere en yakın zamanda dönüş yapılacaktır.
          </p>
          <div className="col-12 col-sm-12 col-md-9 row justify-content-center pt-3 pb-3 flex-wrap text-center align-items-center cv-form">
            <form onSubmit={sendEmail}>
              <div className="form-row mb-1">
                <div className="col-12 col-md-4 mb-3">
                  <label htmlFor="fullNameInput">Tam adınız</label>
                  <input
                    type="text"
                    className="form-control"
                    id="jobApplyFullNameInput"
                    name="jobApplyFullNameInput"
                    placeholder="Tam adınız"
                    required
                  />
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <label htmlFor="emailInput">E-Posta</label>
                  <input
                    type="email"
                    className="form-control"
                    id="jobApplyEmailInput"
                    name="jobApplyEmailInput"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="col-12 col-md-4 mb-3 w-100">
                  <label htmlFor="contactUsMobileInput">Cep Telefonu</label>
                  <IntlTelInput
                    fieldId="jobApplyMobileInput"
                    fieldName="jobApplyMobileInput"
                    preferredCountries={["tr"]}
                    inputClassName="form-control w-100 pr-5"
                    separateDialCode="true"
                    required
                  />
                </div>
              </div>
              <div className="form-row mb-1">
                <div className="col-12 col-md-4 mb-3 w-100">
                  <label htmlFor="idNumberInput">T.C Numarası</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="T.C Numarası"
                    id="jobApplyIdNumberInput"
                    name="jobApplyIdNumberInput"
                  />
                </div>

                <div className="col-12 col-md-4 mb-3 w-100">
                  <label htmlFor="dateOfBirthInput">Doğum Tarihi</label>
                  <input
                    type="date"
                    className="form-control"
                    id="jobApplyDateOfBirthInput"
                    name="jobApplyDateOfBirthInput"
                  />
                </div>

                <div className="col-12 col-md-4 mb-3">
                  <label htmlFor="learningLevelInput">Öğrenim Durumu</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Öğrenim Durumu"
                    id="jobApplyLearningLevelInput"
                    name="jobApplyLearningLevelInput"
                  />
                </div>
              </div>
              <div className="form-row mb-2">
                <div className="col-12 col-md-12 mb-6 w-100">
                  <label htmlFor="careerInput">Mesleki Deneyimleriniz</label>
                  <textarea
                    className="form-control"
                    maxLength="1000"
                    id="jobApplyCareerInput"
                    name="jobApplyCareerInput"
                    placeholder="Mesleki Deneyimleriniz"
                    rows="5"
                    required
                  />
                </div>
              </div>
              <div className="d-flex flex-row justify-content-between flex-wrap pt-3 pb-3">
                <div className="col-6 col-md-6 mb-3">
                  <div>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="jobApplyToEmailAddress"
                      id="jobApplyToEmailAddressRadio1"
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
                      name="jobApplyToEmailAddress"
                      id="jobApplyToEmailAddressRadio2"
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
              <button className="btn btn-2 btn-2h w-50" type="submit">
                GÖNDER
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Iletisim;
