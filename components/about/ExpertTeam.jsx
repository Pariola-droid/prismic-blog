import React, { useState, Fragment } from 'react';
import Image from 'next/image';
//
import Whiskers from '../../assets/pages/about/founder/whiskers.svg';
import Member1 from '../../assets/pages/about/expert-team/sambo.webp';
import Member2 from '../../assets/pages/about/expert-team/samuel.webp';
import Member3 from '../../assets/pages/about/expert-team/remi.webp';
import Member4 from '../../assets/pages/about/expert-team/bimpe.webp';
import Member5 from '../../assets/pages/about/expert-team/victoria.webp';
import Member6 from '../../assets/pages/about/expert-team/bosah.webp';
//
import styles from './styles/expert-team.module.scss';

export function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="22"
      viewBox="0 0 23 22"
      fill="none"
    >
      <g clipPath="url(#clip0_542_1550)">
        <path
          d="M17.4663 0H5.53383C2.84972 0 0.673828 2.1759 0.673828 4.86V16.7925C0.673828 19.4766 2.84972 21.6525 5.53383 21.6525H17.4663C20.1504 21.6525 22.3263 19.4766 22.3263 16.7925V4.86C22.3263 2.1759 20.1504 0 17.4663 0Z"
          fill="currentColor"
        />
        <path
          d="M6.67363 8.99996H8.92363V16.26H6.67363V8.99996ZM7.82113 5.39246C8.07892 5.39246 8.33093 5.46881 8.54537 5.61188C8.75981 5.75494 8.92707 5.95832 9.02606 6.19634C9.12505 6.43436 9.15133 6.69636 9.10158 6.9493C9.05183 7.20224 8.92829 7.43478 8.74653 7.61758C8.56477 7.80039 8.33294 7.92526 8.08029 7.97646C7.82764 8.02766 7.56549 8.00288 7.32691 7.90526C7.08832 7.80763 6.884 7.64154 6.7397 7.42792C6.59541 7.2143 6.51762 6.96274 6.51613 6.70496C6.51515 6.53295 6.54817 6.36245 6.61331 6.20325C6.67845 6.04405 6.77442 5.89931 6.8957 5.77733C7.01698 5.65535 7.16117 5.55856 7.31999 5.49251C7.47881 5.42645 7.64913 5.39245 7.82113 5.39246Z"
          fill="#EEE0FF"
        />
        <path
          d="M10.3639 8.99993H12.5314V9.98993C12.7484 9.61965 13.0619 9.31524 13.4383 9.10918C13.8148 8.90312 14.2401 8.80314 14.6689 8.81993C16.9189 8.81993 17.3764 10.3199 17.3764 12.2774V16.2599H15.1264V12.7499C15.1264 11.9099 15.1264 10.8224 13.9564 10.8224C12.7864 10.8224 12.6064 11.7374 12.6064 12.6824V16.2749H10.3564L10.3639 8.99993Z"
          fill="#EEE0FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_542_1550">
          <rect
            width="21.6525"
            height="21.6525"
            fill="white"
            transform="translate(0.673828)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function ExpertTeam({ hideSection }) {
  const [memberTab, setMemberTab] = useState(0);

  const handleMemberTab = (index) => {
    setMemberTab(index);
  };

  const memberTabs = [
    {
      name: 'Dr. Hashiat Sambo',
      position: 'Obesity Doctor',
      bio: 'Dr. Hashiat serves as a General Practitioner Trainee and Differential Attainment Fellow for the East Midlands Deanery with NHS England. In addition to her role in general practice and collaboration with internationally trained graduates to mitigate differential attainment, she is actively involved in health start-ups and specializes in obesity management. Currently pursuing SCOPE certification, her keen interest lies in the comprehensive management of obesity. Noteworthy is her experience in guiding weight loss in patients with comorbidities, particularly managing obesity associated with polycystic ovarian syndrome. Dr. Sambo comprehends the intricacies of obesity management and holds a special interest in pharmacologic approaches addressing the psychological aspects of weight loss.',
      linkedin: 'https://www.linkedin.com/in/hashiat-sambo-1543112a9',
      image: Member1,
      bgClass: 'member1',
    },
    {
      name: 'Dr. Diribe Samuel O',
      position: 'Obesity Doctor',
      bio: `Dr. Samuel is a metabolic doctor who specializes in the diagnosis and treatment of metabolic disorders. He has a B.Sc. degree in biology majoring in biological sciences from the Philippines. He also obtained his Doctor of Medicine degree from the same country. He further pursued his education in Australia, where he earned his Master of Public Health degree. Dr. Ogbonna has a wealth of experience in handling various medical cases and providing services for surgical and obstetric conditions. He has worked in different hospitals and clinics across the globe, and he is passionate about improving the quality of life of his patients. Dr. Ogbonna's dream is to build a cancer centre that will offer comprehensive and quality care for cancer patients and their families. In his leisure time, Dr. Ogbonna enjoys playing football, video games, reading books, and watching movies.`,
      linkedin: 'https://www.linkedin.com/in/samuel-diribe-094b142a5',
      image: Member2,
      bgClass: 'member2',
    },
    {
      name: 'Remi Owadokun',
      position: 'HEAD OF COACHING',
      bio: 'Remi is a certified health coach from the Institute of Integrative Nutrition. She has worked with over 1,000 men and women in Nigeria and the Diaspora in the last 8 years to lose weight since she lost 40kg herself in 2014. Her book “How I Lost 40kg, The Journey That Changed My Life” was a best-selling book on Amazon in the UK, US, and Canada. She helps her clients reconnect with themselves, rediscover their power, and take charge of their lives in the long term. Helping her clients maintain their results and equip them for life after their program. Losing weight is not just about physical transformation but also mental and emotional liberation, which affects every aspect of life. One, she has experienced it personally and is eager to guide others to experience it too. ',
      linkedin: 'https://www.linkedin.com/in/remi-owadokun-7a7382b8/',
      image: Member3,
      bgClass: 'member3',
    },
    {
      name: 'Adebimpe Aderemi',
      position: 'HEALTH COACH',
      bio: 'Adebimpe is a dedicated professional who holds certifications as a Holistic Wellness Health Coach and in nutrition and motivational interviewing. Eight years ago, her personal journey led to a transformative experience of shedding over 25kg. Fueled by this, she passionately helps others achieve their health, wellness, and weight loss goals. With a solid academic foundation and practical expertise, Coach Bimpe brings extensive experience to health coaching, guiding individuals successfully. Blending academic knowledge with personal experience, Coach Bimpe is well-prepared and driven to create a lasting impact in holistic wellness. Her mission centers around contributing to the positive transformation of individuals striving for optimal health.',
      linkedin: '',
      image: Member4,
      bgClass: 'member4',
    },
    {
      name: 'Dr. Victoria Ndy',
      position: 'Obesity Doctor',
      bio: `Dr. Victoria is a seasoned medical professional with over 5 years of diverse experience, and excels in diagnosing and treating common health conditions. Proficient in clinical assessments, accurate diagnoses, and personalized treatment plans, she has showcased expertise in hospitals and community-based placements.Her commitment to delivering top-notch patient care extends to her involvement in health tech, effectively integrating technological solutions into clinical practice for streamlined processes and enhanced outcomes. Her adeptness in leveraging health technology complements her strong foundation in traditional medical practices.
      `,
      linkedin: 'https://www.linkedin.com/in/victoria-abbey-488a3916a/',
      image: Member5,
      bgClass: 'member5',
    },
    {
      name: 'Dr. Bosah Chike',
      position: 'Obesity Doctor',
      bio: `Dr. Bosah is a Philippines-trained, Nigerian/UK-licensed medical doctor holding a master’s in public health. Dr Bosah is one of our leaders in the Qilo Care team and currently occupies the role of a metabolic health doctor. He has notably been a driving force in organizing and undertaking free medical missions in Nigeria and the Philippines, with a wealth of public health experience. He is constantly inspired by every progress he makes in medically assisting people to have and maintain a healthy body weight
      `,
      linkedin: '',
      image: Member6,
      bgClass: 'member6',
    },
  ];

  return (
    <Fragment>
      {hideSection && (
        <section className={styles.expertTeam}>
          <div className="container">
            <div className={styles.wrap}>
              <h2>
                The <span>experts</span> who <br />
                will guide you.
              </h2>

              <div className={styles.teamContainer}>
                <div className={styles.teamList}>
                  {memberTabs.map((member, index) => (
                    <button
                      className={`${styles.memberTabBtn} ${
                        memberTab === index ? styles.active : null
                      }`}
                      key={index}
                      onClick={() => handleMemberTab(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="31"
                        viewBox="0 0 30 31"
                        fill="none"
                      >
                        <path
                          d="M9.60513 9.85512L0 15.25L9.60512 20.6449L15 30.25L20.3949 20.6449L30 15.25L20.3949 9.85512L15 0.25L9.60513 9.85512Z"
                          className={styles[`${member.bgClass}`]}
                        />
                      </svg>
                      <div className={styles.bio}>
                        <h3>{member.name}</h3>
                        <p>{member.position}</p>
                      </div>
                    </button>
                  ))}
                </div>

                <div
                  className={`${styles.teamBio} ${
                    memberTabs[memberTab] && memberTabs[memberTab].bgClass
                      ? styles[memberTabs[memberTab].bgClass]
                      : null
                  }`}
                >
                  {memberTabs[memberTab] && (
                    <Fragment>
                      <div className={styles.top}>
                        <Image
                          src={memberTabs[memberTab].image}
                          alt="member image 1"
                        />
                        <div className={styles.name}>
                          <h3>{memberTabs[memberTab].name}</h3>
                          <p>{memberTabs[memberTab].position}</p>
                        </div>
                      </div>
                      <div className={styles.middle}>
                        <p>{memberTabs[memberTab].bio}</p>
                      </div>

                      {memberTabs[memberTab]?.linkedin && (
                        <div className={styles.bottom}>
                          <a
                            href="#0"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <LinkedinIcon />
                            <span>VISIT LINKEDIN</span>
                          </a>
                        </div>
                      )}
                    </Fragment>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
}
