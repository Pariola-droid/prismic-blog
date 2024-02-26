import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
//
import Fire from '../../assets/pages/program/diagnosing/fire.svg';
import Coach from '../../assets/pages/program/diagnosing/coach.svg';
import Hetro from '../../assets/pages/program/diagnosing/hetro.svg';
import List from '../../assets/pages/program/diagnosing/list.svg';
import Worried from '../../assets/pages/program/diagnosing/worried.svg';
import Doctor from '../../assets/pages/program/diagnosing/doctor.svg';
//
import Hearts from '../../assets/pages/program/diagnosing/hearts.svg';
//
import styles from './styles/diagnosing.module.scss';

export default function Diagnosing() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;

  const Diagnosis = [
    {
      icon: locale === 'en-US' ? Coach : Fire,
      title: `${t('Program.diagnose.problems.one.title')}`,
      para: `${t('Program.diagnose.problems.one.text')}`,
    },
    {
      icon: locale === 'en-US' ? List : Hetro,
      title: `${t('Program.diagnose.problems.two.title')}`,
      para: `${t('Program.diagnose.problems.two.text')}`,
    },
    {
      icon: locale === 'en-US' ? Doctor : Worried,
      title: `${t('Program.diagnose.problems.three.title')}`,
      para: `${t('Program.diagnose.problems.three.text')}`,
    },
  ];

  return (
    <section className={styles.diagnosing}>
      <div className="container">
        <div className={styles.wrap}>
          <Image
            src={Hearts}
            className={styles.hearts}
            alt="hearts"
            data-animation="down-up"
          />

          <h2>
            {t('Program.diagnose.title')}
            <span>
              {t('Program.diagnose.titleSpan')}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="250"
                height="13"
                viewBox="0 0 250 13"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M249.653 4.56656C248.636 3.15189 239.906 2.55624 213.669 2.05986C189.187 1.58831 160.686 0.223262 110.89 0.967828C72.8275 1.53866 25.434 3.822 25.434 5.08776C25.434 6.00606 27.2817 6.03088 44.9272 5.21186C61.2332 4.46729 69.594 4.29356 79.8026 4.09501C38.876 6.03088 30.1456 7.29665 8.34273 8.51277C-5.33026 9.28216 2.66105 11.491 7.64984 11.2677C7.69604 11.2677 71.3032 8.48795 77.3082 8.63686C77.8625 8.66168 71.8113 9.10842 63.82 9.62962C41.509 11.1188 45.8049 13.6004 62.5266 12.4587C118.789 8.61179 171.726 7.42049 212.514 9.08335C225.402 9.60455 226.833 9.60455 226.833 8.95926C226.833 7.81759 223.323 6.94918 217.826 6.77545C209.234 6.47762 176.16 5.63353 161.194 5.38534C160.039 5.36052 160.593 4.88921 161.61 4.83957C167.707 4.51693 216.117 4.76487 235.148 5.11233C249.144 5.36052 250.161 5.33595 249.653 4.56656Z"
                  fill="#8F4949"
                />
              </svg>
            </span>
          </h2>

          <div className={styles.innerWrap}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="713"
              height="508"
              viewBox="0 0 713 508"
              fill="none"
              className={styles.line}
            >
              <path
                d="M2.26638 1.06617C2.26638 1.06617 67.1246 127.26 134.41 179.573C218.479 244.936 529.46 332.834 613.662 398.023C658.099 432.426 710.674 505.83 710.674 505.83"
                stroke="#043D3B"
                strokeWidth="4.5"
                strokeLinejoin="round"
                strokeDasharray="18 18"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="158"
              height="1002"
              viewBox="0 0 158 1002"
              fill="none"
              className={styles.lineMd}
            >
              <path
                d="M72.0205 1000.78C72.0205 1000.78 153.983 853.803 155.45 755.853C157.283 633.47 0.469657 287.514 2.01129 165.129C2.82488 100.542 38.5506 1.44096 38.5506 1.44096"
                stroke="#043D3B"
                strokeWidth="4"
                strokeLinejoin="round"
                strokeDasharray="16 16"
              />
            </svg>

            {Diagnosis.map((diagnose, index) => (
              <div className={styles.rows} key={index}>
                <div className={styles.col}>
                  <div className={styles.icon}>
                    <Image src={diagnose.icon} alt="icon" />
                  </div>

                  <div className={styles.texts}>
                    <h5>{diagnose.title}</h5>
                    <p>{diagnose.para}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
