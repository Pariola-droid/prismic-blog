import React from 'react';
import { useTranslation } from 'next-i18next';
import useCurrencyFormatter from '@/utils/useCurrencyFormatter';
//
import CheckRingIcon from '../Icons/CheckRingIcon';
import styles from './styles/creating.module.scss';

export default function CreatingWeightLoss() {
  const { t } = useTranslation('common');
  const { formatCurrency } = useCurrencyFormatter();

  const commonFeatures = [
    'Daily Health Tips',
    'Daily Reflection',
    'Workout Routines',
    'Personalized meal plan by our Dietician',
  ];

  const pricingData = [
    {
      planName: 'Wellness Program',
      priceAmount: `${t('Pricing.plan.monthly.wellness')}`,
      description: 'Recommended for Individuals with BMI BELOW 30',
      features: [
        ...commonFeatures,
        'Group Coaching Calls',
        'Check-ins from Health Coach',
      ],
    },
    {
      planName: 'Medical Program',
      priceAmount: `${t('Pricing.plan.monthly.medical')}`,
      description: 'Recommended for Individuals with BMI above 30',
      features: [
        ...commonFeatures,
        'Coaching Calls',
        'Video Calls with your Doctor',
        'Video Calls with your Health Coach',
        'A monthly prescription from your doctor',
      ],
    },
  ];

  return (
    <section className={styles.creating}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.heading}>
            <h2>
              Creating your weight loss{' '}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="164"
                  height="72"
                  viewBox="0 0 164 72"
                  fill="none"
                >
                  <path
                    d="M128.433 17.4666C104.281 0.781301 54.5603 -2.5243 27.8037 6.62144C15.6181 10.7868 -7.50977 24.2432 3.75457 40.7177C5.74129 43.6236 8.27771 46.0893 10.9434 48.2766C40.2804 72.3473 84.6862 75.2939 120.067 66.9203C125.344 65.6715 130.579 64.0717 135.503 61.6479C139.186 59.8351 142.816 57.4817 145.851 54.5986C154.738 46.1583 153.764 36.5347 146.247 27.6649C137.532 17.3811 124.51 13.0186 112.094 10.0276C101.238 7.41227 90.2693 5.89823 79.1423 5.19363C58.2743 3.87205 34.1733 2.80606 15.3425 13.364C7.11765 17.9756 -2.38169 28.7496 3.05478 38.9646C8.94592 50.0335 25.2147 55.2534 36.1651 58.6948C65.706 67.9789 113.831 70.5251 143.092 58.3243C146.247 57.0086 149.428 55.8099 152.33 53.9376C154.623 52.4582 156.854 50.7277 158.838 48.8058C172.894 35.1853 146.424 22.5999 136.894 19.8709C106.913 11.2858 62.5195 -1.23201 32.8273 9.14036"
                    stroke="#36B887"
                    strokeWidth="1.5"
                    strokeMiterlimit="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                plan
              </span>
            </h2>
            <p>{t('Program.weightPlan.paragraph')}</p>
          </div>

          <div className={styles.grid}>
            {pricingData.map((plan, index) => (
              <div className={styles.col} key={index}>
                <div className={styles.top}>
                  <div className={styles.head}>
                    <h3>{plan.planName}</h3>
                    <p>{plan.description}.</p>
                  </div>

                  <h3 className={styles.price}>
                    {formatCurrency(plan.priceAmount)} <span>/per month</span>
                  </h3>

                  <div className={styles.feats}>
                    {plan.features.map((feat, index) => (
                      <div className={styles.ft}>
                        <CheckRingIcon />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.bottom}>
                  <button>
                    <a
                      href="https://app.qilo.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Started
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
