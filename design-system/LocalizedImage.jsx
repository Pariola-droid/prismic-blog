import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function LocalizedImage(props) {
  const router = useRouter();
  const { locale } = router;

  return (
    <Image
      src={
        locale === 'en-US'
          ? props?.srcus || props?.srcinitial
          : props?.srcinitial
      }
      alt={
        locale === 'en-US'
          ? props?.altus || props?.altinitial
          : props?.altinitial
      }
      className={
        locale === 'en-US' ? props?.classNameus : props?.classNameinitial
      }
      {...props}
    />
  );
}
