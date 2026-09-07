import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Eye,
  Handshake,
  Leaf,
  Menu,
  Mic,
  Plus,
  QrCode,
  ReceiptText,
  Scale,
  ShieldCheck,
  Sprout,
  Truck,
  TrendingUp,
  UserRound,
  WalletCards,
  X,
} from "lucide-react";

const navItems = [
  { label: "How It Works", href: "#process" },
  { label: "Market Prices", href: "#prices" },
  { label: "Verified Buyers", href: "#buyers", hasChevron: true },
  { label: "Track My Lot", href: "#lot" },
];

const trustItems = [
  { icon: ShieldCheck, label: "Verified Buyers" },
  { icon: WalletCards, label: "Direct UPI Payment" },
  { icon: QrCode, label: "Lot Traceability" },
  { icon: Mic, label: "Tamil Voice Support" },
];

const processItems = [
  { icon: Sprout, label: "Farmer" },
  { icon: Scale, label: "Smart Collection Centre" },
  { icon: Handshake, label: "Competitive Buyer Bidding" },
  { icon: Truck, label: "Smart Delivery" },
  { icon: WalletCards, label: "Direct UPI Payment" },
];

function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <Leaf size={19} strokeWidth={2.3} />
      <span className="logo-node" />
    </span>
  );
}

function ButtonLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`inline-flex items-center justify-center gap-2 ${className}`}>{children}</span>;
}

function OfferCard() {
  return (
    <article id="prices" className="dashboard-card offer-card">
      <div className="card-header">
        <div className="card-icon crop-icon" aria-hidden="true">🍅</div>
        <div className="min-w-0">
          <p className="card-kicker">Today’s Best Offer</p>
          <p className="card-label">Tomato <span className="dot-separator">·</span> Grade A</p>
        </div>
        <span className="live-badge"><span className="live-dot" />Live</span>
      </div>

      <div className="offer-value-row">
        <div>
          <p className="price-value">₹25.50<span>/kg</span></p>
          <p className="muted-copy">Your estimated net farmer price</p>
        </div>
        <div className="mini-bars" aria-label="Buyer bids trend">
          <span style={{ height: "34%" }} />
          <span style={{ height: "55%" }} />
          <span style={{ height: "44%" }} />
          <span className="active-bar" style={{ height: "82%" }} />
          <span style={{ height: "63%" }} />
        </div>
      </div>

      <div className="breakdown-list">
        <div><span>Buyer Offer</span><strong>₹28.00/kg</strong></div>
        <div><span>Shared Transport</span><strong>−₹2.00/kg</strong></div>
        <div><span>Handling</span><strong>−₹0.50/kg</strong></div>
      </div>

      <div className="success-strip">
        <TrendingUp size={15} strokeWidth={2.2} />
        <span>₹3.50/kg higher than local trader offer</span>
      </div>

      <div className="card-footer">
        <div className="bidder-stack" aria-label="Six buyer bids">
          <span className="bidder-avatar">A</span><span className="bidder-avatar alt">R</span><span className="bidder-avatar orange">S</span><span className="bid-count">+3</span>
          <span className="footer-note">6 Buyer Bids</span>
        </div>
        <a className="card-link" href="#buyers">View bids <ArrowRight size={14} /></a>
      </div>
    </article>
  );
}

function LotCard() {
  return (
    <article id="lot" className="dashboard-card lot-card">
      <div className="card-header lot-header">
        <div className="card-icon qr-icon" aria-hidden="true"><QrCode size={20} /></div>
        <div className="min-w-0">
          <p className="card-kicker">Your Harvest Lot</p>
          <p className="card-label">AGR-TM-2407</p>
        </div>
        <span className="verified-badge"><Check size={12} strokeWidth={3} />Verified</span>
      </div>

      <div className="lot-hero-row">
        <div>
          <p className="lot-quantity">650 <span>kg combined</span></p>
          <p className="muted-copy">3 farmers joined</p>
        </div>
        <div className="farmer-avatar" aria-label="Illustrated farmer avatar"><span>R</span></div>
      </div>

      <div className="lot-detail-grid">
        <div><span>Collection Centre</span><strong>Kanchipuram Hub</strong></div>
        <div><span>Payment</span><strong>UPI protected</strong></div>
      </div>

      <div className="status-tracker" aria-label="Harvest lot progress">
        <div className="track-line" />
        {["Listed", "Quality Checked", "Buyer Selected", "Payment Sent"].map((step, index) => (
          <div className={`status-step ${index === 2 ? "active" : ""} ${index < 2 ? "complete" : ""}`} key={step}>
            <span className="status-dot">{index < 2 ? <Check size={11} strokeWidth={3} /> : index === 2 ? <span /> : null}</span>
            <span>{step}</span>
          </div>
        ))}
      </div>

      <div className="card-footer lot-footer">
        <span className="protected-label"><ShieldCheck size={15} />UPI payment protected</span>
        <a className="card-link" href="#process">Track lot <ArrowRight size={14} /></a>
      </div>
    </article>
  );
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
    <main className="hero-shell">
      <div className="hero-image" aria-hidden="true" />
      <div className="hero-wash" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />

      <header className="site-nav">
        <a className="brand-lockup" href="#top" aria-label="AgriLoop Direct home">
          <LogoMark />
          <span>AgriLoop <b>Direct</b></span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.label} className="nav-link">
              {item.label}{item.hasChevron && <ChevronDown size={14} strokeWidth={2.1} />}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="language-toggle" type="button" onClick={() => showNotice("Tamil voice support is ready for your next step.")}>தமிழ் <span>|</span> English</button>
          <button className="login-button" type="button" onClick={() => showNotice("Mobile Number / OTP sign in is coming next.")}>Log in</button>
          <button className="primary-cta nav-cta" type="button" onClick={() => showNotice("Let’s start with your produce and mobile number.")}>Get Started <ArrowRight size={15} /></button>
        </div>

        <button className={`menu-button ${menuOpen ? "is-open" : ""}`} type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
          <Menu className="menu-icon" size={20} /><X className="close-icon" size={20} />
        </button>
      </header>

      <div className={`mobile-backdrop ${menuOpen ? "visible" : ""}`} onClick={() => setMenuOpen(false)} aria-hidden={!menuOpen} />
      <aside className={`mobile-drawer ${menuOpen ? "visible" : ""}`} aria-label="Mobile navigation">
        <div className="drawer-top">
          <a className="brand-lockup" href="#top" onClick={() => setMenuOpen(false)}><LogoMark /><span>AgriLoop <b>Direct</b></span></a>
          <button className="drawer-close" type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)}><X size={20} /></button>
        </div>
        <div className="drawer-links">
          {navItems.map((item, index) => (
            <a href={item.href} key={item.label} style={{ transitionDelay: `${index * 60}ms` }} onClick={() => setMenuOpen(false)}>{item.label}{item.hasChevron && <ChevronDown size={17} />}</a>
          ))}
          <button type="button" className="drawer-language" onClick={() => showNotice("Tamil voice support is ready for your next step.")}>தமிழ் <span>|</span> English</button>
        </div>
        <button type="button" className="primary-cta drawer-cta" onClick={() => { setMenuOpen(false); showNotice("Let’s start with your produce and mobile number."); }}>List Your Produce <Plus size={17} /></button>
      </aside>

      <div id="top" className="hero-content">
        <div className="hero-main">
          <section className="hero-copy" aria-labelledby="hero-title">
            <div className="trust-badge"><ShieldCheck size={15} strokeWidth={2.3} /><span>Transparent Farm-to-Buyer Marketplace</span></div>
            <p className="eyebrow">Built for India’s next harvest</p>
            <h1 id="hero-title">Sell Together.<br /><em>Earn Fairly.</em></h1>
            <p className="hero-description">AgriLoop Direct connects farmers directly with verified buyers. Combine your harvest, receive competitive offers and choose the best net price—with every cost visible.</p>
            <div className="hero-actions">
              <button type="button" className="primary-cta hero-cta" onClick={() => showNotice("Your produce listing flow starts with Mobile Number / OTP.")}><Plus size={18} />List Your Produce</button>
              <a className="secondary-cta" href="#prices"><TrendingUp size={17} />Check Today’s Price</a>
            </div>
            <div className="trust-row">
              {trustItems.map(({ icon: Icon, label }) => <span className="trust-chip" key={label}><Icon size={14} strokeWidth={2.2} />{label}</span>)}
            </div>
            <p className="low-network"><span className="signal-icon"><span /><span /><span /></span> Works in low-network areas</p>
          </section>

          <section className="dashboard-area" aria-label="Live marketplace preview">
            <div className="dashboard-label"><span className="label-line" />Live marketplace preview</div>
            <div className="dashboard-cards">
              <OfferCard />
              <LotCard />
            </div>
            <div className="transparency-tag"><Eye size={16} /><span>100% Transparent Price Trail</span><ReceiptText size={14} /></div>
          </section>
        </div>

        <section id="process" className="process-strip" aria-label="How it works">
          <span className="process-intro">From field<br /><strong>to fair price</strong></span>
          <div className="process-flow">
            {processItems.map(({ icon: Icon, label }, index) => (
              <div className="process-item" key={label}>
                <span className="process-icon"><Icon size={15} /></span><span>{label}</span>
                {index < processItems.length - 1 && <ArrowRight className="process-arrow" size={14} />}
              </div>
            ))}
          </div>
        </section>
      </div>

      {notice && <div className="notice-toast" role="status"><Check size={16} />{notice}</div>}
    </main>
  );
}

export { Home };
