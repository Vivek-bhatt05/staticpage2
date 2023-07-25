
const About = () => {
  return (
      <div>
  <header id="header" className="fixed-top d-flex align-items-center ">
    <div className="container d-flex justify-content-between align-items-center">
      <div className="logo">
        <h1 className="text-light"><a href="/"><span>Moderna</span></a></h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="/"><img src="/img/logo.png" alt="" class="img-fluid" /></a> */}
      </div>
      <nav id="navbar" className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/team">Team</a></li>
          <li><a href="/blog">Blog</a></li>
          <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>{/* .navbar */}
    </div>
  </header>{/* End Header */}
  <main id="main">
    {/* ======= About Us Section ======= */}
    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>About Us</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li>About Us</li>
          </ol>
        </div>
      </div>
    </section>{/* End About Us Section */}
    {/* ======= About Section ======= */}
    <section className="about" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src="/img/about.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bi bi-check2-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bi bi-check2-circle" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="bi bi-check2-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
      </div>
    </section>{/* End About Section */}
    {/* ======= Facts Section ======= */}
    <section className="facts section-bg" data-aos="fade-up">
      <div className="container">
        <div className="row counters">
          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
            <p>Clients</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={1} className="purecounter" />
            <p>Projects</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start={0} data-purecounter-end={1463} data-purecounter-duration={1} className="purecounter" />
            <p>Hours Of Support</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={1} className="purecounter" />
            <p>Hard Workers</p>
          </div>
        </div>
      </div>
    </section>{/* End Facts Section */}
    {/* ======= Our Skills Section ======= */}
    <section className="skills" data-aos="fade-up">
      <div className="container">
        <div className="section-title">
          <h2>Our Skills</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="skills-content">
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
              <span className="skill">HTML <i className="val">100%</i></span>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar bg-info" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
              <span className="skill">CSS <i className="val">90%</i></span>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
              <span className="skill">JavaScript <i className="val">75%</i></span>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}>
              <span className="skill">Photoshop <i className="val">55%</i></span>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Our Skills Section */}
    {/* ======= Tetstimonials Section ======= */}
    <section className="testimonials" data-aos="fade-up">
      <div className="container">
        <div className="section-title">
          <h2>Tetstimonials</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="testimonials-carousel swiper">
          <div className="swiper-wrapper">
            <div className="testimonial-item swiper-slide">
              <img src="/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
            </div>
            <div className="testimonial-item swiper-slide">
              <img src="/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
            </div>
            <div className="testimonial-item swiper-slide">
              <img src="/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
            </div>
            <div className="testimonial-item swiper-slide">
              <img src="/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
            </div>
            <div className="testimonial-item swiper-slide">
              <img src="/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                <i className="bx bxs-quote-alt-right quote-icon-right" />
              </p>
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>{/* End Ttstimonials Section */}
  </main>{/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500}>
    <div className="footer-newsletter">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          </div>
          <div className="col-lg-6">
            <form action method="post">
              <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right" /> <a href="#">Web Design</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Web Development</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Product Management</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Marketing</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Graphic Design</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
              A108 Adam Street <br />
              New York, NY 535022<br />
              United States <br /><br />
              <strong>Phone:</strong> +1 5589 55488 55<br />
              <strong>Email:</strong> info@example.com<br />
            </p>
          </div>
          <div className="col-lg-3 col-md-6 footer-info">
            <h3>About Moderna</h3>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
            <div className="social-links mt-3">
              <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        © Copyright <strong><span>Moderna</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
</div>
  )
}

export default About
