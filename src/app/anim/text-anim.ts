import { gsap } from 'gsap';
import SplitType from 'split-type';

type AnimationOptions = {
  duration?: number;
  delay?: number;
  ease?: string;
  from?: number;
  stagger?: number;
};

/**
 * Ensures text maintains proper spacing & layout.
 */
const preserveWhitespace = (element: HTMLElement) => {
  element.style.whiteSpace = 'pre-line';
  element.style.display = 'inline-block';
};

/**
 * Splits text while preserving word structure.
 */
const splitWithWordPreservation = (element: HTMLElement) => {
  // First, split into words
  const wordSplit = new SplitType(element, { 
    types: 'words',
    tagName: 'span',
  });

  // Then split words into characters while maintaining word grouping
  const charSplit = new SplitType(wordSplit.words || [], { 
    types: 'chars',
    tagName: 'span',
  });

  return {
    words: wordSplit.words,
    chars: charSplit.chars,
    revert: () => {
      charSplit.revert();
      wordSplit.revert();
    }
  };
};

/**
 * Applies a smooth text reveal animation using GSAP.
 * @param element - The target HTML element.
 * @param options - Animation customization options.
 */
export const textReveal = (element: HTMLElement | null, options: AnimationOptions = {}) => {
  if (!element) return gsap.timeline(); // Ensure it always returns a valid timeline
  
  preserveWhitespace(element);
  const split = splitWithWordPreservation(element);

  const {
    duration = 0.5,
    stagger = 0.02,
    ease = "power4.out",
    from = 40,
    delay = 0
  } = options;

  if (!split.chars || split.chars.length === 0) return gsap.timeline();

  // Group characters by words for more natural animation flow
  const wordGroups = split.words?.map(word => Array.from(word.querySelectorAll('.char'))) || [];

  // Initial state
  gsap.set(split.chars, { 
    y: from, 
    opacity: 0,
    display: 'inline-block'
  });

  // Create GSAP timeline
  const tl = gsap.timeline({ delay });

  wordGroups.forEach((chars, wordIndex) => {
    tl.to(chars, {
      y: 0,
      opacity: 1,
      duration,
      stagger: {
        each: stagger,
        from: "start"
      },
      ease,
    }, wordIndex * (stagger * 2)); // Stagger words slightly for smooth effect
  });

  // Cleanup split structure when animation completes
  tl.eventCallback("onComplete", () => split.revert());

  return tl;
};

/**
 * Fades in an element smoothly.
 * @param element - The target HTML element.
 * @param options - Animation customization options.
 */
export const fadeIn = (element: HTMLElement, options: AnimationOptions = {}) => {
  const {
    duration = 0.8,
    delay = 0,
    ease = "power3.out",
    from = 50
  } = options;

  preserveWhitespace(element);
  
  gsap.set(element, { 
    y: from, 
    opacity: 0,
    visibility: 'visible',
    display: 'inline-block'
  });

  return gsap.to(element, {
    y: 0,
    opacity: 1,
    duration,
    delay,
    ease,
    clearProps: 'all' // Clean up inline styles after animation
  });
};
