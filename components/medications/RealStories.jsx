import React, { useState } from 'react';
import Image from 'next/image';
import YouTube from 'react-youtube';
import { useTranslation } from 'next-i18next';
//
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
      width="31"
      height="30"
      viewBox="0 0 31 30"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.0203 4C8.9452 4 4.01651 8.92487 4.01179 15C4.00708 21.0751 8.92813 26 15.0033 26C21.0784 26 26.0071 21.0751 26.0118 15C26.0165 8.92487 21.0955 4 15.0203 4ZM0.0117946 15C0.0182248 6.71573 6.73917 0 15.0234 0C23.3077 0 30.0182 6.71573 30.0118 15C30.0054 23.2843 23.2844 30 15.0002 30C6.71588 30 0.00536437 23.2843 0.0117946 15Z"
        fill="#EEE0FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.0145 11C12.8053 11 11.0131 12.7909 11.0114 15C11.0097 17.2091 12.7991 19 15.0083 19C17.2174 19 19.0097 17.2091 19.0114 15C19.0131 12.7909 17.2236 11 15.0145 11ZM7.01137 15C7.0148 10.5817 10.5993 7 15.0176 7C19.4359 7 23.0148 10.5817 23.0114 15C23.0079 19.4183 19.4234 23 15.0052 23C10.5869 23 7.00794 19.4183 7.01137 15Z"
        fill="#EEE0FF"
      />
    </svg>
  );
};

export const StarIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      {...props}
    >
      <path
        d="M0.00922905 15C8.2935 15 15.0051 8.28427 15 0C15.0051 8.28427 21.725 15 30.0092 15C21.725 15 15.0134 21.7157 15.0185 30C15.0134 21.7157 8.2935 15 0.00922905 15Z"
        fill="#FFECDB"
      />
    </svg>
  );
};

export const NeedleIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="30"
      viewBox="0 0 35 30"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_356_8929)">
        <path
          d="M27.0456 5.29146L30.5279 2.18643C30.3879 1.95378 30.2315 1.72144 30.1049 1.47514C29.9892 1.24925 29.8305 1.00716 29.8289 0.771214C29.8271 0.523864 29.9232 0.161464 30.0989 0.0587146C30.2811 -0.0477852 30.6189 0.067413 30.8714 0.143163C31.0019 0.182313 31.0974 0.34371 31.2042 0.45426C32.0238 1.30311 32.8532 2.14309 33.6554 3.00815C33.9278 3.31151 34.166 3.64388 34.3658 3.99923C34.5861 4.37813 34.484 4.7558 34.1838 5.0516C33.8912 5.3399 33.5214 5.31051 33.1767 5.16201C32.9223 5.02872 32.6775 4.87805 32.4438 4.7111L28.9866 7.5344C29.4192 8.0204 29.7543 8.4398 30.1338 8.8145C30.945 9.6158 30.7677 10.6859 29.9792 11.3416C26.0342 14.6221 22.1402 17.9646 18.2105 21.264C17.5604 21.8053 16.8648 22.2898 16.1318 22.7124C15.2783 23.2074 14.8256 23.0761 14.2109 22.3038C13.9409 21.9649 13.6872 21.6138 13.3919 21.2238C12.7769 21.5853 12.2039 21.9717 11.5872 22.267C11.1866 22.4589 10.7214 22.5151 10.2869 22.6383C10.1212 22.6696 9.96142 22.7266 9.81333 22.8073C7.05439 24.6915 4.49161 26.8225 1.99531 29.0368C1.74745 29.26 1.4847 29.4661 1.20888 29.6538C0.790377 29.9332 0.438936 29.928 0.235086 29.676C0.0312354 29.424 0.0864143 29.0472 0.442215 28.731C2.30221 27.0784 4.15846 25.4206 6.04561 23.7994C7.03561 22.9486 8.08713 22.1689 9.17943 21.3027C9.03888 20.6257 9.46816 20.1817 10.0706 19.7923C10.6022 19.4487 11.0807 19.0228 11.612 18.6106C11.3495 18.2124 11.1237 17.8756 10.9032 17.5345C10.3617 16.6986 10.3932 16.2709 11.1398 15.588C12.0482 14.7569 12.9798 13.9504 13.9203 13.1557C17.1932 10.3908 20.4701 7.63077 23.7512 4.87568C24.0062 4.66087 24.2432 4.42491 24.4958 4.20726C25.1172 3.67176 25.5056 3.67056 26.0978 4.24311C26.4269 4.55976 26.7146 4.92111 27.0456 5.29146ZM15.5568 21.6327C18.5292 19.422 21.1979 16.891 24.0078 14.5669C22.758 12.7613 21.5556 11.0245 20.3154 9.23256L11.7021 16.476L15.5568 21.6327ZM21.5897 8.18198L25.6427 13.187L29.0906 10.0436C27.8456 8.3924 26.6636 6.824 25.4231 5.1785L21.5897 8.18198ZM12.1706 19.4647C10.9386 20.3977 10.6706 20.6863 10.5594 21.2914L12.5394 20.0101L12.1706 19.4647ZM29.9097 4.95218L29.7971 4.83216C29.2494 5.29251 28.6964 5.74718 28.1609 6.22088C28.0973 6.27713 28.1288 6.44075 28.1136 6.5786C28.7484 6.0032 29.3291 5.47778 29.9096 4.95218H29.9097Z"
          fill="#5F4086"
        />
      </g>
      <defs>
        <clipPath id="clip0_356_8929">
          <rect width="34.5" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default function RealStories() {
  const { t } = useTranslation('common');
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
            <h2>{t('Medications.realStories.title')}</h2>
          </div>

          <div className={styles.grided}>
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

                  <div className={styles.tag}>
                    <div className={styles.tagWrap}>
                      <NeedleIcon />
                      <small>Ozempic</small>
                    </div>
                  </div>
                </div>
              )}

              <YouTube
                videoId={'r26i8yW9riE'}
                title={`Chidinma - Qilo Testimony`}
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
                  fill="#043D3B"
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
                <CircleIcon />
                <small>Chidinma, 27</small>
              </div>
            </div>
            {/*  */}
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
                  fill="#043D3B"
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
                <StarIcon />
                <small>Faith, 32</small>
              </div>
            </div>

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

                  <div className={styles.tag}>
                    <div className={styles.tagWrap}>
                      <NeedleIcon />
                      <small>Ozempic</small>
                    </div>
                  </div>
                </div>
              )}

              <YouTube
                videoId={'MWFJIx6HSDQ'}
                title={`Faith - Qilo Testimony`}
                loading={'eager'}
                className={styles.ytVid}
              />
            </div>
          </div>

          <div className={styles.bottom}>
            <PrimaryOutlineButton
              text="Get a personalised weight loss plan"
              link={'https://app.qilo.co/'}
              customStyles={{
                color: '#043D3B',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
