import React, { useState } from 'react';
//
import TestimonyCard from './TestimonyCard';
import QiloerIcon1 from '../../assets/pages/home/saying/qiloer-icon1.svg';
import QiloerIcon2 from '../../assets/pages/home/saying/qiloer-icon2.svg';
import QiloerIcon3 from '../../assets/pages/home/saying/qiloer-icon3.svg';
import QiloerIcon4 from '../../assets/pages/home/saying/qiloer-icon4.svg';
import QiloUser1 from '../../assets/pages/testimonials/testimony/qilo-user1.jpg';
import Faith from '../../assets/pages/testimonials/testimony/faith.webp';
import Joy from '../../assets/pages/testimonials/testimony/joy.webp';
import Hafsat from '../../assets/pages/testimonials/testimony/haf.webp';
import Chidinma from '../../assets/pages/testimonials/testimony/chidinma.webp';
//
import styles from './styles/testimonial-grid.module.scss';

const VideoTestimony = [
  {
    id: 1,
    name: {
      small: 'Hafsat',
      icon: QiloerIcon1,
    },
    quote: {
      default: '17kg down, and my relationship with food is',
      span: 'a lot better',
    },
    copy: `I've lost 17kg and seven inches from my belly. My relationship with food has improved, and I make healthier choices. The program has positively affected my periods, reducing cramps and breakouts.`,
    video: {
      id: 'WWqsMHZgQso',
      status: true,
      thumbnail: Hafsat,
    },
  },
  {
    id: 2,
    name: {
      small: 'Joy',
      icon: QiloerIcon2,
    },
    quote: {
      default: 'I lost 11.9 kg with Qilo and found',
      span: 'relief from migraines',
    },
    copy: `I’ve struggled with my weight for as long as I can remember. With Qilo, I’ve lost over 11 kg, but my biggest wins are my non-scale victories. I had persistent migraines that finally went away, and I would get sick very easily, but that has also gradually changed.`,
    video: {
      id: '9RbfDBnygWA',
      status: true,
      thumbnail: Joy,
    },
  },
  {
    id: 3,
    name: {
      small: 'Chidinma',
      icon: QiloerIcon3,
    },
    quote: {
      default: 'Qilo personalized everything, transforming my',
      span: 'life in 7 months',
    },
    copy: `I was in the Qilo Program for 7 months, and my life was transformed. The Qilo Team are superstars, and everything is personalized, so I felt I could talk about anything. I learned a lot about nutrition, how to eat, and lifestyle changes. I ended the program three months ago, and I still hear my coach's voice`,
    video: {
      id: 'r26i8yW9riE',
      status: true,
      thumbnail: Chidinma,
    },
  },
  {
    id: 4,
    name: {
      small: 'Faith',
      icon: QiloerIcon4,
    },
    quote: {
      default: `Qilo made it easier for me, I've`,
      span: 'lost 18kg so far',
    },
    copy: `Before discovering Qilo, I struggled with weight loss while trying various methods on my own. However, Qilo changed the game for me, making the journey more manageable. Thanks to their support, I've successfully shed 18kg, and I continue to progress towards my goals with confidence.`,
    video: {
      id: 'MWFJIx6HSDQ',
      status: true,
      thumbnail: Faith,
    },
  },
];

const TextTestimony = [
  {
    name: {
      small: 'Doris',
      icon: QiloerIcon1,
    },
    quote: {
      default: 'Qilo helped me gain my',
      span: 'confidence back',
    },
    copy: `I had tried so many teas—you name them! None worked. I started using the meal plan, replacing the harmful substances with natural foods. And now I can wear my shorts and crop tops, and I've gotten my confidence back!`,
    pfp: QiloUser1,
  },
  {
    name: {
      small: 'Elizabeth',
      icon: QiloerIcon2,
    },
    quote: {
      default: 'I owe my mental and physical transformation to',
      span: 'Qilo',
    },
    copy: `Qilo has been so instrumental, and I’ve had a mental and physical shift for the better. I am grateful to the team and circle members for their support in getting me my snatched waist.`,
    pfp: QiloUser1,
  },
  {
    name: {
      small: 'Yetunde',
      icon: QiloerIcon3,
    },
    quote: {
      default: 'I no longer need to',
      span: 'wear girdles',
    },
    copy: `Before I got married, I was a small/medium-sized woman; life happened, and I moved to large and even extra large. But with the support of the entire Qilo Team constantly checking up and making me feel loved, I never felt pressured or less than. To be honest, I feel the Qilo team's support helped me more than the medication did.  `,
    pfp: QiloUser1,
  },
  {
    name: {
      small: 'Bunmi',
      icon: QiloerIcon4,
    },
    quote: {
      default: 'Qilo helped me reverse my',
      span: 'prediabetes diagnosis',
    },
    copy: `My diet had a lot of ups and downs, more like a yo-yo. I tried many different diets, and none of them were sustainable until I found Qilo, which has been a lifestyle transformation for me, which led to reversing my pre-diabetes diagnosis. `,
    pfp: QiloUser1,
  },
];

export default function TestimonialGrid() {
  const [videoTestimonyData, setVideoTestimonyData] = useState([
    ...VideoTestimony,
  ]);

  const hideVideoOverlay = (id) => {
    const updatedData = videoTestimonyData.map((testimony) => {
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

  return (
    <section className={styles.testimonialGrid}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.testimony}>
            {videoTestimonyData.map((testimony) => (
              <TestimonyCard
                key={testimony.id}
                testimony={testimony}
                videoType
                playVideo={() => hideVideoOverlay(testimony.id)}
                isVideoOverlay={testimony.video.status}
              />
            ))}
          </div>
          <div className={styles.testimony}>
            {TextTestimony.map((testimony, index) => (
              <TestimonyCard key={index} textType testimony={testimony} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
