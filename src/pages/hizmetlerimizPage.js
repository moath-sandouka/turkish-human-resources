import React from "react";
import TourismIcon1 from "../assets/highResImages/Tourism_shutterstock_1145179886.jpg";
import TourismIcon2 from "../assets/highResImages/Tourism_shutterstock_158835149.jpg";
import TourismIcon3 from "../assets/highResImages/Tourism_shutterstock_194984270.jpg";
import TourismIcon4 from "../assets/highResImages/Tourism_shutterstock_75574186.jpg";
import TourismIcon5 from "../assets/highResImages/Tourism_shutterstock_1225975360.jpg";
import TourismIcon6 from "../assets/highResImages/Tourism_shutterstock_1237242727.jpg";
import PayrollsIcon1 from "../assets/highResImages/Payrolls_shutterstock_1358694809.jpg";
import PayrollsIcon2 from "../assets/highResImages/Payrolls_shutterstock_1028051830.jpg";
import ForeignStaffIcon1 from "../assets/highResImages/FOREIGN STAFF_shutterstock_1733849612.jpg";
import ForeignStaffIcon2 from "../assets/highResImages/FOREIGN STAFF_shutterstock_1609051174.jpg";
import CongressAndFairIcon1 from "../assets/highResImages/CONGRESS AND FAIR_shutterstock_229792261.jpg";
import CongressAndFairIcon2 from "../assets/highResImages/CONGRESS AND FAIR_shutterstock_1051373192.jpg";
import CargoLogisticsIcon1 from "../assets/highResImages/CARGO AND LOGISTICS_shutterstock_1616481382.jpg";
import CargoLogisticsIcon2 from "../assets/highResImages/CARGO AND LOGISTICS_shutterstock_773962387.jpg";
import CargoLogisticsIcon3 from "../assets/highResImages/CARGO AND LOGISTICS_shutterstock_638769604.jpg";
import AgricultureIcon1 from "../assets/highResImages/Agriculture and Production_shutterstock_1718211247.jpg";
import AgricultureIcon2 from "../assets/highResImages/Agriculture and Production_shutterstock_1407137585.jpg";
import AgricultureIcon3 from "../assets/highResImages/Agriculture and Production_shutterstock_1118087966.jpg";
import AgricultureIcon4 from "../assets/highResImages/Agriculture and Production_fide-uretim-seralari-.jpg";
import AgricultureIcon5 from "../assets/highResImages/Agriculture and Production_paketleme.jpg";

function Hizmerlerimiz() {
  return (
    <div className="container-fluid">
      <div className="container-fluid mt-3 mb-3">
        <div className="container mt-5 mb-5">
          <h2 className="text-center font-weight-bold black section-title mb-5 mt-5">
            H??ZMETLER??M??Z
          </h2>
          <p className="text-center black section-title">
            Personel tedariki konusunda ????z??m orta????n??z olmaya talibiz.
          </p>
          <p className="text-justify black section-title">
            Hizmet verdi??imiz her sekt??r??n ihtiya?? duydu??u e??itimli, deneyimli
            ve kalifiye personel deste??i sa??layarak; m????terilerimizin i?? y??k??n??
            payla????yor, kusursuz hizmet anlay?????? i?? veren memnuniyeti esas
            alarak firmalar??m??z??n hedeflerine ula??malar??na katk?? sa??l??yoruz.
          </p>
          <div className="row justify-content-between mt-4">
            <div className="col-12 col-sm-12 col-md-4">
              <p className=" text-left font-weight-bold black section-title">
                D??nemsel veya Daimi Personeli Hizmeti
              </p>
              <ul>
                <li>D??nemsel i?? yo??unluklar??</li>
                <li>Do??um izni</li>
                <li>Askerlik izni</li>
                <li>Y??ll??k izin</li>
                <li>
                  Zorunlu hallerde i?? g??c?? eksilmesi gibi durumlarda personel
                  ihtiya??lar??n??z?? kar????lamaktay??z
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid pt-1 pb-5">
          <div className="container">
            <h3 className="text-center font-weight-bold black section-title mt-4 mb-5">
              H??ZMET VERD??????M??Z SEKT??RLER
            </h3>
            <div className="features-grid">
              <button
                className="btn btn-2 btn-2h"
                type="button"
                data-toggle="collapse"
                data-target="#tab1"
                aria-expanded="false"
                aria-controls="tab1"
              >
                TUR??ZM SEKT??R??
              </button>
              <button
                className="btn btn-2 btn-2h"
                type="button"
                data-toggle="collapse"
                data-target="#tab2"
                aria-expanded="false"
                aria-controls="tab2"
              >
                FUAR KONGRE TOPLANTI ORGAN??ZASYONLARI
              </button>
              <button
                className="btn btn-2 btn-2h"
                type="button"
                data-toggle="collapse"
                data-target="#tab3"
                aria-expanded="false"
                aria-controls="tab3"
              >
                TARIM ve ??RET??M SEKT??R??
              </button>
              <button
                className="btn btn-2 btn-2h"
                type="button"
                data-toggle="collapse"
                data-target="#tab4"
                aria-expanded="false"
                aria-controls="tab4"
              >
                KARGO & LOJ??ST??K SEKT??R??
              </button>
              <button
                className="btn btn-2 btn-2h"
                type="button"
                data-toggle="collapse"
                data-target="#tab5"
                aria-expanded="false"
                aria-controls="tab5"
              >
                BORDRO H??ZMETLER??
              </button>
              <button
                className="btn btn-2 btn-2h"
                type="button"
                data-toggle="collapse"
                data-target="#tab6"
                aria-expanded="false"
                aria-controls="tab6"
              >
                YABANCI PERSONEL TEM??N??
              </button>
            </div>
          </div>

          <div id="accordion-group">
            <div className="collapse" id="tab1" data-parent="#accordion-group">
              <div className="container mb-5">
                <h3 className="text-left font-weight-bold black section-title mb-4 mt-5">
                  TUR??ZM SEKT??R??
                </h3>
                <div
                  id="tourismCarousel"
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
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#tourismCarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#tourismCarousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="container ">
                <p className="text-left font-weight-bold black section-title mt-1 pb-0">
                  SERV??S PERSONEL??
                </p>
                <p className="text-justify black section-title">
                  5 y??ld??zl?? l??ks otellere, sosyal tesis ve ??zel davetlere
                  personel temin ediyoruz. Temel servis e??itimleri tamamlanm????
                  servis komisi ve deneyimli garson, hostes, barmen, barista,
                  VIP garson, servis ??efi deste??i sunuyoruz.
                </p>
                <p className="text-left font-weight-bold black section-title mt-1">
                  V.I.P PERSONEL??
                </p>
                <p className="text-justify black section-title">
                  Organizasyon ve etkinlikleriniz i??in deneyimli ve kaliteli
                  V.I.P personel temin ediyoruz.
                </p>
                <p className="text-left font-weight-bold black section-title mt-1">
                  HOST / HOSTES
                </p>
                <p className="text-justify black section-title">
                  Davet ve etkinlikleriniz i??in misafirlerinizi, deneyimli host
                  ve hostes ekibimizle biz kar????layal??m!
                </p>
                <p className="text-left font-weight-bold black section-title mt-1">
                  BARMEN / BARME??D
                </p>
                <p className="text-justify black section-title">
                  ??zel davet ve organizasyonlar??n??zda, bar taraf??n?? bize
                  b??rak??n! Deneyimli ekibimiz size en ??zel i??ecekleri
                  haz??rlas??n!
                </p>
                <p className="text-left font-weight-bold black section-title mt-1">
                  MUTFAK EK??B??
                </p>
                <p className="text-justify black section-title">
                  Mutfak komisi, a?????? yard??mc??s?? d??zeyinde mutfak personeli ve
                  bula????khane personeli destek ihtiya??lar??n??za profesyonel
                  ????z??mler sunuyoruz.
                  <br />
                  Etkinliklerinizin ??n y??z?? kadar mutfakta da ba??ar??lar??m??z??
                  g??stermek isteriz!
                </p>
                <p className="text-left font-weight-bold black section-title mt-1">
                  HOUSEKEEP??NG
                </p>
                <p className="text-justify black section-title">
                  Otel ve ya??am alanlar??na deneyimli housekeeping personeli ile
                  hizmet veriyoruz.
                </p>
                <p className="text-left font-weight-bold black section-title mt-1">
                  STEWARD
                </p>
                <p className="text-justify black section-title">
                  5 y??ld??zl?? l??ks otellere, sosyal tesislere, kongre
                  merkezlerine ve ??zel davetlere deneyimli steward personeli
                  temin edilmektedir.
                </p>
                <p className="text-left font-weight-bold black section-title mt-1">
                  KAT H??ZMETLER?? PERSONEL??
                </p>
                <p className="text-justify black section-title">
                  Tamam?? 5 y??ld??zl?? otel tecr??besine sahip, referanslar kanal??
                  ile ??zenle se??ilmi??, kimyasal kullan??m?? ve hijyen kurallar??na
                  hakim
                  <strong> ???MA??D???</strong> ve <strong>???GENEL ALAN???</strong>{" "}
                  temizlik personellerimiz ile m??mk??n olan en ??st d??zeyde i??
                  g??c?? deste??i veriyoruz.
                </p>
                <p className="text-left font-weight-bold black section-title mt-1">
                  CATRING
                </p>
                <p className="text-justify black section-title">
                  T??m ??zel davet ve organizasyonlar??n??zda, sizler i??in en y??ksek
                  fayday?? ??retecek ??ekilde etkinlik y??netimi hizmeti veriyoruz.
                  Sizleri dinliyor, anl??yor ve ihtiya??lar??n??z do??rultusunda
                  say??s??z detay?? kusursuz bir ahenkle bir araya getirirken;
                  hayal etti??inizin de ??tesini vadediyoruz.
                </p>
              </div>
            </div>
            <div className="collapse" id="tab2" data-parent="#accordion-group">
              <div className="container mb-5">
                <h3 className="text-left font-weight-bold black section-title mb-4 mt-5">
                  FUAR KONGRE TOPLANTI ORGAN??ZASYONLARI
                </h3>
                <div
                  id="congressCarousel"
                  class="carousel slide carousel-fade"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-interval="5000">
                      <img
                        src={CongressAndFairIcon1}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-interval="5000">
                      <img
                        src={CongressAndFairIcon2}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#congressCarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#congressCarousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
                <p className="text-left font-weight-bold black section-title mt-1 pb-0">
                  <br />
                  <br />
                  ??nemli toplant??lar??n??zda t??m enerjinizi toplant??ya saklay??n,
                  geri kalan?? ile biz ilgilenelim! <br />
                  <br />
                  Fuar Kongre ve toplant??lar??n??zda ihtiya?? duyaca????n??z yard??mc??
                  destek personelleri temin ediyoruz.
                  <br />
                  Fuar Kongre ve Toplant?? Organizasyon Host ve Hostesleri
                  <br />
                  Fuar Stand Hostesi,
                  <br />
                  Tan??t??m Hostesi, <br />
                  Servis Hostesi,
                </p>
              </div>
            </div>
            <div className="collapse" id="tab3" data-parent="#accordion-group">
              <div className="container mb-5">
                <h3 className="text-left font-weight-bold black section-title mb-4 mt-5">
                  TARIM ve ??RET??M SEKT??R??
                </h3>
                <div
                  id="agricultureCarousel"
                  class="carousel slide carousel-fade"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-interval="5000">
                      <img
                        src={AgricultureIcon1}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-interval="5000">
                      <img
                        src={AgricultureIcon2}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-interval="5000">
                      <img
                        src={AgricultureIcon3}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#agricultureCarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#agricultureCarousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
                <p className="text-leftblack section-title mt-1 pb-0">
                  <br />
                  <br />
                  Tar??msal ??retim yap??lan tarlalarda, seralarda , bu ??r??nlerin
                  tasnif ve paketleme i??lemlerinin yap??ld?????? tesislerde d??nemsel
                  olarak olu??an i?? yo??unluklar?? durumunda k??sa s??rede temin
                  edilmeye ihtiya?? duyulan farkl?? vas??flardaki personellerin
                  tedarikini sa??l??yoruz. <br />
                  <br />
                  Gerek UBC ??nsan Kaynaklar?? personel havuzundan ve gerekse
                  i??birli??i i??inde oldu??umuz profesyonel personel havuzlar??ndan
                  h??zl?? ve istenilen nitelikte personel temin edip
                  i??verenlerimizin ????z??m orta???? oluyoruz. <br /> <br />
                  <strong>
                    Hem i??veren memnuniyeti hem ??al????an memnuniyeti vazge??ilmez
                    temel prensibimizdir.
                  </strong>
                </p>
              </div>
            </div>
            <div className="collapse" id="tab4" data-parent="#accordion-group">
              <div className="container mb-5">
                <h3 className="text-left font-weight-bold black section-title mb-4 mt-5">
                  KARGO & LOJ??ST??K SEKT??R??
                </h3>
                <div
                  id="cargoCarousel"
                  class="carousel slide carousel-fade"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-interval="5000">
                      <img
                        src={CargoLogisticsIcon1}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-interval="5000">
                      <img
                        src={CargoLogisticsIcon2}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-interval="5000">
                      <img
                        src={CargoLogisticsIcon3}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#cargoCarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#cargoCarousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
                <p className="text-leftblack section-title mt-1 pb-0">
                  <br />
                  <br />
                  Kargo ve Lojistik sekt??r??nde d??nemsel olarak artan i??
                  yo??unlu??u durumunda ihtiya?? duyulan farkl?? vas??flardaki
                  d??nemsel acil personel ihtiya??lar?? temin edilmektedir. <br />
                  <br />
                  Ta????ma, paketleme , etiketleme, y??kleme, bo??altma ve benzeri
                  i?? kalemleri dikkate al??narak olu??turulan dinamik personel
                  havuzumuzdan istenilen s??rede istenilen vas??flarda personeller
                  temin edilip firmalar??m??z??n ihtiya??lar?? do??rultusunda sorunsuz
                  profesyonel ????z??mler sunuyoruz. <br /> <br />
                  Gerek UBC ??nsan Kaynaklar?? personel havuzundan ve gerekse
                  i??birli??i i??inde oldu??umuz profesyonel personel havuzlar??ndan
                  h??zl?? ve istenilen nitelikte personel temin edip
                  i??verenlerimizin ????z??m orta???? oluyoruz. <br /> <br />
                  <strong>
                    Hem i??veren memnuniyeti hem ??al????an memnuniyeti vazge??ilmez
                    temel prensibimizdir.
                  </strong>
                </p>
              </div>
            </div>
            <div className="collapse" id="tab5" data-parent="#accordion-group">
              <div className="container mb-5">
                <h3 className="text-left font-weight-bold black section-title mb-4 mt-5">
                  BORDRO H??ZMETLER??
                </h3>
                <div
                  id="payrollCarousel"
                  class="carousel slide carousel-fade"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-interval="5000">
                      <img
                        src={PayrollsIcon1}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-interval="5000">
                      <img
                        src={PayrollsIcon2}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#payrollCarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#payrollCarousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
                <p className="text-left font-weight-bold black section-title mt-1 pb-0">
                  <br />
                  <br />
                  T??m bordro ve ??zl??k s??re??lerinizi sizler ad??na takip ediyoruz.{" "}
                  <br />
                  <br />
                  Bordrolama konusunda i??letmenizin ihtiya??lar??na en uygun
                  ????z??m??n tespitini yapt??ktan sonra firman??za yararl?? olacak en
                  uygun sistemin kurulmas??n?? sa??l??yoruz. Firman??zda ??al????an
                  personellerinizin ??zl??k i??lemlerinden tutunda t??m ??al????ma
                  s??resi i??indeki gerekli olan yasal i??lemlerini gizlilik
                  ??er??evesinde profesyonel olarak takip ediyoruz. Bordrolama
                  hizmeti veren firmam??z i??letmenize ait t??m i?? yerlerinin ayl??k
                  SGK bildirgelerini d??zenliyor, ayr??ca t??m sorumlulu??u
                  ??zerimize alarak sizleri mevcut risklerden uzakla??t??r??yoruz.
                  <br />
                  <br />
                  Bordrolama hizmetleri veren firmam??z y??netiminizin ihtiya??
                  duydu??u t??m raporlar?? en do??ru ??ekilde, sorunsuz ve zaman??nda
                  haz??rlayarak firman??z??n bu t??r i??lemlerde ekstra bir s??re??
                  ya??amas??n?? ortadan kald??r??lmas??na yard??mc?? oluyoruz. <br />
                  <br />
                  ????letmelerin ana faaliyetlerine odaklanmalar??n?? sa??layarak;
                  uzmanl??k gerektiren i??leri, insan kayna???? ile birlikte
                  konusunda deneyimli dan????man firmalardaki ekipler ile hizmet
                  ??retilmesine imkan sa??layan bir y??netim stratejisidir.
                  <br />
                  <br />
                  Hizmet ????eri??imiz,
                  <ul>
                    <br />
                    <li>
                      Tam zamanl?? ve/veya D??nemsel se??me yerle??tirme hizmeti ile
                      personel temini,
                    </li>
                    <li>
                      Personellerin ayl??k d??zenli olarak puantaj verilerine g??re
                      ??cret bordrolar??n??n olu??turulmas??,
                    </li>
                    <li>
                      ???? avanslar??, uzun vadeli bor??lar, icra kesintisi vb.
                      personel bor??lar??n??n takip edilmesi ve kesilmesi,
                    </li>
                    <li>Y??ll??k izinlerin takip edilmesi,</li>
                    <li>Otomatik BES ????lemlerinin ger??ekle??tirilmesi,</li>
                    <li>
                      Ayl??k ??cret bordrolar??n??n personellere ula??t??r??lmas??
                    </li>
                    <li>Masraf merkezli maliyet tablolar??n??n haz??rlanmas??</li>
                    <li>Maa?? ??demelerinin ger??ekle??tirilmesi</li>
                    <li>
                      ????ten ????k???? i??lemlerinin hesaplamalar?? ile birlikte
                      yap??lmas??, gerekli belgelerin haz??rlanmas??
                    </li>
                    <li>
                      ??al????ana ait ayl??k t??m puantaj i??lemlerinin
                      ger??ekle??tirilmesi
                    </li>
                    <li>Otomatik BES ????lemlerinin ger??ekle??tirilmesi,</li>
                    <li>
                      Genel ??cret maliyet tablolar??n??n haz??rlanmas??, (??ar??af
                      bordro)
                    </li>
                    <li>Bordro icmallerinin haz??rlanmas?? ve raporlanmas??</li>
                    <li>Klasik Muhasebe Fi??inin haz??rlanmas?? </li>
                    <li>
                      Resmi kurumlara verilecek belgelerin yasal s??resinde
                      online olarak bildirilmesi,
                    </li>
                    <li>
                      ????ten ????k?????? olacak personellerin i?? kanununa g??re
                      hesaplamalar??n??n yap??lmas??, gerekli belgelerin temini
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="collapse" id="tab6" data-parent="#accordion-group">
              <div className="container mb-5">
                <h3 className="text-left font-weight-bold black section-title mb-4 mt-5">
                  YABANCI PERSONEL TEM??N??
                </h3>
                <div
                  id="foreignStaffCarousel"
                  class="carousel slide carousel-fade"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-interval="5000">
                      <img
                        src={ForeignStaffIcon1}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-interval="5000">
                      <img
                        src={ForeignStaffIcon2}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#foreignStaffCarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#foreignStaffCarousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
                <p className="text-leftblack section-title mt-1 pb-0">
                  <br />
                  <br />
                  Turizm sekt??r??n??n d??nemsel yabanc?? kalifiye personel
                  ihtiya??lar?? i??in a??a????daki ??lkelerden ihtiya??lara g??re m??lakat
                  usul?? ile personel temini yap??lmaktad??r.
                  <br />
                  <br />
                  Firmalar??m??z??n taleplerine, konseptlerine ve m????teri
                  profillerine g??re ihtiya?? duyulan hizmet t??rleri i??in en uygun
                  yabanc?? personelin temini konusunda, uzman kadromuzla hizmet
                  vermekteyiz <br />
                  <br />
                  <strong>Personel temini sa??lad??????m??z ??lkeler;</strong>
                  <ul className="homepage-list">
                    <br />
                    <li> Ukrayna </li>
                    <li> Moldova</li>
                    <li> ??zbekistan </li>
                    <li> Kazakistan </li>
                    <li> Endonezya</li>
                    <li> Malezya </li>
                    <li>Filipinler</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hizmerlerimiz;
