import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FeatureCard from '../components/feature-card'
import Slide from '../components/slide'
import GridCard from '../components/grid-card'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Feedbox Mobile App</title>
        <meta property="og:title" content="Feedbox Mobile App" />
      </Helmet>
      <Navbar></Navbar>
      <main className={styles['Main']}>
        <div className={projectStyles['section-container']}>
          <div
            className={` ${styles['max-width']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['content-container']}>
              <h1
                className={` ${styles['text']} ${projectStyles['heading1']} `}
              >
                <span>
                  Feed all your news sources and mailboxes right into
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text02']}>
                  Feedbox
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </h1>
              <div className={styles['input-container']}>
                <div
                  className={` ${styles['container1']} ${projectStyles['input']} `}
                >
                  <svg
                    viewBox="0 0 804.5714285714286 1024"
                    className={styles['icon']}
                  >
                    <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                  </svg>
                  <input
                    type="text"
                    placeholder="Your phone number..."
                    className={` ${styles['textinput']} ${projectStyles['input']} `}
                  />
                </div>
                <button
                  className={` ${styles['button']} ${projectStyles['button-primary']} ${projectStyles['button']} `}
                >
                  Get started
                </button>
              </div>
              <div className={styles['features-container']}>
                <div className={styles['feature']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon02']}
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text03']}>
                    Easiest way to read news and RSS Feeds.
                  </span>
                </div>
                <div className={styles['feature1']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon04']}
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text04']}>
                    Works with all mail providers, including Google and Yahoo.
                  </span>
                </div>
                <div className={styles['feature2']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon06']}
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text05']}>
                    Over 2000, highly recommended customer reviews.
                  </span>
                </div>
              </div>
            </div>
            <div className={styles['image-container']}>
              <img
                alt="image"
                src="/playground_assets/hero%20image-1200w.png"
                className={styles['image']}
              />
            </div>
          </div>
        </div>
        <div
          className={` ${styles['SectionOne']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width1']} ${projectStyles['max-content-container']} `}
          >
            <h2
              className={` ${styles['text06']} ${projectStyles['heading2']} `}
            >
              <span>
                Read
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className={styles['text08']}>everything in one place</span>
              <span> and</span>
              <br></br>
              <span> keep up with important news</span>
            </h2>
            <div className={styles['cards-container']}>
              <FeatureCard image_src="/playground_assets/stars-200h.png"></FeatureCard>
              <FeatureCard
                text1="See how &gt;"
                heading="Follow favorite topics"
                image_src="/playground_assets/hearth-200h.png"
              ></FeatureCard>
              <FeatureCard
                text1="Learn more &gt;"
                heading="Read your emails"
                image_src="/playground_assets/mail-200h.png"
              ></FeatureCard>
              <FeatureCard
                text1="Learn more &gt;"
                heading="Read newspapers"
                image_src="/playground_assets/paper-200h.png"
              ></FeatureCard>
            </div>
          </div>
        </div>
        <div className={projectStyles['section-container']}>
          <div
            className={` ${styles['max-width2']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['image-container1']}>
              <img
                alt="image"
                src="/playground_assets/section-image1-1200w.png"
                className={styles['image1']}
              />
            </div>
            <div className={styles['content-container1']}>
              <h1
                className={` ${styles['text12']} ${projectStyles['heading2']} `}
              >
                <span>
                  Your favorite articles at your fingertips.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text14']}>Always.</span>
              </h1>
              <span
                className={` ${styles['text15']} ${projectStyles['content-Light']} `}
              >
                <span>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Velit officia consequat duis enim velit mollit.
                </span>
                <br></br>
                <span>Lorem ipsum dolor sit amet.</span>
              </span>
            </div>
          </div>
        </div>
        <div className={projectStyles['section-container']}>
          <div
            className={` ${styles['max-width3']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['content-container2']}>
              <h1
                className={` ${styles['text18']} ${projectStyles['heading2']} `}
              >
                <span>
                  The best content, handpicked for you.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text20']}>In the morning.</span>
              </h1>
              <span
                className={` ${styles['text21']} ${projectStyles['content-Light']} `}
              >
                <span>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Velit officia consequat duis enim velit mollit.
                </span>
                <br></br>
                <span>Lorem ipsum dolor sit amet.</span>
              </span>
            </div>
            <div className={styles['image-container2']}>
              <img
                alt="image"
                src="/playground_assets/section-image2-1200w.png"
                className={styles['image2']}
              />
            </div>
          </div>
        </div>
        <div
          className={` ${styles['SectionFour']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width4']} ${projectStyles['max-content-container']} `}
          >
            <h2
              className={` ${styles['text24']} ${projectStyles['heading2']} `}
            >
              <span>People love Feedbox.</span>
              <br></br>
              <span className={styles['text26']}>So would you.</span>
              <span className={styles['text27']}></span>
            </h2>
          </div>
          <div data-type="slider" className={styles['Slider']}>
            <Slide></Slide>
            <Slide
              Role="DESIGN DIRECTOR"
              Author="Bill Smith"
              image_src="/playground_assets/vector%202-700w.png"
              Testimonial='“Stunning app! I use it everyday since I discovered it and love it every since. It really makes newsreading a pleasure. I enjoy all the customization options available, super highly recommended!"'
              Testimonial2="Super highly recommended!”"
              rootClassName="rootClassName"
            ></Slide>
            <Slide
              Role="FREELANCE WRITER"
              Author="Julia Xang"
              image_src="/playground_assets/vector%202%20%5B2%5D-700w.png"
              Testimonial="“Feedbox is very easy to use and flexible! I especially like the pre-made templates that are accessible; they're extraordinary for monitoring a few feed sources and various RSS Feeds together.”"
              rootClassName="rootClassName1"
            ></Slide>
          </div>
        </div>
        <div className={projectStyles['section-container']}>
          <div
            className={` ${styles['max-width5']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['heading-container']}>
              <h2
                className={` ${styles['text28']} ${projectStyles['heading2']} `}
              >
                <span>If you love simplicity, you’ll</span>
                <br></br>
                <span>
                  simply love
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text31']}>Feedbox.</span>
              </h2>
              <span className={projectStyles['content-Light']}>
                <span>
                  Go to App Store, install Feedbox and start changing your
                  reading habits to
                </span>
                <span className={styles['text34']}></span>
                <span>day!</span>
              </span>
            </div>
            <div className={styles['get-the-app']}>
              <img
                alt="image"
                src="/playground_assets/frame-1200w.png"
                className={styles['image3']}
              />
              <img
                alt="image"
                src="/playground_assets/frame%2034-200h.png"
                className={styles['image4']}
              />
            </div>
            <div className={styles['cards-container1']}>
              <GridCard image_src="/playground_assets/vector%203-200h.png"></GridCard>
              <GridCard
                text="Follow your friends"
                image_src="/playground_assets/vector%203%20%5B1%5D-200h.png"
              ></GridCard>
              <GridCard
                text="Declutter your life inbox"
                image_src="/playground_assets/vector%203%20%5B2%5D-200h.png"
              ></GridCard>
              <GridCard
                text="Less apps, more space"
                image_src="/playground_assets/vector%203%20%5B3%5D-200h.png"
              ></GridCard>
            </div>
          </div>
        </div>
        <div
          className={` ${styles['SectionSix']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width6']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['content-container3']}>
              <h1
                className={` ${styles['text36']} ${projectStyles['heading2']} `}
              >
                <span>Get started today.</span>
                <br></br>
                <span className={styles['text38']}>Try free for 30 days.</span>
              </h1>
              <span
                className={` ${styles['text39']} ${projectStyles['content-Light']} `}
              >
                Go to App Store, install Feedbox and start changing your reading
                habbits today!
              </span>
              <div className={styles['input-container1']}>
                <div
                  className={` ${styles['container2']} ${projectStyles['input']} `}
                >
                  <svg
                    viewBox="0 0 804.5714285714286 1024"
                    className={styles['icon08']}
                  >
                    <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                  </svg>
                  <input
                    type="text"
                    placeholder="Your phone number..."
                    className={` ${styles['textinput1']} ${projectStyles['input']} `}
                  />
                </div>
                <button
                  className={` ${styles['button1']} ${projectStyles['button-primary']} ${projectStyles['button']} `}
                >
                  Get started
                </button>
              </div>
              <div className={styles['features-container1']}>
                <div className={styles['feature3']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon10']}
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text40']}>
                    Easiest way to read news and RSS Feeds.
                  </span>
                </div>
                <div className={styles['feature4']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon12']}
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text41']}>
                    Works with all mail providers, including Google and Yahoo.
                  </span>
                </div>
                <div className={styles['feature5']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon14']}
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text42']}>
                    Over 2000, highly recommended customer reviews.
                  </span>
                </div>
              </div>
            </div>
            <div className={styles['image-container3']}>
              <img
                alt="image"
                src="/playground_assets/group%2032-1200w.png"
                className={styles['image5']}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  )
}

export default Home
