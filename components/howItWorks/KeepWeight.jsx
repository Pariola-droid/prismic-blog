import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
//
import IconCancel from '../Icons/IconCancel';
import FaqStar from '../Icons/IconStar';
//
import styles from './styles/keep-weight.module.scss';

export default function KeepWeight() {
  const { t } = useTranslation('common');
  const [isOpenFaq, setIsOpenFaq] = useState(-1);
  const faqLength = 45;

  const faqData = [
    {
      id: 1,
      question: t('HowItWorks.keepWeight.faq.one.question'),
      answer: t('HowItWorks.keepWeight.faq.one.answer'),
    },
    {
      id: 2,
      question: t('HowItWorks.keepWeight.faq.two.question'),
      answer: t('HowItWorks.keepWeight.faq.two.answer'),
    },
    {
      id: 3,
      question: t('HowItWorks.keepWeight.faq.three.question'),
      answer: t('HowItWorks.keepWeight.faq.three.answer'),
    },
    {
      id: 4,
      question: t('HowItWorks.keepWeight.faq.four.question'),
      answer: t('HowItWorks.keepWeight.faq.four.answer'),
    },
  ];

  const handleOpenFaq = (identifier) => {
    const isOpen = isOpenFaq === identifier;

    if (isOpen) {
      setIsOpenFaq(-1);
    } else {
      setIsOpenFaq(identifier);
    }
  };

  return (
    <section className={styles.keepWeight}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.leftContent}>
            <h2>Keep the weight off forever</h2>
            <p>
              Maintaining your weight loss is not just a goal; it's a lifestyle.
              With Qilo, you're equipped with the tools, knowledge, and support
              to keep the weight off forever. Our program focuses on sustainable
              habits, continuous learning, and a supportive community that
              empowers you to make lasting changes. By understanding the
              principles behind long-term weight management and applying them to
              your daily life, you'll not only reach your target weight but also
              maintain it.
            </p>
          </div>

          <div className={styles.rightContent}>
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
          </div>
        </div>
      </div>
    </section>
  );
}
