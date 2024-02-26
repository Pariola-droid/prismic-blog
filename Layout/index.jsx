import React, { Fragment, useEffect, useRef } from 'react';
import MetaData from '@/components/Meta';
import Navbar from './Navbar';
import Footer from './Footer';
import gsap from 'gsap';
// import useSmoothScroll from '@/animations/scroll';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

export default function Layout({ children, title, description }) {
  // useSmoothScroll();

  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      <MetaData
        customMeta={{
          title: title,
          description: description,
        }}
      />
      <Navbar />
      <div className="layout">{children}</div>
    </ReactLenis>
  );
}
