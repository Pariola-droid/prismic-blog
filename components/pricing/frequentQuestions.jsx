import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
//
import IconCancel from '../Icons/IconCancel';
import FaqStar from '../Icons/IconStar';
import Human1 from '../../assets/pages/pricing/faq/human1.jpg';
import Human1US from '../../assets/pages/pricing/faq/human1-us.webp';
import Human2 from '../../assets/pages/pricing/faq/human2.jpg';
import Human2US from '../../assets/pages/pricing/faq/human2-us.webp';
import Star from '../../assets/pages/home/wholesome/star.svg';
import Circle from '../../assets/pages/home/wholesome/circle.svg';
import PrimaryOutlineButton from '../common/PrimaryOutlineButton';
//
import useWindowSize from '@/utils/useWindowSize';
import styles from './styles/faq.module.scss';
import LocalizedImage from '@/design-system/LocalizedImage';

const faqData = [
  {
    id: 1,
    question: 'How do I renew my membership?',
    answer:
      'Your membership will automatically renew at the end of each monthly billing cycle.',
  },
  {
    id: 2,
    question: 'Can I sign up for a trial?',
    answer: 'Certainly! We offer a 7-day trial for both of our plans.',
  },
  {
    id: 3,
    question:
      'Is the cost of medication included in the plan subscription fee?',
    answer:
      'No, medication costs are not included in the plan subscription fee.',
  },
  {
    id: 4,
    question: 'Is my medical information protected?',
    answer:
      'Absolutely. As a healthcare company, we prioritise the protection of your privacy. We have implemented rigorous security protocols to safeguard your medical information.',
  },
];

export default function FrequentQuestions() {
  const faqLength = 45;
  const screenSizeThreshold = 990;
  const windowSize = useWindowSize();
  const faqContainer = useRef(null);
  const [isOpenFaq, setIsOpenFaq] = useState(-1);

  const handleOpenFaq = (identifier) => {
    const isOpen = isOpenFaq === identifier;

    if (isOpen) {
      setIsOpenFaq(-1);
    } else {
      setIsOpenFaq(identifier);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const hangers = [
    {
      ref: useRef(null),
      start: 'top 180%',
      end: '=+700',
    },
    {
      ref: useRef(null),
      start: 'top 100%',
      end: '=+700',
    },
  ];

  useEffect(() => {
    if (windowSize.width > screenSizeThreshold) {
      gsap.set(hangers[0].ref.current, {
        x: '800',
      });

      gsap.set(hangers[1].ref.current, {
        y: '500',
      });

      hangers.map((hanger, index) =>
        gsap
          .timeline({
            scrollTrigger: {
              trigger: faqContainer.current,
              start: hanger.start,
              end: `=+1000`,
              scrub: 1,
            },
          })
          .to(hanger.ref.current, {
            duration: index === 0 ? 0.5 : 0.5,
            rotate: index === 0 ? -15 : 15,
            // right: () => {
            //   if (index === 0) {
            //     return 'calc(10% - 9.9rem)';
            //   } else if (index === 1) {
            //     return 'calc(20% - 1.9rem)';
            //   } else {
            //     return '0';
            //   }
            // },
            x: index === 0 ? 0 : undefined,
            y: index === 1 ? 0 : undefined,
          })
      );
    }
  }, [faqContainer, hangers, windowSize]);

  return (
    <section ref={faqContainer} className={styles.faqSection}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.heading}>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className={styles.innerWrap}>
            <div className={styles.leftContent}>
              {faqData.map((faq) => (
                <div
                  key={faq.id}
                  role="button"
                  className={`${styles.faq} ${
                    isOpenFaq === faq.id ? styles.open : ''
                  }
                  ${faq.question.length < faqLength ? styles.md : ''}
              `}
                >
                  <div
                    className={styles.question}
                    onClick={() => handleOpenFaq(faq.id)}
                  >
                    <div className={styles.questionWrap}>
                      <FaqStar className={styles.starIcon} />
                      <h4>{faq.question}</h4>
                    </div>
                    <IconCancel className={styles.plusIcon} />
                  </div>
                  {/* Faq Answers */}
                  <div className={styles.answer}>{faq.answer}</div>
                </div>
              ))}

              <PrimaryOutlineButton
                text={'Get started with Qilo today'}
                link={'https://app.qilo.co/'}
                customStyles={{
                  color: '#043D3B',
                }}
              />
            </div>

            <div className={styles.hanging}>
              <div className={styles.hanger} ref={hangers[0].ref}>
                <div className={styles.top}>
                  <LocalizedImage
                    srcus={Human1US}
                    srcinitial={Human1}
                    altinitial="Qilo user"
                  />
                </div>
                <div className={styles.bottom}>
                  <div className={styles.stack}>
                    <span></span>
                    <span></span>
                  </div>
                  <div className={styles.icon}>
                    <Image src={Star} alt="star" />
                  </div>
                </div>
              </div>

              <div className={styles.hanger} ref={hangers[1].ref}>
                <div className={styles.top}>
                  <LocalizedImage
                    srcus={Human2US}
                    srcinitial={Human2}
                    altinitial="Qilo user"
                  />
                </div>
                <div className={styles.bottom}>
                  <div className={styles.stack}>
                    <span></span>
                    <span></span>
                  </div>
                  <div className={styles.icon}>
                    <Image src={Circle} alt="star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
