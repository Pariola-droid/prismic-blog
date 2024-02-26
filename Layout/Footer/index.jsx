import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as ga from '@/lib/ga';
import { useRouter } from 'next/router';
//
import Logo from '../../public/brand/qilo-logo-white.svg';
import Facebook from '@/components/Icons/IconFacebook';
import Twitter from '@/components/Icons/IconTwitter';
import Instagram from '@/components/Icons/IconInstagram';
import IconYoutube from '@/components/Icons/IconYoutube';
//
import styles from './footer.module.scss';

export default function Footer() {
  const router = useRouter();
  const { locale } = router;
  const Year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.col}>
            <h4>Get the latest Qilo news and updates</h4>

            <form className={styles.input}>
              <input type="email" placeholder="Your email here" required />
              <button type="submit">Subscribe</button>
            </form>

            <ul className={styles.socials}>
              <li>
                <a
                  href="https://www.youtube.com/@qilohealth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconYoutube />
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/theqilolife"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook />
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/qilohealth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/qilohealth/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
              </li>
            </ul>
          </div>

          <small className={styles.mdShow}>
            © {Year} All Rights Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}
