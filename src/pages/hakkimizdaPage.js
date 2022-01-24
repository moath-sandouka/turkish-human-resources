import React from "react";
import ubcLocation from "../assets/images/UBC LOCATION.png";
import { Link } from "react-router-dom";
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import img7 from "../assets/images/7.png";
import img8 from "../assets/images/8.png";
import img9 from "../assets/images/9.png";
import img10 from "../assets/images/10.png";
import img11 from "../assets/images/11.png";
import img12 from "../assets/images/12.png";
import img13 from "../assets/images/13.png";
import img14 from "../assets/images/14.png";
import img16 from "../assets/images/16.png";

function Hikkimizda() {
  return (
    <div className="container-fluid">
      <div className="container-fluid mt-3">
        <div className="container mt-5 mb-5">
          <h2 className="text-center font-weight-bold black section-title mb-5 mt-5">
            HAKKIMIZDA
          </h2>
          <p className="text-justify">
            UBC Group bünyesindeki tüm şirketleriyle birlikte, Birleşmiş
            Milletler Global Maketplace (www.ungm.org- UNGM # 726323) tarafından
            akredite olmuş ulusları bir şirketler grubudur. <br />
            UBC İnsan Kaynakları ; dünya üzerinde 12 noktada 16 şirketle Finans,
            Enerji, İnsan Kaynakları, Gıda, Tarım, Turizm sektörlerinde
            faaliyetleri olan UBC Group bünyesinde faaliyet gösteren 16
            şirketten biridir. <br />
            Marmara Bölgesi için İstanbul ofisimiz ; Akdeniz Bölgesi için
            Antalya ofisimiz olmak üzere iki bölge ofisiyle ve 1000 & 1200
            civarı farklı kategorilerdeki personel datasıyla hizmet veren bir
            kurumuz.
            <br />
            Turizm,Tarım, Kargo & Lojistik,Sanayi gibi sektörlerde firmaların
            belli dönemlerde artan veya azalan iş yoğunluk durumlarına göre
            ihtiyaç duydukları dönemsel veya daimi ; vasıflı veya vasıfsız
            personel tedarik hizmeti, sunmaktayız. <br />
            UBC İnsan Kaynakları ; sürekli değişen ve gelişen dinamik çalışma
            hayatındaki yeni çalışma koşullarına uyumlu profesyonel hızlı esnek
            verimli sonuç ve çözüm odaklı hizmet üretmeyi esas almış firmadır.
          </p>
        </div>

        <Link to="/hizmetlerimiz">
          <div className="container mb-5 mt-5">
            <div className="features-grid">
              <button
                className="btn btn-2 btn-2h"
                type="button"
                data-toggle="collapse"
                data-target="#tab1"
                aria-expanded="false"
                aria-controls="tab1"
              >
                TURİZM SEKTÖRÜ
              </button>
              <button
                className="btn btn-2 btn-2h"
                type="button"
                data-toggle="collapse"
                data-target="#tab2"
                aria-expanded="false"
                aria-controls="tab2"
              >
                FUAR KONGRE TOPLANTI ORGANİZASYONLARI
              </button>
              <button
                className="btn btn-2 btn-2h"
                type="button"
                data-toggle="collapse"
                data-target="#tab3"
                aria-expanded="false"
                aria-controls="tab3"
              >
                TARIM ve ÜRETİM SEKTÖRÜ
              </button>
              <button
                className="btn btn-2 btn-2h"
                type="button"
                data-toggle="collapse"
                data-target="#tab4"
                aria-expanded="false"
                aria-controls="tab4"
              >
                KARGO & LOJİSTİK SEKTÖRÜ
              </button>
              <button
                className="btn btn-2 btn-2h"
                type="button"
                data-toggle="collapse"
                data-target="#tab5"
                aria-expanded="false"
                aria-controls="tab5"
              >
                BORDRO HİZMETLERİ
              </button>
              <button
                className="btn btn-2 btn-2h"
                type="button"
                data-toggle="collapse"
                data-target="#tab6"
                aria-expanded="false"
                aria-controls="tab6"
              >
                YABANCI PERSONEL TEMİNİ
              </button>
            </div>
          </div>
        </Link>
        <div className="d-flex flex-row justify-content-around pt-3 pb-3 flex-wrap text-center align-items-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-7">
            <div className="row align-items-center text-center justify-content-center">
              <div className="col-6 col-sm-6 col-md-3">
                <img src={img13} className="hiring-company-img" alt="..." />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <img src={img14} className="hiring-company-img" alt="..." />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <img src={img16} className="hiring-company-img" alt="..." />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <img src={img1} className="hiring-company-img" alt="..." />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <img src={img2} className="hiring-company-img" alt="..." />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <img src={img3} className="hiring-company-img" alt="..." />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <img src={img4} className="hiring-company-img" alt="..." />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <img src={img5} className="hiring-company-img" alt="..." />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <img src={img7} className="hiring-company-img" alt="..." />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <img src={img8} className="hiring-company-img" alt="..." />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <img src={img9} className="hiring-company-img" alt="..." />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <img src={img10} className="hiring-company-img" alt="..." />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <img src={img11} className="hiring-company-img" alt="..." />
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <img src={img12} className="hiring-company-img" alt="..." />
              </div>
            </div>
            <h2 className="col-md-12 text-center font-weight-bold white section-title mb-5">
              UNGM # 726323
            </h2>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-7 mt-g mb-5">
            <a href="http://www.ubcinsankaynaklari.com/">
              <img src={ubcLocation} className="w-100" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hikkimizda;
