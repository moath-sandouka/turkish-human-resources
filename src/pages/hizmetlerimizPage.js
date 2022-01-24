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
            HİZMETLERİMİZ
          </h2>
          <p className="text-center black section-title">
            Personel tedariki konusunda çözüm ortağınız olmaya talibiz.
          </p>
          <p className="text-justify black section-title">
            Hizmet verdiğimiz her sektörün ihtiyaç duyduğu eğitimli, deneyimli
            ve kalifiye personel desteği sağlayarak; müşterilerimizin iş yükünü
            paylaşıyor, kusursuz hizmet anlayışı iş veren memnuniyeti esas
            alarak firmalarımızın hedeflerine ulaşmalarına katkı sağlıyoruz.
          </p>
          <div className="row justify-content-between mt-4">
            <div className="col-12 col-sm-12 col-md-4">
              <p className=" text-left font-weight-bold black section-title">
                Dönemsel veya Daimi Personeli Hizmeti
              </p>
              <ul>
                <li>Dönemsel iş yoğunlukları</li>
                <li>Doğum izni</li>
                <li>Askerlik izni</li>
                <li>Yıllık izin</li>
                <li>
                  Zorunlu hallerde iş gücü eksilmesi gibi durumlarda personel
                  ihtiyaçlarınızı karşılamaktayız
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid pt-1 pb-5">
          <div className="container">
            <h3 className="text-center font-weight-bold black section-title mt-4 mb-5">
              HİZMET VERDİĞİMİZ SEKTÖRLER
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

          <div id="accordion-group">
            <div className="collapse" id="tab1" data-parent="#accordion-group">
              <div className="container mb-5">
                <h3 className="text-left font-weight-bold black section-title mb-4 mt-5">
                  TURİZM SEKTÖRÜ
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
                  SERVİS PERSONELİ
                </p>
                <p className="text-justify black section-title">
                  5 yıldızlı lüks otellere, sosyal tesis ve özel davetlere
                  personel temin ediyoruz. Temel servis eğitimleri tamamlanmış
                  servis komisi ve deneyimli garson, hostes, barmen, barista,
                  VIP garson, servis şefi desteği sunuyoruz.
                </p>
                <p className="text-left font-weight-bold black section-title mt-1">
                  V.I.P PERSONELİ
                </p>
                <p className="text-justify black section-title">
                  Organizasyon ve etkinlikleriniz için deneyimli ve kaliteli
                  V.I.P personel temin ediyoruz.
                </p>
                <p className="text-left font-weight-bold black section-title mt-1">
                  HOST / HOSTES
                </p>
                <p className="text-justify black section-title">
                  Davet ve etkinlikleriniz için misafirlerinizi, deneyimli host
                  ve hostes ekibimizle biz karşılayalım!
                </p>
                <p className="text-left font-weight-bold black section-title mt-1">
                  BARMEN / BARMEİD
                </p>
                <p className="text-justify black section-title">
                  Özel davet ve organizasyonlarınızda, bar tarafını bize
                  bırakın! Deneyimli ekibimiz size en özel içecekleri
                  hazırlasın!
                </p>
                <p className="text-left font-weight-bold black section-title mt-1">
                  MUTFAK EKİBİ
                </p>
                <p className="text-justify black section-title">
                  Mutfak komisi, aşçı yardımcısı düzeyinde mutfak personeli ve
                  bulaşıkhane personeli destek ihtiyaçlarınıza profesyonel
                  çözümler sunuyoruz.
                  <br />
                  Etkinliklerinizin ön yüzü kadar mutfakta da başarılarımızı
                  göstermek isteriz!
                </p>
                <p className="text-left font-weight-bold black section-title mt-1">
                  HOUSEKEEPİNG
                </p>
                <p className="text-justify black section-title">
                  Otel ve yaşam alanlarına deneyimli housekeeping personeli ile
                  hizmet veriyoruz.
                </p>
                <p className="text-left font-weight-bold black section-title mt-1">
                  STEWARD
                </p>
                <p className="text-justify black section-title">
                  5 yıldızlı lüks otellere, sosyal tesislere, kongre
                  merkezlerine ve özel davetlere deneyimli steward personeli
                  temin edilmektedir.
                </p>
                <p className="text-left font-weight-bold black section-title mt-1">
                  KAT HİZMETLERİ PERSONELİ
                </p>
                <p className="text-justify black section-title">
                  Tamamı 5 yıldızlı otel tecrübesine sahip, referanslar kanalı
                  ile özenle seçilmiş, kimyasal kullanımı ve hijyen kurallarına
                  hakim
                  <strong> ‘MAİD’</strong> ve <strong>‘GENEL ALAN’</strong>{" "}
                  temizlik personellerimiz ile mümkün olan en üst düzeyde iş
                  gücü desteği veriyoruz.
                </p>
                <p className="text-left font-weight-bold black section-title mt-1">
                  CATRING
                </p>
                <p className="text-justify black section-title">
                  Tüm özel davet ve organizasyonlarınızda, sizler için en yüksek
                  faydayı üretecek şekilde etkinlik yönetimi hizmeti veriyoruz.
                  Sizleri dinliyor, anlıyor ve ihtiyaçlarınız doğrultusunda
                  sayısız detayı kusursuz bir ahenkle bir araya getirirken;
                  hayal ettiğinizin de ötesini vadediyoruz.
                </p>
              </div>
            </div>
            <div className="collapse" id="tab2" data-parent="#accordion-group">
              <div className="container mb-5">
                <h3 className="text-left font-weight-bold black section-title mb-4 mt-5">
                  FUAR KONGRE TOPLANTI ORGANİZASYONLARI
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
                  Önemli toplantılarınızda tüm enerjinizi toplantıya saklayın,
                  geri kalanı ile biz ilgilenelim! <br />
                  <br />
                  Fuar Kongre ve toplantılarınızda ihtiyaç duyacağınız yardımcı
                  destek personelleri temin ediyoruz.
                  <br />
                  Fuar Kongre ve Toplantı Organizasyon Host ve Hostesleri
                  <br />
                  Fuar Stand Hostesi,
                  <br />
                  Tanıtım Hostesi, <br />
                  Servis Hostesi,
                </p>
              </div>
            </div>
            <div className="collapse" id="tab3" data-parent="#accordion-group">
              <div className="container mb-5">
                <h3 className="text-left font-weight-bold black section-title mb-4 mt-5">
                  TARIM ve ÜRETİM SEKTÖRÜ
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
                  Tarımsal üretim yapılan tarlalarda, seralarda , bu ürünlerin
                  tasnif ve paketleme işlemlerinin yapıldığı tesislerde dönemsel
                  olarak oluşan iş yoğunlukları durumunda kısa sürede temin
                  edilmeye ihtiyaç duyulan farklı vasıflardaki personellerin
                  tedarikini sağlıyoruz. <br />
                  <br />
                  Gerek UBC İnsan Kaynakları personel havuzundan ve gerekse
                  işbirliği içinde olduğumuz profesyonel personel havuzlarından
                  hızlı ve istenilen nitelikte personel temin edip
                  işverenlerimizin çözüm ortağı oluyoruz. <br /> <br />
                  <strong>
                    Hem işveren memnuniyeti hem çalışan memnuniyeti vazgeçilmez
                    temel prensibimizdir.
                  </strong>
                </p>
              </div>
            </div>
            <div className="collapse" id="tab4" data-parent="#accordion-group">
              <div className="container mb-5">
                <h3 className="text-left font-weight-bold black section-title mb-4 mt-5">
                  KARGO & LOJİSTİK SEKTÖRÜ
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
                  Kargo ve Lojistik sektöründe dönemsel olarak artan iş
                  yoğunluğu durumunda ihtiyaç duyulan farklı vasıflardaki
                  dönemsel acil personel ihtiyaçları temin edilmektedir. <br />
                  <br />
                  Taşıma, paketleme , etiketleme, yükleme, boşaltma ve benzeri
                  iş kalemleri dikkate alınarak oluşturulan dinamik personel
                  havuzumuzdan istenilen sürede istenilen vasıflarda personeller
                  temin edilip firmalarımızın ihtiyaçları doğrultusunda sorunsuz
                  profesyonel çözümler sunuyoruz. <br /> <br />
                  Gerek UBC İnsan Kaynakları personel havuzundan ve gerekse
                  işbirliği içinde olduğumuz profesyonel personel havuzlarından
                  hızlı ve istenilen nitelikte personel temin edip
                  işverenlerimizin çözüm ortağı oluyoruz. <br /> <br />
                  <strong>
                    Hem işveren memnuniyeti hem çalışan memnuniyeti vazgeçilmez
                    temel prensibimizdir.
                  </strong>
                </p>
              </div>
            </div>
            <div className="collapse" id="tab5" data-parent="#accordion-group">
              <div className="container mb-5">
                <h3 className="text-left font-weight-bold black section-title mb-4 mt-5">
                  BORDRO HİZMETLERİ
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
                  Tüm bordro ve özlük süreçlerinizi sizler adına takip ediyoruz.{" "}
                  <br />
                  <br />
                  Bordrolama konusunda işletmenizin ihtiyaçlarına en uygun
                  çözümün tespitini yaptıktan sonra firmanıza yararlı olacak en
                  uygun sistemin kurulmasını sağlıyoruz. Firmanızda çalışan
                  personellerinizin özlük işlemlerinden tutunda tüm çalışma
                  süresi içindeki gerekli olan yasal işlemlerini gizlilik
                  çerçevesinde profesyonel olarak takip ediyoruz. Bordrolama
                  hizmeti veren firmamız işletmenize ait tüm iş yerlerinin aylık
                  SGK bildirgelerini düzenliyor, ayrıca tüm sorumluluğu
                  üzerimize alarak sizleri mevcut risklerden uzaklaştırıyoruz.
                  <br />
                  <br />
                  Bordrolama hizmetleri veren firmamız yönetiminizin ihtiyaç
                  duyduğu tüm raporları en doğru şekilde, sorunsuz ve zamanında
                  hazırlayarak firmanızın bu tür işlemlerde ekstra bir süreç
                  yaşamasını ortadan kaldırılmasına yardımcı oluyoruz. <br />
                  <br />
                  İşletmelerin ana faaliyetlerine odaklanmalarını sağlayarak;
                  uzmanlık gerektiren işleri, insan kaynağı ile birlikte
                  konusunda deneyimli danışman firmalardaki ekipler ile hizmet
                  üretilmesine imkan sağlayan bir yönetim stratejisidir.
                  <br />
                  <br />
                  Hizmet İçeriğimiz,
                  <ul>
                    <br />
                    <li>
                      Tam zamanlı ve/veya Dönemsel seçme yerleştirme hizmeti ile
                      personel temini,
                    </li>
                    <li>
                      Personellerin aylık düzenli olarak puantaj verilerine göre
                      ücret bordrolarının oluşturulması,
                    </li>
                    <li>
                      İş avansları, uzun vadeli borçlar, icra kesintisi vb.
                      personel borçlarının takip edilmesi ve kesilmesi,
                    </li>
                    <li>Yıllık izinlerin takip edilmesi,</li>
                    <li>Otomatik BES İşlemlerinin gerçekleştirilmesi,</li>
                    <li>
                      Aylık ücret bordrolarının personellere ulaştırılması
                    </li>
                    <li>Masraf merkezli maliyet tablolarının hazırlanması</li>
                    <li>Maaş ödemelerinin gerçekleştirilmesi</li>
                    <li>
                      İşten çıkış işlemlerinin hesaplamaları ile birlikte
                      yapılması, gerekli belgelerin hazırlanması
                    </li>
                    <li>
                      Çalışana ait aylık tüm puantaj işlemlerinin
                      gerçekleştirilmesi
                    </li>
                    <li>Otomatik BES İşlemlerinin gerçekleştirilmesi,</li>
                    <li>
                      Genel ücret maliyet tablolarının hazırlanması, (çarşaf
                      bordro)
                    </li>
                    <li>Bordro icmallerinin hazırlanması ve raporlanması</li>
                    <li>Klasik Muhasebe Fişinin hazırlanması </li>
                    <li>
                      Resmi kurumlara verilecek belgelerin yasal süresinde
                      online olarak bildirilmesi,
                    </li>
                    <li>
                      İşten çıkışı olacak personellerin iş kanununa göre
                      hesaplamalarının yapılması, gerekli belgelerin temini
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="collapse" id="tab6" data-parent="#accordion-group">
              <div className="container mb-5">
                <h3 className="text-left font-weight-bold black section-title mb-4 mt-5">
                  YABANCI PERSONEL TEMİNİ
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
                  Turizm sektörünün dönemsel yabancı kalifiye personel
                  ihtiyaçları için aşağıdaki ülkelerden ihtiyaçlara göre mülakat
                  usulü ile personel temini yapılmaktadır.
                  <br />
                  <br />
                  Firmalarımızın taleplerine, konseptlerine ve müşteri
                  profillerine göre ihtiyaç duyulan hizmet türleri için en uygun
                  yabancı personelin temini konusunda, uzman kadromuzla hizmet
                  vermekteyiz <br />
                  <br />
                  <strong>Personel temini sağladığımız ülkeler;</strong>
                  <ul className="homepage-list">
                    <br />
                    <li> Ukrayna </li>
                    <li> Moldova</li>
                    <li> Özbekistan </li>
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
