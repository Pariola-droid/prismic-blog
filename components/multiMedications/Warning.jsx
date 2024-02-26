import React, { useEffect, useState, Fragment } from 'react';
import IconInfo from './IconInfo';
import { newLine } from '@/utils/formatLineBreaks';
//
import styles from './styles/warning.module.scss';

export default function Warning({ warningSection }) {
  const WarningTabs = Object.keys(warningSection || {});
  const [warningTab, setWarningTab] = useState(WarningTabs[0]);

  const handleTab = (tab) => {
    setWarningTab(tab);
  };

  return (
    <section className={styles.warning}>
      <div className="container">
        <div className={styles.wrap}>
          <h2>Warnings</h2>

          {WarningTabs.map((tab) => (
            <div
              key={tab}
              className={styles.tabContent}
              style={{
                display: warningTab === tab ? 'flex' : 'none',
              }}
            >
              <IconInfo
                color={warningTab === 'SIDE_EFFECTS' ? '#3E9FA5' : '#9B7E62'}
              />
              <h3>{warningSection[tab].heading}</h3>
              <p>{newLine(warningSection[tab].content)}</p>
            </div>
          ))}

          <div className={styles.tabSection}>
            {WarningTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTab(tab)}
                style={{
                  borderColor: warningTab === tab && 'currentColor',
                }}
              >
                {warningSection[tab].label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
