import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  Leaf,
  Menu,
  QrCode,
  ShieldCheck,
  WalletCards,
  X,
} from "lucide-react";

const navItems = [
  { label: "How it Works", href: "#how-it-works", chevron: true },
  { label: "Price Intelligence", href: "#price-intelligence" },
  { label: "Verified Buyers", href: "#verified-buyers" },
  { label: "Traceability", href: "#traceability" },
];

function Logo() {
  return (
    <a href="#top" className="brand" aria-label="AgriLoop Direct home">
      <span className="brand-mark"><Leaf size={19} strokeWidth={2.2} /><i /></span>
      <span className="brand-name">agriloop</span>
      <span className="brand-status"><b />DIRECT</span>
    </a>
  );
}

function QrVisual() {
  return (
    <div className="qr-box" aria-label="QR code style lot verification visual">
      <div className="qr-pattern" aria-hidden="true">
        <span className="finder one" /><span className="finder two" /><span className="finder three" />
        <span className="qr-dots" />
      </div>
      <div className="scanner-line" />
    </div>
  );
}

function LotPassport() {
  return (
    <article id="traceability" className="product-card passport-card">
      <div className="card-title-row">
        <div className="mono-label"><span className="pulse-dot green" />VERIFIED LOT PASSPORT</div>
        <ShieldCheck size={18} className="muted-icon" />
      </div>
      <div className="lot-main">
        <img className="crop-thumb" src="https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=420&q=85" alt="Fresh tomatoes in a harvest crate" />
        <div className="lot-copy">
          <h2>Tomato</h2>
          <p>Grade A <span>·</span> Fresh Harvest</p>
          <span className="lot-id">LOT ID · AGR-TN-0425</span>
        </div>
      </div>
      <div className="lot-fields">
        <div><span>Collection point</span><strong>Kanchipuram Collection Hub</strong></div>
        <div><span>Quantity</span><strong>650 kg</strong></div>
        <div><span>Harvested</span><strong>Today, 06:40 AM</strong></div>
      </div>
      <div className="qr-area">
        <QrVisual />
        <div className="qr-copy">
          <span className="mono-label scan-label">SCAN TO VERIFY</span>
          <p>Farm source, grading &amp;<br />delivery trail</p>
          <span className="ready-badge"><Check size={11} />Blockchain-ready trace record</span>
        </div>
      </div>
      <div className="card-foot"><span><Check size={14} />Lot integrity checked</span><b>100% verified</b></div>
    </article>
  );
}

const bids = [
  { initials: "FR", name: "FreshMart Retail", type: "Retail Chain", offer: "₹28.00/kg", top: true, tone: "green" },
  { initials: "GB", name: "GreenBite Kitchens", type: "Restaurant Network", offer: "₹27.50/kg", tone: "amber" },
  { initials: "TF", name: "Tamil Foods Co.", type: "Processing Partner", offer: "₹26.80/kg", tone: "blue" },
];

function BidRow({ bid }: { bid: (typeof bids)[number] }) {
  return (
    <div className={`bid-row ${bid.top ? "top-bid" : ""}`}>
      <span className={`buyer-avatar ${bid.tone}`}>{bid.initials}</span>
      <div className="buyer-copy"><strong>{bid.name}</strong><span>{bid.type}</span></div>
      <div className="bid-value"><b>{bid.offer}</b>{bid.top ? <span className="top-badge">TOP BID <ArrowUpRight size={11} /></span> : null}</div>
    </div>
  );
}

function LiveBids() {
  return (
    <article id="price-intelligence" className="product-card bids-card">
      <div className="card-title-row">
        <div className="mono-label"><span className="pulse-dot live" />LIVE BUYER BIDS</div>
        <span className="active-badge">6 ACTIVE</span>
      </div>
      <div className="bids-intro"><h2>Offers for Lot <span>AGR-TN-0425</span></h2><BarChart3 size={18} className="muted-icon" /></div>
      <div className="bid-list">{bids.map((bid) => <BidRow key={bid.name} bid={bid} />)}</div>
      <div className="net-return">
        <div className="net-heading"><span>BEST NET FARMER RETURN</span><div className="micro-trend"><i /><i /><i /><i /><i /></div></div>
        <div className="net-number">₹25.50<span>/kg</span></div>
        <p>After ₹2.00 transport + ₹0.50 handling</p>
        <div className="net-bottom"><span className="above-badge">₹3.50/kg above local trader offer</span><a href="#verified-buyers">Compare all bids <ArrowRight size={13} /></a></div>
      </div>
    </article>
  );
}

function AppNotice({ message }: { message: string }) {
  return <div className="notice-toast" role="status"><Check size={15} />{message}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2800);
  };

  return (
    <main id="top" className="hero-shell">
      <video className="hero-video" autoPlay loop muted playsInline poster="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2200&q=85" aria-hidden="true">
        <source src="https://videos.pexels.com/video-files/854312/854312-hd_1920_1080_30fps.mp4" type="video/mp4" />
      </video>
      <div className="video-fallback" aria-hidden="true" />
      <div className="video-overlay" aria-hidden="true" />
      <div className="video-vignette" aria-hidden="true" />

      <header className="site-nav">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <a href={item.href} key={item.label}>{item.label}{item.chevron && <ChevronDown size={14} />}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="language-pill" type="button" onClick={() => showNotice("Tamil support is ready for the next onboarding step.")}>தமிழ் / EN</button>
          <button className="nav-cta" type="button" onClick={() => showNotice("List Harvest starts with Mobile Number / OTP.")}>List Harvest <ArrowUpRight size={15} /></button>
        </div>
        <button className={`menu-button ${menuOpen ? "open" : ""}`} type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}><Menu className="menu-icon" size={20} /><X className="close-icon" size={20} /></button>
      </header>

      <div className={`mobile-backdrop ${menuOpen ? "visible" : ""}`} onClick={() => setMenuOpen(false)} aria-hidden="true" />
      <aside className={`mobile-drawer ${menuOpen ? "visible" : ""}`} aria-label="Mobile navigation">
        <div className="drawer-head"><Logo /><button type="button" className="drawer-close" aria-label="Close navigation" onClick={() => setMenuOpen(false)}><X size={20} /></button></div>
        <nav className="drawer-links">{navItems.map((item, index) => <a href={item.href} key={item.label} style={{ transitionDelay: `${index * 55}ms` }} onClick={() => setMenuOpen(false)}>{item.label}{item.chevron && <ChevronDown size={17} />}</a>)}</nav>
        <button className="drawer-language" type="button" onClick={() => showNotice("Tamil support is ready for the next onboarding step.")}>தமிழ் / EN</button>
        <button className="nav-cta drawer-cta" type="button" onClick={() => { setMenuOpen(false); showNotice("List Harvest starts with Mobile Number / OTP."); }}>List Harvest <ArrowUpRight size={16} /></button>
      </aside>

      <div className="hero-content">
        <div className="hero-main">
          <section className="hero-copy" aria-labelledby="hero-title">
            <div className="eyebrow"><span />DIRECT FARM-TO-BUYER NETWORK</div>
            <h1 id="hero-title">Your harvest deserves<br /><em>more than a middleman.</em></h1>
            <p className="hero-description">Aggregate verified produce lots, let trusted buyers compete, and see the final price you earn before you sell.</p>
            <div className="hero-actions">
              <button className="primary-button" type="button" onClick={() => showNotice("Your harvest listing starts with Mobile Number / OTP.")}>List Your Produce <ArrowUpRight size={17} /></button>
              <a className="glass-button" href="#price-intelligence"><BarChart3 size={17} />View Live Market</a>
            </div>
            <div className="trust-row">
              <span><ShieldCheck size={14} />Verified Buyers</span><span><QrCode size={14} />Lot Traceability</span><span><WalletCards size={14} />Direct UPI Settlement</span>
            </div>
          </section>

          <section className="product-area" aria-label="Live marketplace product preview">
            <div className="product-heading"><span />Live product preview <small>updated 12 sec ago</small></div>
            <div className="product-grid">
              <LotPassport />
              <div className="data-connector"><span>VERIFIED DATA FLOW</span><i /><ArrowRight size={18} /></div>
              <LiveBids />
            </div>
          </section>
        </div>

        <section id="how-it-works" className="metrics-row" aria-label="Live marketplace metrics">
          <div><strong>650 kg</strong><span>Active Verified Lot</span></div><i /><div><strong>6 Buyers</strong><span>Competing Now</span></div><i /><div><strong>₹25.50/kg</strong><span>Best Net Return</span></div><i /><div><strong>&lt; 24 hrs</strong><span>Settlement Target</span></div>
        </section>
      </div>
      {notice && <AppNotice message={notice} />}
    </main>
  );
}

export { Home };
