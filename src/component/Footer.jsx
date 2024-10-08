import logo from '../assets/logo/Gujarat_pe_Logo.png'
import '../assets/css/Footer.css'


function Footer() {
  return (
    <div>
      
        <div className="container-fluid border" id='footer'>
          <div
            className="row d-flex justify-content-evenly "
            id="footer-bottom"
          >
            <div className="col-lg-3">
              <h4>
              <img src={logo} alt="" width={'100px'}  />
              </h4>
              <p>
              Gujarat PE Credit Card offers secure and innovative credit solutions, empowering you with financial freedom and growth.
              </p>
              <div className="col-lg-12">
                <li className="social">
                  <a
                    href=""
                    target="_blank"
                  >
                    <i class="bi bi-facebook"></i>
                  </a>
                  &nbsp; &nbsp;
                  <a
                    href="https://wa.me/919924049992?"
                    target="_blank"
                  >
                  <i class="bi bi-whatsapp"></i>
                  </a>
                  &nbsp; &nbsp;
                  <a
                    href=""
                    target="_blank"
                  >
                 <i class="bi bi-instagram"></i>
                  </a>
                
                 
                </li>
              </div>
            </div>
            <div className="col-lg-2">
              <h4>Qulick Links</h4>
              <li>
                <a href="#about"  id="Link">
                 AboutUs
                </a>
              </li>
              <li>
                {" "}
                <a href="#services"  id="Link">
                Service
                </a>
              </li>
              <li>
                {" "}
                <a href="#service_provider" id="Link">
                  Service Provider
                </a>
              </li>
              <li>
                {" "}
                <a href="#contact"  id="Link">
                  Contact
                </a>
              </li>
            </div>
            <div className="col-lg-3">
              <h4>Our Location</h4>
              <p>
              <i class="bi bi-geo-alt-fill"></i> &nbsp; Office No. 401 Decora Square Sadhuvasvani Road Rajkot 360005. INDIA </p>
              <li>
              <i class="bi bi-envelope-at-fill"></i> &nbsp; Gujaratpe999@gmail.com
              </li>
              <li>
              <i class="bi bi-telephone-fill"></i> &nbsp; +91 9924049992
              </li>
            </div>
          </div>
        </div>
        
    </div>
  );
}

export default Footer;
