import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; z: number; color: string }[] = [];

    // Config
    const starCount = 100; // Reduced from 200
    const speed = 4; // Reduced speed for calmer effect

    // Pink/Cyan Palette
    const colors = [
      "#6b7280", // gray-500 - neutral, visible in both modes
      "#9ca3af", // gray-400 - lighter gray
      "#4b5563", // gray-600 - darker gray
      "#d1d5db", // gray-300 - light gray for dark mode
      "#374151", // gray-700 - dark gray for light mode
    ];

    const initStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: (Math.random() - 0.5) * canvas.width * 2,
          y: (Math.random() - 0.5) * canvas.height * 2,
          z: Math.random() * canvas.width,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const draw = () => {
      // Performance optimization: clearRect is faster than fillRect with alpha (which causes read-back)
      // We lose the trail effect, but gain significant performance
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      stars.forEach((star) => {
        // Update Star
        star.z -= speed;
        if (star.z <= 0) {
          star.x = (Math.random() - 0.5) * canvas.width * 2;
          star.y = (Math.random() - 0.5) * canvas.height * 2;
          star.z = canvas.width;
        }

        // Project Star
        const x = (star.x / star.z) * 100 + cx;
        const y = (star.y / star.z) * 100 + cy;
        const radius = (1 - star.z / canvas.width) * 3; // Size based on depth

        // Draw Star
        ctx.beginPath();
        // Performance: Use square instead of arc for tiny stars if needed, but arc is okay for small count
        ctx.arc(x, y, Math.max(0, radius), 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-gray-50 transition-colors duration-500 dark:bg-gray-950">
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Optional: Add a subtle overlay gradient for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 dark:to-black/50" />
    </div>
  );
}
