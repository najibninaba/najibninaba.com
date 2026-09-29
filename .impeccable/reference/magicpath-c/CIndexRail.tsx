import { useEffect, useState } from 'react';
import { bio, experience, fmtDate, links, person, posts, projects } from './content';
import { ArrowUpRight, CopyButton, ProjectPreview, ThemeToggle, img, useTheme } from './ui';
const SECTIONS = [{
  id: 'about',
  label: 'About'
}, {
  id: 'projects',
  label: 'Projects'
}, {
  id: 'writing',
  label: 'Writing'
}, {
  id: 'experience',
  label: 'Experience'
}, {
  id: 'bio',
  label: 'Bio & headshot'
}];
function useActiveSection() {
  const [active, setActive] = useState('about');
  useEffect(() => {
    const els = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(entries => {
      const vis = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (vis) setActive(vis.target.id);
    }, {
      rootMargin: '-20% 0px -60% 0px'
    });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}
function H2({
  children
}: {
  children: React.ReactNode;
}) {
  return <h2 className="m-0 mb-6 text-[13px] font-medium text-[color:var(--ink-3)]" style={{
    fontFamily: 'inherit'
  }}>
      {children}
    </h2>;
}
export const CIndexRail = () => {
  const {
    theme,
    toggle
  } = useTheme();
  const active = useActiveSection();
  const [longBio, setLongBio] = useState(false);
  return <div className="nn" data-theme={theme}>
      <div className="mx-auto grid w-full max-w-[1040px] grid-cols-1 gap-x-16 px-6 pb-24 pt-[clamp(3rem,11vh,7.5rem)] md:grid-cols-[168px_1fr]">
        <aside className="rise md:sticky md:top-0 md:h-screen md:pt-2" style={{
        ['--i' as string]: 0
      }}>
          <div className="flex items-center justify-between md:block">
            <img src={img.profile} alt="" className="h-9 w-9 rounded-full object-cover object-[50%_30%] shadow-[0_0_0_1px_var(--rule)]" />
            <div className="md:hidden"><ThemeToggle theme={theme} onToggle={toggle} /></div>
          </div>
          <nav aria-label="Sections" className="mt-10 hidden md:block">
            <ul className="m-0 list-none space-y-2 p-0 text-[14px]">
              {SECTIONS.map(s => {
              const on = active === s.id;
              return <li key={s.id}>
                    <a href={`#${s.id}`} aria-current={on ? 'true' : undefined} className={`plain relative flex items-center gap-2.5 transition-colors duration-150 ${on ? 'text-[color:var(--ink)]' : 'text-[color:var(--ink-3)] hover:text-[color:var(--ink-2)]'}`}>
                      <span aria-hidden="true" className="h-[5px] w-[5px] rounded-full bg-[color:var(--accent)] transition-[opacity,transform] duration-200" style={{
                    opacity: on ? 1 : 0,
                    transform: on ? 'scale(1)' : 'scale(0.4)'
                  }} />
                      {s.label}
                    </a>
                  </li>;
            })}
            </ul>
            <div className="mt-10"><ThemeToggle theme={theme} onToggle={toggle} /></div>
          </nav>
        </aside>

        <main className="min-w-0 max-w-[680px]">
          <section id="about" className="scroll-mt-16">
            <h1 className="rise m-0 text-[15px] font-medium tracking-[-0.01em] text-[color:var(--ink)]" style={{
            fontFamily: 'inherit',
            ['--i' as string]: 1
          }}>
              {person.name}
            </h1>
            <p className="rise m-0 mt-1 text-[14px] leading-[1.6] text-[color:var(--ink-3)]" style={{
            ['--i' as string]: 1
          }}>
              {person.roles.map(r => `${r.title}, ${r.org}`).join(' · ')}
            </p>
            <p className="rise m-0 mt-10 max-w-[16ch] text-[clamp(34px,4.6vw,48px)] font-medium leading-[1.08] tracking-[-0.03em] text-[color:var(--ink)] [text-wrap:balance]" style={{
            ['--i' as string]: 2
          }}>
              {person.thesis}
            </p>
            <div className="rise mt-10 flex max-w-[60ch] flex-col gap-5 text-[16px] leading-[1.7] text-[color:var(--ink-2)]" style={{
            ['--i' as string]: 3
          }}>
              <p className="m-0">
                I lead Platforms Engineering at AI Singapore, where I joined in 2018 as one of the original four engineers: hybrid
                infrastructure, GPU and HPC capacity, MLOps and data platforms for national AI programmes. Since April 2026 that work sits at
                NTU.
              </p>
              <p className="m-0">
                I started around 2000 building Linux HPC clusters in Singapore, and the habits from that work still hold: clear contracts,
                observable behaviour, and ownership after the demo. These days I build tools for agent-assisted development.
              </p>
            </div>
          </section>

          <section id="projects" className="mt-24 scroll-mt-16" aria-label="Projects">
            <H2>Projects</H2>
            <ul className="m-0 flex list-none flex-col gap-14 p-0">
              {projects.map(p => <li key={p.name} className="group">
                  <div className="overflow-hidden rounded-xl bg-[color:var(--paper-2)] shadow-[0_0_0_1px_var(--rule)]">
                    <ProjectPreview kind={p.preview} className="aspect-[16/9] w-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]" />
                  </div>
                  <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="m-0 text-[18px] font-medium tracking-[-0.015em] text-[color:var(--ink)]" style={{
                  fontFamily: 'inherit'
                }}>
                      {p.href ? <a href={p.href} className="plain">{p.name}</a> : p.name}
                    </h3>
                    <span className="text-[13px] text-[color:var(--ink-3)]">{p.role} · {p.status}</span>
                  </div>
                  <p className="m-0 mt-2 max-w-[60ch] text-[15.5px] leading-[1.65] text-[color:var(--ink-2)]">{p.detail}</p>
                  {p.href && <p className="m-0 mt-3 text-[13px]">
                      <a href={p.href} className="mono text-[12.5px] text-[color:var(--ink-2)]">{p.hrefLabel} <ArrowUpRight /></a>
                    </p>}
                </li>)}
            </ul>
          </section>

          <section id="writing" className="mt-24 scroll-mt-16" aria-label="Writing">
            <H2>Writing</H2>
            <ul className="m-0 list-none p-0">
              {posts.map(w => <li key={w.href}>
                  <a href={w.href} className="plain group grid grid-cols-[104px_1fr] gap-x-4 py-2.5">
                    <span className="mono pt-[2px] text-[12.5px] text-[color:var(--ink-3)]">{fmtDate(w.date)}</span>
                    <span className="text-[15.5px] text-[color:var(--ink)] underline decoration-transparent underline-offset-[0.22em] transition-[text-decoration-color] duration-150 group-hover:decoration-[color:var(--ink-3)]">
                      {w.title}
                    </span>
                  </a>
                </li>)}
            </ul>
          </section>

          <section id="experience" className="mt-24 scroll-mt-16" aria-label="Experience">
            <H2>Experience</H2>
            <ol className="m-0 list-none p-0">
              {experience.map(x => <li key={x.title + x.org} className="grid grid-cols-[104px_1fr] gap-x-4 py-3">
                  <span className="mono pt-[2px] text-[12.5px] text-[color:var(--ink-3)]">{x.years}</span>
                  <span className="text-[15.5px] leading-[1.6]">
                    <span className="text-[color:var(--ink)]">{x.title}</span>
                    <span className="text-[color:var(--ink-3)]"> · {x.org}</span>
                    {x.note && <span className="mt-0.5 block text-[14px] leading-[1.55] text-[color:var(--ink-3)]">{x.note}</span>}
                  </span>
                </li>)}
            </ol>
          </section>

          <section id="bio" className="mt-24 scroll-mt-16" aria-label="Bio and headshot">
            <H2>Bio &amp; headshot</H2>
            <div className="grid gap-8 rounded-xl bg-[color:var(--paper-2)] p-6 sm:grid-cols-[132px_1fr]">
              <div>
                <img src={img.profile} alt="Najib Ninaba" className="aspect-[4/5] w-full rounded-lg object-cover object-[50%_30%]" />
                <a href={img.profile} download="najib-ninaba.png" className="mt-2.5 block text-[13px] text-[color:var(--ink-2)]">Download</a>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <CopyButton text={person.name + ', ' + person.roles.map(r => `${r.title}, ${r.org}`).join('; ')} label="Copy title" />
                  <CopyButton text={bio.short} label="Copy short bio" />
                  <CopyButton text={bio.long.join('\n\n')} label="Copy long bio" />
                </div>
                <div className="mt-5 flex flex-col gap-3 text-[14.5px] leading-[1.7] text-[color:var(--ink-2)]">
                  {(longBio ? bio.long : [bio.short]).map(para => <p key={para.slice(0, 24)} className="m-0">{para}</p>)}
                </div>
                <button type="button" onClick={() => setLongBio(v => !v)} aria-expanded={longBio} className="mt-3 text-[13px] text-[color:var(--ink-3)] hover:text-[color:var(--ink)]">
                  {longBio ? 'Show short bio' : 'Show long bio'}
                </button>
              </div>
            </div>
          </section>

          <footer className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--rule)] pt-6 text-[13px] text-[color:var(--ink-3)]">
            <span>{person.location}</span>
            <nav className="flex gap-5" aria-label="Elsewhere">
              {links.map(l => <a key={l.href} href={l.href} className="plain hover:text-[color:var(--ink)]">{l.label} <ArrowUpRight /></a>)}
            </nav>
          </footer>
        </main>
      </div>
    </div>;
};