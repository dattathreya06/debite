import { gsap } from 'gsap';
import SplitType from 'split-type';

type AnimationOptions = {
  duration?: number;
  delay?: number;
  ease?: string;
  from?: number;
  to?: number;
  stagger?: number;
}

const preserveWhitespace = (element: HTMLElement) => {
  // Add whitespace preservation
  element.style.whiteSpace = 'pre-line';
  // Ensure inline-block display for proper word wrapping
  element.style.display = 'inline-block';
};

const splitWithWordPreservation = (element: HTMLElement) => {
  // First, split into words to preserve word boundaries
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

export const textReveal = (element: HTMLElement, options: AnimationOptions = {}) => {
  preserveWhitespace(element);
  const split = splitWithWordPreservation(element);
  
  const {
    duration = 0.5,
    stagger = 0.02,
    ease = "power4.out",
    from = 40,
    delay = 0
  } = options;
  
  if (!split.chars) return;

  // Group characters by words for natural animation flow
  const wordGroups = split.words?.map(word => {
    return Array.from(word.querySelectorAll('.char'));
  }) || [];
  
  // Initial state
  gsap.set(split.chars, { 
    y: from, 
    opacity: 0,
    display: 'inline-block',
    width: 'auto', // Prevent character width issues
    height: 'auto'  // Maintain line height
  });
  
  // Create word-aware animation
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
    }, wordIndex * (stagger * 2)); // Add slight delay between words
  });

  return {
    animation: tl,
    revert: () => split.revert()
  };
};

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