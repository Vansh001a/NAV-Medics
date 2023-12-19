import React from 'react'
import Head from 'next/head'

import AppComponent from '../components/component'
import FeatureCard from '../components/feature-card'
import Question1 from '../components/question1'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Spotless Hungry Crocodile</title>
        </Head>
        <header
          data-thq="thq-navbar"
          className="navbarContainer home-navbar-interactive"
        >
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <div className="home-container01">
              <nav className="home-links">
                <img
                  src="https://img.photouploads.com/file/PhotoUploads-com/SSmR.png"
                  alt="image"
                  className="home-image"
                />
              </nav>
            </div>
            <div
              data-thq="thq-dropdown"
              className="home-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle"
              >
                <span className="home-text">Menu Item</span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="home-dropdown-arrow"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul data-thq="thq-dropdown-list" className="home-dropdown-list">
                <li data-thq="thq-dropdown" className="home-dropdown list-item">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle01"
                  >
                    <span className="home-text01">Sub-menu Item</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown01 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle02"
                  >
                    <span className="home-text02">Sub-menu Item</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown02 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle03"
                  >
                    <span className="home-text03">Sub-menu Item</span>
                  </div>
                </li>
              </ul>
            </div>
            <div
              data-thq="thq-dropdown"
              className="home-thq-dropdown1 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle04"
              >
                <span className="home-text04">Menu Item</span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="home-dropdown-arrow1"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul data-thq="thq-dropdown-list" className="home-dropdown-list1">
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown03 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle05"
                  >
                    <span className="home-text05">Sub-menu Item</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown04 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle06"
                  >
                    <span className="home-text06">Sub-menu Item</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown05 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle07"
                  >
                    <span className="home-text07">Sub-menu Item</span>
                  </div>
                </li>
              </ul>
            </div>
            <div
              data-thq="thq-dropdown"
              className="home-thq-dropdown2 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle08"
              >
                <span className="home-text08">Menu Item</span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="home-dropdown-arrow2"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul data-thq="thq-dropdown-list" className="home-dropdown-list2">
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown06 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle09"
                  >
                    <span className="home-text09">Sub-menu Item</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown07 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle10"
                  >
                    <span className="home-text10">Sub-menu Item</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown08 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle11"
                  >
                    <span className="home-text11">Sub-menu Item</span>
                  </div>
                </li>
              </ul>
            </div>
            <div
              data-thq="thq-dropdown"
              className="home-thq-dropdown3 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle12"
              >
                <span className="home-text12">Menu Item</span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="home-dropdown-arrow3"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul data-thq="thq-dropdown-list" className="home-dropdown-list3">
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown09 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle13"
                  >
                    <span className="home-text13">Sub-menu Item</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown10 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle14"
                  >
                    <span className="home-text14">Sub-menu Item</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown11 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle15"
                  >
                    <span className="home-text15">Sub-menu Item</span>
                  </div>
                </li>
              </ul>
            </div>
            <div
              data-thq="thq-dropdown"
              className="home-thq-dropdown4 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle16"
              >
                <span className="home-text16">Menu Item</span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="home-dropdown-arrow4"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul data-thq="thq-dropdown-list" className="home-dropdown-list4">
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown12 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle17"
                  >
                    <span className="home-text17">Sub-menu Item</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown13 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle18"
                  >
                    <span className="home-text18">Sub-menu Item</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown14 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle19"
                  >
                    <span className="home-text19">Sub-menu Item</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="home-buttons">
              <button className="home-login buttonFlat">Login</button>
              <button className="buttonFilled">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <span className="logo">NAV MEDICS</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <span>Treatment</span>
                <span className="home-nav2 bodySmall">Quick Enquiry</span>
                <span className="home-nav3 bodySmall">Hospital</span>
                <span className="home-nav4 bodySmall">Clinics</span>
                <span className="home-nav5 bodySmall">Services</span>
              </nav>
              <div className="home-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon16">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon18">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="heroContainer home-hero">
          <div className="home-container02">
            <AppComponent
              rootClassName="app-component-root-class-name"
              textinput_placeholder="Search"
            ></AppComponent>
            <button name="search" type="button" className="button">
              Button
            </button>
          </div>
          <div className="home-container03"></div>
        </div>
        <div className="heroContainer home-hero1">
          <div className="home-container04">
            <h1 className="home-hero-heading heading1">
              Revitalize Your Health
            </h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>
                    NAV medics - Delhi NCR&apos;s Leading Health Experts
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <div className="home-btn-group">
              <button className="buttonFilled">View Specialization</button>
              <button className="buttonFlat">Learn More →</button>
            </div>
          </div>
        </div>
        <div className="home-features">
          <div className="featuresContainer">
            <div className="home-features1">
              <div className="home-container05">
                <span className="overline">
                  <span>features</span>
                  <br></br>
                </span>
                <h2 className="home-features-heading heading2">
                  Revitalize Your Health
                </h2>
                <span className="home-features-sub-heading bodyLarge">
                  <span>
                    <span>
                      <span>
                        Discover the path to a healthier you with NAV medics
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </span>
                  <span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div className="home-container06">
                <FeatureCard
                  Heading="Expert Medical Professionals"
                  SubHeading="Access to Delhi NCR's leading health experts"
                ></FeatureCard>
                <FeatureCard
                  Heading="Comprehensive Treatment Options"
                  SubHeading="Wide range of treatment options available"
                ></FeatureCard>
                <FeatureCard
                  Heading="Quick Enquiry "
                  SubHeading="Easily enquire your problems and get fast solution"
                ></FeatureCard>
                <FeatureCard
                  Heading="Find Clinics Near You"
                  SubHeading="Locate clinics in your vicinity"
                ></FeatureCard>
                <FeatureCard
                  Heading="Appointment Booking"
                  SubHeading="Book an appointment prior your visit to the clinic or  hospital"
                ></FeatureCard>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="bannerContainer home-banner1">
            <h1 className="home-banner-heading heading2">
              Discover the path to a healthier you
            </h1>
            <span className="home-banner-sub-heading bodySmall">
              <span>
                <span>
                  <span>
                    With NAV medics, you can access a wide range of healthcare
                    services and find the right specialists to meet your needs.
                    Our team of experienced doctors and medical professionals
                    are dedicated to providing high-quality care and improving
                    the well-being of our patients.
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <button className="buttonFilled">Read more</button>
          </div>
        </div>
        <div className="home-faq">
          <div className="home-faq-container faqContainer">
            <div className="home-faq1">
              <div className="home-container07">
                <h2 className="home-text65 heading2">Common questions</h2>
                <span className="home-text66 bodyLarge">
                  <span>
                    Here are some of the most common questions that we get.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-container08">
                <Question1
                  Answer="NAV medics is a leading health website that provides information and resources on various health topics, connects users with doctors and hospitals, and offers a range of health services."
                  Question="What is NAV medics?"
                ></Question1>
                <Question1
                  Answer="You can use our search box to find doctors specializing in various fields. Simply enter the desired specialty in the search box and click the search button to get a list of doctors matching your criteria."
                  Question="How can I find a doctor specializing in a specific field?"
                ></Question1>
                <Question1
                  Answer="Our website allows you to search for hospitals based on your location. Just enter your location in the search box and click the search button to find hospitals near you."
                  Question="How can I search for hospitals in my area?"
                ></Question1>
                <Question1
                  Answer="Yes, NAV medics provides a convenient appointment booking system. Once you find a doctor you want to consult, you can easily book an appointment through our website."
                  Question="Can I book appointments with doctors through NAV medics?"
                ></Question1>
                <Question1
                  Answer="If you have valuable health-related content that you would like to share, you can submit your blogs and articles through our website. Simply navigate to the 'Blogs and Articles' section and follow the instructions to submit your content."
                  Question="How can I contribute to the blogs and articles section?"
                ></Question1>
              </div>
            </div>
          </div>
        </div>
        <div className="heroContainer home-hero2">
          <div
            data-thq="slider"
            data-navigation="true"
            data-pagination="true"
            className="home-slider swiper"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="home-slider-slide swiper-slide"
              ></div>
              <div
                data-thq="slider-slide"
                className="home-slider-slide1 swiper-slide"
              ></div>
              <div
                data-thq="slider-slide"
                className="home-slider-slide2 swiper-slide"
              ></div>
            </div>
            <div
              data-thq="slider-pagination"
              className="home-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
            >
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
            </div>
            <div
              data-thq="slider-button-prev"
              className="swiper-button-prev"
            ></div>
            <div
              data-thq="slider-button-next"
              className="swiper-button-next"
            ></div>
          </div>
        </div>
        <div className="home-footer">
          <footer className="footerContainer home-footer1">
            <div className="home-container09">
              <nav className="home-nav1 bodySmall home-nav1">
                <span className="home-nav11 bodySmall">Treatment</span>
                <span className="home-nav21 bodySmall">Quick Enquiry</span>
                <div className="home-container10">
                  <span className="home-nav31 bodySmall">Hospital</span>
                </div>
                <div className="home-container11">
                  <span className="home-nav41 bodySmall">Clinics</span>
                </div>
                <div className="home-container12">
                  <span className="home-nav51 bodySmall">Services</span>
                </div>
              </nav>
            </div>
            <img
              src="https://img.photouploads.com/file/PhotoUploads-com/SSmR.png"
              alt="image"
              className="home-image1"
            />
            <div className="home-separator"></div>
            <div className="home-container13">
              <span className="bodySmall home-text69">
                © 2023 myCompany, All Rights Reserved.
              </span>
              <div className="home-icon-group1">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon20"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon22"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon24"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .home-container01 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image {
            width: 200px;
            object-fit: cover;
          }
          .home-thq-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-text {
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-right: 4px;
            vertical-align: middle;
          }
          .home-dropdown-arrow {
            transition: 0.3s;
          }
          .home-icon {
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .home-dropdown-list {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .home-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle01 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-dropdown-toggle01:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .home-text01 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .home-dropdown01 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle02 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-dropdown-toggle02:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .home-text02 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .home-dropdown02 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle03 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-dropdown-toggle03:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .home-text03 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .home-thq-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle04 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-text04 {
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-right: 4px;
            vertical-align: middle;
          }
          .home-dropdown-arrow1 {
            transition: 0.3s;
          }
          .home-icon02 {
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .home-dropdown-list1 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .home-dropdown03 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle05 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-dropdown-toggle05:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .home-text05 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .home-dropdown04 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle06 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-dropdown-toggle06:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .home-text06 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .home-dropdown05 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle07 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-dropdown-toggle07:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .home-text07 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .home-thq-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle08 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-text08 {
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-right: 4px;
            vertical-align: middle;
          }
          .home-dropdown-arrow2 {
            transition: 0.3s;
          }
          .home-icon04 {
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .home-dropdown-list2 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .home-dropdown06 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle09 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-dropdown-toggle09:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .home-text09 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .home-dropdown07 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle10 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-dropdown-toggle10:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .home-text10 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .home-dropdown08 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle11 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-dropdown-toggle11:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .home-text11 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .home-thq-dropdown3 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle12 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-text12 {
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-right: 4px;
            vertical-align: middle;
          }
          .home-dropdown-arrow3 {
            transition: 0.3s;
          }
          .home-icon06 {
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .home-dropdown-list3 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .home-dropdown09 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle13 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-dropdown-toggle13:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .home-text13 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .home-dropdown10 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle14 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-dropdown-toggle14:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .home-text14 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .home-dropdown11 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle15 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-dropdown-toggle15:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .home-text15 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .home-thq-dropdown4 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle16 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-text16 {
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-right: 4px;
            vertical-align: middle;
          }
          .home-dropdown-arrow4 {
            transition: 0.3s;
          }
          .home-icon08 {
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .home-dropdown-list4 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .home-dropdown12 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle17 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-dropdown-toggle17:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .home-text17 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .home-dropdown13 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle18 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-dropdown-toggle18:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .home-text18 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .home-dropdown14 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle19 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-dropdown-toggle19:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .home-text19 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .home-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-login {
            margin-right: 32px;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon10 {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon12 {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .home-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-nav1 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav2 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav3 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav4 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav5 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-buttons1 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon18 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-container02 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-container03 {
            gap: var(--dl-space-space-oneandhalfunits);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container04 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-hero-heading {
            max-width: 800px;
            text-align: center;
          }
          .home-hero-sub-heading {
            font-size: 18px;
            text-align: center;
          }
          .home-btn-group {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-features {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-features1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: flex-start;
          }
          .home-container05 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-features-heading {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-features-sub-heading {
            font-size: 18px;
            text-align: center;
          }
          .home-container06 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-oneandhalfunits);
            grid-template-columns: 1fr 1fr;
          }
          .home-banner {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-banner-heading {
            text-align: center;
          }
          .home-banner-sub-heading {
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-faq {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-faq-container {
            align-items: center;
            justify-content: center;
          }
          .home-faq1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-container07 {
            display: flex;
            max-width: 35%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text65 {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text66 {
            text-align: left;
          }
          .home-container08 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-slider {
            width: 500px;
            height: 300px;
            display: inline-block;
          }
          .home-slider-slide {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1698778574083-279be0ac6681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzU2N3w&ixlib=rb-4.0.3&q=80&w=1080');
          }
          .home-slider-slide1 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1697384333613-de519c7367c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzAzN3w&ixlib=rb-4.0.3&q=80&w=1500');
          }
          .home-slider-slide2 {
            display: flex;
            background-size: 100%;
            background-image: url('https://images.unsplash.com/photo-1698180687511-bd6c0104ee98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTk3NzQ5NXw&ixlib=rb-4.0.3&q=80&w=1080');
          }
          .home-slider-pagination {
            display: block;
          }
          .home-footer {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container09 {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-nav1 {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: center;
            flex-direction: row;
          }
          .home-nav11 {
            margin-left: 0px;
          }
          .home-nav21 {
            margin-left: var(--dl-space-space-unit);
          }
          .home-container10 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .home-nav31 {
            margin-left: var(--dl-space-space-unit);
          }
          .home-container11 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .home-nav41 {
            margin-left: var(--dl-space-space-unit);
          }
          .home-container12 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .home-nav51 {
            margin-left: var(--dl-space-space-unit);
          }
          .home-image1 {
            width: 200px;
            object-fit: cover;
          }
          .home-separator {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-gray-900);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-container13 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon20 {
            fill: var(--dl-color-gray-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon22 {
            fill: var(--dl-color-gray-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon24 {
            fill: var(--dl-color-gray-500);
            width: 24px;
            height: 24px;
          }
          @media (max-width: 1200px) {
            .home-navbar-interactive {
              height: 104px;
            }
            .home-hero {
              height: 139px;
              align-items: flex-start;
              flex-direction: column;
            }
            .home-faq {
              background-color: var(--dl-color-custom-accent2);
            }
            .home-faq-container {
              background-color: var(--dl-color-custom-accent2);
            }
            .home-faq1 {
              background-color: var(--dl-color-custom-accent2);
            }
            .home-hero2 {
              background-color: var(--dl-color-custom-neutral-dark);
            }
            .home-slider {
              background-color: var(--dl-color-custom-neutral-light);
            }
          }
          @media (max-width: 991px) {
            .home-hero {
              flex-direction: column;
            }
            .home-container03 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-hero1 {
              flex-direction: column;
            }
            .home-container04 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-hero-heading {
              text-align: center;
            }
            .home-hero-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-features-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-banner-sub-heading {
              max-width: 100%;
            }
            .home-text66 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-hero2 {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-nav1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav5 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-features-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container06 {
              grid-template-columns: 1fr;
            }
            .home-banner1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-banner-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-faq1 {
              flex-direction: column;
            }
            .home-container07 {
              max-width: 100%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-text66 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-hero2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-footer1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container13 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text69 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container03 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container04 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-features1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-banner1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-hero2 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container13 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text69 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
