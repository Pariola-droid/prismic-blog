import React from 'react';
import Image from 'next/image';
import LocalizedImage from '@/design-system/LocalizedImage';
//
import IconPills from '../../assets/pages/medications/post-header/icon-pills.svg';
import Human1 from '../../assets/pages/medications/post-header/human1.svg';
import Human1US from '../../assets/pages/medications/post-header/human1-us.svg';
import Human2 from '../../assets/pages/medications/post-header/human2.svg';
import Human2US from '../../assets/pages/medications/post-header/human2-us.svg';
import Human2Mobile from '../../assets/pages/medications/post-header/human2-mobile.svg';
import Decor1 from '../../assets/pages/medications/post-header/decor1.svg';
import Decor2 from '../../assets/pages/medications/post-header/decor2.svg';
//
import styles from './styles/post-header.module.scss';

export default function PostHeader() {
  return (
    <section className={styles.postHeader}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.col}>
            <div className={`${styles.colWrap} ${styles.left}`}>
              <div className={styles.content}>
                <h4>
                  The science behind weight loss
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="240"
                      height="68"
                      viewBox="0 0 240 68"
                      fill="none"
                    >
                      <path
                        d="M186.831 20.2771C150.487 3.59805 77.653 -2.57617 39.1555 4.01179C21.6227 7.0122 -11.2992 17.7425 6.2061 33.4072C9.29356 36.1702 13.1558 38.569 17.1891 40.7235C61.5771 64.4335 126.626 69.9426 177.77 64.606C185.398 63.8101 192.942 62.6931 199.98 60.8088C205.244 59.3995 210.394 57.4963 214.644 55.0747C227.085 47.9855 225.048 39.193 213.502 30.6665C200.116 20.7807 180.816 15.9914 162.491 12.4851C146.466 9.41916 130.349 7.34516 114.051 5.99532C83.4864 3.46365 48.2155 0.95737 21.3848 9.33264C9.66588 12.9909 -3.52109 22.1581 5.07199 31.772C14.3837 42.1898 38.4798 47.9642 54.6942 51.7855C98.4356 62.0944 168.891 67.4778 210.851 58.2784C215.376 57.2863 219.946 56.402 224.065 54.8889C227.32 53.6933 230.468 52.2659 233.243 50.6491C252.904 39.1906 213.436 26.0828 199.342 22.9985C155.004 13.2956 89.361 -0.895509 46.654 6.61772"
                        stroke="#5F4086"
                        stroke-width="1.5"
                        stroke-miterlimit="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>{' '}
                    medication
                  </span>
                </h4>
                <p>
                  Weight loss medication works by interacting with your body's
                  natural processes. Some ways it works include making you feel
                  fuller for longer, curbing hunger, and reducing cravings.
                  <br />
                  <br />
                  In the brain's reward center, it helps calm food noise - the
                  constant thoughts about food, easing the burden of
                  food-related distractions.
                  <br />
                  <br />
                  These medications also help in regulating blood sugar levels,
                  and can even adjust the body's set point, redefining what it
                  considers a healthy weight, ultimately supporting sustainable
                  weight loss.
                </p>
              </div>
              {/*  */}
              <div className={styles.imgWrap}>
                <Image
                  src={Decor1}
                  className={styles.decor}
                  alt="decor - illustration"
                  data-animation="scale-in"
                />
                <LocalizedImage
                  srcinitial={Human1}
                  srcus={Human1US}
                  classNameinitial={styles.img}
                  classNameus={styles.img}
                  altinitial="human illustration"
                />
              </div>
            </div>
          </div>

          <div className={styles.col}>
            <div className={`${styles.colWrap} ${styles.right}`}>
              <div className={styles.content}>
                <div className={styles.icon}>
                  <Image src={IconPills} alt="icon - pills" />
                </div>
                <h4>The potential of GLP-1s: A weight loss game-changer</h4>
                <p>
                  Scientists have uncovered that our bodies have this thing
                  called GLP-1, a natural hormone that helps control our
                  appetite and weight. Now, researchers have created medications
                  that mimic this hormone. It's not a magic pill; it's just
                  science working with our brains and guts to make losing weight
                  a bit easier.
                </p>
              </div>
              {/*  */}
              <div className={styles.imgWrap}>
                <Image
                  src={Decor2}
                  className={styles.decor}
                  alt="decor - illustration"
                  data-animation="desktop-twisted-down"
                />
                <LocalizedImage
                  srcinitial={Human2}
                  srcus={Human2US}
                  classNameinitial={styles.img}
                  classNameus={styles.img}
                  altinitial="human illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
