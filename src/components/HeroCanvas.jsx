import React, { useEffect, useRef } from "react";
// A lightweight, original canvas approximation of the reference's monochrome fiber field.
export default function HeroCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current,
      ctx = canvas.getContext("2d");
    if (!ctx) return;
    let w = 0,
      h = 0,
      frame = 0,
      visible = true,
      t = 0;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      const d = Math.min(devicePixelRatio, 1);
      canvas.width = w * d;
      canvas.height = h * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
      draw(0);
    };
    function point(i, p, time) {
      const f = i / 58;
      const curl = Math.sin(p * Math.PI) * 0.32;
      return {
        x:
          w *
          (-0.36 +
            p * 1.75 +
            f * 0.2 +
            Math.sin(p * 5 + f * 2 + time * 0.1) * 0.025),
        y:
          h *
          (0.88 -
            p * 1.3 +
            f * 0.83 +
            Math.sin(p * 5.5 + f * 2.2 + time * 0.09) * (0.13 + curl) +
            Math.sin(time * 0.1 + f * 4) * 0.025),
      };
    }
    function draw(time) {
      ctx.fillStyle = "#101111";
      ctx.fillRect(0, 0, w, h);
      let glow = ctx.createRadialGradient(
        w * 0.4,
        h * 0.38,
        0,
        w * 0.4,
        h * 0.38,
        w * 0.65,
      );
      glow.addColorStop(0, "#303232");
      glow.addColorStop(0.5, "#191a1a");
      glow.addColorStop(1, "#090a0a");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 59; i++) {
        const strong = i % 5 === 0;
        ctx.beginPath();
        for (let s = 0; s <= 120; s++) {
          let p = point(i, s / 120, time);
          s === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
        }
        ctx.lineWidth = strong ? 1.4 : 0.6;
        ctx.strokeStyle = `rgba(221,224,221,${strong ? 0.19 : 0.07})`;
        ctx.shadowBlur = 0;
        ctx.shadowColor = "#b2b8b5";
        ctx.stroke();
        if (i % 2 === 0) {
          for (let j = 0; j < 12; j++) {
            const p = (j / 12 + time * 0.008 + (i % 7) * 0.012) % 1;
            let v = point(i, p, time);
            const alpha = 0.13 + Math.pow(Math.sin((p + i) * 8), 4) * 0.46;
            ctx.beginPath();
            ctx.arc(v.x, v.y, strong ? 1.35 : 0.7, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(230,233,230,${alpha})`;
            ctx.fill();
          }
        }
      }
      ctx.shadowBlur = 0;
      const shade = ctx.createLinearGradient(0, 0, w, h);
      shade.addColorStop(0, "rgba(0,0,0,.18)");
      shade.addColorStop(0.5, "rgba(0,0,0,0)");
      shade.addColorStop(1, "rgba(0,0,0,.65)");
      ctx.fillStyle = shade;
      ctx.fillRect(0, 0, w, h);
    }
    let last = 0;
    function tick(now) {
      if (now - last > 40 && visible && !document.hidden) {
        t += 0.04;
        draw(t);
        last = now;
      }
      frame = requestAnimationFrame(tick);
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(canvas);
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    if (!reduced.matches) frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      ro.disconnect();
    };
  }, []);
  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />;
}
