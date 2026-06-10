'use client'

import { useState, useEffect, useRef } from 'react'

// ─── DATA ────────────────────────────────────────────────
const SERVICES = [
  { num: '01', title: 'Brand Strategy', desc: 'We craft brand identities that resonate. From positioning to visual systems, we build brands that people remember and trust.', tags: ['Identity', 'Positioning', 'Guidelines'] },
  { num: '02', title: 'Web Design & Dev', desc: 'Pixel-perfect websites built for performance. We design and develop experiences that convert visitors into customers.', tags: ['Next.js', 'React', 'Webflow'] },
  { num: '03', title: 'Digital Marketing', desc: 'Data-driven campaigns that grow your business. SEO, paid media, and content strategies that deliver measurable ROI.', tags: ['SEO', 'Paid Media', 'Analytics'] },
  { num: '04', title: 'Product Design', desc: 'UX/UI design that puts users first. We create intuitive interfaces backed by user research and usability testing.', tags: ['UX Research', 'Prototyping', 'UI Systems'] },
  { num: '05', title: 'Motion & Video', desc: 'Compelling motion graphics and video production that brings brands to life across every digital touchpoint.', tags: ['Motion', 'Animation', '3D'] },
  { num: '06', title: 'AI Integration', desc: 'Future-proof your business with AI. We integrate intelligent automation and AI-powered features into your digital products.', tags: ['ChatGPT', 'Automation', 'ML'] },
]

const WORK = [
  { title: 'Meridian', category: 'SaaS Platform', year: '2024', color: '#0a1628', accent: '#3b82f6', desc: 'Complete brand identity and web platform for an AI analytics startup. 340% increase in trial signups.' },
  { title: 'VELO', category: 'E-commerce', year: '2024', color: '#1a0a08', accent: '#ff4d00', desc: 'Premium sneaker brand digital experience. Custom product configurator with real-time 3D preview.' },
  { title: 'Pulse', category: 'Dashboard', year: '2024', color: '#0a1a0a', accent: '#10b981', desc: 'Enterprise analytics dashboard with real-time data visualization. Used by 500+ companies worldwide.' },
  { title: 'Forma', category: 'Architecture', year: '2023', color: '#1a1a0a', accent: '#ffb800', desc: 'Award-winning website for a boutique architecture firm. Featured in Awwwards and CSS Design Awards.' },
  { title: 'Solace', category: 'Healthcare', year: '2023', color: '#0a0a1a', accent: '#8b5cf6', desc: 'Mental wellness app and marketing site. Reached 100k downloads within 3 months of launch.' },
  { title: 'Harbor', category: 'Fintech', year: '2023', color: '#0a1616', accent: '#06b6d4', desc: 'Digital banking platform redesign. Reduced onboarding time by 60% through UX optimization.' },
]

const STATS = [
  { value: '8+', label: 'Years of excellence' },
  { value: '200+', label: 'Projects delivered' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '$50M+', label: 'Revenue generated' },
]

const TEAM = [
  { name: 'Alex Rivera', role: 'Creative Director', initials: 'AR', color: '#ff4d00' },
  { name: 'Sam Chen', role: 'Head of Strategy', initials: 'SC', color: '#3b82f6' },
  { name: 'Jordan Lee', role: 'Lead Developer', initials: 'JL', color: '#10b981' },
  { name: 'Morgan Kim', role: 'Design Lead', initials: 'MK', color: '#8b5cf6' },
]

const FAQS = [
  { q: 'What is your typical project timeline?', a: 'Most projects take 4-12 weeks depending on scope. A brand identity project typically takes 4-6 weeks, while a full web development project ranges from 6-12 weeks.' },
  { q: 'How do you price your services?', a: 'We work on fixed-price project basis for most engagements. Pricing depends on scope, complexity, and timeline. We provide detailed proposals after an initial discovery call.' },
  { q: 'Do you work with startups?', a: 'Absolutely. We love working with ambitious startups. We offer flexible payment structures and phased approaches to make premium quality accessible at early stages.' },
  { q: 'What happens after launch?', a: 'We offer ongoing support and maintenance packages. Most clients work with us on a retainer basis for continuous improvements, updates, and growth initiatives.' },
]

const CLIENTS = ['Stripe', 'Notion', 'Linear', 'Vercel', 'Figma', 'Loom']

const NAV_LINKS = [
  { label: 'Work', id: 'work' },
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
]

// ─── COMPONENTS ──────────────────────────────────────────

function Navbar({ activePage }: { activePage: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '16px 48px' : '24px 48px',
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.3s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div style={{ fontWeight: 800, fontSize: 20, letterSpacing: '-0.5px', cursor: 'pointer' }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        NOVEN<span style={{ color: 'var(--accent)' }}>.</span>
      </div>

      <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
        {NAV_LINKS.map(l => (
          <button key={l.id} onClick={() => scrollTo(l.id)} style={{
            background: 'none', border: 'none', color: 'var(--text2)', fontSize: 14,
            fontWeight: 500, cursor: 'pointer', transition: 'color 0.2s', padding: 0,
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}
          >{l.label}</button>
        ))}
        <button onClick={() => scrollTo('contact')} style={{
          background: 'var(--accent)', color: 'white', border: 'none',
          padding: '10px 22px', borderRadius: 6, fontSize: 14, fontWeight: 600,
          cursor: 'pointer', transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.opacity = '0.9' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.opacity = '1' }}
        >Start a project →</button>
      </div>
    </nav>
  )
}

function Tag({ text }: { text: string }) {
  return (
    <span style={{
      fontSize: 11, fontWeight: 600, padding: '4px 12px',
      border: '1px solid var(--border)', borderRadius: 100,
      color: 'var(--text2)', letterSpacing: '0.05em',
    }}>{text}</span>
  )
}

function Section({ id, children, style }: any) {
  return (
    <section id={id} style={{ padding: '120px 48px', ...style }}>
      {children}
    </section>
  )
}

// ─── MAIN ────────────────────────────────────────────────

export default function Agency() {
  const [activeWork, setActiveWork] = useState(0)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: '', email: '', budget: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSend = () => {
    if (!formData.name || !formData.email) return
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setFormData({ name: '', email: '', budget: '', message: '' })
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar activePage="home" />

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '140px 48px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        {/* Grid bg */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 70% at center, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at center, black 30%, transparent 100%)',
        }} />

        {/* Glow */}
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,77,0,0.08) 0%, transparent 70%)', top: '20%', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }} />

        <h1 className="animate-up-2" style={{
          fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 800,
          lineHeight: 1.0, letterSpacing: '-3px', maxWidth: 900, marginBottom: 28,
        }}>
          We build digital<br />
          <span style={{ color: 'var(--accent)' }}>experiences</span> that<br />
          drive growth.
        </h1>

        <p className="animate-up-3" style={{
          fontSize: 18, color: 'var(--text2)', maxWidth: 520,
          lineHeight: 1.7, fontWeight: 300, marginBottom: 48,
        }}>
          NOVEN is a creative agency specializing in brand strategy, web design, and digital marketing for ambitious companies.
        </p>

        <div className="animate-up-4" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} style={{
            background: 'var(--accent)', color: 'white', border: 'none',
            padding: '16px 36px', borderRadius: 8, fontSize: 15, fontWeight: 700,
            cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 0 40px rgba(255,77,0,0.3)',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 60px rgba(255,77,0,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(255,77,0,0.3)' }}
          >View our work →</button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} style={{
            background: 'none', border: '1px solid var(--border)', color: 'var(--text)',
            padding: '16px 32px', borderRadius: 8, fontSize: 15, fontWeight: 500,
            cursor: 'pointer', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'none' }}
          >Start a project</button>
        </div>

        {/* Stats bar */}
        <div style={{
          marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          gap: 0, width: '100%', maxWidth: 800,
          background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden',
        }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{
              padding: '24px', textAlign: 'center',
              borderRight: i < STATS.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--accent)', letterSpacing: '-1px' }}>{s.value}</div>
              <div style={{ fontSize: 12, color: 'var(--text2)', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Trusted by */}
        <div style={{ marginTop: 60, width: '100%' }}>
          <div style={{ fontSize: 11, color: 'var(--text3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>Trusted by teams at</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
            {CLIENTS.map(c => (
              <span key={c} style={{ fontSize: 16, fontWeight: 700, color: 'var(--text3)', transition: 'color 0.2s', cursor: 'default' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text2)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}
              >{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <Section id="work" style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
            <div>
              <div style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Selected Work</div>
              <h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, letterSpacing: '-2px' }}>
                Projects that<br />made an impact.
              </h2>
            </div>
            <div style={{ fontSize: 14, color: 'var(--text2)', maxWidth: 280, textAlign: 'right' }}>
              A selection of our recent work across brand, web, and digital.
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            {WORK.map((w, i) => (
              <div key={w.title} style={{
                background: w.color, padding: '48px', position: 'relative', overflow: 'hidden',
                cursor: 'pointer', minHeight: 320,
                transition: 'transform 0.3s ease',
                border: '1px solid rgba(255,255,255,0.04)',
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.01)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                {/* Accent glow */}
                <div style={{ position: 'absolute', bottom: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: `radial-gradient(circle, ${w.accent}20, transparent 70%)`, pointerEvents: 'none' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'auto' }}>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{w.category}</span>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>{w.year}</span>
                </div>

                <div style={{ marginTop: 60 }}>
                  <h3 style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-2px', marginBottom: 12, color: 'white' }}>{w.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 360 }}>{w.desc}</p>
                </div>

                <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 8, color: w.accent, fontSize: 13, fontWeight: 600 }}>
                  <span>View case study</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SERVICES ── */}
      <Section id="services" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>What We Do</div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, letterSpacing: '-2px', maxWidth: 600 }}>
              Services built<br />for results.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: 'var(--border)' }}>
            {SERVICES.map((s, i) => (
              <div key={s.title} style={{
                background: 'var(--bg2)', padding: '40px 36px',
                transition: 'background 0.2s', cursor: 'default',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg2)')}
              >
                <div style={{ fontSize: 12, color: 'var(--text3)', fontWeight: 600, marginBottom: 20, fontFamily: 'monospace' }}>{s.num}</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, letterSpacing: '-0.5px' }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7, marginBottom: 20 }}>{s.desc}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {s.tags.map(t => <Tag key={t} text={t} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ABOUT ── */}
      <Section id="about" style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', marginBottom: 80 }}>
            <div>
              <div style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>About NOVEN</div>
              <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 800, letterSpacing: '-2px', marginBottom: 28 }}>
                We're obsessed<br />with craft.
              </h2>
              <p style={{ fontSize: 16, color: 'var(--text2)', lineHeight: 1.8, marginBottom: 20 }}>
                Founded in 2016, NOVEN started as a two-person studio with one mission: create digital experiences that actually work. Not just look good — but convert, engage, and grow.
              </p>
              <p style={{ fontSize: 16, color: 'var(--text2)', lineHeight: 1.8, marginBottom: 36 }}>
                Today we're a team of 12 strategists, designers, and developers working with startups and established brands across the globe. We believe the best work happens at the intersection of strategy and aesthetics.
              </p>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} style={{ background: 'none', border: '1px solid var(--border)', color: 'var(--text)', padding: '12px 28px', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'none' }}
              >Work with us →</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {TEAM.map(member => (
                <div key={member.name} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 12, padding: '24px', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: `${member.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 800, color: member.color, marginBottom: 14, border: `1px solid ${member.color}33` }}>{member.initials}</div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{member.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--text2)' }}>{member.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 60 }}>
            <h3 style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-1px', marginBottom: 40 }}>Frequently asked</h3>
            <div>
              {FAQS.map((faq, i) => (
                <div key={i} style={{ borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
                  <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '24px 0', background: 'none', border: 'none', color: 'var(--text)',
                    cursor: 'pointer', textAlign: 'left', fontSize: 16, fontWeight: 600,
                  }}>
                    <span>{faq.q}</span>
                    <span style={{ fontSize: 20, color: 'var(--text2)', transition: 'transform 0.3s', transform: activeFaq === i ? 'rotate(45deg)' : 'none', flexShrink: 0, marginLeft: 16 }}>+</span>
                  </button>
                  {activeFaq === i && (
                    <div style={{ paddingBottom: 24, fontSize: 15, color: 'var(--text2)', lineHeight: 1.7 }}>{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── CONTACT ── */}
      <Section id="contact" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <div style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Get In Touch</div>
            <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 800, letterSpacing: '-2px', marginBottom: 28 }}>
              Let's build<br />something great.
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text2)', lineHeight: 1.8, marginBottom: 48 }}>
              Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { icon: '✉', label: 'Email', value: 'hello@noven.studio' },
                { icon: '📍', label: 'Location', value: 'San Francisco, CA · Remote worldwide' },
                { icon: '⏱', label: 'Response time', value: 'Within 24 hours' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: '40px' }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 28 }}>Start a project</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { key: 'name', label: 'Your name', placeholder: 'John Smith', type: 'text' },
                { key: 'email', label: 'Email address', placeholder: 'john@company.com', type: 'email' },
              ].map(field => (
                <div key={field.key}>
                  <label style={{ fontSize: 12, color: 'var(--text2)', display: 'block', marginBottom: 8, fontWeight: 500 }}>{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={(formData as any)[field.key]}
                    onChange={e => setFormData(f => ({ ...f, [field.key]: e.target.value }))}
                    style={{ width: '100%', padding: '12px 16px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--text)', fontSize: 14, outline: 'none', transition: 'border-color 0.2s' }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(255,77,0,0.5)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>
              ))}

              <div>
                <label style={{ fontSize: 12, color: 'var(--text2)', display: 'block', marginBottom: 8, fontWeight: 500 }}>Project budget</label>
                <select value={formData.budget} onChange={e => setFormData(f => ({ ...f, budget: e.target.value }))} style={{ width: '100%', padding: '12px 16px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, color: formData.budget ? 'var(--text)' : 'var(--text3)', fontSize: 14, outline: 'none' }}>
                  <option value="">Select budget range</option>
                  <option>$5k – $10k</option>
                  <option>$10k – $25k</option>
                  <option>$25k – $50k</option>
                  <option>$50k+</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: 12, color: 'var(--text2)', display: 'block', marginBottom: 8, fontWeight: 500 }}>Tell us about your project</label>
                <textarea
                  placeholder="Brief description of what you're looking for..."
                  value={formData.message}
                  onChange={e => setFormData(f => ({ ...f, message: e.target.value }))}
                  rows={4}
                  style={{ width: '100%', padding: '12px 16px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--text)', fontSize: 14, outline: 'none', resize: 'vertical', fontFamily: 'inherit', transition: 'border-color 0.2s' }}
                  onFocus={e => (e.target.style.borderColor = 'rgba(255,77,0,0.5)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>

              <button onClick={handleSend} style={{
                width: '100%', padding: '14px', background: sent ? '#10b981' : 'var(--accent)',
                color: 'white', border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 700,
                cursor: 'pointer', transition: 'all 0.3s', marginTop: 4,
              }}>
                {sent ? '✓ Message sent! We\'ll be in touch.' : 'Send message →'}
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '32px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-0.5px' }}>
          NOVEN<span style={{ color: 'var(--accent)' }}>.</span>
        </div>
        <span style={{ fontSize: 12, color: 'var(--text3)' }}>© 2025 NOVEN Studio. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 24 }}>
          {['Twitter', 'LinkedIn', 'Dribbble', 'GitHub'].map(l => (
            <a key={l} href="#" style={{ fontSize: 12, color: 'var(--text3)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text2)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}
            >{l}</a>
          ))}
        </div>
      </footer>
    </div>
  )
}
