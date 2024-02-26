import React from 'react';
import Image from 'next/image';
import LocalizedImage from '@/design-system/LocalizedImage';
//
import Human1 from '../../assets/pages/how-it-works/post-header/human1.svg';
import Human1US from '../../assets/pages/how-it-works/post-header/human1-us.svg';
import Human2 from '../../assets/pages/how-it-works/post-header/human2.svg';
import Human3 from '../../assets/pages/how-it-works/post-header/human3.svg';
import Human3US from '../../assets/pages/how-it-works/post-header/human3-us.svg';
import Human4 from '../../assets/pages/how-it-works/post-header/human4.svg';
//
import Arcs from '../../assets/pages/how-it-works/post-header/arcs.svg';
import Bulb from '../../assets/pages/how-it-works/post-header/bulb.svg';
import Twisted from '../../assets/pages/how-it-works/post-header/twisted.svg';
import SpiralSmall from '../../assets/pages/how-it-works/post-header/spiral-small.svg';
import SpiralBig from '../../assets/pages/how-it-works/post-header/spiral-big.svg';
import Decor from '../../assets/pages/how-it-works/post-header/decor.svg';
//
import styles from './styles/post-header.module.scss';

export default function PostHeader() {
  return (
    <section className={styles.postHeader}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.heading}>
            <h2>
              It's not your willpower;
              <br /> it's your <span>biology</span>
            </h2>
            <p>
              Your weight struggles are more about biology than just sheer
              willpower or self-discipline
            </p>
          </div>

          <div className={styles.grided}>
            <Image src={Decor} className={styles.spiralDecor} alt="decor" />
            {/*  */}
            <div className={styles.col}>
              <div className={styles.colWrap}>
                <div className={styles.textWrap}>
                  <h3>Health coaching</h3>
                  <p>
                    Get paired with expert health coaches who provide
                    personalized guidance, helping you understand and work with
                    your body's unique needs.
                  </p>
                </div>

                <div className={styles.imgWrap}>
                  <Image
                    src={Twisted}
                    className={styles.decor}
                    alt="decor"
                    data-animation="twisted-up"
                  />
                  <LocalizedImage
                    srcinitial={Human1}
                    srcus={Human1US}
                    classNameinitial={styles.img}
                    classNameus={styles.img}
                    altinitial="human images"
                  />
                </div>
              </div>
            </div>
            {/*  */}
            <div className={styles.col}>
              <div className={styles.colWrap}>
                <div className={styles.textWrap}>
                  <h3>
                    Medication-assisted
                    <br /> weight loss
                  </h3>
                  <p>
                    Qilo's medical plan includes safe and effective medication
                    options, carefully prescribed by healthcare professionals,
                    to complement your body's natural processes.
                  </p>
                </div>

                <div className={styles.imgWrap}>
                  <Image
                    src={Bulb}
                    className={styles.decor}
                    alt="decor"
                    data-animation="up-down"
                  />
                  <Image
                    src={Human2}
                    className={styles.img}
                    alt="human images"
                  />
                </div>
              </div>
            </div>
            {/*  */}
            <div className={styles.col}>
              <div className={styles.colWrap}>
                <div className={styles.textWrap}>
                  <h3>
                    Supervised by <br /> medical experts
                  </h3>
                  <p>
                    With Qilo, you have access to medical professionals who can
                    identify and address underlying health issues, ensuring your
                    weight loss plan aligns with your biology.
                  </p>
                </div>

                <div className={styles.imgWrap}>
                  <Image
                    src={SpiralSmall}
                    className={styles.decor}
                    alt="decor"
                  />
                  <Image
                    src={SpiralBig}
                    className={styles.decor}
                    alt="decor"
                    data-animation="rotate-down"
                  />
                  <LocalizedImage
                    srcinitial={Human3}
                    srcus={Human3US}
                    classNameinitial={styles.img}
                    classNameus={styles.img}
                    altinitial="human images"
                  />
                </div>
              </div>
            </div>
            {/*  */}
            <div className={styles.col}>
              <div className={styles.colWrap}>
                <div className={styles.textWrap}>
                  <h3>
                    Curriculum on
                    <br /> metabolic health
                  </h3>
                  <p>
                    Qilo offers a curriculum focused on metabolic health,
                    delivering daily bite-sized content to educate and empower
                    you about your body's metabolic processes.
                  </p>
                </div>

                <div className={styles.imgWrap}>
                  <Image
                    src={Arcs}
                    className={styles.decor}
                    alt="decor"
                    data-animation="scale-out"
                  />
                  <Image
                    src={Human4}
                    className={styles.img}
                    alt="human images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
