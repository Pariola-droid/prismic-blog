import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import BlazeSlider from 'blaze-slider';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import YouTube from 'react-youtube';
//
import PlayMe from '../Icons/PlayMe';
import Heart from '../../assets/pages/home/saying/heart.svg';
import QiloerIcon1 from '../../assets/pages/home/saying/qiloer-icon1.svg';
import QiloerIcon2 from '../../assets/pages/home/saying/qiloer-icon2.svg';
import QiloerIcon3 from '../../assets/pages/home/saying/qiloer-icon3.svg';
import QiloerIcon4 from '../../assets/pages/home/saying/qiloer-icon4.svg';
import QiloerIcon5 from '../../assets/pages/home/saying/qiloer-icon5.svg';
import Spiral from '../../assets/pages/home/saying/spiral.svg';
import Vid2 from '../../assets/pages/home/saying/vid2.jpg';
import Hafsat from '../../assets/pages/home/saying/haf.webp';
import Joy from '../../assets/pages/home/saying/joy.webp';
import Chidinma from '../../assets/pages/home/saying/chidinma.webp';
import Doris from '../../assets/common/testimonial/doris.webp';
import Faith from '../../assets/pages/home/saying/faith.webp';
//
import useWindowSize from '@/utils/useWindowSize';
import { COLORS } from '@/utils/colors';
//
import styles from './styles/saying.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Saying() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;
  const blazerRefSaying = useRef(null);
  const scrollContainerRef = useRef(null);
  const windowSize = useWindowSize();
  const screenSizeThreshold = 990;

  const QiloersTestimonyData = [
    {
      id: 1,
      name: {
        small: `${t('Homepage.saying.one.name')}`,
        icon: QiloerIcon1,
      },
      quote: {
        default: `${t('Homepage.saying.one.quote')}`,
        span: '',
      },
      copy: `${t('Homepage.saying.one.message')}`,
      video: {
        id: t('Homepage.saying.one.videoLink'),
        status: true,
        thumbnail: Hafsat,
      },
      backgroundColor: COLORS.lightBlue,
    },
    {
      id: 2,
      name: {
        small: `${t('Homepage.saying.two.name')}`,
        icon: QiloerIcon2,
      },
      quote: {
        default: `${t('Homepage.saying.two.quote')}`,
        span: '',
      },
      copy: `${t('Homepage.saying.two.message')}`,
      video: {
        id: t('Homepage.saying.two.videoLink'),
        status: true,
        thumbnail: Chidinma,
      },
      backgroundColor: COLORS.lightGrass,
    },
    {
      id: 3,
      name: {
        small: `${t('Homepage.saying.three.name')}`,
        icon: QiloerIcon3,
      },
      quote: {
        default: `${t('Homepage.saying.three.quote')}`,
        span: '',
      },
      copy: `${t('Homepage.saying.three.message')}`,
      video: {
        id: t('Homepage.saying.three.videoLink'),
        status: true,
        thumbnail: Joy,
      },
      backgroundColor: COLORS.lightMud,
    },
    {
      id: 4,
      name: {
        small: `${t('Homepage.saying.four.name')}`,
        icon: QiloerIcon4,
      },
      quote: {
        default: `${t('Homepage.saying.four.quote')}`,
        span: '',
      },
      copy: `${t('Homepage.saying.four.message')}`,
      video: {
        id: t('Homepage.saying.four.videoLink'),
        status: true,
        thumbnail: Doris,
      },
      backgroundColor: COLORS.lightBrown,
    },
    {
      id: 5,
      name: {
        small: `${t('Homepage.saying.five.name')}`,
        icon: QiloerIcon5,
      },
      quote: {
        default: `${t('Homepage.saying.five.quote')}`,
        span: '',
      },
      copy: `${t('Homepage.saying.five.message')}`,
      video: {
        id: t('Homepage.saying.five.videoLink'),
        status: true,
        thumbnail: Faith,
      },
      backgroundColor: COLORS.lightBlue,
    },
  ];

  const [showSliderSection, setSliderSection] = useState(false);
  const [hasPausedSpree, setHasPausedSpree] = useState(false);
  const [videoTestimonyData, setVideoTestimonyData] = useState([
    ...QiloersTestimonyData,
  ]);

  const hideVideoOverlay = (id) => {
    const updatedData = QiloersTestimonyData.map((testimony) => {
      if (testimony.id === id) {
        return {
          ...testimony,
          video: {
            ...testimony.video,
            status: false,
          },
        };
      } else {
        return {
          ...testimony,
          video: {
            ...testimony.video,
            status: true,
          },
        };
      }
    });
    setVideoTestimonyData(updatedData);
  };

  useEffect(() => {
    if (windowSize.width < screenSizeThreshold) {
      setSliderSection(true);
    } else {
      setSliderSection(false);
    }

    return () => {
      setSliderSection(false);
    };
  }, [windowSize]);

  useEffect(() => {
    if (!blazerRefSaying.current && showSliderSection) {
      const el = document.querySelector('#sliderSaying');
      blazerRefSaying.current = new BlazeSlider(el, {
        all: {
          enableAutoplay: true,
          enablePagination: true,
          autoplayInterval: 2000,
          transitionDuration: 500,
          stopAutoplayOnInteraction: false,
        },
        '(max-width: 990px)': {
          slidesToShow: 1,
          slideGap: '40px',
        },
        '(max-width: 500px)': {
          slideGap: '20px',
          autoplayInterval: 10000,
        },
      });
    }
  }, [showSliderSection]);

  return (
    <section
      className={`${styles.saying}
    ${locale === 'en-US' ? styles.pb : ''}
    `}
    >
      <Image src={Spiral} className={styles.illy_spiral} alt="illy" />
      <div className={styles.head}>
        <h2>
          {t('Homepage.saying.title.a')}
          <span>
            {t('Homepage.saying.title.span')}
            <svg
              width="212"
              height="16"
              viewBox="0 0 212 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M211.167 5.41426C210.307 3.64592 202.922 2.90136 180.728 2.28089C160.019 1.69144 135.91 -0.0148678 93.7887 0.91584C61.5917 1.62938 21.5018 4.48356 21.5018 6.06576C21.5018 7.21363 23.0647 7.24465 37.991 6.22088C51.7841 5.29017 58.8565 5.073 67.4919 4.82481C32.8723 7.24465 25.4873 8.82686 7.04441 10.347C-4.52149 11.3088 2.23831 14.0698 6.4583 13.7906C6.49737 13.7906 60.3023 10.316 65.3819 10.5021C65.8508 10.5332 60.7321 11.0916 53.9723 11.7431C35.0995 13.6045 38.7334 16.7065 52.8782 15.2795C100.47 10.4708 145.249 8.98166 179.751 11.0602C190.653 11.7117 191.864 11.7117 191.864 10.9051C191.864 9.47804 188.895 8.39253 184.245 8.17537C176.977 7.80308 149 6.74797 136.34 6.43773C135.363 6.40671 135.832 5.81757 136.692 5.75552C141.85 5.35222 182.799 5.66214 198.898 6.09647C210.737 6.40671 211.597 6.37599 211.167 5.41426Z"
                fill="#36B887"
              />
            </svg>
          </span>{' '}
          {t('Homepage.saying.title.b')}
        </h2>
        <Image src={Heart} alt="green heart icon" />
      </div>

      <div className={styles.slider} ref={scrollContainerRef}>
        {showSliderSection ? (
          <div className="blaze-slider" id="sliderSaying">
            <div className="blaze-container">
              <div className="blaze-track-container">
                <div className="blaze-track">
                  {videoTestimonyData.map((qilo, index) => (
                    <div
                      key={index}
                      className={styles.slider_column}
                      data-saying={index + 1}
                    >
                      <div className={styles.content}>
                        {locale === 'en-US' ? null : (
                          <svg
                            width="38"
                            height="34"
                            viewBox="0 0 38 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.content_arrow}
                          >
                            <path
                              d="M16.1293 32.3036C17.2835 34.3039 20.1705 34.3039 21.3247 32.3036L36.9041 5.30357C38.0578 3.30415 36.6148 0.805534 34.3064 0.805534H3.14763C0.839234 0.805534 -0.603771 3.30415 0.549923 5.30357L16.1293 32.3036Z"
                              fill="white"
                            />
                          </svg>
                        )}
                        <div className={styles.name}>
                          <Image src={qilo.name.icon} alt="icon" />
                          <small>{qilo.name.small}</small>
                        </div>
                        <h4>
                          {qilo.quote.default} <span>{qilo.quote.span}</span>
                        </h4>
                        <p>{qilo.copy}</p>
                      </div>

                      {locale === 'en-US' ? null : (
                        <div className={styles.vid}>
                          {qilo.video.status && (
                            <div
                              className={styles.videoOverlay}
                              onClick={() => hideVideoOverlay(qilo.id)}
                              data-animation={qilo.video.status}
                            >
                              <PlayMe />
                              <Image
                                src={qilo.video.thumbnail}
                                alt="video thumbnail"
                                className={styles.thumbnail}
                              />
                            </div>
                          )}

                          <YouTube
                            videoId={qilo.video.id}
                            title={`${qilo.name.small} - Qilo Testimony`}
                            loading={'eager'}
                            className={styles.ytVid}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {/*  */}
              <div className={styles.slider_nav}>
                <div className="blaze-pagination"></div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={styles.slider_spree}
            style={{
              animationPlayState: hasPausedSpree ? 'paused' : 'running',
            }}
          >
            {videoTestimonyData.map((qilo) => (
              <div
                key={qilo.id}
                data-saying={qilo.id}
                className={styles.slider_column}
                onMouseOver={() => setHasPausedSpree(true)}
                onMouseOut={() => setHasPausedSpree(false)}
              >
                <div className={styles.content}>
                  {locale === 'en-US' ? null : (
                    <svg
                      width="38"
                      height="34"
                      viewBox="0 0 38 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.content_arrow}
                    >
                      <path
                        d="M16.1293 32.3036C17.2835 34.3039 20.1705 34.3039 21.3247 32.3036L36.9041 5.30357C38.0578 3.30415 36.6148 0.805534 34.3064 0.805534H3.14763C0.839234 0.805534 -0.603771 3.30415 0.549923 5.30357L16.1293 32.3036Z"
                        fill="white"
                      />
                    </svg>
                  )}
                  <div className={styles.name}>
                    <Image src={qilo.name.icon} alt="icon" />
                    <small>{qilo.name.small}</small>
                  </div>
                  <h4>
                    {qilo.quote.default} <span>{qilo.quote.span}</span>
                  </h4>
                  <p>{qilo.copy}</p>
                </div>

                {locale === 'en-US' ? null : (
                  <div className={styles.vid}>
                    {qilo.video.status && (
                      <div
                        className={styles.videoOverlay}
                        onClick={() => hideVideoOverlay(qilo.id)}
                        data-animation={qilo.video.status}
                      >
                        <PlayMe />
                        <Image
                          src={qilo.video.thumbnail}
                          alt="video thumbnail"
                          className={styles.thumbnail}
                        />
                      </div>
                    )}

                    <YouTube
                      videoId={qilo.video.id}
                      title={`${qilo.name.small} - Qilo Testimony`}
                      loading={'eager'}
                      className={styles.ytVid}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
