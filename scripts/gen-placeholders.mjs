// Generates warm-toned SVG placeholder images into /public/placeholders/.
// Run: node scripts/gen-placeholders.mjs

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, "..", "public", "placeholders");
mkdirSync(out, { recursive: true });

const PALETTES = [
  { from: "#ece4d3", via: "#d6cab2", to: "#b8ac92", accent: "#6b6043" },
  { from: "#dfd3bb", via: "#c2b394", to: "#9d8d6c", accent: "#564b35" },
  { from: "#efe9dc", via: "#d8cfb9", to: "#b9ad92", accent: "#7a6c4f" },
  { from: "#d4c8b0", via: "#a99c80", to: "#7e7158", accent: "#3f372a" },
  { from: "#e7dec9", via: "#cdc0a3", to: "#a99979", accent: "#615641" },
  { from: "#dccfb4", via: "#b9aa89", to: "#8a7c5e", accent: "#403728" },
];

const W = 1200;
const H = 1500;

const archMotif = (p) => {
  const cx = W / 2, cy = H / 2;
  return `<g stroke="${p.accent}" stroke-width="2" fill="none" opacity="0.45">
    <path d="M ${cx - 220} ${cy + 260} L ${cx - 220} ${cy} A 220 220 0 0 1 ${cx + 220} ${cy} L ${cx + 220} ${cy + 260}"/>
    <path d="M ${cx - 150} ${cy + 260} L ${cx - 150} ${cy + 90} A 150 150 0 0 1 ${cx + 150} ${cy + 90} L ${cx + 150} ${cy + 260}"/>
    <path d="M ${cx - 90} ${cy + 260} L ${cx - 90} ${cy + 170} A 90 90 0 0 1 ${cx + 90} ${cy + 170} L ${cx + 90} ${cy + 260}"/>
  </g>`;
};

const windowGrid = (p) => {
  const sx = W / 2 - 280, sy = H / 2 - 350;
  let g = `<g stroke="${p.accent}" stroke-width="2" fill="none" opacity="0.4">`;
  for (let i = 0; i < 7; i++)
    for (let j = 0; j < 4; j++)
      g += `<rect x="${sx + j * 150}" y="${sy + i * 100}" width="120" height="70"/>`;
  return g + `</g>`;
};

const columns = (p) => {
  const cy = H / 2;
  let g = `<g stroke="${p.accent}" stroke-width="2.5" fill="none" opacity="0.45">`;
  for (let i = 0; i < 7; i++) {
    const x = W / 2 - 360 + i * 120;
    g += `<line x1="${x}" y1="${cy - 300}" x2="${x}" y2="${cy + 300}"/>`;
    g += `<line x1="${x - 18}" y1="${cy - 300}" x2="${x + 18}" y2="${cy - 300}"/>`;
    g += `<line x1="${x - 18}" y1="${cy + 300}" x2="${x + 18}" y2="${cy + 300}"/>`;
  }
  return g + `</g>`;
};

const tower = (p) => {
  const cx = W / 2, cy = H / 2;
  let g = `<g fill="${p.accent}" opacity="0.16"><rect x="${cx - 90}" y="${cy - 300}" width="180" height="600"/><rect x="${cx - 160}" y="${cy + 220}" width="320" height="80"/></g>`;
  g += `<g stroke="${p.accent}" stroke-width="1.5" fill="none" opacity="0.4">`;
  for (let i = 0; i < 14; i++)
    g += `<rect x="${cx - 65}" y="${cy - 280 + i * 40}" width="130" height="24"/>`;
  return g + `</g>`;
};

const diagonals = (p) => {
  let g = `<g stroke="${p.accent}" stroke-width="1" opacity="0.22">`;
  for (let i = -H; i < W + H; i += 38)
    g += `<line x1="${i}" y1="0" x2="${i + H}" y2="${H}"/>`;
  return g + `</g>`;
};

const horizon = (p) => {
  let g = `<g stroke="${p.accent}" stroke-width="2" opacity="0.35">`;
  for (let i = 0; i < 3; i++)
    g += `<line x1="0" y1="${H / 2 - 60 + i * 50}" x2="${W}" y2="${H / 2 - 60 + i * 50}"/>`;
  g += `</g>`;
  g += `<g fill="${p.accent}" opacity="0.14">
    <rect x="${W * 0.18}" y="${H / 2 - 220}" width="${W * 0.64}" height="160"/>
    <polygon points="${W * 0.18},${H / 2 - 220} ${W * 0.18 + W * 0.64},${H / 2 - 220} ${W * 0.5},${H / 2 - 320}"/>
  </g>`;
  return g;
};

const MOTIFS = [archMotif, windowGrid, columns, tower, diagonals, horizon];

function buildSvg({ palette, motif, label, idx }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="g${idx}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${palette.from}"/>
      <stop offset="55%" stop-color="${palette.via}"/>
      <stop offset="100%" stop-color="${palette.to}"/>
    </linearGradient>
    <pattern id="grain${idx}" width="3" height="3" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="0.5" fill="${palette.accent}" opacity="0.10"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#g${idx})"/>
  ${motif(palette)}
  <rect width="100%" height="100%" fill="url(#grain${idx})"/>
  <g font-family="Inter, system-ui, sans-serif" fill="${palette.accent}" opacity="0.7">
    <text x="${W - 40}" y="${H - 36}" font-size="22" letter-spacing="6" text-anchor="end">${label.toUpperCase()}</text>
    <text x="40" y="${H - 36}" font-size="16" letter-spacing="4" opacity="0.55">PLACEHOLDER · BHAGWATI</text>
  </g>
</svg>`;
}

const SLOTS = [
  "hero",
  "studio-portrait",
  "studio-group",
  "cta",
  "testimonial",
  "aravali-residence",
  "sky-tower",
  "linen-house",
  "marble-atelier",
  "courtyard-villa",
  "riverstone-pavilion",
  "chowk-house",
  "granite-studio",
  "ridgeline-villa",
  "process-01",
  "process-02",
  "process-03",
  "process-04",
  "process-05",
  "process-06",
  "gallery-01",
  "gallery-02",
  "gallery-03",
  "gallery-04",
  "gallery-05",
  "gallery-06",
  "gallery-07",
  "gallery-08",
  "gallery-09",
  "gallery-10",
  "gallery-11",
  "gallery-12",
];

SLOTS.forEach((slot, i) => {
  const palette = PALETTES[i % PALETTES.length];
  const motif = MOTIFS[(i * 3) % MOTIFS.length];
  const label = slot.replace(/-/g, " ");
  const file = resolve(out, `${slot}.svg`);
  writeFileSync(file, buildSvg({ palette, motif, label, idx: i }));
});

console.log(`Generated ${SLOTS.length} placeholders in /public/placeholders/`);
