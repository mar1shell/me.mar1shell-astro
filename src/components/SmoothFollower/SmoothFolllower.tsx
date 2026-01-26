import { useState, useEffect, useRef } from "react";

function SmoothFollower() {
  const mousePosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const borderDotPosition = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Refs for direct DOM manipulation
  const dotRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  const DOT_SMOOTHNESS = 0.2;
  const BORDER_DOT_SMOOTHNESS = 0.1;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, .interactive",
    );
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    const animate = () => {
      const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
      };

      const newDotX = lerp(
        dotPosition.current.x,
        mousePosition.current.x,
        DOT_SMOOTHNESS,
      );
      const newDotY = lerp(
        dotPosition.current.y,
        mousePosition.current.y,
        DOT_SMOOTHNESS,
      );

      const newBorderX = lerp(
        borderDotPosition.current.x,
        mousePosition.current.x,
        BORDER_DOT_SMOOTHNESS,
      );
      const newBorderY = lerp(
        borderDotPosition.current.y,
        mousePosition.current.y,
        BORDER_DOT_SMOOTHNESS,
      );

      // Update stored positions
      dotPosition.current = { x: newDotX, y: newDotY };
      borderDotPosition.current = { x: newBorderX, y: newBorderY };

      // Direct DOM manipulation, no React re-renders
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${newDotX - 4}px, ${newDotY - 4}px)`;
      }

      if (borderRef.current) {
        const borderSize = isHovering ? 22 : 14; // Half of 44px or 28px
        borderRef.current.style.transform = `translate(${newBorderX - borderSize}px, ${newBorderY - borderSize}px)`;
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });

      cancelAnimationFrame(animationId);
    };
  }, []);

  useEffect(() => {
    if (borderRef.current) {
      borderRef.current.style.width = isHovering ? "44px" : "28px";
      borderRef.current.style.height = isHovering ? "44px" : "28px";
    }
  }, [isHovering]);

  if (typeof window === "undefined") return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-3000 hidden md:block">
      {/* Small circle */}
      <div
        ref={dotRef}
        className="absolute rounded-full bg-black dark:bg-white"
        style={{
          width: "8px",
          height: "8px",
          transform: "translate(-4px, -4px)",
        }}
      />
      {/* Big circle */}
      <div
        ref={borderRef}
        className={`absolute rounded-full border transition-all duration-500 ${
          isHovering
            ? "border-3 border-cyan-500 dark:border-green-500"
            : "border-black dark:border-white"
        }`}
        style={{
          width: "28px",
          height: "28px",
          transform: "translate(-14px, -14px)",
          transition: "width 0.3s, height 0.3s, border-color 0.5s",
        }}
      />
    </div>
  );
}

export default SmoothFollower;
