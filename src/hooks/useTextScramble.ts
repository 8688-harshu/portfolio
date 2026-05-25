import { useState, useRef, useCallback } from 'react';

interface TextScrambleOptions {
  /** Duration in milliseconds (default: 800) */
  speed?: number;
  /** Character set used for scrambling */
  chars?: string;
}

interface TextScrambleReturn {
  /** The current displayed text (scrambled or resolved) */
  text: string;
  /** Call to kick off the scramble-to-reveal animation */
  start: () => void;
  /** Whether the scramble animation is currently running */
  isScrambling: boolean;
}

const DEFAULT_CHARS =
  '!@#$%^&*()_+-=[]{}|;:,.<>?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

/**
 * Produces a "hacker terminal" text-scramble effect that gradually
 * resolves random characters into the target string.
 */
export function useTextScramble(
  target: string,
  options: TextScrambleOptions = {}
): TextScrambleReturn {
  const { speed = 800, chars = DEFAULT_CHARS } = options;

  const [text, setText] = useState(target);
  const [isScrambling, setIsScrambling] = useState(false);
  const rafRef = useRef<number | null>(null);

  const randomChar = useCallback(
    () => chars[Math.floor(Math.random() * chars.length)],
    [chars]
  );

  const start = useCallback(() => {
    if (isScrambling) return;

    setIsScrambling(true);

    const length = target.length;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / speed, 1);

      // Number of characters that have "resolved" so far
      const resolvedCount = Math.floor(progress * length);

      let result = '';
      for (let i = 0; i < length; i++) {
        if (i < resolvedCount) {
          result += target[i];
        } else {
          result += randomChar();
        }
      }

      setText(result);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setText(target);
        setIsScrambling(false);
        rafRef.current = null;
      }
    };

    // Cancel any running animation
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(animate);
  }, [target, speed, randomChar, isScrambling]);

  return { text, start, isScrambling };
}

export default useTextScramble;
