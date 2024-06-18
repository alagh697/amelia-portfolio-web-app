"use client"
import React, { useEffect, useState } from 'react'

function BackgroundScrollView() {
    const [gradient, setGradient] = useState('linear-gradient(to bottom, white, black)');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = Math.min(scrollPosition / maxScroll, 1);
      const startColor = 'rgba(255, 255, 255, 1)';  // White
      const endColor = `rgba(0, 0, 0, ${scrollFraction})`;  // Black with varying opacity
      setGradient(`linear-gradient(to bottom, ${startColor}, ${endColor})`);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
    return (
      <section style={{ background: gradient, height: '300vh', transition: 'background 0.3s' }}>
        <h1 className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        text-4xl uppercase font-black text-black text-center ">Scroll to change background color</h1>
      </section>
    );
}

export default BackgroundScrollView
