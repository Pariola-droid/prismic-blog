import React, { Fragment, useState } from 'react';
import Image from 'next/image';
//
import PlayMe from '../Icons/PlayMe';
import NextIcon from '../Icons/NextIcon';
import PrevIcon from '../Icons/PrevIcon';
import Crown from '../../assets/pages/science/success/crown.svg';
import Chidinma from '../../assets/common/testimonial/chidinma.webp';
import Hafsat from '../../assets/common/testimonial/hafsat.webp';
import Joy from '../../assets/common/testimonial/joy.webp';
import Icon1 from '../../assets/pages/home/saying/qiloer-icon1.svg';
import YouTube from 'react-youtube';
//
import styles from './styles/success.module.scss';

const SUCCESS_STORIES = [
  {
    id: 1,
    name: 'Chidinma',
    age: '',
    subject: (
      <Fragment>
        “Qilo personalized everything, transforming my life
        <span> in 7 months</span>”
      </Fragment>
    ),
    story: `I was in the Qilo Program for 7 months, and my life was transformed. The Qilo Team are superstars, and everything is personalized, so I felt I could talk about anything. I learned a lot about nutrition, how to eat, and lifestyle changes. I ended the program three months ago, and I still hear my coach's voice`,
    video: {
      id: 'r26i8yW9riE',
      status: true,
      thumbnail: Chidinma,
    },
  },
  {
    id: 2,
    name: 'Hafsat',
    age: '',
    subject: (
      <Fragment>
        “17kg down, and my relationship with food <span>is a lot better</span>”
      </Fragment>
    ),
    story: `I've lost 17kg and seven inches from my belly. My relationship with food has improved, and I make healthier choices. The program has positively affected my periods, reducing cramps and breakouts.`,
    video: {
      id: 'WWqsMHZgQso',
      status: true,
      thumbnail: Hafsat,
    },
  },
  {
    id: 3,
    name: 'Joy',
    age: '',
    subject: (
      <Fragment>
        “I lost 11.9 kg with Qilo and found relief <span>from migraines</span>”
      </Fragment>
    ),
    story: `I’ve struggled with my weight for as long as I can remember. With Qilo, I’ve lost over 11 kg, but my biggest wins are my non-scale victories. I had persistent migraines that finally went away, and I would get sick very easily, but that has also gradually changed`,
    video: {
      id: '9RbfDBnygWA',
      status: true,
      thumbnail: Joy,
    },
  },
];

export default function Success() {
  const [successStory, setSuccessStory] = useState([...SUCCESS_STORIES]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const hideVideoOverlay = (id) => {
    const updatedData = successStory.map((testimony) => {
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
    setSuccessStory(updatedData);
  };

  const handleNext = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === successStory.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? successStory.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className={styles.success}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.heading}>
            <h2>
              Read our members’ success stories
              <Image src={Crown} className={styles.crown} alt="crown" />
            </h2>
          </div>

          <div className={styles.slider}>
            <div className={styles.slider_column}>
              <div className={styles.content}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="38"
                  viewBox="0 0 33 38"
                  fill="none"
                  className={styles.content_arrow}
                >
                  <path
                    d="M31.5 21.5981C33.5 20.4434 33.5 17.5566 31.5 16.4019L4.5 0.813469C2.5 -0.341232 0 1.10214 0 3.41154L0 34.5885C0 36.8979 2.5 38.3412 4.5 37.1865L31.5 21.5981Z"
                    fill="#043D3B"
                  />
                </svg>

                <h4>{successStory[currentSlide].subject}</h4>

                <p>{successStory[currentSlide].story}</p>

                <div className={styles.name}>
                  <Image src={Icon1} alt="icon" />
                  <small>
                    {successStory[currentSlide].name},{' '}
                    {successStory[currentSlide].age}
                  </small>
                </div>
              </div>

              <div className={styles.vid}>
                {successStory[currentSlide].video.status && (
                  <div
                    className={styles.videoOverlay}
                    onClick={() =>
                      hideVideoOverlay(successStory[currentSlide].id)
                    }
                  >
                    <PlayMe />
                    <Image
                      src={successStory[currentSlide].video.thumbnail}
                      alt="video thumbnail"
                      className={styles.thumbnail}
                    />
                  </div>
                )}

                <YouTube
                  videoId={successStory[currentSlide].video.id}
                  title={`${successStory[currentSlide].name} - Qilo Testimony`}
                  loading={'eager'}
                  className={styles.ytVid}
                />
              </div>
            </div>
          </div>

          <div className={styles.bottom}>
            <p>SEE MORE STORIES</p>

            <div className={styles.controls}>
              <button onClick={handlePrev} disabled={currentSlide === 0}>
                <PrevIcon />
              </button>
              <button
                onClick={handleNext}
                disabled={currentSlide === successStory.length - 1}
              >
                <NextIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
