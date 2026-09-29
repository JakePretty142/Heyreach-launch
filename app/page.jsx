import { Flame, WarmLogo, HeyReachMark } from "../components/Logos";
import Icon from "../components/Icon";
import ThemeToggle from "../components/ThemeToggle";

const SIGNUP = "https://warmai.uk/signup?code=HEYREACH2026";
const DEMO = "https://calendly.com/warmai/warm";
const LOGIN = "https://www.getwarmai.com/thanks?to=login";
const HOME = "https://www.getwarmai.com";

const Pill = ({ tone = "neutral", dot, children }) => (
  <span className={`pill pill-${tone}`}>
    {dot && <i className="pill-dot" />}
    {children}
  </span>
);

const Lockup = ({ size = "md" }) => (
  <div className={`lockup lockup-${size}`}>
    <WarmLogo size={size === "lg" ? 34 : 26} />
    <span className="lockup-x">×</span>
    <span className="hr-logo">
      <HeyReachMark height={size === "lg" ? 32 : 24} />
      <span>HeyReach</span>
    </span>
  </div>
);

const people = [
  { name: "Priya Nair", company: "Tidewater Labs", hue: "violet", fresh: true },
  { name: "Leo Brandt", company: "Copperline", hue: "blue" },
  { name: "Hannah Cole", company: "Northpeak", hue: "teal" },
];

function FlowVisual() {
  return (
    <div className="stage" aria-label="A visitor identified in Warm, routed by a rule into a HeyReach list">
      <div className="glow glow-wash" />
      <div className="glow glow-body" />
      <div className="glow glow-core" />
      <div className="bezel">
        <div className="board">
          {/* Warm card */}
          <div className="app-card warm-card">
            <div className="app-card-head">
              <Flame size={16} />
              <span>Warm · Visitor identified</span>
              <Pill tone="green" dot>Live</Pill>
            </div>
            <div className="app-card-body">
              <div className="person">
                <Flame size={38} tone="violet" />
                <div>
                  <strong>Priya Nair</strong>
                  <span>Director, Demand Gen · Tidewater Labs</span>
                </div>
              </div>
              <div className="tags">
                <Pill tone="accent" dot>High intent</Pill>
                <Pill>3rd visit</Pill>
                <Pill><Icon name="linkedin" size={12} /> LinkedIn</Pill>
              </div>
              <ul className="pages">
                <li className="key"><code>/pricing</code><span>2m 31s</span></li>
                <li><code>/compare/leadfeeder</code><span>53s</span></li>
                <li><code>/integrations</code><span>41s</span></li>
              </ul>
            </div>
          </div>

          {/* Connector */}
          <div className="connector">
            <div className="rail">
              <span className="rail-line" />
              <span className="rail-dot d1" />
              <span className="rail-dot d2" />
              <span className="rail-dot d3" />
            </div>
            <div className="rule-chip">
              <Icon name="send" size={12} stroke={2} />
              <span>Rule: High intent → Hot leads</span>
            </div>
            <Icon name="down" size={14} stroke={2.2} className="connector-arrow" />
          </div>

          {/* HeyReach card */}
          <div className="app-card hr-card">
            <div className="app-card-head">
              <HeyReachMark height={16} />
              <span>HeyReach · Hot leads</span>
              <Pill tone="accent">3 new</Pill>
            </div>
            <ul className="list">
              {people.map((p) => (
                <li key={p.name} className={p.fresh ? "fresh" : ""}>
                  <Flame size={28} tone={p.hue} />
                  <div>
                    <strong>{p.name}</strong>
                    <span>{p.company}</span>
                  </div>
                  <em>{p.fresh ? "Just added" : "Today"}</em>
                </li>
              ))}
            </ul>
            <div className="campaign">
              <span className="campaign-title">Your campaign · Pricing page follow-up</span>
              <div className="step"><i><Icon name="linkedin" size={12} /></i>Connection request<span>Day 1</span></div>
              <div className="step"><i><Icon name="send" size={12} /></i>Personal message<span>Day 3</span></div>
              <div className="campaign-status"><Icon name="clock" size={12} stroke={2} />Starts when you add this list</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCards() {
  return (
    <div className="bento">
      {/* One click */}
      <article className="feature wide">
        <div className="feature-visual">
          <div className="contact-card">
            <div className="person">
              <Flame size={40} tone="blue" />
              <div>
                <strong>Leo Brandt</strong>
                <span>Head of Growth · Copperline · Boston, MA</span>
              </div>
            </div>
            <div className="contact-actions">
              <span className="btn-send"><HeyReachMark height={15} />Send to HeyReach</span>
              <span className="btn-ghost">LinkedIn</span>
              <span className="btn-ghost">Visit site</span>
            </div>
          </div>
          <div className="toast-ok"><Icon name="check" size={14} stroke={2.4} />Added to “Warm AI — identified visitors”</div>
        </div>
        <div className="feature-text">
          <h3>One click from any contact card</h3>
          <p>Spotted someone worth talking to? Hit Send to HeyReach on their contact card and they’re in your list, title and company attached.</p>
        </div>
      </article>

      {/* Nothing sends */}
      <article className="feature">
        <div className="feature-visual">
          <div className="mini-list">
            <div className="mini-list-head">
              <HeyReachMark height={16} />
              <strong>Hot leads</strong>
              <span>3 people</span>
              <span className="btn-send small">Add to campaign</span>
            </div>
            {people.map((p) => (
              <div className="mini-list-row" key={p.name}>
                <Flame size={28} tone={p.hue} />
                <div>
                  <strong>{p.name}</strong>
                  <span>{p.company}</span>
                </div>
                <em>Not contacted</em>
              </div>
            ))}
          </div>
        </div>
        <div className="feature-text">
          <h3>Nothing sends without you</h3>
          <p>People land in a HeyReach list, not a live campaign. Nothing goes out until you add that list to a campaign yourself.</p>
        </div>
      </article>

      {/* Routing */}
      <article className="feature">
        <div className="feature-visual">
          {[
            ["1", "High intent", "Hot leads"],
            ["2", "Pricing page", "Pricing follow-up"],
            ["3", "Competitor research", "Switch campaign"],
          ].map(([n, seg, list]) => (
            <div className="rule-row" key={n}>
              <Icon name="grip" size={13} stroke={2} className="muted" />
              <code>{n}</code>
              <strong>{seg}</strong>
              <Icon name="arrow" size={13} stroke={2} className="muted push" />
              <HeyReachMark height={14} />
              <span>{list}</span>
            </div>
          ))}
          <div className="rule-row fallback">
            <strong>Everyone else</strong>
            <Icon name="arrow" size={13} stroke={2} className="muted push" />
            <HeyReachMark height={14} />
            <span>Warm AI — identified visitors</span>
          </div>
        </div>
        <div className="feature-text">
          <h3>Route by segment</h3>
          <p>Rules are checked top to bottom and the first match wins, so nobody lands in two lists. Everyone else goes to your default list.</p>
        </div>
      </article>

      {/* Details */}
      <article className="feature wide">
        <div className="feature-visual">
          <div className="lead-record">
            <div className="lead-head">
              <HeyReachMark height={16} />
              <span>HeyReach lead</span>
              <Pill tone="accent" dot>From Warm</Pill>
            </div>
            {[
              ["user", "Name", "Hannah Cole"],
              ["brief", "Title", "Head of RevOps"],
              ["building", "Company", "Northpeak"],
              ["pin", "Location", "Chicago, IL"],
            ].map(([ic, k, v]) => (
              <div className="lead-row" key={k}>
                <Icon name={ic} size={14} className="muted" />
                <span>{k}</span>
                <strong>{v}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="feature-text">
          <h3>Arrives ready to reach out</h3>
          <p>Every person lands in HeyReach with their title, company and location attached, so your first message can be specific.</p>
        </div>
      </article>
    </div>
  );
}

function ConnectModal() {
  return (
    <div className="modal-stage">
      <div className="glow glow-modal" />
      <div className="modal" aria-label="The HeyReach connection window in Warm">
        <div className="modal-head">
          <span className="modal-logo"><HeyReachMark height={24} /></span>
          <div>
            <strong>Connect HeyReach</strong>
            <span>Send identified people to a HeyReach list</span>
          </div>
          <Icon name="x" size={16} stroke={2} className="muted" />
        </div>
        <div className="modal-body">
          <label>HeyReach API key</label>
          <div className="field">
            <Icon name="key" size={14} className="muted" />
            <code>••••••••••••••••3f9a</code>
            <span className="verified"><Icon name="check" size={12} stroke={2.4} />Verified</span>
          </div>
          <label>Send to list</label>
          <div className="field">
            <HeyReachMark height={14} />
            <strong>Warm AI — identified visitors</strong>
            <span className="muted-text">8 in list</span>
            <Icon name="chev" size={14} stroke={2} className="muted push" />
          </div>
          <p className="hint">We’ll create this list for you if it doesn’t exist.</p>
          <div className="label-row"><label>Routing rules</label><span>+ Add rule</span></div>
          <div className="rule-edit">
            <div className="field"><i className="pill-dot" /><strong>High intent</strong><Icon name="chev" size={13} stroke={2} className="muted push" /></div>
            <span className="to">to</span>
            <div className="field focus"><HeyReachMark height={13} /><strong>Hot leads</strong><Icon name="chev" size={13} stroke={2} className="muted push" /></div>
          </div>
          <p className="hint">First matching rule wins. Anyone else goes to the list above.</p>
        </div>
        <div className="modal-foot">
          <span>Included free with Warm</span>
          <span className="btn btn-primary btn-sm">Connect</span>
        </div>
      </div>
    </div>
  );
}

const faqs = [
  ["Do messages send automatically?", "No. People are added to your HeyReach list. Nothing goes out until you add that list to a campaign."],
  ["Who gets sent to HeyReach?", "Identified people in the US. Send them automatically with routing rules by segment, or one at a time with Send to HeyReach on their contact card."],
  ["Do I need a HeyReach account?", "Yes. You connect your own HeyReach account from Integrations in Warm."],
  ["Does it cost extra?", "No. It’s included for every Warm customer."],
];

export default function Page() {
  return (
    <>
      <header className="nav-wrap">
        <nav className="nav container">
          <a href={HOME} aria-label="Warm home"><WarmLogo /></a>
          <div className="nav-links">
            <a href="#how">How it works</a>
            <a href="#features">Features</a>
            <a href="#setup">Setup</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="nav-right">
            <ThemeToggle />
            <a className="nav-login" href={LOGIN}>Log in</a>
            <a className="btn btn-primary btn-sm" href={SIGNUP}>Start free</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container">
          <div className="ambient" />
          <a className="announce" href="#how">
            <Pill tone="accent" dot>New integration</Pill>
            <span className="announce-long">Warm now sends visitors to HeyReach →</span>
            <span className="announce-short">HeyReach integration →</span>
          </a>
          <Lockup size="lg" />
          <h1>
            Website visitors, <br className="desk-br" />straight into <em>HeyReach.</em>
          </h1>
          <p className="lede">
            Warm finds the people browsing your site. Now you can send them to a HeyReach list in one click, ready for LinkedIn outreach you review first.
          </p>
          <div className="ctas">
            <a className="btn btn-primary" href={SIGNUP}>Connect HeyReach</a>
            <a className="btn btn-secondary" href="#how">See how it works</a>
          </div>
          <p className="fine">Works with person-level matches in the US · Included free with Warm</p>
          <FlowVisual />
        </section>

        <section id="how" className="section container">
          <header className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>From first visit to first <em>hello.</em></h2>
            <p>No exports, no spreadsheets, no copy and paste.</p>
          </header>
          <ol className="steps">
            <li className="active">
              <span>01</span>
              <h3>Warm spots the person</h3>
              <p>Someone from a company you care about reads your pricing page. Warm works out who they are, down to their LinkedIn.</p>
            </li>
            <li>
              <span>02</span>
              <h3>Send them your way</h3>
              <p>Set a rule so a segment like High intent flows in automatically, or push anyone by hand from their contact card.</p>
            </li>
            <li>
              <span>03</span>
              <h3>Review, then reach out</h3>
              <p>They land in your HeyReach list. Check them over and launch the campaign when you’re ready.</p>
            </li>
          </ol>
        </section>

        <section id="features" className="section container">
          <header className="section-head">
            <span className="eyebrow">Built for the way you sell</span>
            <h2>Only the right people. Only when you <em>say so.</em></h2>
          </header>
          <FeatureCards />
        </section>

        <section id="setup" className="setup">
          <div className="container setup-grid">
            <div className="setup-copy">
              <span className="eyebrow">Setup</span>
              <h2>Live in three <em>clicks.</em></h2>
              <p>Connect once from Integrations in Warm. No code, no Zapier, nothing for your developers to do.</p>
              <ol className="setup-steps">
                <li><span>1</span>Paste your HeyReach API key</li>
                <li><span>2</span>Pick your default HeyReach list</li>
                <li><span>3</span>Add rules to route segments (optional)</li>
              </ol>
            </div>
            <ConnectModal />
          </div>
        </section>

        <section id="faq" className="section container faq">
          <div className="faq-head">
            <span className="eyebrow">FAQ</span>
            <h2>Good <em>questions.</em></h2>
          </div>
          <div className="faq-list">
            {faqs.map(([q, a]) => (
              <details key={q} open>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="container final">
          <div className="final-box">
            <div className="glow glow-final" />
            <Lockup />
            <h2>Your hottest visitors deserve <em>a hello.</em></h2>
            <p>Connect HeyReach in Warm and turn this week’s website visitors into next week’s conversations.</p>
            <div className="ctas">
              <a className="btn btn-primary" href={SIGNUP}>Connect HeyReach</a>
              <a className="btn btn-secondary" href={DEMO}>Book a demo</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <WarmLogo />
            <p>See who’s visiting your website.<br />GDPR compliant · UK GDPR ready</p>
          </div>
          <div className="footer-links">
            <a href={HOME}>getwarmai.com</a>
            <a href={DEMO}>Book a demo</a>
            <a href={LOGIN}>Log in</a>
          </div>
        </div>
        <div className="container footer-base">© 2026 Warm AI. All rights reserved.</div>
      </footer>
    </>
  );
}
