import React, { useState } from 'react';
import Image from 'next/image';
//
import YouTube from 'react-youtube';
import PlayMe from '../Icons/PlayMe';
import Chidinma from '../../assets/common/testimonial/chidinma.webp';
import Faith from '../../assets/common/testimonial/faith.webp';
import PrimaryOutlineButton from '../common/PrimaryOutlineButton';
//
import styles from './styles/real-stories.module.scss';

export const CircleIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.0271 5.33333C11.9269 5.33333 5.35535 11.8998 5.34906 20C5.34277 28.1002 11.9042 34.6667 20.0043 34.6667C28.1045 34.6667 34.6761 28.1002 34.6824 20C34.6887 11.8998 28.1273 5.33333 20.0271 5.33333ZM0.0157261 20C0.0242997 8.9543 8.98556 0 20.0313 0C31.0769 0 40.0243 8.9543 40.0157 20C40.0072 31.0457 31.0459 40 20.0002 40C8.95451 40 0.00715249 31.0457 0.0157261 20Z"
        fill={props.fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.018 14.6666C17.0725 14.6666 14.6828 17.0544 14.6805 19.9999C14.6782 22.9454 17.0642 25.3332 20.0097 25.3332C22.9552 25.3332 25.3449 22.9454 25.3472 19.9999C25.3495 17.0544 22.9635 14.6666 20.018 14.6666ZM9.34719 19.9999C9.35176 14.1089 14.1311 9.33325 20.0221 9.33325C25.9132 9.33325 30.6851 14.1089 30.6805 19.9999C30.6759 25.891 25.8966 30.6666 20.0056 30.6666C14.1145 30.6666 9.34262 25.891 9.34719 19.9999Z"
        fill={props.fill}
      />
    </svg>
  );
};

export const StarIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      {...props}
    >
      <path
        d="M0.0123054 20C11.058 20 20.0068 11.0457 20 0C20.0068 11.0457 28.9666 20 40.0123 20C28.9666 20 20.0178 28.9543 20.0246 40C20.0178 28.9543 11.058 20 0.0123054 20Z"
        fill={props.fill}
      />
    </svg>
  );
};

export default function RealStories() {
  const [videoStatus, setVideoTestimonyData] = useState({
    one: true,
    two: true,
  });

  const handleVideoStatus = (video) => {
    setVideoTestimonyData((prev) => {
      return { ...prev, [video]: !prev[video] };
    });
  };

  return (
    <section className={styles.realStories}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.heading}>
            <h2>
              Not just numbers:
              <br /> Discover how qilo has transformed lives
            </h2>
          </div>

          <div className={styles.grided}>
            <div className={styles.content}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="38"
                viewBox="0 0 33 38"
                fill="none"
                className={`${styles.arrow} ${styles.rightSide}`}
              >
                <path
                  d="M31.5 21.5981C33.5 20.4434 33.5 17.5566 31.5 16.4019L4.5 0.813469C2.5 -0.341232 0 1.10214 0 3.41154L0 34.5885C0 36.8979 2.5 38.3412 4.5 37.1865L31.5 21.5981Z"
                  fill="currentColor"
                />
              </svg>

              <h4>
                “The Qilo program taught me discipline, accountability, and
                personalized nutrition. It's like having free therapy while
                transforming your life.”
              </h4>

              <div className={styles.desc}>
                <div className={styles.descItem}>
                  <h5>Initial Weight</h5>
                  <p>Started at 83kg</p>
                </div>

                <div className={styles.descItem}>
                  <h5>Results</h5>
                  <p>Lost 11kg in 7 months.</p>
                </div>
              </div>

              <div className={styles.name}>
                <StarIcon fill="#5F4086" />
                <small>Chidinma, 27</small>
              </div>
            </div>

            <div className={styles.vid}>
              {videoStatus.one && (
                <div
                  className={styles.videoOverlay}
                  onClick={() => handleVideoStatus('one')}
                >
                  <PlayMe className={styles.play} />
                  <Image
                    src={Chidinma}
                    alt="video thumbnail"
                    className={styles.thumbnail}
                  />
                </div>
              )}

              <YouTube
                videoId={'r26i8yW9riE'}
                title={`Chidinma - Qilo Testimony`}
                loading={'eager'}
                className={styles.ytVid}
              />
            </div>
            {/*  */}
            <div className={styles.vid}>
              {videoStatus.two && (
                <div
                  className={styles.videoOverlay}
                  onClick={() => handleVideoStatus('two')}
                >
                  <PlayMe className={styles.play} />
                  <Image
                    src={Faith}
                    alt="video thumbnail"
                    className={styles.thumbnail}
                  />
                </div>
              )}

              <YouTube
                videoId={'MWFJIx6HSDQ'}
                title={`Faith - Qilo Testimony`}
                loading={'eager'}
                className={styles.ytVid}
              />
            </div>

            <div className={styles.content}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="38"
                viewBox="0 0 33 38"
                fill="none"
                className={`${styles.arrow} ${styles.leftSide}`}
              >
                <path
                  d="M31.5 21.5981C33.5 20.4434 33.5 17.5566 31.5 16.4019L4.5 0.813469C2.5 -0.341232 0 1.10214 0 3.41154L0 34.5885C0 36.8979 2.5 38.3412 4.5 37.1865L31.5 21.5981Z"
                  fill="currentColor"
                />
              </svg>

              <h4>
                “What I gained from this whole experience is a better
                relationship with food.”
              </h4>

              <div className={styles.desc}>
                <div className={styles.descItem}>
                  <h5>Initial Weight</h5>
                  <p>Started at 110kg</p>
                </div>

                <div className={styles.descItem}>
                  <h5>Results</h5>
                  <p>Lost 18kg in 4 months.</p>
                </div>
              </div>

              <div className={styles.name}>
                <CircleIcon fill="#9B7E62" />
                <small>Faith, 32</small>
              </div>
            </div>
          </div>

          <div className={styles.bottom}>
            <PrimaryOutlineButton
              text="Get a personalized weight loss plan"
              link={'https://app.qilo.co/'}
              customStyles={{
                color: '#E6FE55',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
