import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import PlayMe from '../Icons/PlayMe';
import YouTube from 'react-youtube';
//
import styles from './styles/testimony-card.module.scss';

export default function TestimonyCard({
  videoType,
  textType,
  testimony,
  playVideo,
  isVideoOverlay,
}) {
  const router = useRouter();
  const { locale } = router;

  return (
    <div
      className={`${styles.testiCard} ${
        textType ? styles.textType : styles.videoType
      }`}
    >
      <div className={styles.content}>
        {locale === 'en-US' ? null : (
          <Fragment>
            {videoType && (
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
          </Fragment>
        )}

        {videoType ? (
          <div className={styles.name}>
            <Image
              src={testimony.name.icon}
              className={styles.icon}
              alt="icon"
            />
            <small>{testimony.name.small}</small>
          </div>
        ) : (
          <div className={styles.top}>
            <div className={styles.name}>
              <div className={styles.pfp}>
                <Image src={testimony.pfp} alt="qilo user" />
              </div>
              <small>{testimony.name.small}</small>
            </div>

            <Image
              src={testimony.name.icon}
              className={styles.icon}
              alt="icon"
            />
          </div>
        )}

        <h4>
          “{testimony.quote.default} <span>{testimony.quote.span}</span>”
        </h4>
        <p>{testimony.copy}</p>
      </div>

      {locale === 'en-US' ? null : (
        <Fragment>
          {videoType && (
            <div className={styles.vid}>
              {isVideoOverlay && (
                <div
                  className={styles.videoOverlay}
                  onClick={playVideo}
                  data-animation={isVideoOverlay}
                >
                  <PlayMe />
                  <Image
                    src={testimony.video.thumbnail}
                    alt="video thumbnail"
                    className={styles.thumbnail}
                  />
                </div>
              )}

              <YouTube
                videoId={testimony.video.id}
                title={`${testimony.name.small} - Qilo Testimony`}
                loading={'eager'}
                className={styles.ytVid}
              />
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
}
