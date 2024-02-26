import React, { useEffect, useState } from 'react';
import Image from 'next/image';
//
import IconPlus from './IconPlus';
import { newLine } from '@/utils/formatLineBreaks';
import FaqImage from '../../assets/pages/multi-medication/faq-image.jpg';
//
import styles from './styles/frequent.module.scss';

const faqData = [
  {
    id: 1,
    question: 'Generic Name and Class',
    answer:
      'At Qilo, our mission is to help as many Africans as possible lose weight in a healthy, sustainable manner. We want to be at the forefront of solving the obesity and overweight crises through offering a comprehensive.',
  },
  {
    id: 2,
    question: 'How does Wegovy aid weight loss?',
    answer:
      'At Qilo, our mission is to help as many Africans as possible lose weight in a healthy, sustainable manner. We want to be at the forefront of solving the obesity and overweight crises through offering a comprehensive.',
  },
  {
    id: 3,
    question: 'Is Wegovy effective for weight loss?',
    answer:
      'At Qilo, our mission is to help as many Africans as possible lose weight in a healthy, sustainable manner. We want to be at the forefront of solving the obesity and overweight crises through offering a comprehensive.',
  },
  {
    id: 4,
    question: 'How much does Wegovy Cost?',
    answer:
      'Once you join the program, you’ll be given details on how to cancel your subscription.',
  },
  {
    id: 5,
    question: 'How is Wegovy administered?',
    answer:
      'Once you join the program, you’ll be given details on how to cancel your subscription.',
  },
  {
    id: 6,
    question: 'Understanding your Wegovy dosage',
    answer:
      'Once you join the program, you’ll be given details on how to cancel your subscription.',
  },
];

export default function FrequentQuestions({ frequentQuestions }) {
  const [isOpenFaq, setIsOpenFaq] = useState(-1);
  const faqLength = 35;

  const handleOpenFaq = (identifier) => {
    const isOpen = isOpenFaq === identifier;

    if (isOpen) {
      setIsOpenFaq(-1);
    } else {
      setIsOpenFaq(identifier);
    }
  };

  return (
    <section className={styles.frequent}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.image}>
            <Image
              src={FaqImage}
              alt="Wegovy medication"
              className={styles.img}
              placeholder="blur"
            />
          </div>
          <div className={styles.faqSection}>
            {frequentQuestions?.map((faq) => (
              <div
                key={faq.id}
                role="button"
                className={`${styles.faq} ${
                  isOpenFaq === faq.id ? styles.open : ''
                }
                ${faq.question.length < faqLength ? styles.md : ''}
              `}
                onClick={() => handleOpenFaq(faq.id)}
              >
                <div
                  className={`${styles.question}
                    ${faq.question.length < faqLength ? styles.md : ''}
                    `}
                >
                  <h4>{newLine(faq.question)}</h4>
                  <IconPlus className={styles.plusIcon} />
                </div>
                {/* Faq Answers */}
                <div className={styles.answer}>{newLine(faq.answer)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
