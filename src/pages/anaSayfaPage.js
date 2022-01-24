import React from "react";
import UbcLogo from "../assets/images/UB İNSAN KAYNAKLARI.png";

import mapsLogo from "../assets/images/google-maps-icon.png";
import { Link } from "react-router-dom";

function AnaSayfa() {
  return (
    <div className="container-fluid">
      <div className="container mt-5 mb-5">
        <h3 className="text-center font-weight-bold  mb-5">
          UBC İNSAN KAYNAKLARI
        </h3>
        <p className="text-center font-weight-bold ">
          BİR İŞKUR ÖZEL İSTİHDAM BÜROSUDUR. GEÇİCİ İŞ İLİŞKİSİ YETKİ BELGELİ
          BİR FİRMADIR. TÜM ÇALIŞANLARIMIZA VE HİZMET VERDİĞİMİZ KURUMLARA İŞKUR
          HİMAYESİ VE GÜVENCESİ ALTINDA HİZMET VERMEKTEYİZ.
        </p>
        <p className="text-center font-weight-bold">
          İŞVEREN MEMNUNİYETİ VE ÇALIŞAN MEMNUNİYETİ TEMEL PRENSİBİMİZDİR.
        </p>
        <p className="text-justify">
          Alanında <strong>‘öncü firma’</strong> olma bilinciyle hareket ederek;
          hizmette
          <strong> yenilikçi, kaliteli, modern ve sürdürülebilir </strong> bir
          anlayışı esas alıyoruz.
          <br /> Turizm ,Yiyecek & İçecek Sektörünün Her Segmentindeki
          İşletmelerine, Tarım ve Üretim Tesislerine ,Kargo ve Lojistik
          Sektörüne, Paketleme Firmalarına, Fuar ve Kongre Merkezlerine Daimi
          veya Geçici & dönemsel personel tedarik hizmeti veriyoruz.
        </p>
        <ul className="homepage-list">
          <li> Profesyonel </li>
          <li> Güler Yüzlü </li>
          <li> Çözüm Odaklı </li>
          <li> Saygılı </li>
          <li> Pozitif Tutuma Sahip </li>
          <li> Esnek Çalışma </li>
        </ul>
        <p>Prensipleriyle hizmetlerimizi sunarız.</p>
        <p></p>
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
        <span className="col-8 col-sm-3 col-md-3 col-lg-3 header-hiring-company-img">
          <img
            src={UbcLogo}
            className="h-100 header-img"
            alt="..."
          />
        </span>
        <span className="col-12 col-sm-5 col-md-5 col-lg-4">
          İSTANBUL
          <br /> Marmara Bölge Ofisimiz <br />
          <br /> Ataköy 7.8.9.10 Kısım Mh.
          <br /> Çoban Çeşme E-5 Yan Yol Cd.
          <a href="https://www.google.com/maps/place/Route+%C4%B0stanbul/@40.9925,28.825547,15z/data=!4m2!3m1!1s0x0:0xe40b5695e3d96612?sa=X&ved=2ahUKEwjXrKDRpv3uAhVuyoUKHS8JC_4Q_BIwE3oECB4QBQ">
            <br /> ROUTE İSTANBUL No:6 B Blok Kat:13
            <br />
            <em>Daire:136 Bakırköy/ İstanbul</em>
            <img className="pl-1" src={mapsLogo} width="20" />
          </a>
          <br /> E-Posta : info@ubcinsankaynaklari.com <br />
          Telefon : +090 542 106 34 07
        </span>
        <span className="col-12 col-sm-4 col-md-4 col-lg-4">
          ANTALYA
          <br /> Akdeniz Bölge Ofisimiz
          <br />
          <a href="https://www.google.com/maps/place/Ali+Pe%C3%A7en+Plaza/@36.9070816,30.7142202,15z/data=!4m8!1m2!2m1!1sEtiler+Mah.+K%C4%B1z%C4%B1lar%C4%B1k+Caddesi,+Ali+Pe%C3%A7en+Plaza+Kat+4+no:12+ANTALYA!3m4!1s0x14c3858af3fe6d8d:0x6dda54f8fd52f401!8m2!3d36.9006448!4d30.7163972">
            <br /> Yenigün mah.Kızılırmak Cadd,
            <br />{" "}
            <em>Ali Peçen Plaza A1 Blok Kat 4 No:11 Muratpaşa / ANTALYA</em>
            <img className="pl-1" src={mapsLogo} width="20" />
          </a>
          <br />
          E-Posta : ik@ubcinsankaynaklari.com
          <br />
          Telefon : +90 0242 504 34 44
        </span>
      </div>
    </div>
  );
}

export default AnaSayfa;
