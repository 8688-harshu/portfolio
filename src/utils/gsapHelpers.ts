import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* ─────────────────────────────────────────────
   Plugin Registration
   ───────────────────────────────────────────── */

/**
 * Call once at app startup to register all required GSAP plugins.
 */
export function registerPlugins(): void {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─────────────────────────────────────────────
   Scroll Reveal Helpers
   ───────────────────────────────────────────── */

interface ScrollRevealOptions {
  /** Starting vertical offset in px (default: 60) */
  y?: number;
  /** Animation duration in seconds (default: 1) */
  duration?: number;
  /** Delay before animation starts in seconds (default: 0) */
  delay?: number;
  /** ScrollTrigger start position (default: 'top 85%') */
  start?: string;
  /** Easing function (default: 'power3.out') */
  ease?: string;
  /** Whether the animation replays on re-enter (default: false) */
  toggleActions?: string;
}

/**
 * Creates a standard scroll-triggered reveal animation on a single element.
 * The element fades in and slides up from `y` offset.
 *
 * @returns The GSAP tween (useful for cleanup via `.kill()`)
 */
export function createScrollReveal(
  element: gsap.TweenTarget,
  options: ScrollRevealOptions = {}
): gsap.core.Tween {
  const {
    y = 60,
    duration = 1,
    delay = 0,
    start = 'top 85%',
    ease = 'power3.out',
    toggleActions = 'play none none none',
  } = options;

  return gsap.fromTo(
    element,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element as gsap.DOMTarget,
        start,
        toggleActions,
      },
    }
  );
}

/**
 * Creates a staggered scroll-triggered reveal for a collection of elements.
 * Each child fades in and slides up with a configurable stagger offset.
 *
 * @param elements  Selector string, NodeList, or array of elements
 * @param stagger   Stagger delay between each element in seconds (default: 0.12)
 * @param options   Same customisation options as `createScrollReveal`
 * @returns The GSAP tween
 */
export function createStaggerReveal(
  elements: gsap.TweenTarget,
  stagger = 0.12,
  options: ScrollRevealOptions = {}
): gsap.core.Tween {
  const {
    y = 60,
    duration = 1,
    delay = 0,
    start = 'top 85%',
    ease = 'power3.out',
    toggleActions = 'play none none none',
  } = options;

  return gsap.fromTo(
    elements,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      stagger,
      scrollTrigger: {
        trigger: elements as gsap.DOMTarget,
        start,
        toggleActions,
      },
    }
  );
}
