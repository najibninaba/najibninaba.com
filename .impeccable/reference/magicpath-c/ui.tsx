import { useEffect, useRef, useState } from 'react';
const profile = "https://storage.googleapis.com/storage.magicpath.ai/component-assets/455602869752713216/455602869752713217/99acf0020852650fbaf36b2cabc5a7090b1e3d257adadbee66607b973bc01d24.png";
const orchardShot = "https://storage.googleapis.com/storage.magicpath.ai/component-assets/455602869752713216/455602869752713217/418c6ea64733d43e0d0c0a223b6e8a2a14bd298a33364e870749820bf4969419.jpg";
const orchardShot2 = "https://storage.googleapis.com/storage.magicpath.ai/component-assets/455602869752713216/455602869752713217/fd8a80b488ea8f75214be3c1a869af1132e9c4e0ed21085f94319b8eb0b5d743.jpg";
const cuacaShot = "https://storage.googleapis.com/storage.magicpath.ai/component-assets/455602869752713216/455602869752713217/37ce64ffb4e7072da379d557dd550bfa4a20bfd69cb333fc295a056ec7e45163.jpg";
const rpIcon = "https://storage.googleapis.com/storage.magicpath.ai/component-assets/455602869752713216/455602869752713217/189028092dd6939055647643ba92ad7b8391e9c0b99e288cd40427322e3c7108.png";
import type { Project } from './content';
export const img = {
  profile,
  orchardShot,
  orchardShot2,
  cuacaShot,
  rpIcon
};
export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  return {
    theme,
    toggle: () => setTheme(t => t === 'light' ? 'dark' : 'light')
  };
}
export function ThemeToggle({
  theme,
  onToggle
}: {
  theme: 'light' | 'dark';
  onToggle: () => void;
}) {
  const dark = theme === 'dark';
  return <button type="button" onClick={onToggle} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} className="group inline-flex h-8 w-8 items-center justify-center rounded-full text-[color:var(--ink-3)] transition-colors duration-150 hover:bg-[color:var(--paper-2)] hover:text-[color:var(--ink)]">
      
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.25" />
        <path d="M8 1.75a6.25 6.25 0 0 1 0 12.5z" fill="currentColor" style={{
        transformOrigin: '8px 8px',
        transform: dark ? 'rotate(180deg)' : 'none',
        transition: 'transform 320ms cubic-bezier(0.16,1,0.3,1)'
      }} />
      </svg>
    </button>;
}
export function CopyButton({
  text,
  label = 'Copy'
}: {
  text: string;
  label?: string;
}) {
  const [state, setState] = useState<'idle' | 'done' | 'error'>('idle');
  const t = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(t.current), []);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setState('done');
    } catch {
      setState('error');
    }
    window.clearTimeout(t.current);
    t.current = window.setTimeout(() => setState('idle'), 1800);
  }
  return <button type="button" onClick={copy} className="inline-flex h-7 items-center gap-1.5 rounded-md border border-[color:var(--rule)] px-2.5 text-[13px] text-[color:var(--ink-2)] transition-colors duration-150 hover:border-[color:var(--ink-3)] hover:text-[color:var(--ink)]">
      
      <span aria-live="polite">{state === 'done' ? 'Copied' : state === 'error' ? 'Select and copy' : label}</span>
      {state === 'done' ? <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 6.5l2.2 2.2L9.5 3.5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg> : <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><rect x="3.5" y="3.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.1" fill="none" /><path d="M2.5 8V3.2c0-.4.3-.7.7-.7H8" stroke="currentColor" strokeWidth="1.1" fill="none" /></svg>}
    </button>;
}
export function ProjectPreview({
  kind,
  className = ''
}: {
  kind: Project['preview'];
  className?: string;
}) {
  if (kind === 'repoprompt') {
    return <div className={`flex items-center justify-center bg-[color:var(--paper-2)] ${className}`}>
        <img src={rpIcon} alt="" className="h-20 w-20 drop-shadow-[0_6px_14px_rgba(0,0,0,0.18)]" />
      </div>;
  }
  const src = kind === 'orchard' ? orchardShot : cuacaShot;
  return <img src={src} alt="" className={`object-cover object-top ${className}`} />;
}
export function ArrowUpRight() {
  return <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden="true" className="inline-block translate-y-[-1px]">
      <path d="M3 8l5-5M4 3h4v4" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>;
}

/** Pointer-following preview for desktop hover rows. */
export function usePointerPreview() {
  const [active, setActive] = useState<Project['preview'] | null>(null);
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  });
  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    setPos({
      x: e.clientX,
      y: e.clientY
    });
  };
  return {
    active,
    setActive,
    pos,
    onMove
  };
}