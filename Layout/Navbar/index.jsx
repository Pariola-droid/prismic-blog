import React, { useState, Fragment, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
//
import Logo from '../../public/brand/qilo-logo-default.svg';
import NGN from '../../assets/common/navbar/ngn.svg';
import GHANA from '../../assets/common/navbar/ghana.svg';
import USA from '../../assets/common/navbar/usa.svg';
//
import styles from './navbar.module.scss';

export default function Navbar() {
  const router = useRouter();
  const { locale } = useRouter();
  const { t } = useTranslation('common');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (isNavOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.removeProperty('overflow');
    }

    return () => {
      document.documentElement.style.removeProperty('overflow');
    };
  }, [isNavOpen]);

  const onChangeLanguage = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  // My locales are en-US, GH and NG
  const localeMap = {
    gh: {
      name: 'Ghana',
      flag: GHANA,
      shortLabel: 'GH',
    },
    ng: {
      name: 'Nigeria',
      flag: NGN,
      shortLabel: 'NG',
    },
    'en-US': {
      name: 'United States',
      flag: USA,
      shortLabel: 'US',
    },
  };

  const currentLocale = localeMap[locale];

  return (
    <Fragment>
      <nav className={styles.nav}>
        <div className="container">
          <div className={styles.wrap}>
            <div className={styles.right}>
              <div className={styles.actions}>
                <div className={styles.lng}>
                  <div className={styles.lngBtn} arial-label="lang button">
                    <Image
                      src={currentLocale.flag}
                      alt="Locale flag"
                      width={20}
                      height={15}
                    />
                    <span>{currentLocale.shortLabel}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="5"
                      viewBox="0 0 8 5"
                      fill="none"
                    >
                      <path
                        d="M6.69251 0.762695H1.31527C0.653525 0.762695 0.316063 1.55729 0.775572 2.03348L3.37148 4.72367C3.65934 5.02198 4.13463 5.03018 4.43261 4.74197L7.21394 2.05179C7.69855 1.58305 7.36673 0.762695 6.69251 0.762695Z"
                        fill="#989898"
                      />
                    </svg>
                    {/*  */}
                    <div className={styles.langDropdown}>
                      <ul className={styles.lngList}>
                        {Object.keys(localeMap).map((locale) => (
                          <li
                            key={locale}
                            className={
                              currentLocale === localeMap[locale]
                                ? styles.activeLocale
                                : ''
                            }
                          >
                            <button onClick={() => onChangeLanguage(locale)}>
                              <Image
                                src={localeMap[locale].flag}
                                alt="Locale flag"
                              />
                              <small>{localeMap[locale].name}</small>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  role="button"
                  className={styles.hamburger}
                  data-open={isNavOpen}
                  onClick={handleNavOpen}
                >
                  <span></span>
                  <span></span>
                </div>

                <div className={styles.ctas}>
                  <button>
                    <a
                      href="https://app.qilo.co/sign-in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Login
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://app.qilo.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get started
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
