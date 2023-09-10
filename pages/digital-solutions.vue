<template>
  <div>
    <!-- Start main-content -->
    <section
      class="page-title"
      style="
        background-image: url(https://yaseo.co.uk/images/background/page-title.jpg);
      "
    >
      <div class="auto-container">
        <div class="title-outer">
          <h1 class="title">About Us</h1>
          <ul class="page-breadcrumb">
            <li><a href="https://yaseo.co.uk">Home</a></li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- end main-content -->

    <!-- About Section -->
    <section class="about-section">
      <div class="auto-container">
        <div class="row">
          <div
            class="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight animated"
            data-wow-delay="600ms"
            style="
              visibility: visible;
              animation-delay: 600ms;
              animation-name: fadeInRight;
            "
          >
            <div class="inner-column">
              <div class="sec-title">
                <span class="sub-title">Get to Know</span>
                <h2>
                  Commited To Your Business Committed To Our Future Your Digital
                  Transformation
                </h2>
                <div class="text">
                  At Yaseo, we deliver digital solutions and transformations
                  that are tailored to your business and your vision. Working
                  together to develop solutions that will take you where you
                  want to go.
                </div>
              </div>

              <ul class="list-style-two">
                <li>
                  <i class="fa fa-check-circle"></i> Empowering your online
                  success
                </li>
                <li>
                  <i class="fa fa-check-circle"></i> Result-driven digital
                  marketing
                </li>
                <li>
                  <i class="fa fa-check-circle"></i> Take your business to new
                  heights
                </li>
              </ul>

              <div class="btn-box">
                <a href="tel:08009991217" class="info-btn">
                  <i class="icon fa fa-phone"></i>
                  <small>Call Anytime</small> 0800 999 1217
                </a>
              </div>
            </div>
          </div>

          <!-- Image Column -->
          <div class="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
            <div
              class="inner-column wow fadeInLeft animated"
              style="visibility: visible; animation-name: fadeInLeft"
            >
              <figure
                class="image-1 overlay-anim wow fadeInUp animated"
                style="visibility: visible; animation-name: fadeInUp"
              >
                <img
                  src="/images/resource/about-1.jpg"
                  alt=""
                />
              </figure>
              <figure
                class="image-2 overlay-anim wow fadeInRight animated"
                style="visibility: visible; animation-name: fadeInRight"
              >
                <img
                  src="/images/resource/about-2.jpg"
                  alt=""
                />
              </figure>
              <div class="experience bounce-y">
                <div class="inner">
                  <i class="icon flaticon-discuss"></i>
                  <div class="text">
                    <strong>10+</strong> Years of <br />experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Emd About Section -->

    <AboutServices/>

    <!-- Features Section -->
    <section class="features-section">
      <div class="bg bg-pattern-1"></div>
      <div class="auto-container">
        <div class="row">
          <!-- Content Column -->
          <div class="content-column col-xl-5 col-lg-6 col-md-12">
            <div
              class="inner-column wow fadeInRight"
              style="visibility: hidden; animation-name: none"
            >
              <div class="sec-title">
                <span class="sub-title">Welcome to Yaseo</span>
                <h2>Our Values</h2>
                <p class="mt-2">
                  We believe in the different digital marketing can make, our
                  co-founders have been at the cutting edge of that for decades,
                  doing excellent work for a number of successful multi-national
                  businesses.
                </p>
              </div>

              <div class="feature-block">
                <div class="inner-box">
                  <div class="content">
                    <span class="icon"><i class="fa fa-check"></i></span>
                    <h5 class="title">Our Mission</h5>
                    <div class="text">
                      We want your business to flourish. This means using
                      digital skills and innovation to help your business grow
                      on your terms.
                    </div>
                  </div>
                </div>
              </div>

              <div class="feature-block">
                <div class="inner-box">
                  <div class="content">
                    <span class="icon"><i class="fa fa-check"></i></span>
                    <h5 class="title">Innovation</h5>
                    <div class="text">
                      We believe in the potential of innovation to propel us
                      forward and keep us at the forefront of our industry.
                    </div>
                  </div>
                </div>
              </div>

              <div class="feature-block">
                <div class="inner-box">
                  <div class="content">
                    <span class="icon"><i class="fa fa-check"></i></span>
                    <h5 class="title">Collaboration</h5>
                    <div class="text">
                      Our success is built on collaboration. We value
                      collaboration and understand that by working together, we
                      can accomplish far more than we could separately.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Content Column -->
          <div class="image-column col-xl-7 col-lg-6 col-md-12 col-sm-12">
            <div
              class="inner-column wow fadeInLeft"
              style="visibility: hidden; animation-name: none"
            >
              <div class="image-box">
                <figure class="image">
                  <img
                    src="https://yaseo.co.uk/images/resource/image-2.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Offer Section -->

    <HomepageProjects/>
    <HomepageClients/>
  </div>
</template>
