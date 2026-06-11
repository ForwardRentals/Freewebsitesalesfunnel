import { useEffect, useRef } from "react";
import createGlobe from "cobe";

/**
 * Slow-spinning dark globe (WebGL via cobe). Drag to spin it yourself.
 * Markers sit on the Sea to Sky corridor where the client sites live.
 */
export function Globe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerMovement = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;
    let width = 0;
    const onResize = () => {
      width = canvas.offsetWidth;
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: Math.max(width, 1) * 2,
      height: Math.max(width, 1) * 2,
      phi: 0,
      theta: 0.18,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 20000,
      mapBrightness: 6,
      baseColor: [0.18, 0.24, 0.2],
      markerColor: [0.5, 0.95, 0.7],
      glowColor: [0.16, 0.35, 0.24],
      markers: [
        { location: [49.7016, -123.1558], size: 0.1 }, // Squamish — home base
        { location: [49.2827, -123.1207], size: 0.06 }, // Vancouver
        { location: [50.1163, -122.9574], size: 0.06 }, // Whistler
        { location: [50.3192, -122.8009], size: 0.05 }, // Pemberton
      ],
      onRender: (state) => {
        // idle spin pauses while the visitor is dragging
        if (pointerInteracting.current === null) phi += 0.004;
        state.phi = phi + pointerMovement.current;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    // fade the canvas in once WebGL has painted
    requestAnimationFrame(() => {
      canvas.style.opacity = "1";
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

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
        contain: "layout paint size",
      }}
      aria-label="Interactive globe — drag to spin. Markers show the Sea to Sky corridor."
    />
  );
}
