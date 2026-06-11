import { useEffect, useRef } from "react";
import createGlobe from "cobe";

/**
 * Slow-spinning dark globe (WebGL via cobe — ~5KB, runs on the GPU so it
 * stays smooth). Markers sit on the Sea to Sky corridor where the client
 * sites live.
 */
export function Globe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;
    let width = 0;
    const onResize = () => {
      width = canvas.offsetWidth;
    };
    onResize();
    window.addEventListener("resize", onResize);

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.18,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 5,
      baseColor: [0.16, 0.2, 0.18],
      markerColor: [0.5, 0.9, 0.68],
      glowColor: [0.12, 0.25, 0.18],
      markers: [
        { location: [49.7016, -123.1558], size: 0.09 }, // Squamish — home base
        { location: [49.2827, -123.1207], size: 0.05 }, // Vancouver
        { location: [50.1163, -122.9574], size: 0.05 }, // Whistler / Pemberton
      ],
      onRender: (state) => {
        phi += 0.0016; // super slow spin
        state.phi = phi;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", aspectRatio: "1", contain: "layout paint size" }}
      aria-label="Globe showing the Sea to Sky corridor where our client websites are based"
    />
  );
}
