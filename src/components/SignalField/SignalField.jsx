import React, { useEffect, useRef } from 'react';

/**
 * Desktop: full ML knowledge graph (labels + layered pipeline).
 * Mobile: quiet top-only “inference pulse” — meaningful, no label clutter.
 */
const CONCEPTS = [
  { id: 'token', label: 'token', layer: 0 },
  { id: 'embed', label: 'embed', layer: 0 },
  { id: 'prompt', label: 'prompt', layer: 0 },
  { id: 'data', label: 'dataset', layer: 0 },
  { id: 'attn', label: 'attention', layer: 1 },
  { id: 'neuron', label: 'neuron', layer: 1 },
  { id: 'latent', label: 'latent', layer: 1 },
  { id: 'grad', label: 'gradient', layer: 1 },
  { id: 'trans', label: 'transformer', layer: 2 },
  { id: 'agent', label: 'agent', layer: 2 },
  { id: 'rag', label: 'RAG', layer: 2 },
  { id: 'soft', label: 'softmax', layer: 2 },
  { id: 'infer', label: 'inference', layer: 3 },
  { id: 'auto', label: 'automate', layer: 3 },
  { id: 'pipe', label: 'pipeline', layer: 3 },
  { id: 'mlops', label: 'MLOps', layer: 3 },
];

const ACCENT = { r: 200, g: 245, b: 66 };
const BOOT_MS = 2800;
const MOBILE_BOOT_MS = 1600;
const MOBILE_BP = 768;

const easeOutCubic = (t) => 1 - (1 - t) ** 3;
const easeOutBack = (t) => {
  const c = 1.70158;
  const t1 = t - 1;
  return 1 + c * t1 * t1 * t1 + t1 * t1;
};
const clamp01 = (v) => Math.max(0, Math.min(1, v));

const SignalField = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const pointer = useRef({ x: 0.72, y: 0.42, tx: 0.72, ty: 0.42 });
  const reducedMotion = useRef(false);
  const startTime = useRef(0);
  const isMobile = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    startTime.current = performance.now();

    let width = 0;
    let height = 0;
    let dpr = 1;

    // --- Desktop graph data ---
    const nodes = CONCEPTS.map((c, i) => {
      const layerX = 0.42 + c.layer * 0.14 + (Math.random() - 0.5) * 0.04;
      const slot = i % 4;
      const layerY = 0.18 + slot * 0.18 + (Math.random() - 0.5) * 0.05;
      return {
        ...c,
        x: Math.min(0.92, Math.max(0.38, layerX)),
        y: Math.min(0.88, Math.max(0.12, layerY)),
        baseX: 0,
        baseY: 0,
        phase: Math.random() * Math.PI * 2,
        r: c.layer === 3 ? 3.2 : 2.4,
        entryDelay: 0.12 + c.layer * 0.14 + (i % 4) * 0.03,
      };
    });

    const satellites = Array.from({ length: 16 }, (_, i) => ({
      x: i < 5 ? Math.random() * 0.4 : 0.35 + Math.random() * 0.6,
      y: Math.random(),
      r: 0.8 + Math.random() * 1.4,
      phase: Math.random() * Math.PI * 2,
      speed: 0.15 + Math.random() * 0.4,
    }));

    const edges = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i];
        const b = nodes[j];
        const layerDiff = Math.abs(a.layer - b.layer);
        if (layerDiff === 1 || (layerDiff === 2 && Math.random() > 0.7)) {
          edges.push({
            a: i,
            b: j,
            phase: Math.random() * Math.PI * 2,
            speed: 0.35 + Math.random() * 0.55,
            delay: 0.35 + Math.max(a.layer, b.layer) * 0.12,
          });
        }
      }
    }

    // --- Mobile: top constellation (no labels) ---
    const mobileNodes = Array.from({ length: 9 }, (_, i) => {
      const angle = (i / 9) * Math.PI * 1.15 + 0.2;
      return {
        // Arc across the upper band only
        x: 0.12 + (i / 8) * 0.76,
        y: 0.12 + Math.sin(angle) * 0.08 + (i % 3) * 0.025,
        baseX: 0,
        baseY: 0,
        phase: Math.random() * Math.PI * 2,
        r: 1.6 + (i % 3) * 0.5,
        entryDelay: 0.08 + i * 0.06,
      };
    });

    const mobileEdges = [];
    for (let i = 0; i < mobileNodes.length - 1; i++) {
      mobileEdges.push({ a: i, b: i + 1, phase: Math.random() * 6, speed: 0.4 + Math.random() * 0.3 });
      if (i + 2 < mobileNodes.length && i % 2 === 0) {
        mobileEdges.push({ a: i, b: i + 2, phase: Math.random() * 6, speed: 0.35 });
      }
    }

    let visible = true;
    let lastFrame = 0;

    const resize = () => {
      const mobile = canvas.clientWidth < MOBILE_BP;
      // Cap DPR hard — canvas pixels dominate main-thread + GPU cost
      dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.25 : 1.5);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      isMobile.current = mobile;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      nodes.forEach((n) => {
        n.baseX = n.x * width;
        n.baseY = n.y * height;
      });
      mobileNodes.forEach((n) => {
        n.baseX = n.x * width;
        n.baseY = n.y * height;
      });
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.current.tx = (e.clientX - rect.left) / rect.width;
      pointer.current.ty = (e.clientY - rect.top) / rect.height;
    };

    const rgba = (a) => `rgba(${ACCENT.r}, ${ACCENT.g}, ${ACCENT.b}, ${a})`;

    const drawRoundedLabel = (text, x, y, alpha) => {
      ctx.font = '500 11px "JetBrains Mono", ui-monospace, monospace';
      const padX = 7;
      const metrics = ctx.measureText(text);
      const w = metrics.width + padX * 2;
      const h = 18;
      const bx = x - w / 2;
      const by = y - 28;
      const r = 8;

      ctx.fillStyle = `rgba(10, 12, 11, ${0.55 * alpha})`;
      ctx.strokeStyle = rgba(0.35 * alpha);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(bx + r, by);
      ctx.arcTo(bx + w, by, bx + w, by + h, r);
      ctx.arcTo(bx + w, by + h, bx, by + h, r);
      ctx.arcTo(bx, by + h, bx, by, r);
      ctx.arcTo(bx, by, bx + w, by, r);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = rgba(0.92 * alpha);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, x, by + h / 2 + 0.5);
    };

    const getBoot = (now, mobile) => {
      const duration = mobile ? MOBILE_BOOT_MS : BOOT_MS;
      if (reducedMotion.current) {
        return {
          progress: 1,
          scan: 1,
          nodes: 1,
          edges: 1,
          labels: 1,
          flow: 1,
          status: 'graph online',
          flash: 0,
        };
      }

      const progress = clamp01((now - startTime.current) / duration);
      const scan = easeOutCubic(clamp01(progress / 0.28));
      const nodesIn = easeOutCubic(clamp01((progress - 0.1) / 0.4));
      const edgesIn = easeOutCubic(clamp01((progress - 0.28) / 0.4));
      const labelsIn = mobile ? 0 : easeOutCubic(clamp01((progress - 0.5) / 0.3));
      const flowIn = easeOutCubic(clamp01((progress - (mobile ? 0.45 : 0.68)) / 0.35));

      let status = mobile ? 'syncing…' : 'booting graph…';
      if (progress > 0.25) status = mobile ? 'linking…' : 'loading layers…';
      if (progress > 0.5) status = mobile ? 'warming…' : 'wiring synapses…';
      if (progress > 0.72) status = mobile ? 'ready' : 'warming inference…';
      if (progress > 0.88) status = mobile ? 'ready' : 'graph online';

      const flash =
        progress > 0.84 && progress < 0.96
          ? Math.sin(((progress - 0.84) / 0.12) * Math.PI) * (mobile ? 0.1 : 0.18)
          : 0;

      return {
        progress,
        scan,
        nodes: nodesIn,
        edges: edgesIn,
        labels: labelsIn,
        flow: flowIn,
        status,
        flash,
      };
    };

    const drawMobile = (t, boot) => {
      // Soft top bloom only — keep lower content zone clean
      const bloomY = height * 0.16;
      const bloom = ctx.createRadialGradient(
        width * 0.5,
        bloomY,
        0,
        width * 0.5,
        bloomY,
        height * 0.42
      );
      bloom.addColorStop(0, rgba(0.1 * boot.nodes));
      bloom.addColorStop(0.55, rgba(0.03 * boot.nodes));
      bloom.addColorStop(1, rgba(0));
      ctx.fillStyle = bloom;
      ctx.fillRect(0, 0, width, height * 0.55);

      // Boot scan across top band
      if (boot.progress < 1) {
        const scanX = width * boot.scan;
        const scanGrad = ctx.createLinearGradient(scanX - 50, 0, scanX + 30, 0);
        scanGrad.addColorStop(0, rgba(0));
        scanGrad.addColorStop(0.5, rgba(0.14 * (1 - boot.progress)));
        scanGrad.addColorStop(1, rgba(0));
        ctx.fillStyle = scanGrad;
        ctx.fillRect(0, 0, width, height * 0.38);
      }

      if (boot.flash > 0) {
        ctx.fillStyle = rgba(boot.flash);
        ctx.fillRect(0, 0, width, height * 0.4);
      }

      // Tiny status — upper right, fades away after boot
      if (boot.progress < 0.95) {
        const a = boot.progress < 0.85 ? 0.65 : (1 - boot.progress) * 6;
        ctx.font = '500 10px "JetBrains Mono", ui-monospace, monospace';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'top';
        ctx.fillStyle = rgba(0.55 * a);
        ctx.fillText(boot.status, width - 16, 72);
      }

      const positions = mobileNodes.map((n) => {
        const local = clamp01((boot.nodes - n.entryDelay) / 0.35);
        const pop = reducedMotion.current ? 1 : easeOutCubic(local);
        const breathe =
          reducedMotion.current || boot.flow < 0.2
            ? 0
            : Math.sin(t * 0.0014 + n.phase) * 3 * boot.flow;
        return {
          ...n,
          px: n.baseX,
          py: n.baseY + breathe,
          appear: local,
          scale: pop,
        };
      });

      // Edges — soft, top-only
      mobileEdges.forEach((edge) => {
        const a = positions[edge.a];
        const b = positions[edge.b];
        if (!a || !b || a.appear < 0.2) return;
        const grow = clamp01(boot.edges);
        ctx.strokeStyle = rgba(0.12 * grow);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.px, a.py);
        ctx.lineTo(
          a.px + (b.px - a.px) * grow,
          a.py + (b.py - a.py) * grow
        );
        ctx.stroke();

        if (!reducedMotion.current && boot.flow > 0.2) {
          const progress = (Math.sin(t * 0.002 * edge.speed + edge.phase) + 1) / 2;
          const ax = a.px + (b.px - a.px) * progress;
          const ay = a.py + (b.py - a.py) * progress;
          ctx.beginPath();
          ctx.fillStyle = rgba(0.55 * boot.flow);
          ctx.arc(ax, ay, 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Nodes — no labels
      positions.forEach((node) => {
        if (node.appear <= 0.01) return;
        const radius = node.r * (0.5 + node.scale * 0.5);
        const halo = ctx.createRadialGradient(
          node.px,
          node.py,
          0,
          node.px,
          node.py,
          radius * 6
        );
        halo.addColorStop(0, rgba(0.16 * node.appear));
        halo.addColorStop(1, rgba(0));
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(node.px, node.py, radius * 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = rgba(0.35 + 0.35 * node.appear);
        ctx.arc(node.px, node.py, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Single orbital spark in top zone (meaning: active signal)
      if (boot.flow > 0.15 && !reducedMotion.current) {
        const orbitT = t * 0.0006;
        const ox = width * (0.5 + Math.cos(orbitT) * 0.28);
        const oy = height * (0.16 + Math.sin(orbitT * 1.3) * 0.05);
        const spark = ctx.createRadialGradient(ox, oy, 0, ox, oy, 14);
        spark.addColorStop(0, rgba(0.45 * boot.flow));
        spark.addColorStop(1, rgba(0));
        ctx.fillStyle = spark;
        ctx.beginPath();
        ctx.arc(ox, oy, 14, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = rgba(0.8 * boot.flow);
        ctx.arc(ox, oy, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawDesktop = (t, boot) => {
      const p = pointer.current;
      p.x += (p.tx - p.x) * 0.07;
      p.y += (p.ty - p.y) * 0.07;
      const gx = p.x * width;
      const gy = p.y * height;

      const bloomAlpha = 0.06 + boot.flow * 0.1;
      const bloom = ctx.createRadialGradient(gx, gy, 0, gx, gy, Math.max(width, height) * 0.42);
      bloom.addColorStop(0, rgba(bloomAlpha));
      bloom.addColorStop(0.4, rgba(bloomAlpha * 0.3));
      bloom.addColorStop(1, rgba(0));
      ctx.fillStyle = bloom;
      ctx.fillRect(0, 0, width, height);

      if (boot.progress < 1) {
        const scanX = width * (0.35 + boot.scan * 0.6);
        const scanGrad = ctx.createLinearGradient(scanX - 80, 0, scanX + 40, 0);
        scanGrad.addColorStop(0, rgba(0));
        scanGrad.addColorStop(0.55, rgba(0.12 * (1 - boot.progress * 0.5)));
        scanGrad.addColorStop(1, rgba(0));
        ctx.fillStyle = scanGrad;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = rgba(0.35 * (1 - boot.progress));
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(scanX, height * 0.06);
        ctx.lineTo(scanX, height * 0.94);
        ctx.stroke();
      }

      if (boot.flash > 0) {
        ctx.fillStyle = rgba(boot.flash);
        ctx.fillRect(0, 0, width, height);
      }

      for (let L = 0; L < 4; L++) {
        const lx = (0.42 + L * 0.14) * width;
        const layerReveal = clamp01((boot.nodes - L * 0.15) / 0.35);
        ctx.strokeStyle = rgba(0.04 * layerReveal);
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 10]);
        ctx.beginPath();
        ctx.moveTo(lx, height * 0.1);
        ctx.lineTo(lx, height * 0.9);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      const layerNames = ['input', 'encode', 'reason', 'output'];
      ctx.font = '500 10px "JetBrains Mono", ui-monospace, monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      layerNames.forEach((name, L) => {
        const lx = (0.42 + L * 0.14) * width;
        const layerReveal = clamp01((boot.nodes - L * 0.18) / 0.3);
        ctx.fillStyle = rgba(0.22 * layerReveal);
        ctx.fillText(name, lx, height * 0.08);
      });

      if (boot.progress < 0.98) {
        const statusAlpha = boot.progress < 0.92 ? 0.85 : (1 - boot.progress) * 8 * 0.85;
        if (statusAlpha > 0.05) {
          ctx.font = '500 11px "JetBrains Mono", ui-monospace, monospace';
          ctx.textAlign = 'right';
          ctx.textBaseline = 'middle';
          const sx = width * 0.94;
          const sy = height * 0.12;
          ctx.fillStyle = rgba(0.75 * statusAlpha);
          ctx.fillText(boot.status, sx, sy);
          const barW = 96;
          const bx = sx - barW;
          const by = sy + 12;
          ctx.fillStyle = rgba(0.15 * statusAlpha);
          ctx.fillRect(bx, by, barW, 3);
          ctx.fillStyle = rgba(0.7 * statusAlpha);
          ctx.fillRect(bx, by, barW * boot.progress, 3);
        }
      }

      const positions = nodes.map((n) => {
        const local = clamp01((boot.nodes - n.entryDelay) / 0.35);
        const pop = reducedMotion.current ? 1 : easeOutBack(local);
        const breathe =
          reducedMotion.current || boot.flow < 0.2
            ? 0
            : Math.sin(t * 0.0012 + n.phase) * 6 * boot.flow;
        const px = n.baseX + (1 - pop) * 40 + Math.cos(n.phase) * breathe * 0.35;
        const py = n.baseY + (1 - pop) * 18 + Math.sin(t * 0.0009 + n.phase) * 5 * boot.flow;
        const toPointer = Math.hypot(px - gx, py - gy);
        const focus = Math.max(0, 1 - toPointer / 200) * boot.flow;
        return { ...n, px, py, focus, toPointer, appear: local, scale: pop };
      });

      edges.forEach((edge) => {
        const a = positions[edge.a];
        const b = positions[edge.b];
        if (!a || !b) return;
        const edgeLocal = clamp01((boot.edges - edge.delay) / 0.4);
        if (edgeLocal <= 0.01) return;
        const midFocus = (a.focus + b.focus) / 2;
        const baseAlpha = (0.08 + midFocus * 0.35) * edgeLocal;
        const ex = a.px + (b.px - a.px) * edgeLocal;
        const ey = a.py + (b.py - a.py) * edgeLocal;
        ctx.strokeStyle = rgba(baseAlpha);
        ctx.lineWidth = 1 + midFocus * 0.8;
        ctx.beginPath();
        ctx.moveTo(a.px, a.py);
        ctx.lineTo(ex, ey);
        ctx.stroke();

        if (!reducedMotion.current && boot.flow > 0.15 && edgeLocal > 0.85) {
          const progress = (Math.sin(t * 0.0018 * edge.speed + edge.phase) + 1) / 2;
          const ax = a.px + (b.px - a.px) * progress;
          const ay = a.py + (b.py - a.py) * progress;
          const spark = ctx.createRadialGradient(ax, ay, 0, ax, ay, 8);
          spark.addColorStop(0, rgba((0.55 + midFocus * 0.35) * boot.flow));
          spark.addColorStop(1, rgba(0));
          ctx.fillStyle = spark;
          ctx.beginPath();
          ctx.arc(ax, ay, 8, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.fillStyle = rgba(0.85 * boot.flow);
          ctx.arc(ax, ay, 1.6, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      satellites.forEach((s) => {
        const wobble = reducedMotion.current
          ? 0
          : Math.sin(t * 0.001 * s.speed + s.phase) * 0.012 * boot.flow;
        const sx = ((s.x + wobble) % 1) * width;
        const sy = ((s.y + Math.cos(t * 0.0007 * s.speed + s.phase) * 0.01) % 1) * height;
        const toPointer = Math.hypot(sx - gx, sy - gy);
        const boost = Math.max(0, 1 - toPointer / 240);
        ctx.beginPath();
        ctx.fillStyle = rgba((0.12 + boost * 0.35) * boot.nodes);
        ctx.arc(sx, sy, s.r + boost * 1.2, 0, Math.PI * 2);
        ctx.fill();
      });

      positions.forEach((node) => {
        if (node.appear <= 0.01) return;
        const pulse =
          reducedMotion.current || boot.flow < 0.2
            ? 0.5
            : (Math.sin(t * 0.0025 + node.phase) + 1) / 2;
        const glow = (0.25 + node.focus * 0.55 + pulse * 0.15) * node.appear;
        const radius = (node.r + node.focus * 2.4 + pulse * 0.6) * (0.4 + node.scale * 0.6);

        const halo = ctx.createRadialGradient(node.px, node.py, 0, node.px, node.py, radius * 5);
        halo.addColorStop(0, rgba(0.22 * (0.4 + node.focus) * node.appear));
        halo.addColorStop(1, rgba(0));
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(node.px, node.py, radius * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = rgba(0.45 + glow * 0.45);
        ctx.arc(node.px, node.py, radius, 0, Math.PI * 2);
        ctx.fill();

        if (node.focus > 0.15) {
          ctx.beginPath();
          ctx.strokeStyle = rgba(0.25 + node.focus * 0.5);
          ctx.lineWidth = 1;
          ctx.arc(node.px, node.py, radius + 5 + node.focus * 4, 0, Math.PI * 2);
          ctx.stroke();
        }

        const labelAlpha =
          boot.labels *
          Math.min(1, 0.28 + node.focus * 0.7 + (node.layer >= 2 ? 0.12 : 0)) *
          node.appear;
        if (labelAlpha > 0.2) {
          drawRoundedLabel(node.label, node.px, node.py, labelAlpha);
        }
      });

      if (boot.flow > 0.4) {
        const nearest = positions.reduce(
          (best, n) => (n.toPointer < best.toPointer ? n : best),
          positions[0]
        );
        if (nearest && nearest.toPointer < 90 && nearest.appear > 0.8) {
          const chip = `→ ${nearest.label}`;
          ctx.font = '500 12px "JetBrains Mono", ui-monospace, monospace';
          const tw = ctx.measureText(chip).width + 18;
          const hx = Math.min(width - tw - 12, Math.max(12, gx + 16));
          const hy = Math.min(height - 36, Math.max(12, gy - 28));
          const hh = 26;
          const hr = 10;
          ctx.fillStyle = 'rgba(10, 12, 11, 0.72)';
          ctx.strokeStyle = rgba(0.45);
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(hx + hr, hy);
          ctx.arcTo(hx + tw, hy, hx + tw, hy + hh, hr);
          ctx.arcTo(hx + tw, hy + hh, hx, hy + hh, hr);
          ctx.arcTo(hx, hy + hh, hx, hy, hr);
          ctx.arcTo(hx, hy, hx + tw, hy, hr);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = rgba(0.95);
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';
          ctx.fillText(chip, hx + 9, hy + 13);
        }
      }
    };

    const draw = (now) => {
      if (!visible) {
        rafRef.current = 0;
        return;
      }

      const mobile = isMobile.current;
      // Target ~30fps on mobile / reduced motion after boot to save battery
      const minDelta = mobile || reducedMotion.current ? 32 : 16;
      if (now - lastFrame < minDelta && !reducedMotion.current) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }
      lastFrame = now;

      const boot = getBoot(now, mobile);
      ctx.clearRect(0, 0, width, height);

      if (mobile) {
        drawMobile(now, boot);
      } else {
        drawDesktop(now, boot);
      }

      // Freeze after boot when user prefers reduced motion
      if (reducedMotion.current && boot.progress >= 1) {
        rafRef.current = 0;
        return;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    const startLoop = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(draw);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) startLoop();
        else {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = 0;
        }
      },
      { threshold: 0.05 }
    );
    io.observe(canvas);

    resize();
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', onMove, { passive: true });
    startLoop();

    return () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
      io.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
};

export default SignalField;
