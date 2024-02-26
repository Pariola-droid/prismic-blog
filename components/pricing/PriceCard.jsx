import React from 'react';
import useCurrencyFormatter from '@/utils/useCurrencyFormatter';
//
import styles from './styles/price-card.module.scss';

export default function PriceCard({ pricing, planType, variantGreen }) {
  const { formatCurrency } = useCurrencyFormatter();

  return (
    <div
      className={`${styles.priceCard} ${variantGreen ? styles.greenCard : ''}`}
    >
      <div
        className={`${styles.priceCard_wrap} ${
          variantGreen ? styles.greenCard : ''
        }`}
      >
        <div className={styles.content}>
          <div className={styles.tag}>{pricing.planName}</div>
          <div className={styles.texts}>
            <h4>
              {formatCurrency(pricing.priceAmount)}
              <sub>/{planType}</sub>
            </h4>
            <p>{pricing.description}</p>
          </div>
          <ul>
            {pricing.features?.map((feature, index) => (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M18 33C26.25 33 33 26.25 33 18C33 9.75 26.25 3 18 3C9.75 3 3 9.75 3 18C3 26.25 9.75 33 18 33Z"
                    fill="#36B887"
                  />
                  <path
                    d="M11.625 17.9999L15.87 22.2449L24.375 13.7549"
                    stroke="white"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <button>Choose Plan</button>
      </div>
    </div>
  );
}
