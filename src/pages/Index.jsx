import Navbar from "../component/Navbar";
import "../assets/css/Index.css";
// img
// import shape from '../assets/img/sty-1.png'
import home_bg from '../assets/img/home-bg.png'
import about_bg from "../assets/img/about-bg.avif";

import s1 from "../assets/img/s1.png";
import s2 from "../assets/img/s2.png";
import s3 from "../assets/img/s3.png";
import s4 from "../assets/img/s4.png";

import sp1 from "../assets/img/sp1.png";
import sp2 from "../assets/img/sp2.png";
import sp3 from "../assets/img/sp3.png";
import sp4 from "../assets/img/sp4.jpg";
import sp5 from "../assets/img/sp5.png";
import sp6 from "../assets/img/sp6.png";
import sp7 from "../assets/img/sp7.jpg";
import sp8 from "../assets/img/sp8.png";
import sp9 from "../assets/img/sp9.png";
import sp10 from "../assets/img/sp10.png";
import sp11 from "../assets/img/sp11.jpg";
import sp12 from "../assets/img/sp12.png";
import sp13 from "../assets/img/sp13.jpg";
import sp14 from "../assets/img/sp14.jpg";
import sp15 from "../assets/img/sp15.png";
import Footer from "../component/Footer";

function Index() {
  return (
    <div>
      <Navbar />

      {/* hero-section */}
      <div className="container-fulid">
        <div className="row mb-5" id="hero-section">
        {/* <div class="rotate-img">
                    <img src={shape} class="img-fluid w-100" alt/>
                    <div class="rotate-sty-2"></div>
                </div> */}
          <div className="col-lg-12 d-flex flex-wrap flex-sm-wrap flex-md-wrap justify-content-between">
            <div className="col-lg-6 align-self-center ps-4 hero-content ps-5">
              <h1>Simplify Your <br /> Financial Life</h1>
              <p className="mt-3 mb-4 w-75">
                Simplify payments with an all-in-one app for bill payments,
                travel booking, utilities, and credit card management. Seamless,
                convenient, and efficient.
              </p>
              <a href="#contact" className="btn mb-5">
                Get In Touch
              </a>
            </div>
            <div className="col-lg-6">
              <img
                src={home_bg}
                alt=""
                width={''}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      {/* hero-section */}

      <div className="container">
        {/* about-section */}
        <div className="row mb-5" id="about">
          <div
            className="col-lg-12 d-flex flex-wrap flex-sm-wrap flex-md-wrap justify-content-between"
            id="about-section"
          >
            <div className="col-lg-5">
              <img src={about_bg} alt="" className="img-fluid" />
            </div>
            {/* heading  */}
            <div className="col-lg-6 align-self-center heading">
              <h6>ABOUTUS</h6>
              <h1>
                Get Started Easily With <br /> a Personalized Product Tour
              </h1>
              <div className="line"></div>
              <p>
                At Gujarat PE, we’re dedicated to simplifying your financial
                life. Our all-in-one payment solution allows you to effortlessly
                manage bill payments, book travel, handle utilities, and take
                control of your credit card payments—all from a single app. We
                believe in providing a seamless, convenient, and efficient
                experience, so you can focus on what matters most. Transform the
                way you manage payments with ease and simplicity.
              </p>
            </div>
            {/* heading  */}
          </div>
        </div>
        {/* about-section  */}

        {/* service-section */}
        <div className="row mb-5" id="services">
          <div className="col-lg-12 heading text-center mt-5">
            {/* heading  */}
            <h6>OUR SERVICES</h6>
            <h1>What We Can Do For You</h1>
            <div className="line m-auto mb-3"></div>
            <p className="w-75 m-auto">
              We offer a comprehensive range of services to simplify your
              financial transactions, including DTH and mobile recharge, BBPS
              for utility payments, seamless travel booking, and the ability to
              open new bank and Demat accounts. Our goal is to provide you with
              convenience and efficiency for all your payment needs, making
              financial management effortless.
            </p>
            {/* heading  */}
          </div>
          <div
            className="col-lg-12 mt-5 d-flex flex-wrap justify-content-between flex-md-wrap flex-sm-wrap "
            id="service-section"
          >
            {/* 1 */}
            <div className="card text-center" style={{ width: "16rem" }}>
              <img src={s1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">DTH</h5>
                <p className="card-text">
                  Effortlessly recharge your DTH services anytime with quick and
                  secure transactions.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="card text-center" style={{ width: "16rem" }}>
              <img src={s2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">BBPS</h5>
                <p className="card-text">
                  Pay bills for utilities like electricity, water, and more
                  through Bharat Bill Payment System (BBPS).
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="card text-center" style={{ width: "16rem" }}>
              <img src={s3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Travel Booking</h5>
                <p className="card-text">
                  Enjoy competitive rates and exclusive deals while managing all
                  your travel needs in one convenient app.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div className="card text-center" style={{ width: "16rem" }}>
              <img src={s4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">New Bank & Demat Account Opening</h5>
                <p className="card-text">
                  Open new bank or Demat accounts quickly and hassle-free.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* service-section */}

        {/* service-provider  */}
        <div className="row mb-5" id="service_provider">
          <div className="col-lg-12 heading text-center mt-5">
            {/* heading  */}
            <h6>OUR SERVICES PROVIDER</h6>
            <h1>Top-Up Anytime, Anywhere with Ease</h1>
            <div className="line m-auto mb-3"></div>
            <p className="w-75 m-auto">
              Provide mobile top-up services and DTH TV recharge for your
              customers in minutes. Ensure fast, reliable, and secure
              transactions every time. With just a few clicks, keep your
              customers connected and entertained without interruption.
            </p>
            {/* heading  */}
          </div>
          <div class="slider mt-5">
            <div class="bd-best" data-aos="fade-up">
              <div class="bd-best-list">
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp1} alt="" />
                </figure>
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp2} alt="" />
                </figure>
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp3} alt="" />
                </figure>
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp4} alt="" />
                </figure>
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp5} alt="" />
                </figure>
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp6} alt="" />
                </figure>
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp7} alt="" />
                </figure>
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp8} alt="" />
                </figure>
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp9} alt="" />
                </figure>
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp10} alt="" />
                </figure>
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp11} alt="" />
                </figure>
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp12} alt="" />
                </figure>
                {/* <figure class="bd-best-item">
                    <img class="kl_img" src={sp13} alt=""/>
                  </figure> */}
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp14} alt="" />
                </figure>
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp15} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        {/* service-provider  */}

        {/* contact us  */}
        <div className="row mb-5" id="contact">
          <div className="col-lg-12 mt-5 d-flex flex-wrap justify-content-between flex-md-wrap flex-sm-wrap">
            <div className="col-lg-5 map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.688622461758!2d70.75903577434431!3d22.28978199327841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbd300fdec63%3A0xe6a6bcad69f5fe7!2sDecora%20Square!5e0!3m2!1sen!2sin!4v1728358011379!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="col-lg-6 heading">
              {/* heading  */}
              <h6>GET IN TOUCH</h6>
              <h1>Let’s Talk, We’re Here to Answer Your Questions</h1>
              <div className="line"></div>
              {/* heading  */}

              <div className="border d-flex" id="info">
                <i class="bi bi-envelope-at-fill"></i>
                <div className="ms-4">
                  <span>Email</span>
                  <p>Gujaratpe999@gmail.com</p>
                </div>
              </div>

              <div className="border d-flex" id="info">
                <i class="bi bi-telephone-fill"></i>
                <div className="ms-4">
                  <span>Contact No.</span>
                  <p>9924049992</p>
                </div>
              </div>

              <div className="border d-flex" id="info">
                <i class="bi bi-geo-alt-fill"></i>
                <div className="ms-4">
                  <span>Address</span>
                  <p>
                    Office No. 401 Decora Square Sadhuvasvani Road Rajkot
                    360005. INDIA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact us  */}
      </div>
      <Footer />
    </div>
  );
}

export default Index;
