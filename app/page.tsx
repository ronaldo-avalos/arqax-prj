"use client";

import { useEffect, useRef } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const rect = hero.getBoundingClientRect();
      const scrollableDistance = Math.max(rect.height - window.innerHeight, 1);
      const progress = clamp(-rect.top / scrollableDistance, 0, 1);
      hero.style.setProperty("--scroll-progress", progress.toFixed(4));
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main id="top">
      <section ref={heroRef} className="hero" aria-label="ARQAX Arquitectura">
        <div className="hero__stage">
          <div className="hero__canvas hero__canvas--back" aria-hidden="true">
            <img
              className="hero__back"
              src="/hero-back.png"
              alt=""
              draggable={false}
            />
          </div>

          <div className="hero__canvas hero__canvas--front" aria-hidden="true">
            <img
              className="hero__front"
              src="/hero-front.png"
              alt=""
              draggable={false}
            />
          </div>

          <div className="hero__shade" aria-hidden="true" />

          <nav className="hero-nav" aria-label="Navegación principal">
            <a href="#proyectos">Proyectos</a>
            <a href="#estudio">Estudio</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <div className="hero__identity">
            <span className="hero__logo-reveal">
              <img
                className="hero__logo"
                src="/arqax-logo.svg"
                alt="ARQAX Arquitectura"
              />
            </span>
          </div>

          <div className="hero__copy">
            <div className="hero__copy-reveal">
              <h1>Diseños que impactan</h1>
              <p>
                Estudio de arquitectura. Identidad que construye confianza,
                diseña experiencias y transforma espacios.
              </p>
            </div>
          </div>

          <div className="scroll-cue" aria-hidden="true">
            <span>Descubre</span>
            <i />
          </div>
        </div>
      </section>

      <section className="next-chapter" id="proyectos">
        <p>ARQAX · Arquitectura</p>
        <h2>Espacios que permanecen.</h2>
        <span>Proyectos seleccionados — próximamente</span>
      </section>
      <span id="estudio" className="anchor-target" />
      <span id="contacto" className="anchor-target" />
    </main>
  );
}
