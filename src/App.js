import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./customOverride.scss";
import Navbar from "./sections/navbar";
import Hakkimizda from "./pages/hakkimizdaPage";
import Hizmetlerimiz from "./pages/hizmetlerimizPage";
import IsBasvurusu from "./pages/isBasvurusuPage";
import Belgelerimiz from "./pages/belgelerimizPage";
import Iletisim from "./pages/iletisimPage";
import AnaSayfa from "./pages/anaSayfaPage";
import Header from "./sections/Header";
import FacebookIcon from "./assets/images/facebookIcon64px.png";
import InstagramIcon from "./assets/images/instagramIcon64px.png";
import KVKK from "./pages/kvkk";
import TourismIcon1 from "./assets/highResImages/Tourism_shutterstock_1145179886.jpg";
import TourismIcon2 from "./assets/highResImages/Tourism_shutterstock_158835149.jpg";
import TourismIcon3 from "./assets/highResImages/Tourism_shutterstock_194984270.jpg";
import TourismIcon4 from "./assets/highResImages/Tourism_shutterstock_75574186.jpg";
import TourismIcon5 from "./assets/highResImages/Tourism_shutterstock_1225975360.jpg";
import TourismIcon6 from "./assets/highResImages/Tourism_shutterstock_1237242727.jpg";
import PayrollsIcon1 from "./assets/highResImages/Payrolls_shutterstock_1358694809.jpg";
import PayrollsIcon2 from "./assets/highResImages/Payrolls_shutterstock_1028051830.jpg";
import ForeignStaffIcon1 from "./assets/highResImages/FOREIGN STAFF_shutterstock_1733849612.jpg";
import ForeignStaffIcon2 from "./assets/highResImages/FOREIGN STAFF_shutterstock_1609051174.jpg";
import CongressAndFairIcon1 from "./assets/highResImages/CONGRESS AND FAIR_shutterstock_229792261.jpg";
import CongressAndFairIcon2 from "./assets/highResImages/CONGRESS AND FAIR_shutterstock_1051373192.jpg";
import CargoLogisticsIcon1 from "./assets/highResImages/CARGO AND LOGISTICS_shutterstock_1616481382.jpg";
import CargoLogisticsIcon2 from "./assets/highResImages/CARGO AND LOGISTICS_shutterstock_773962387.jpg";
import CargoLogisticsIcon3 from "./assets/highResImages/CARGO AND LOGISTICS_shutterstock_638769604.jpg";
import AgricultureIcon1 from "./assets/highResImages/Agriculture and Production_shutterstock_1718211247.jpg";
import AgricultureIcon2 from "./assets/highResImages/Agriculture and Production_shutterstock_1407137585.jpg";
import AgricultureIcon3 from "./assets/highResImages/Agriculture and Production_shutterstock_1118087966.jpg";

function App() {
  return (
    <Router>
      <div className="container-fluid overflow-hidden">
        <Header />
        <div
          id="ubcCarousel"
          class="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="5000">
              <img src={TourismIcon1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-interval="5000">
              <img src={TourismIcon2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-interval="5000">
              <img src={TourismIcon3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-interval="5000">
              <img src={TourismIcon4} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-interval="5000">
              <img src={TourismIcon5} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-interval="5000">
              <img src={TourismIcon6} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-interval="5000">
              <img src={PayrollsIcon2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-interval="5000">
              <img src={CongressAndFairIcon1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-interval="5000">
              <img src={CongressAndFairIcon2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-interval="5000">
              <img src={CargoLogisticsIcon2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-interval="5000">
              <img src={CargoLogisticsIcon3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-interval="5000">
              <img src={AgricultureIcon1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-interval="5000">
              <img src={AgricultureIcon2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-interval="5000">
              <img src={AgricultureIcon3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-interval="5000">
              <img src={ForeignStaffIcon2} class="d-block w-100" alt="..." />
              <img src={ForeignStaffIcon1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-interval="5000">
              <img src={PayrollsIcon1} class="d-block w-100" alt="..." />
              <img src={CargoLogisticsIcon1} class="d-block w-100" alt="..." />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#ubcCarousel"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#ubcCarousel"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div class="pt-3 text-center ">
          <h1 className="main-title-text font-weight-bold white">UBC</h1>
          <h2 className="sub-title-text font-weight-bold white">
            İNSAN KAYNAKLARI
          </h2>
          <p className="title-description font-weight-bold white">
            MAKSİMUM İŞVEREN MEMNUNİYETİ VE ÇALIŞAN MEMNUNİYETİ TEMEL
            PRENSİBİMİZDİR
          </p>
        </div>
        <Navbar />

        <Switch>
          <Route path="/kvkk" component={KVKK} />
          <Route path="/hakkimizda" component={Hakkimizda} />
          <Route path="/hizmetlerimiz" component={Hizmetlerimiz} />
          <Route path="/is-basvurusu" component={IsBasvurusu} />
          <Route path="/belgelerimiz" component={Belgelerimiz} />
          <Route path="/iletisim" component={Iletisim} />
          <Route path="/ana-sayfa" component={AnaSayfa} />
          <Route path="/" component={AnaSayfa} />
        </Switch>

        <p className="pl-2 pr-2 mb-0  pt-3 pb-3 text-justify footer-copyright border-top">
          <strong>Özel İstihdam Bürosu Yetki Belgesi;</strong> Türkiye İş Kurumu
          tarafından UBC İNSAN KAYNAKLARI Danışmanlık Eğitim Turizm Hizmetleri
          Limited Şirketine 06.08.2018 -05.07.2021 tarihleri arasında faaliyette
          bulunmak üzere 28.06.2018 tarih ve 10336 sayılı karar uyarınca Özel
          İstihdam Bürosu Yetki Belgesi verilmiştir. Geçici İş İlişkisi Yetki
          Belgesi ;Türkiye İş Kurumu tarafından UBC İNSAN KAYNAKLARI Danışmanlık
          Eğitim Turizm Hizmetleri Limited Şirketine 14.12.2020 -13.12.2023
          tarihleri arasında faaliyette bulunmak üzere 08.12.2020 tarih ve
          7374726 sayılı karar uyarınca Geçici İş İlişkisi Yetki Belgesi
          verilmiştir.
          <strong>
            4904 sayılı kanun uyarınca iş arayanlardan ücret alınmayacak ve
            menfaat temin edilmeyecektir. Şikayetleriniz için aşağıdaki telefon
            numaralarına başvurabilirsiniz Türkiye İş Kurumu
          </strong>
          İstanbul Tel: (0212) 249 29 87 / E-mail : istanbul@iskur.gov.tr,
          <a href="https://istanbul.iskur.gov.tr/">
            https://istanbul.iskur.gov.tr/
          </a>
        </p>
        <div className="container-fluid d-flex flex-row justify-content-between pr-3 pl-3 flex-wrap text-center footer-copyright  align-items-center align-middle pt-2 pb-2">
          <span className="font-weight-bold col-6 col-sm-4">
            Telefon : 0542 106 34 07
          </span>

          <div className="col-6 col-sm-3">
            <a
              className="ml-1 mr-1"
              href="https://www.facebook.com/ubc.insankaynaklari"
            >
              <img src={FacebookIcon} width="20" />
            </a>
            <a
              className="ml-1 mr-1"
              href="https://www.instagram.com/ubcinsankaynaklari/"
            >
              <img src={InstagramIcon} width="20" />
            </a>
          </div>

          <span className="font-weight-bold col-12 col-sm-5">
            E-Posta: <a href="#">info@ubcinsankaynaklari.com</a>
          </span>
        </div>
      </div>
    </Router>
  );
}

export default App;
