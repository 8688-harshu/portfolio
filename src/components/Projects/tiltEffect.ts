export interface TiltOptions {
  max?: number;
  perspective?: number;
  speed?: number;
}

export function calculateTilt(
  rect: DOMRect,
  clientX: number,
  clientY: number,
  max: number
): { rotateX: number; rotateY: number } {
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateY = ((x - centerX) / centerX) * max;
  const rotateX = ((centerY - y) / centerY) * max;

  return { rotateX, rotateY };
}

export function applyTilt(
  element: HTMLElement,
  options: TiltOptions = {}
): () => void {
  const { max = 10, perspective = 1000, speed = 400 } = options;

  element.style.transformStyle = 'preserve-3d';
  element.style.transition = `transform ${speed / 4000}s ease-out`;

  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const { rotateX, rotateY } = calculateTilt(rect, e.clientX, e.clientY, max);
    element.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    element.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`;
    element.style.transition = `transform 0.5s ease-out`;
  };

  const handleMouseEnter = () => {
    element.style.transition = `transform 0.1s ease-out`;
  };

  element.addEventListener('mouseenter', handleMouseEnter);
  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mouseenter', handleMouseEnter);
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
    element.style.transform = '';
    element.style.transition = '';
  };
}
