import { useEffect, useRef } from "react";

export default function VantaBackground({
  color = 0x22d3ee,
  backgroundColor = 0x090b12,
  points = 12.0,
  maxDistance = 20.0,
  spacing = 16.0,
}) {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion || !vantaRef.current) return;

    let cancelled = false;
    let pollId;

    const init = () => {
      if (cancelled || effectRef.current) return;
      if (!window.VANTA || !window.VANTA.NET || !window.THREE) {
        pollId = setTimeout(init, 50);
        return;
      }
      effectRef.current = window.VANTA.NET({
        el: vantaRef.current,
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color,
        backgroundColor,
        points,
        maxDistance,
        spacing,
        showDots: true,
      });
    };

    init();

    return () => {
      cancelled = true;
      clearTimeout(pollId);
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, [color, backgroundColor, points, maxDistance, spacing]);

  return (
    <div ref={vantaRef} className="fixed inset-0 -z-10" aria-hidden="true" />
  );
}
