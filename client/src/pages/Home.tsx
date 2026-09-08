import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  Menu,
  QrCode,
  ShieldCheck,
  WalletCards,
  X,
} from "lucide-react";

const navItems = [
  { label: "Network", href: "#how-it-works", chevron: true },
  { label: "Price Intelligence", href: "#price-intelligence" },
  { label: "Traceability", href: "#traceability" },
  { label: "Buyers", href: "#verified-buyers" },
];

function Logo() {
  return (
    <a href="#top" className="brand" aria-label="AgriLoop Direct home">
      <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M12 12C7 12 4.5 9.4 4.5 5.5 8.6 5.4 12 7.4 12 12Z" stroke="currentColor" strokeWidth="1.5" /><path d="M12 12C12 7 14.6 4.5 18.5 4.5 18.6 8.6 16.6 12 12 12Z" stroke="currentColor" strokeWidth="1.5" /><path d="M12 12C17 12 19.5 14.6 19.5 18.5 15.4 18.6 12 16.6 12 12Z" stroke="currentColor" strokeWidth="1.5" /><path d="M12 12C12 17 9.4 19.5 5.5 19.5 5.4 15.4 7.4 12 12 12Z" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></svg></span>
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
        <img className="crop-thumb" src="/assets/agriloop-tomato.webp" alt="Fresh tomatoes in a harvest crate" />
        <div className="lot-copy">
          <h2>Tomato</h2>
          <p>Grade A <span>·</span> Fresh Harvest</p>
          <span className="lot-status">VERIFIED</span>
        </div>
      </div>
      <div className="lot-fields">
        <div><span>NET WEIGHT</span><strong>650 KG</strong></div>
        <div><span>COLLECTION HUB</span><strong>KAN-01</strong></div>
        <div><span>HARVEST LOGGED</span><strong>06:40 AM</strong></div>
        <div><span>LOT ID</span><strong>AGR-TN-0425</strong></div>
      </div>
      <div className="qr-area">
        <QrVisual />
        <div className="qr-copy">
          <span className="mono-label scan-label">SCAN TO VERIFY</span>
          <p>Farm source, weighing,<br />grade and delivery trail.</p>
          <span className="ready-badge"><span className="mini-dot" />TRACE RECORD ACTIVE</span>
        </div>
      </div>
      <div className="card-foot"><span><Check size={14} />Lot integrity checked</span><b>100% traceable</b></div>
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
      <div className="bids-intro"><h2>FOR LOT <span>AGR-TN-0425</span></h2><BarChart3 size={18} className="muted-icon" /></div>
      <div className="bid-list">{bids.map((bid) => <BidRow key={bid.name} bid={bid} />)}</div>
      <div className="net-return">
        <div className="net-heading"><span>BEST NET FARMER RETURN</span><div className="micro-trend"><i /><i /><i /><i /><i /></div></div>
        <div className="net-number">₹25.50<span>/kg</span></div>
        <p>₹28.00 bid − ₹2.00 logistics − ₹0.50 handling</p>
        <div className="net-bottom"><span className="above-badge">↑ ₹3.50/kg vs local trader</span><a href="#verified-buyers">Compare all 6 bids <ArrowRight size={13} /></a></div>
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
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2800);
  };

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setIsNavigating(true);
    setMenuOpen(false);
    window.setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" }), 180);
    window.setTimeout(() => setIsNavigating(false), 620);
  };

  return (
    <main id="top" className="hero-shell">
      <video className="hero-video" autoPlay loop muted playsInline poster="/assets/agriloop-hero-field.webp" aria-hidden="true">
        <source src="https://videos.pexels.com/video-files/5532768/5532768-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>
      <div className="video-fallback" aria-hidden="true" />
      <div className="video-overlay" aria-hidden="true" />
      <div className="video-tint" aria-hidden="true" />
      <div className={`route-transition ${isNavigating ? "active" : ""}`} aria-hidden="true"><span /><span /><span /></div>

      <header className="site-nav">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <a href={item.href} key={item.label} onClick={(event) => handleNavClick(event, item.href)}>{item.label}{item.chevron && <ChevronDown size={14} />}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="language-pill" type="button" onClick={() => showNotice("Tamil support is ready for the next onboarding step.")}>தமிழ் / EN</button>
        </div>
        <button className={`menu-button ${menuOpen ? "open" : ""}`} type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}><Menu className="menu-icon" size={20} /><X className="close-icon" size={20} /></button>
      </header>

      <div className={`mobile-backdrop ${menuOpen ? "visible" : ""}`} onClick={() => setMenuOpen(false)} aria-hidden="true" />
      <aside className={`mobile-drawer ${menuOpen ? "visible" : ""}`} aria-label="Mobile navigation">
        <div className="drawer-head"><Logo /><button type="button" className="drawer-close" aria-label="Close navigation" onClick={() => setMenuOpen(false)}><X size={20} /></button></div>
        <nav className="drawer-links">{navItems.map((item, index) => <a href={item.href} key={item.label} style={{ transitionDelay: `${index * 55}ms` }} onClick={(event) => handleNavClick(event, item.href)}>{item.label}{item.chevron && <ChevronDown size={17} />}</a>)}</nav>
        <button className="drawer-language" type="button" onClick={() => showNotice("Tamil support is ready for the next onboarding step.")}>தமிழ் / EN</button>
        <button className="nav-cta drawer-cta" type="button" onClick={() => { setMenuOpen(false); showNotice("List Harvest starts with Mobile Number / OTP."); }}>List Harvest <ArrowUpRight size={16} /></button>
      </aside>

      <div className="hero-content">
        <div className="hero-main">
          <section className="hero-copy" aria-labelledby="hero-title">
            <div className="eyebrow"><span />VERIFIED FARM-TO-BUYER NETWORK</div>
            <h1 id="hero-title">Your harvest deserves<br /><em>more than a middleman</em></h1>
            <p className="hero-description">List a verified crop lot, receive live offers from trusted buyers, and choose the best final price after every cost is shown.</p>
            <div className="hero-actions">
              <button className="primary-button" type="button" onClick={() => showNotice("Your harvest listing starts with Mobile Number / OTP.")}>List Your Produce <ArrowUpRight size={17} /></button>
              <a className="glass-button" href="#price-intelligence"><BarChart3 size={17} />View Live Market</a>
            </div>
            <div className="trust-row">
              <span><ShieldCheck size={14} />Verified Buyers</span><span><QrCode size={14} />Scan Every Lot</span><span><WalletCards size={14} />UPI Settlement</span>
            </div>
          </section>

          <section className="product-area" aria-label="Live marketplace product preview">
            <div className="product-heading"><span />Live product preview <small>updated 12 sec ago</small></div>
            <div className="product-grid">
              <LotPassport />
              <div className="data-connector"><span>LOT PASSPORT + QR → BUYER BIDS</span><i /><ArrowRight className="connector-right" size={18} /><ArrowRight className="connector-down" size={18} /></div>
              <LiveBids />
            </div>
          </section>
        </div>

        <section id="how-it-works" className="metrics-row" aria-label="Live marketplace metrics">
          <div><strong>650 KG</strong><span>ACTIVE LOT</span></div><i /><div><strong>06</strong><span>BUYERS BIDDING</span></div><i /><div><strong>₹25.50</strong><span>BEST NET RETURN</span></div><i /><div><strong>&lt;24H</strong><span>UPI SETTLEMENT</span></div>
        </section>
      </div>
      {notice && <AppNotice message={notice} />}
    </main>
  );
}

export { Home };
