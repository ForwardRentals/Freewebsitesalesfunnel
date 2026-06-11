import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

/**
 * Slow-spinning dark globe (WebGL via cobe). Drag to spin it.
 * If WebGL is unavailable or init fails, falls back to a CSS globe so the
 * section never looks broken.
 */
export function Globe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerMovement = useRef(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 4.2; // start with North America facing the visitor
    let width = canvas.offsetWidth || 480;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const onResize = () => {
      if (canvas.offsetWidth > 0) width = canvas.offsetWidth;
    };
    window.addEventListener("resize", onResize);

    let globe: ReturnType<typeof createGlobe> | undefined;
    try {
      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: width * dpr,
        height: width * dpr,
        phi: 4.2, // start with North America facing the visitor
        theta: 0.18,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.42, 0.35],
        markerColor: [0.31, 0.78, 0.51],
        glowColor: [0.85, 0.95, 0.88],
        markers: [
          { location: [49.7016, -123.1558], size: 0.1 }, // Squamish
          { location: [49.2827, -123.1207], size: 0.06 }, // Vancouver
          { location: [50.1163, -122.9574], size: 0.06 }, // Whistler
          { location: [50.3192, -122.8009], size: 0.05 }, // Pemberton
        ],
        onRender: (state) => {
          if (pointerInteracting.current === null) phi += 0.004;
          state.phi = phi + pointerMovement.current;
          state.width = width * dpr;
          state.height = width * dpr;
        },
      });
      requestAnimationFrame(() => {
        canvas.style.opacity = "1";
      });
    } catch (err) {
      console.warn("Globe: WebGL unavailable, using CSS fallback.", err);
      setFailed(true);
    }

    return () => {
      globe?.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  if (failed) {
    // CSS-only fallback: gradient sphere with grid lines + pulsing marker.
    return (
      <div
        className={className}
        style={{ width: "100%", aspectRatio: "1", position: "relative" }}
        aria-label="Stylized globe highlighting Squamish, BC"
      >
        <div
          style={{
            position: "absolute",
            inset: "4%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 36% 32%, #2e4a3a 0%, #1c2e24 45%, #0f1813 80%)",
            boxShadow:
              "inset -30px -24px 60px rgba(0,0,0,0.55), 0 0 60px rgba(127,200,164,0.18)",
            overflow: "hidden",
          }}
        >
          {[18, 38, 58, 78].map((top) => (
            <div
              key={top}
              style={{
                position: "absolute",
                left: "-10%",
                right: "-10%",
                top: `${top}%`,
                height: 1,
                background: "rgba(127,200,164,0.16)",
                borderRadius: "50%",
              }}
            />
          ))}
          {[25, 50, 75].map((left) => (
            <div
              key={left}
              style={{
                position: "absolute",
                top: "-6%",
                bottom: "-6%",
                left: `${left}%`,
                width: 1,
                background: "rgba(127,200,164,0.14)",
              }}
            />
          ))}
          <span
            className="animate-ping"
            style={{
              position: "absolute",
              top: "30%",
              left: "22%",
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#7fc8a4",
              opacity: 0.7,
            }}
          />
          <span
            style={{
              position: "absolute",
              top: "30%",
              left: "22%",
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#7fc8a4",
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      onPointerDown={(e) => {
        pointerInteracting.current = e.clientX - pointerMovement.current * 200;
        if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
      }}
      onPointerUp={() => {
        pointerInteracting.current = null;
        if (canvasRef.current) canvasRef.current.style.cursor = "grab";
      }}
      onPointerOut={() => {
        pointerInteracting.current = null;
        if (canvasRef.current) canvasRef.current.style.cursor = "grab";
      }}
      onPointerMove={(e) => {
        if (pointerInteracting.current !== null) {
          pointerMovement.current =
            (e.clientX - pointerInteracting.current) / 200;
        }
      }}
      className={className}
      style={{
        width: "100%",
        aspectRatio: "1",
        cursor: "grab",
        opacity: 0,
        transition: "opacity 1.2s ease",
      }}
      aria-label="Interactive globe — drag to spin. Markers show the Sea to Sky corridor."
    />
  );
}
