import React from 'react'

const Services = () => {
  return (
    <div>
      


      <div>
  <header id="header" className="fixed-top d-flex align-items-center ">
    <div className="container d-flex justify-content-between align-items-center">
      <div className="logo">
        <h1 className="text-light"><a href="/"><span>Moderna</span></a></h1>
        {/* Uncomment below if you prefer to use an image logo */}
        <a href="/"><img src="/img/logo.png" alt="" class="img-fluid" /></a>
      </div>
      <nav id="navbar" className="navbar">
        <ul>
          <li><a className href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a className="active" href="/services">Services</a></li>
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
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>{/* .navbar */}
    </div>
  </header>{/* End Header */}
  <main id="main">
    {/* ======= Our Services Section ======= */}
    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Our Services</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li>Our Services</li>
          </ol>
        </div>
      </div>
    </section>{/* End Our Services Section */}
    {/* ======= Services Section ======= */}
    <section className="services">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up">
            <div className="icon-box icon-box-pink">
              <div className="icon"><i className="bx bxl-dribbble" /></div>
              <h4 className="title"><a href>Lorem Ipsum</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
            <div className="icon-box icon-box-cyan">
              <div className="icon"><i className="bx bx-file" /></div>
              <h4 className="title"><a href>Sed ut perspiciatis</a></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
            <div className="icon-box icon-box-green">
              <div className="icon"><i className="bx bx-tachometer" /></div>
              <h4 className="title"><a href>Magni Dolores</a></h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
            <div className="icon-box icon-box-blue">
              <div className="icon"><i className="bx bx-world" /></div>
              <h4 className="title"><a href>Nemo Enim</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Services Section */}
    {/* ======= Why Us Section ======= */}
    <section className="why-us section-bg" data-aos="fade-up" date-aos-delay={200}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 video-box">
            <img src="/img/why-us.jpg" className="img-fluid" alt="" />
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true" />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-fingerprint" /></div>
              <h4 className="title"><a href>Lorem Ipsum</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
            <div className="icon-box">
              <div className="icon"><i className="bx bx-gift" /></div>
              <h4 className="title"><a href>Nemo Enim</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Why Us Section */}
    {/* ======= Service Details Section ======= */}
    <section className="service-details">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div className="card">
              <div className="card-img">
                <img src="/img/service-details-1.jpg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="#">Our Mission</a></h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Read More</a></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div className="card">
              <div className="card-img">
                <img src="/img/service-details-2.jpg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="#">Our Plan</a></h5>
                <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Read More</a></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div className="card">
              <div className="card-img">
                <img src="/img/service-details-3.jpg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="#">Our Vision</a></h5>
                <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Read More</a></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div className="card">
              <div className="card-img">
                <img src="/img/service-details-4.jpg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="#">Our Care</a></h5>
                <p className="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem. In molestiae earum ab sit esse voluptatem. Eos ipsam cumque ipsum officiis qui nihil aut incidunt aut</p>
                <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Read More</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Service Details Section */}
    {/* ======= Pricing Section ======= */}
    <section className="pricing section-bg" data-aos="fade-up">
      <div className="container">
        <div className="section-title">
          <h2>Pricing</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-4 box">
            <h3>Free</h3>
            <h4>$0<span>per month</span></h4>
            <ul>
              <li><i className="bx bx-check" /> Quam adipiscing vitae proin</li>
              <li><i className="bx bx-check" /> Nec feugiat nisl pretium</li>
              <li><i className="bx bx-check" /> Nulla at volutpat diam uteera</li>
              <li className="na"><i className="bx bx-x" /> <span>Pharetra massa massa ultricies</span></li>
              <li className="na"><i className="bx bx-x" /> <span>Massa ultricies mi quis hendrerit</span></li>
            </ul>
            <a href="#" className="get-started-btn">Get Started</a>
          </div>
          <div className="col-lg-4 box featured">
            <h3>Business</h3>
            <h4>$29<span>per month</span></h4>
            <ul>
              <li><i className="bx bx-check" /> Quam adipiscing vitae proin</li>
              <li><i className="bx bx-check" /> Nec feugiat nisl pretium</li>
              <li><i className="bx bx-check" /> Nulla at volutpat diam uteera</li>
              <li><i className="bx bx-check" /> Pharetra massa massa ultricies</li>
              <li><i className="bx bx-check" /> Massa ultricies mi quis hendrerit</li>
            </ul>
            <a href="#" className="get-started-btn">Get Started</a>
          </div>
          <div className="col-lg-4 box">
            <h3>Developer</h3>
            <h4>$49<span>per month</span></h4>
            <ul>
              <li><i className="bx bx-check" /> Quam adipiscing vitae proin</li>
              <li><i className="bx bx-check" /> Nec feugiat nisl pretium</li>
              <li><i className="bx bx-check" /> Nulla at volutpat diam uteera</li>
              <li><i className="bx bx-check" /> Pharetra massa massa ultricies</li>
              <li><i className="bx bx-check" /> Massa ultricies mi quis hendrerit</li>
            </ul>
            <a href="#" className="get-started-btn">Get Started</a>
          </div>
        </div>
      </div>
    </section>{/* End Pricing Section */}
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
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-bootstrap-template-corporate-moderna/ */}
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
</div>




    </div>
  )
}

export default Services
