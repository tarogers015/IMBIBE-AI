import { useState, useEffect } from "react";

const C = {
  navy: "#0B1F3A", navyLight: "#132D52", navyDark: "#071428", navyMid: "#1A3A5C",
  teal: "#2DD4BF", tealDark: "#14B8A6",
  gold: "#F59E0B", amber: "#D97706",
  white: "#FFFFFF", off: "#F8FAFC",
  g100: "#F1F5F9", g200: "#E2E8F0", g300: "#CBD5E1",
  g400: "#94A3B8", g500: "#64748B", g600: "#475569",
};

// ═══════════ NAVBAR ═══════════
function Navbar({ onLogin, scrollToDemo, scrollTo }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      padding: "0 48px", height: "72px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(11,31,58,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      transition: "all 0.3s ease",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }} onClick={() => scrollTo("hero")}>
        <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: 900, color: C.navy }}>IM</div>
        <div style={{ fontSize: "17px", fontWeight: 800, color: C.white, letterSpacing: "-0.3px" }}>IMBIBE AI</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
        {["Features", "How It Works", "Plans", "About"].map(l => (
          <a key={l} onClick={() => scrollTo(l.toLowerCase().replace(/ /g, "-"))} style={{ fontSize: "14px", fontWeight: 500, color: C.g300, textDecoration: "none", cursor: "pointer", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = C.teal} onMouseLeave={e => e.target.style.color = C.g300}>{l}</a>
        ))}
        <button onClick={onLogin} style={{ padding: "8px 20px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", background: "transparent", color: C.white, fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>Log In</button>
        <button onClick={scrollToDemo} style={{ padding: "9px 22px", borderRadius: "8px", border: "none", background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, color: C.navy, fontSize: "13px", fontWeight: 700, cursor: "pointer" }}>Request a Demo</button>
      </div>
    </nav>
  );
}

// ═══════════ HERO ═══════════
function Hero({ scrollToDemo }) {
  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: `radial-gradient(ellipse at 30% 20%, ${C.navyLight} 0%, ${C.navy} 40%, ${C.navyDark} 100%)`,
      position: "relative", overflow: "hidden", padding: "120px 48px 80px",
    }}>
      <div style={{ position: "absolute", top: "-15%", right: "-8%", width: "600px", height: "600px", borderRadius: "50%", background: `radial-gradient(circle, ${C.teal}06, transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: "400px", height: "400px", borderRadius: "50%", background: `radial-gradient(circle, ${C.gold}04, transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "20%", left: "8%", width: "1px", height: "120px", background: `linear-gradient(180deg, transparent, ${C.teal}30, transparent)` }} />
      <div style={{ position: "absolute", top: "35%", right: "12%", width: "1px", height: "80px", background: `linear-gradient(180deg, transparent, ${C.gold}20, transparent)` }} />

      <div style={{ maxWidth: "860px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ display: "inline-block", padding: "6px 18px", borderRadius: "100px", background: `${C.teal}12`, border: `1px solid ${C.teal}25`, marginBottom: "28px" }}>
          <span style={{ fontSize: "12px", fontWeight: 700, color: C.teal, letterSpacing: "1px", textTransform: "uppercase" }}>Now accepting early access partners</span>
        </div>
        <h1 style={{ fontSize: "58px", fontWeight: 900, color: C.white, margin: "0 0 20px", lineHeight: 1.08, letterSpacing: "-2px", fontFamily: "'Playfair Display', Georgia, serif" }}>
          The AI-Powered<br /><span style={{ color: C.teal }}>Beverage Marketplace</span>
        </h1>
        <p style={{ fontSize: "18px", color: C.g400, margin: "0 auto 40px", maxWidth: "620px", lineHeight: 1.7 }}>
          IMBIBE AI connects hospitality operators to wholesale beverage distributors — delivering instant price comparisons, automated inventory, and AI-driven forecasting in one platform.
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", marginBottom: "60px" }}>
          <button onClick={scrollToDemo} style={{ padding: "14px 32px", borderRadius: "10px", border: "none", background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, color: C.navy, fontSize: "15px", fontWeight: 800, cursor: "pointer", letterSpacing: "-0.2px" }}>Request a Demo</button>
          <button onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })} style={{ padding: "14px 32px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.15)", background: "transparent", color: C.white, fontSize: "15px", fontWeight: 600, cursor: "pointer" }}>See How It Works ↓</button>
        </div>

        {/* Trust metrics */}
        <div style={{ display: "flex", justifyContent: "center", gap: "48px" }}>
          {[
            { val: "$899B", label: "Industry Market" },
            { val: "1M+", label: "F&B Establishments" },
            { val: "49%", label: "Avg. Cost Savings" },
            { val: "20:1", label: "LTV:CAC Ratio" },
          ].map((m, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "26px", fontWeight: 900, color: C.white, letterSpacing: "-0.5px" }}>{m.val}</div>
              <div style={{ fontSize: "11px", color: C.g500, fontWeight: 500, marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════ FEATURES ═══════════
function Features() {
  const features = [
    { icon: "🛒", title: "B2B Beverage Marketplace", desc: "Centralized product engine across all wholesalers. AI-powered Best Price Possible (BPP) matching compares pricing instantly so you never overpay." },
    { icon: "📦", title: "Automated Inventory", desc: "POS integration auto-depletes inventory based on real-time consumption — generating true counts and eliminating 20+ hours of manual counting per month." },
    { icon: "💳", title: "Payment Processing", desc: "Pay immediately or set autopay for invoice due dates. SLA compliance monitoring alerts you before deadlines to protect your ordering privileges." },
    { icon: "🔮", title: "AI Forecasting", desc: "Revenue, labor, and purchase forecasting powered by your consumption data and seasonal trends. Let AI make the decisions so you can focus on guests." },
    { icon: "🛡️", title: "License Verification", desc: "OCR-based liquor license validation against state authority databases ensures every B2B transaction is fully compliant." },
    { icon: "📊", title: "Consolidated Reporting", desc: "One dashboard for purchasing, accounting, and operations — replacing 4-5 separate tools with a single source of truth." },
  ];
  return (
    <section id="features" style={{ padding: "100px 48px", background: C.white }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ fontSize: "12px", fontWeight: 700, color: C.teal, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>Platform Features</div>
          <h2 style={{ fontSize: "40px", fontWeight: 900, color: C.navy, margin: "0 0 14px", letterSpacing: "-1px", fontFamily: "'Playfair Display', Georgia, serif" }}>Everything Hospitality Needs</h2>
          <p style={{ fontSize: "16px", color: C.g500, maxWidth: "560px", margin: "0 auto", lineHeight: 1.6 }}>From ordering to forecasting, IMBIBE AI replaces fragmented workflows with one intelligent platform.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {features.map((f, i) => (
            <div key={i} style={{
              padding: "32px 28px", borderRadius: "16px", border: `1px solid ${C.g200}`,
              background: C.white, transition: "all 0.3s ease", cursor: "default",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.teal + "40"; e.currentTarget.style.boxShadow = `0 8px 30px ${C.teal}12`; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.g200; e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)"; e.currentTarget.style.transform = "none"; }}
            >
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: `${C.teal}10`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", marginBottom: "18px" }}>{f.icon}</div>
              <h3 style={{ fontSize: "17px", fontWeight: 800, color: C.navy, margin: "0 0 10px", letterSpacing: "-0.3px" }}>{f.title}</h3>
              <p style={{ fontSize: "13.5px", color: C.g500, margin: 0, lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════ HOW IT WORKS ═══════════
function HowItWorks() {
  const steps = [
    { num: "01", title: "Verify Your License", desc: "Upload your liquor license during onboarding. Our OCR technology validates it against state authority databases in seconds.", icon: "🛡️" },
    { num: "02", title: "Connect to Wholesalers", desc: "Geofencing automatically matches you with available wholesale distributors in your market — no manual searching required.", icon: "📍" },
    { num: "03", title: "Compare & Order", desc: "Browse products across all connected wholesalers in one view. AI highlights the Best Price Possible on every SKU.", icon: "🛒" },
    { num: "04", title: "Automate Everything", desc: "POS integration auto-depletes inventory, AI forecasts your next order, and payments process on schedule. Your business runs itself.", icon: "🤖" },
  ];
  return (
    <section id="how-it-works" style={{ padding: "100px 48px", background: C.off }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ fontSize: "12px", fontWeight: 700, color: C.teal, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>How It Works</div>
          <h2 style={{ fontSize: "40px", fontWeight: 900, color: C.navy, margin: 0, letterSpacing: "-1px", fontFamily: "'Playfair Display', Georgia, serif" }}>Up and Running in Minutes</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
          {steps.map((s, i) => (
            <div key={i} style={{ textAlign: "center", position: "relative" }}>
              {i < 3 && <div style={{ position: "absolute", top: "36px", left: "60%", width: "80%", height: "2px", background: `linear-gradient(90deg, ${C.teal}30, transparent)`, zIndex: 0 }} />}
              <div style={{
                width: "72px", height: "72px", borderRadius: "20px",
                background: C.navy, display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "28px", margin: "0 auto 18px", position: "relative", zIndex: 1,
                boxShadow: `0 8px 24px ${C.navy}40`,
              }}>{s.icon}</div>
              <div style={{ fontSize: "11px", fontWeight: 800, color: C.teal, letterSpacing: "1px", marginBottom: "6px" }}>STEP {s.num}</div>
              <h3 style={{ fontSize: "16px", fontWeight: 800, color: C.navy, margin: "0 0 8px" }}>{s.title}</h3>
              <p style={{ fontSize: "13px", color: C.g500, margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════ DUAL PORTAL ═══════════
function DualPortal() {
  return (
    <section style={{ padding: "100px 48px", background: C.navy }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div style={{ fontSize: "12px", fontWeight: 700, color: C.teal, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>Two-Sided Marketplace</div>
          <h2 style={{ fontSize: "40px", fontWeight: 900, color: C.white, margin: "0 0 12px", letterSpacing: "-1px", fontFamily: "'Playfair Display', Georgia, serif" }}>Built for Both Sides</h2>
          <p style={{ fontSize: "16px", color: C.g400, maxWidth: "540px", margin: "0 auto", lineHeight: 1.6 }}>Operators and suppliers each get a dedicated portal tailored to their workflow.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          {[
            { icon: "🍸", title: "Operator Portal", accent: C.teal, features: ["Compare prices across all wholesalers", "AI-powered Best Price Possible matching", "Auto-depleting inventory via POS", "Revenue & labor forecasting", "Compliant payment processing"] },
            { icon: "🏛️", title: "Supplier Portal", accent: C.gold, features: ["Upload product catalogs & pricing", "Receive and fulfill orders in real-time", "Run specials via marketplace ticker", "Operator network & analytics", "Free to join — transaction fee model"] },
          ].map((p, i) => (
            <div key={i} style={{
              padding: "36px 32px", borderRadius: "20px",
              background: C.navyLight, border: `1px solid ${p.accent}15`,
            }}>
              <div style={{ fontSize: "36px", marginBottom: "14px" }}>{p.icon}</div>
              <h3 style={{ fontSize: "22px", fontWeight: 800, color: C.white, margin: "0 0 18px" }}>{p.title}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {p.features.map((f, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "20px", height: "20px", borderRadius: "6px", background: `${p.accent}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: p.accent, fontWeight: 700, flexShrink: 0 }}>✓</div>
                    <span style={{ fontSize: "14px", color: C.g300 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════ PLANS ═══════════
function Plans({ scrollToDemo }) {
  const tiers = [
    { name: "COSMO", sub: "Starter", features: ["Up to 10 users", "Marketplace access", "Basic reporting", "Live chat support"], icon: "🍸" },
    { name: "MARTINI", sub: "SMB", features: ["Up to 25 users", "Full marketplace access", "Payment processing", "Extended analytics", "POS integration"], icon: "🍸", popular: true },
    { name: "MANHATTAN", sub: "Enterprise", features: ["Unlimited users", "Full platform access", "AI forecasting", "Dedicated CSM", "Custom integrations", "Priority support"], icon: "🥃" },
  ];
  return (
    <section id="plans" style={{ padding: "100px 48px", background: C.white }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div style={{ fontSize: "12px", fontWeight: 700, color: C.teal, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>Plans</div>
          <h2 style={{ fontSize: "40px", fontWeight: 900, color: C.navy, margin: "0 0 12px", letterSpacing: "-1px", fontFamily: "'Playfair Display', Georgia, serif" }}>Plans That Scale With You</h2>
          <p style={{ fontSize: "16px", color: C.g500, maxWidth: "520px", margin: "0 auto" }}>From single-location operators to enterprise groups — choose the tier that fits your operation.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {tiers.map((t, i) => (
            <div key={i} style={{
              borderRadius: "20px", overflow: "hidden",
              border: t.popular ? `2px solid ${C.teal}` : `1px solid ${C.g200}`,
              background: C.white, position: "relative",
              boxShadow: t.popular ? `0 12px 40px ${C.teal}15` : "0 1px 3px rgba(0,0,0,0.04)",
              transform: t.popular ? "scale(1.04)" : "none",
            }}>
              {t.popular && <div style={{ background: C.teal, padding: "6px", textAlign: "center", fontSize: "11px", fontWeight: 800, color: C.navy, letterSpacing: "1px", textTransform: "uppercase" }}>Most Popular</div>}
              <div style={{ padding: "32px 28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <span style={{ fontSize: "20px" }}>{t.icon}</span>
                  <div style={{ fontSize: "18px", fontWeight: 800, color: C.navy, letterSpacing: "-0.3px" }}>{t.name}</div>
                </div>
                <div style={{ fontSize: "13px", color: C.g500, marginBottom: "20px" }}>{t.sub}</div>
                <div style={{ height: "1px", background: C.g200, margin: "0 0 20px" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
                  {t.features.map((f, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13.5px", color: C.g600 }}>
                      <span style={{ color: C.teal, fontWeight: 700 }}>✓</span> {f}
                    </div>
                  ))}
                </div>
                <button onClick={scrollToDemo} style={{
                  width: "100%", padding: "12px", borderRadius: "10px", border: "none",
                  background: t.popular ? `linear-gradient(135deg, ${C.teal}, ${C.tealDark})` : C.off,
                  color: C.navy, fontSize: "13px", fontWeight: 700, cursor: "pointer",
                }}>Request a Demo</button>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <p style={{ fontSize: "14px", color: C.g400 }}>Contact us for custom pricing tailored to your operation. Wholesalers join free.</p>
        </div>
      </div>
    </section>
  );
}


// ═══════════ ABOUT ═══════════
function About({ scrollToDemo }) {
  return (
    <section id="about" style={{ padding: "100px 48px", background: C.off }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div style={{ fontSize: "12px", fontWeight: 700, color: C.teal, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>About IMBIBE AI</div>
          <h2 style={{ fontSize: "40px", fontWeight: 900, color: C.navy, margin: "0 0 14px", letterSpacing: "-1px", fontFamily: "'Playfair Display', Georgia, serif" }}>Built by Hospitality, for Hospitality</h2>
          <p style={{ fontSize: "16px", color: C.g500, maxWidth: "620px", margin: "0 auto", lineHeight: 1.7 }}>
            IMBIBE AI was born from firsthand experience with the operational pain points that every hospitality professional knows too well.
          </p>
        </div>

        {/* The Why */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "48px" }}>
          <div style={{ padding: "36px 32px", borderRadius: "20px", background: C.navy }}>
            <div style={{ fontSize: "12px", fontWeight: 700, color: C.gold, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "14px" }}>Why We Exist</div>
            <p style={{ fontSize: "15px", color: C.g300, lineHeight: 1.8, margin: "0 0 16px" }}>
              The hospitality industry — bars, restaurants, hotels, convention centers, stadiums, casinos, resorts, cafes, and more — is one of the last sectors to embrace technology. Aside from real estate, no major industry has been slower to innovate.
            </p>
            <p style={{ fontSize: "15px", color: C.g300, lineHeight: 1.8, margin: 0 }}>
              Operators face rising wages, increasing product costs, razor-thin margins, and fragmented workflows that rely on manual processes, spreadsheets, and guesswork. Wholesalers email product lists independently, invoices get lost with deliveries, and operators spend over 20 hours a month on inventory practices that still return inaccurate data.
            </p>
          </div>
          <div style={{ padding: "36px 32px", borderRadius: "20px", background: C.navy }}>
            <div style={{ fontSize: "12px", fontWeight: 700, color: C.teal, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "14px" }}>What We Believe</div>
            <p style={{ fontSize: "15px", color: C.g300, lineHeight: 1.8, margin: "0 0 16px" }}>
              We believe that by improving operational efficiency within the hospitality sector, we can have a direct impact on profitability. Lower beverage cost. Lower labor cost. Better data. Smarter decisions.
            </p>
            <p style={{ fontSize: "15px", color: C.g300, lineHeight: 1.8, margin: 0 }}>
              Hospitality Professionals support other Hospitality Professionals because we all experience the same pain points and frustrations — no matter the department, process, or reporting line. We are a loyal community committed to service excellence, and IMBIBE AI was created to give that community the tools it deserves.
            </p>
          </div>
        </div>

        {/* The Platform */}
        <div style={{ padding: "40px 36px", borderRadius: "20px", background: C.white, border: `1px solid ${C.g200}`, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "12px", fontWeight: 700, color: C.teal, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "14px" }}>The Platform</div>
              <h3 style={{ fontSize: "24px", fontWeight: 900, color: C.navy, margin: "0 0 16px", letterSpacing: "-0.5px", fontFamily: "'Playfair Display', Georgia, serif" }}>One Marketplace. Every Wholesaler. The Best Price Possible.</h3>
              <p style={{ fontSize: "14.5px", color: C.g600, lineHeight: 1.75, margin: "0 0 18px" }}>
                IMBIBE AI is the food and beverage marketplace for all business and consumer-based transactions related to on and off premise consumption. We use geofencing to source available wholesalers in your market, and artificial intelligence to guide you to the best price possible on available inventory.
              </p>
              <p style={{ fontSize: "14.5px", color: C.g600, lineHeight: 1.75, margin: 0 }}>
                Our platform matches products across various wholesalers and alerts purchasers to the best price — becoming a purchasing platform, an accounts payable and payment platform, and an inventory solution all in one. By eliminating human error, reducing labor, and improving KPIs, IMBIBE AI promotes the financial health and operational stability that every hospitality business needs to survive and thrive.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              {[
                { val: "$899B", label: "Total Industry Market", icon: "💰" },
                { val: "49%", label: "Avg. Cost Savings", icon: "📉" },
                { val: "20+ hrs", label: "Manual Labor Eliminated /mo", icon: "⏱️" },
                { val: "1M+", label: "F&B Establishments Nationwide", icon: "🏪" },
              ].map((s, i) => (
                <div key={i} style={{ padding: "18px 16px", borderRadius: "14px", background: C.off, border: `1px solid ${C.g100}`, textAlign: "center" }}>
                  <div style={{ fontSize: "20px", marginBottom: "6px" }}>{s.icon}</div>
                  <div style={{ fontSize: "22px", fontWeight: 900, color: C.navy, letterSpacing: "-0.5px" }}>{s.val}</div>
                  <div style={{ fontSize: "10.5px", color: C.g500, marginTop: "4px", lineHeight: 1.3 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision */}
        <div style={{ marginTop: "40px", padding: "32px 36px", borderRadius: "16px", background: C.navy, textAlign: "center" }}>
          <p style={{ fontSize: "20px", color: C.white, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 8px", fontFamily: "'Playfair Display', Georgia, serif", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
            "The hospitality industry will not survive if innovation is not embraced. IMBIBE AI is the only platform with an emphasis on operational and financial success. We will make hospitality efficient and easier by eliminating the white noise."
          </p>
          <div style={{ height: "1px", width: "60px", background: C.teal, margin: "18px auto" }} />
          <p style={{ fontSize: "14px", color: C.g400, margin: "0 0 24px", maxWidth: "580px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>
            Our vision extends beyond beverages. By gaining trust through data and innovation, IMBIBE AI will expand into the food sector — applying the same marketplace, price comparison, and AI forecasting to food purveyors and distributors. IMBIBE AI will be the solution for all things hospitality.
          </p>
          <button onClick={scrollToDemo} style={{ padding: "12px 28px", borderRadius: "10px", border: "none", background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, color: C.navy, fontSize: "14px", fontWeight: 800, cursor: "pointer" }}>Request a Demo →</button>
        </div>
      </div>
    </section>
  );
}

// ═══════════ DEMO REQUEST FORM ═══════════
function DemoForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "operator", locations: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const u = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const inputStyle = {
    width: "100%", padding: "13px 16px", borderRadius: "10px",
    border: `1px solid ${C.g200}`, fontSize: "14px", color: C.navy,
    outline: "none", background: C.white, boxSizing: "border-box",
    fontFamily: "inherit",
  };
  const labelStyle = { fontSize: "12px", fontWeight: 600, color: C.g600, marginBottom: "6px", display: "block" };

  if (submitted) {
    return (
      <section id="demo" style={{ padding: "100px 48px", background: C.white }}>
        <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: `${C.teal}12`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: "36px" }}>✅</div>
          <h2 style={{ fontSize: "32px", fontWeight: 900, color: C.navy, margin: "0 0 12px", fontFamily: "'Playfair Display', Georgia, serif" }}>Demo Requested!</h2>
          <p style={{ fontSize: "16px", color: C.g500, lineHeight: 1.6 }}>Thank you, {form.name || "there"}. Our team will reach out within 24 hours to schedule your personalized demo of the IMBIBE AI platform.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="demo" style={{ padding: "100px 48px", background: C.white }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "12px", fontWeight: 700, color: C.teal, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>Get Started</div>
          <h2 style={{ fontSize: "36px", fontWeight: 900, color: C.navy, margin: "0 0 16px", letterSpacing: "-0.5px", fontFamily: "'Playfair Display', Georgia, serif" }}>Request a Demo</h2>
          <p style={{ fontSize: "15px", color: C.g500, lineHeight: 1.7, margin: "0 0 28px" }}>See how IMBIBE AI can transform your beverage operations. Our team will walk you through the platform tailored to your business.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              { icon: "⚡", text: "30-minute personalized walkthrough" },
              { icon: "📊", text: "Custom ROI analysis for your operation" },
              { icon: "🎁", text: "30-day free trial for qualified operators" },
            ].map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: `${C.teal}10`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0 }}>{b.icon}</div>
                <span style={{ fontSize: "14px", color: C.g600, fontWeight: 500 }}>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: "32px", borderRadius: "20px", background: C.off, border: `1px solid ${C.g200}` }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            <div><label style={labelStyle}>Full Name *</label><input value={form.name} onChange={e => u("name", e.target.value)} placeholder="Jane Smith" style={inputStyle} /></div>
            <div><label style={labelStyle}>Work Email *</label><input value={form.email} onChange={e => u("email", e.target.value)} placeholder="jane@restaurant.com" style={inputStyle} /></div>
            <div style={{ gridColumn: "1 / -1" }}><label style={labelStyle}>Company / Venue Name *</label><input value={form.company} onChange={e => u("company", e.target.value)} placeholder="" style={inputStyle} /></div>
            <div><label style={labelStyle}>I am a... *</label><select value={form.role} onChange={e => u("role", e.target.value)} style={{ ...inputStyle, appearance: "none" }}><option value="operator">Operator (Bar/Restaurant/Hotel)</option><option value="supplier">Wholesale Distributor</option><option value="investor">Investor</option><option value="other">Other</option></select></div>
            <div><label style={labelStyle}># of Locations</label><input value={form.locations} onChange={e => u("locations", e.target.value)} placeholder="e.g. 3" style={inputStyle} /></div>
            <div style={{ gridColumn: "1 / -1" }}><label style={labelStyle}>Anything else?</label><textarea value={form.message} onChange={e => u("message", e.target.value)} placeholder="Tell us about your current beverage workflow..." rows={3} style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }} /></div>
          </div>
          <button onClick={() => setSubmitted(true)} style={{
            width: "100%", marginTop: "18px", padding: "14px", borderRadius: "10px", border: "none",
            background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`,
            color: C.navy, fontSize: "15px", fontWeight: 800, cursor: "pointer",
          }}>Request My Demo →</button>
          <div style={{ fontSize: "11px", color: C.g400, textAlign: "center", marginTop: "12px" }}>No credit card required · Response within 24 hours</div>
        </div>
      </div>
    </section>
  );
}

// ═══════════ FOOTER ═══════════
function Footer() {
  return (
    <footer style={{ padding: "60px 48px 40px", background: C.navyDark }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "40px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 900, color: C.navy }}>IM</div>
              <span style={{ fontSize: "16px", fontWeight: 800, color: C.white }}>IMBIBE AI</span>
            </div>
            <p style={{ fontSize: "13px", color: C.g500, maxWidth: "280px", lineHeight: 1.6, margin: 0 }}>The B2B beverage marketplace powered by AI. Connecting operators to wholesalers for a more efficient hospitality industry.</p>
          </div>
          <div style={{ display: "flex", gap: "60px" }}>
            {[
              { title: "Product", links: ["Features", "Pricing", "Operators", "Suppliers"] },
              { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
              { title: "Legal", links: ["Privacy Policy", "Terms of Service", "CONFIDENTIAL"] },
            ].map((col, i) => (
              <div key={i}>
                <div style={{ fontSize: "12px", fontWeight: 700, color: C.g400, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "14px" }}>{col.title}</div>
                {col.links.map((l, j) => <div key={j} style={{ fontSize: "13px", color: C.g500, marginBottom: "8px", cursor: "pointer" }}>{l}</div>)}
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: `1px solid rgba(255,255,255,0.06)`, paddingTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "12px", color: C.g500 }}>© 2026 Imbibe AI, Inc. All rights reserved.</span>
          <span style={{ fontSize: "12px", color: C.g500 }}>www.imbibeai.io</span>
        </div>
      </div>
    </footer>
  );
}

// ═══════════ LOGIN MODAL ═══════════
function LoginModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = () => {
    setError(true);
  };

  const inputStyle = {
    width: "100%", padding: "13px 16px", borderRadius: "10px",
    border: `1px solid ${C.g200}`, fontSize: "14px", color: C.navy,
    outline: "none", background: C.white, boxSizing: "border-box",
    fontFamily: "inherit",
  };

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "rgba(7,20,40,0.85)", backdropFilter: "blur(12px)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{
        width: "100%", maxWidth: "420px", background: C.white,
        borderRadius: "24px", padding: "40px 36px",
        boxShadow: "0 25px 80px rgba(0,0,0,0.4)",
      }}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: "22px", fontWeight: 900, color: C.navy }}>IM</div>
          <h2 style={{ fontSize: "22px", fontWeight: 900, color: C.navy, margin: "0 0 4px" }}>Welcome Back</h2>
          <p style={{ fontSize: "13px", color: C.g400, margin: 0 }}>Sign in to your IMBIBE AI portal</p>
        </div>

        <div style={{ marginBottom: "14px" }}>
          <label style={{ fontSize: "12px", fontWeight: 600, color: C.g600, marginBottom: "6px", display: "block" }}>Email</label>
          <input value={email} onChange={e => { setEmail(e.target.value); setError(false); }} placeholder="you@company.com" style={inputStyle} />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontSize: "12px", fontWeight: 600, color: C.g600, marginBottom: "6px", display: "block" }}>Password</label>
          <input value={pass} onChange={e => { setPass(e.target.value); setError(false); }} type="password" placeholder="••••••••" style={inputStyle} />
        </div>

        {error && (
          <div style={{ padding: "10px 14px", borderRadius: "8px", background: `${C.red}08`, border: `1px solid ${C.red}20`, marginBottom: "14px", fontSize: "12px", color: C.red, fontWeight: 500 }}>
            Invalid credentials. Please check your email and password, or contact your admin.
          </div>
        )}

        <button onClick={handleLogin} style={{
          width: "100%", padding: "13px", borderRadius: "10px", border: "none",
          background: `linear-gradient(135deg, ${C.teal}, ${C.tealDark})`,
          color: C.navy, fontSize: "14px", fontWeight: 800, cursor: "pointer",
          marginBottom: "14px",
        }}>Sign In</button>

        <div style={{ textAlign: "center", fontSize: "12px", color: C.g400 }}>
          Don't have an account? <span style={{ color: C.tealDark, fontWeight: 600, cursor: "pointer" }}>Request a Demo</span>
        </div>
      </div>
    </div>
  );
}

// ═══════════ MAIN APP ═══════════
export default function ImbibeWebsite() {
  const [showLogin, setShowLogin] = useState(false);

  const scrollToDemo = () => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif", overflowX: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap" rel="stylesheet" />

      <Navbar onLogin={() => setShowLogin(true)} scrollToDemo={scrollToDemo} scrollTo={scrollTo} />
      <Hero scrollToDemo={scrollToDemo} />
      <Features />
      <HowItWorks />
      <DualPortal />
      <Plans scrollToDemo={scrollToDemo} />
      <About scrollToDemo={scrollToDemo} />
      <DemoForm />
      <Footer />

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </div>
  );
}
