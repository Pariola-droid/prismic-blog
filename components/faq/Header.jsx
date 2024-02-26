import React, { useState, useEffect } from 'react';
import { newLine } from '@/utils/formatLineBreaks';

import IconCancel from '../Icons/IconCancel';
import FaqStar from '../Icons/IconStar';
//
import styles from './styles/header.module.scss';

const FaqContent = {
  PROGRAM: [
    {
      id: 1,
      question: 'What is Qilo',
      answer:
        'Qilo is a metabolic health startup focused on revolutionizing weight care. Our approach is evidence-based, catering specifically to underserved communities. We believe that everyone deserves access to effective, personalized weight management solutions. Our program integrates the latest scientific research to provide tailored care for each individual.',
    },
    {
      id: 2,
      question: 'What happens after I register',
      answer: `After you register with Qilo, here's what you can expect  from us:\n\nInitial Assessment: We start with a comprehensive assessment to understand your unique health profile.\n
      Personalization: Based on your assessment, we tailor a program specifically for you.\n
      Pairing with a Doctor and Coach: If you're on the medical plan, you'll be paired with a qualified doctor and a personal coach who will guide you through your journey.\n
      Access to Tools and Resources: You'll gain access to a suite of evidence-based tools and resources, designed to support your weight care journey.`,
    },
    {
      id: 3,
      question: 'How is Qilo different from other weight loss programs',
      answer: `Qilo stands apart from other weight loss programs in several key ways:\n
      Culturally Appropriate: We offer a culturally sensitive approach, tailored to address the needs of each community we serve.\n
      Six Pillars of Metabolic Health: Our program is built on six foundational pillars of metabolic health, ensuring a comprehensive approach to wellness.\n
      Evidence-Based and Sustainable: We rely on scientific evidence to create sustainable plans that promote long-term health and well-being.\n
      Clinical Care and Behavior Change: Our core  focus is on integrating clinical care with effective behaviour change techniques.\n
      Relatability: Our program is designed to be realistic and relatable, ensuring it fits into your daily life seamlessly, offering a balanced and realistic approach to weight loss.
        `,
    },
    {
      id: 4,
      question: 'Do I get a personal coach',
      answer:
        'Yes! In our medical pathway, you will receive personalized coaching tailored to your individual needs and goals. For those on the wellness pathway, we offer group coaching sessions. Both options are designed to provide support, accountability, and guidance throughout your weight management journey.',
    },
    {
      id: 5,
      question: 'Who is my care team',
      answer:
        'Your care team  includes a professional and compassionate group of individuals committed to your health journey. This team comprises a licensed physician, who will oversee your medical care and guide you through clinical aspects, a coach, who will provide ongoing support and motivation, and a coordinator, who will ensure seamless communication and coordination throughout your experience with Qilo.',
    },
  ],
  ELIGIBILITY: [
    {
      id: 1,
      question: 'Who is eligible to join Qilo',
      answer: `Qilo is committed to providing accessible weight care and metabolic health services to a wide range of individuals. You are eligible to join Qilo if you:\n
      Are aged 18 years or older.\n
      Reside in a region where Qilo services are currently available (currently in the US and Nigeria).\n
      Have no history of eating disorders\n
      Are seeking support for weight management and metabolic health.\n
      Meet the BMI requirement.\n
      When you download the Qilo app, you'll be prompted to take an initial assessment. This assessment helps us understand your unique health needs and goals, and determines if you’re eligible. 
      `,
    },
    {
      id: 2,
      question: 'What conditions does Qilo treat',
      answer:
        'While Qilo is primarily focused on weight care, our program has shown to be beneficial in managing and potentially improving several related health conditions. Currently, we are working on offering dedicated treatment plans for chronic conditions such as diabetes and high blood pressure. However, our existing weight loss program has already helped many individuals manage conditions related to metabolic health. Participants have reported improvements in: Blood sugar levels, high blood pressure, PCOS, Diabetes etc.',
    },
  ],
  PRICING: [
    {
      id: 1,
      question: 'How can I cancel my subscription',
      answer: `You have the flexibility to cancel your subscription at any time, and the cancellation will take effect at the end of your current billing period. If you choose to cancel within the first two weeks of your start date, your account will be promptly cancelled, and no additional payments will be deducted.\n
      To initiate the cancellation process, you can either use the cancellation option within the Qilo app or send an email to hello@qilo.co, expressing your request for cancellation. Our team will ensure a smooth process and address any inquiries you may have.`,
    },
  ],
  MEDICATIONS: [
    {
      id: 1,
      question: 'Will I be given medications',
      answer:
        'We understand that each individual’s health journey is unique. Whether or not medications are part of your treatment plan depends on your specific health needs and goals. After a thorough assessment by our healthcare professionals, we will determine if medication is a suitable option for you.',
    },
    {
      id: 2,
      question: 'Why take medication',
      answer:
        'Medications can be an effective tool in managing various health conditions, including those related to metabolic health and weight management. When prescribed, they work alongside lifestyle changes to help you achieve and maintain your health goals more effectively.',
    },
    {
      id: 3,
      question: 'Does the medication interact with my other medications',
      answer:
        'Your safety is our utmost priority. Our healthcare team will carefully review your current medications to ensure that any prescriptions we provide do not have adverse interactions. It’s important that you share all relevant medical information with us to facilitate this process.',
    },
    {
      id: 4,
      question: 'What medications will be prescribed',
      answer: `We understand that each individual's journey towards better metabolic health is unique. Therefore, any medication prescribed is tailored to your personal health needs, following a comprehensive medical assessment. As examples, we often consider medications such as GLP-1 receptor agonists, which work by enhancing the body’s natural ability to lower blood sugar levels and often aid in weight management. Each medication option is carefully evaluated to ensure it aligns with your specific health profile and weight care goals.`,
    },
    {
      id: 5,
      question: 'Are the medications safe',
      answer:
        'Patient safety is a core principle at Qilo. All medications we prescribe have been clinically tested for safety and efficacy. However, as with any medication, there may be side effects or risks, which our healthcare team will discuss with you in detail if there are any applicable to you.',
    },
  ],
  OUTCOME: [
    {
      id: 1,
      question: 'What results will I see',
      answer: `Each weight loss journey is unique, but generally, our members experience consistent and healthy weight loss. On average, members lose about 1 to 2 pounds per week. It's important to remember that weight loss can vary based on individual circumstances, including dietary habits, exercise routines, and metabolic factors.`,
    },
    {
      id: 2,
      question: 'How long before I start seeing results',
      answer: `While the timeframe for seeing results can vary for each individual, many of our members begin to notice changes within the first few weeks of using the Qilo program. It's important to understand that weight loss and health improvements are a journey, not a race. Results can be influenced by several factors, including your starting point, your adherence to the program, your biology, and your overall lifestyle. We encourage patience and consistency for the best long-term outcomes.`,
    },
  ],
  PRIVACY: [
    {
      id: 1,
      question: 'Is my medical information protected',
      answer: `Yes, your medical information is fully protected. At Qilo, we understand the importance of privacy and security when it comes to your personal health data.
        In the United States, we comply with the Health Insurance Portability and Accountability Act (HIPAA), ensuring that all your personal health information is handled with the utmost confidentiality and security. Similarly, for our users in Nigeria, we adhere to the Nigeria Data Protection Regulation (NDPR) guidelines, which govern the use and safeguarding of personal data.
        `,
    },
  ],
};

const FaqCategory = [
  {
    title: 'Program',
    key: 'PROGRAM',
  },
  {
    title: 'Eligibility',
    key: 'ELIGIBILITY',
  },
  {
    title: 'Pricing',
    key: 'PRICING',
  },
  {
    title: 'Medications',
    key: 'MEDICATIONS',
  },
  {
    title: 'Outcome',
    key: 'OUTCOME',
  },
  {
    title: 'Privacy',
    key: 'PRIVACY',
  },
];

export default function Header() {
  const [activeFaqCategory, setActiveFaqCategory] = useState(
    FaqCategory[0]?.key
  );
  const [isOpenFaq, setIsOpenFaq] = useState(-1);
  const faqLength = 45;

  const handleTabChange = (tab) => {
    setActiveFaqCategory(tab);
    setIsOpenFaq(-1);
  };

  const handleOpenFaq = (identifier) => {
    const isOpen = isOpenFaq === identifier;

    if (isOpen) {
      setIsOpenFaq(-1);
    } else {
      setIsOpenFaq(identifier);
    }
  };

  useEffect(() => {
    setIsOpenFaq(FaqContent[activeFaqCategory][0].id);
  }, [activeFaqCategory]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.heading}>
            <h1>
              Frequently Asked Questions
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="69"
                height="73"
                viewBox="0 0 69 73"
                fill="none"
              >
                <path
                  d="M35.7213 61.4012C35.9237 62.894 39.3374 62.3338 50.2761 59.06C61.8529 55.587 64.2803 54.3995 63.4412 52.7986C62.2602 50.6113 35.456 58.9785 35.7213 61.4012Z"
                  fill="#36B887"
                />
                <path
                  d="M16.3132 11.6851C11.9007 12.6076 11.4915 13.4827 10.638 23.771C9.74538 34.3965 9.96055 36.3692 11.9379 36.7014C15.5258 37.2891 16.664 34.5511 18.4235 21.4635C19.7161 11.8071 19.5701 11.0042 16.3132 11.6851Z"
                  fill="#36B887"
                />
                <path
                  d="M43.8793 21.7557C40.6977 22.377 39.6739 23.249 36.72 27.7921C28.0092 41.3022 20.7153 50.2615 26.884 48.9279C29.4054 48.4008 31.2838 46.0563 41.9985 30.5921C47.8811 22.0155 48.1413 20.9523 43.8793 21.7557Z"
                  fill="#36B887"
                />
              </svg>
            </h1>
            <p>
              Every financial investment in your health is a way of saving your
              future self from bigger and mostly incurable health expenditures.
            </p>
          </div>
          {/*  */}
          <section className={styles.faqContainer}>
            <aside className={styles.faqCategory}>
              <div className={styles.faqCategory_scroll}>
                <ul className={styles.faqCategory_wrap}>
                  {FaqCategory.map((category, index) => (
                    <li
                      key={index}
                      className={`${styles.faqCategory_item} ${
                        activeFaqCategory === category.key
                          ? styles.active
                          : null
                      }
                    `}
                    >
                      <button onClick={() => handleTabChange(category.key)}>
                        {category.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
            {/*  */}
            <div className={styles.faqContent}>
              {FaqContent[activeFaqCategory].map((faq) => (
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
                    className={`${styles.question}
                    ${faq.question.length < faqLength ? styles.md : ''}
                    `}
                    onClick={() => handleOpenFaq(faq.id)}
                  >
                    <div className={styles.questionWrap}>
                      <FaqStar className={styles.starIcon} />
                      <h4>{faq.question}</h4>
                    </div>
                    <IconCancel className={styles.plusIcon} />
                  </div>
                  {/* Faq Answers */}
                  <div className={styles.answer}>
                    {newLine(faq.answer || '')}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </header>
  );
}
