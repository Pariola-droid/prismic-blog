import React, { useState, useEffect, useRef, Fragment } from 'react';
import Image from 'next/image';
import BlazeSlider from 'blaze-slider';
import { useTranslation } from 'next-i18next';
//
import NextIcon from '../Icons/NextIcon';
import PrevIcon from '../Icons/PrevIcon';
import ArrowRightIcon from '../Icons/ArrowRightIcon';
import Star from '../../assets/pages/home/core-team/star.svg';
//
import useWindowSize from '@/utils/useWindowSize';
import PrimaryOutlineButton from './PrimaryOutlineButton';
//
import styles from './styles/core-team.module.scss';

export default function CoreTeam({
  heading,
  sliderType,
  SliderData,
  hideSection = true,
}) {
  const { t } = useTranslation('common');
  const blazerRefTeam = useRef(null);
  const blazerRefTeamMobile = useRef(null);
  const windowSize = useWindowSize();
  const screenSizeThreshold = 990;
  const [showTeamMobileSlider, setShowTeamMobileSlider] = useState(false);

  const nextSlide = () => {
    if (blazerRefTeam.current) {
      blazerRefTeam.current.next();
    }
  };

  const prevSlide = () => {
    if (blazerRefTeam.current) {
      blazerRefTeam.current.prev();
    }
  };

  useEffect(() => {
    if (windowSize.width < screenSizeThreshold) {
      setShowTeamMobileSlider(true);
    } else {
      setShowTeamMobileSlider(false);
    }

    return () => {
      setShowTeamMobileSlider(false);
    };
  }, [windowSize]);

  useEffect(() => {
    if (!blazerRefTeam.current && sliderType) {
      const elLG = document.querySelector('#sliderTeam');
      if (elLG) {
        blazerRefTeam.current = new BlazeSlider(elLG, {
          all: {
            slidesToShow: 3,
            transitionDuration: 800,
          },
          '(max-width: 990px)': {
            slidesToShow: 2,
            slideGap: '40px',
            enableAutoplay: true,
            enablePagination: true,
            autoplayInterval: 10000,
            transitionDuration: 500,
            stopAutoplayOnInteraction: false,
          },
          '(max-width: 500px)': {
            slidesToShow: 1,
          },
        });
      }
    }
  }, [sliderType]);

  useEffect(() => {
    if (!blazerRefTeamMobile.current && showTeamMobileSlider) {
      const elMD = document.querySelector('#sliderTeamMobile');
      if (elMD) {
        blazerRefTeamMobile.current = new BlazeSlider(elMD, {
          all: {
            enableAutoplay: true,
            enablePagination: true,
            transitionDuration: 500,
            stopAutoplayOnInteraction: false,
          },
          '(max-width: 990px)': {
            slidesToShow: 2,
            slideGap: '40px',
            autoplayInterval: 10000,
          },
          '(max-width: 500px)': {
            slidesToShow: 1,
          },
        });
      }
    }
  }, [showTeamMobileSlider]);

  return (
    <Fragment>
      {hideSection && (
        <section
          className={`${styles.coreTeam}
    ${sliderType && styles.px}
    `}
        >
          {sliderType ? (
            <div className={styles.sliderContainer}>
              <h2 className={styles.custom}>{heading}</h2>
              <div className={styles.slider}>
                <div className="blaze-slider" id="sliderTeam">
                  <div className="blaze-container">
                    <div className="blaze-track-container">
                      <div className="blaze-track">
                        {SliderData?.map((slide, index) => (
                          <div
                            className={`${styles.col}
                      ${sliderType && styles.customize}
                      `}
                            key={index}
                          >
                            <Image
                              src={slide.image}
                              alt={`${slide.name}-picture`}
                            />
                            <div className={styles.texts}>
                              <h4>{slide.name}</h4>
                              <small>{slide.role}</small>
                            </div>

                            {slide.linkedin && (
                              <button className={styles.link}>
                                <a
                                  href={slide.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  VISIT LINKEDIN
                                  <ArrowRightIcon />
                                </a>
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className={styles.sliderNav}>
                    <div className="blaze-pagination"></div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className={styles.sliderBottom}>
                <div className={styles.sliderControls}>
                  <button onClick={prevSlide}>
                    <PrevIcon />
                  </button>
                  <button onClick={nextSlide}>
                    <NextIcon />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.wrap}>
              {heading ? (
                <h2 className={styles.custom}>{heading}</h2>
              ) : (
                <h2>
                  {t('Homepage.careTeam.title')}
                  <Image src={Star} alt="star" />
                </h2>
              )}

              {showTeamMobileSlider ? (
                <div className={styles.sliderContainerMobile}>
                  <div className="blaze-slider" id="sliderTeamMobile">
                    <div className="blaze-container">
                      <div className="blaze-track-container">
                        <div className="blaze-track">
                          {SliderData?.slice(0, 4).map((coach, index) => (
                            <div
                              className={`${styles.col}
                      ${showTeamMobileSlider && styles.customize}
                      `}
                              key={index}
                            >
                              <Image src={coach.image} alt="Qilo Coach" />
                              <div className={styles.texts}>
                                <h4>{coach.name}</h4>
                                <small>{coach.role}</small>
                              </div>

                              <button className={styles.link}>
                                <a
                                  href={coach.linkedin?.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  More on {coach.linkedin?.name}{' '}
                                  <ArrowRightIcon />
                                </a>
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/*  */}
                    <div className={styles.sliderMobileNav}>
                      <div className="blaze-pagination"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.grided}>
                  {SliderData?.slice(0, 3).map((coach, i) => (
                    <div className={styles.col} key={i}>
                      <Image src={coach.image} alt="Qilo Coach" />
                      <div className={styles.texts}>
                        <h4>{coach.name}</h4>
                        <small>{coach.role}</small>
                        <p>{coach.bio}</p>
                      </div>

                      <button className={styles.link}>
                        <a
                          href={coach.linkedin?.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          More on {coach.linkedin?.name} <ArrowRightIcon />
                        </a>
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <PrimaryOutlineButton
                text="See Our Care Team"
                link="#0"
                customStyles={{
                  color: '#043D3B',
                }}
              />
            </div>
          )}
        </section>
      )}
    </Fragment>
  );
}
