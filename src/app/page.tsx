import Image from "next/image";

const NAV = [
  { href: "#overview", label: "Overview" },
  { href: "#workflow", label: "Workflow" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#omniverse", label: "Omniverse" },
  { href: "#future", label: "Future" },
] as const;

export default function Home() {
  return (
    <div className="docs-shell">
      <header className="hero">
        <div className="hero-media" aria-hidden>
          <Image
            src="/venue-overview.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-scrim" />
        </div>
        <div className="hero-content">
          <h1 className="brand">
            Simul<span>Crowd</span>
          </h1>
          <p className="hero-lead">
            Technical documentation for an Omniverse Kit application that
            simulates per-person fire evacuation in airport terminals — NavMesh
            motion, line-of-sight perception, and batched SLM decisions.
          </p>
          <div className="cta-row">
            <a className="cta cta-primary" href="#overview">
              Read the overview
            </a>
            <a className="cta cta-ghost" href="#how-it-works">
              Architecture
            </a>
          </div>
        </div>
      </header>

      <nav className="site-nav" aria-label="Section navigation">
        <div className="site-nav-inner">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <main className="docs-main">
        <section id="overview" className="doc-section">
          <p className="section-kicker">01 — Overview</p>
          <h2 className="section-title">What SimulCrowd is</h2>
          <p className="section-lead">
            SimulCrowd helps airport design teams load a terminal layout, fill
            it with simulated people, and watch how each person behaves when a
            fire starts — while seating, corridors, and exits can still change.
          </p>
          <div className="prose-block">
            <p>
              The product is an{" "}
              <strong>NVIDIA Omniverse / Kit</strong> application (
              <code>crowd.sim</code>) with a custom extension,{" "}
              <code>crowd.agents</code>. The 3D app owns the venue, navigation,
              vision, and operator UI. High-level intents — sit, walk to a seat,
              or evacuate — come from a pluggable decision engine: rule-based by
              default, or a remote small language model over HTTP.
            </p>
            <p>
              The design goal is independent per-person reasoning under
              pressure: each agent reacts from what it can see, not from a
              global force-evacuate switch. That same scheduler and batch API
              are built to grow from a handful of agents to larger crowds.
            </p>
          </div>
        </section>

        <section id="workflow" className="doc-section">
          <p className="section-kicker">02 — Workflow</p>
          <h2 className="section-title">Operator loop</h2>
          <p className="section-lead">
            A typical terminal design session follows a fixed authoring and
            simulation path inside the Crowd Sim panel.
          </p>
          <ol className="flow-list">
            <li>
              <span className="flow-index">01</span>
              <div>
                <h3>Open Venue</h3>
                <p>
                  Load a terminal stage from <code>venues/</code> (for example{" "}
                  <code>Airport.usdz</code>). Seats, exits, spawn plane, and
                  nav markers follow a naming contract.
                </p>
              </div>
            </li>
            <li>
              <span className="flow-index">02</span>
              <div>
                <h3>Generate NavMesh</h3>
                <p>
                  Bake walkable surfaces via{" "}
                  <code>omni.anim.navigation</code>. Nav markers become Include
                  Volumes under <code>/World/NavVolumes</code>.
                </p>
              </div>
            </li>
            <li>
              <span className="flow-index">03</span>
              <div>
                <h3>Spawn Agents</h3>
                <p>
                  Place agents on the spawn plane, assign unique seats, and
                  optionally enable the hosted SLM (Check Ready → Use hosted
                  SLM).
                </p>
              </div>
            </li>
            <li>
              <span className="flow-index">04</span>
              <div>
                <h3>Run → Start Fire → Inspect</h3>
                <p>
                  Agents walk to seats. Place a fire; only people with clear
                  FOV and mesh LOS begin evacuating. Click anyone for live
                  Individual Agent Info and FOV wireframe.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section id="tech-stack" className="doc-section">
          <p className="section-kicker">03 — Tech Stack</p>
          <h2 className="section-title">Layers in the system</h2>
          <p className="section-lead">
            Simulation stays in Kit. Inference stays outside Kit. The contract
            between them is a small HTTP API and a frozen intent set.
          </p>
          <dl className="stack-grid">
            <div className="stack-row">
              <dt>Runtime</dt>
              <dd>
                NVIDIA Omniverse Kit · app <code>crowd.sim.kit</code> ·
                extension <code>crowd.agents</code> (Python)
              </dd>
            </div>
            <div className="stack-row">
              <dt>Scene</dt>
              <dd>
                USD / USDA / USDC / USDZ venues · seat / exit / spawn /
                NavMesh naming · viewport inspect + highlight viz
              </dd>
            </div>
            <div className="stack-row">
              <dt>Navigation</dt>
              <dd>
                <code>omni.anim.navigation</code> NavMesh bake, path query,
                waypoint follow, lane bias, agent–agent separation
              </dd>
            </div>
            <div className="stack-row">
              <dt>Perception</dt>
              <dd>
                Fire placement · FOV (~210°) · range (~20 m) · sticky memory ·{" "}
                <code>omni.kit.mesh.raycast</code> line-of-sight
              </dd>
            </div>
            <div className="stack-row">
              <dt>Decisions</dt>
              <dd>
                Intents <code>GO_TO_SEAT</code> | <code>EXIT</code> |{" "}
                <code>IDLE</code> · RuleBased fallback · RemoteSLM batch client
              </dd>
            </div>
            <div className="stack-row">
              <dt>SLM service</dt>
              <dd>
                <code>services/slm</code> · Phi-4-mini on Apple Silicon (mlx-lm)
                or CUDA (transformers) · OpenRouter optional for{" "}
                <code>/v1/summarize</code>
              </dd>
            </div>
          </dl>
        </section>

        <section id="how-it-works" className="doc-section">
          <p className="section-kicker">04 — How It Works</p>
          <h2 className="section-title">High-frequency motion, low-frequency reason</h2>
          <p className="section-lead">
            Kit advances navigation and perception every frame. The decision
            engine runs on a much slower cadence — perception-change gated
            batches rather than one model call per agent per frame.
          </p>
          <div className="diagram" aria-label="Architecture diagram">
            <pre>{`Airport terminal (USD)
        │
        ▼
┌───────────────────────────────┐
│  SimulCrowd (Omniverse Kit)   │  scene · NavMesh · FOV/LOS · UI
│  crowd.agents                 │
└───────────────┬───────────────┘
                │  POST /v1/decide  { agents[] }
                ▼
┌───────────────────────────────┐
│  SLM service (Mac / CUDA)     │  batched GO_TO_SEAT | EXIT | IDLE
│  Phi-4-mini (+ summarize)     │
└───────────────────────────────┘`}</pre>
          </div>
          <div className="prose-block">
            <p>
              <strong>Perception</strong> is local and cheap: fire visibility,
              smoke flags, seat known, nearest exit, at-destination. Only
              scalars and IDs cross the wire — never meshes or raw transforms.
            </p>
            <p>
              <strong>Apply</strong> maps returned intents back onto seats and
              exits, then NavigationSystem path-follows. If the SLM is offline,
              times out, or returns bad JSON for one row, the rule engine keeps
              that tick (or that agent) moving so design reviews are not
              blocked.
            </p>
          </div>
          <figure className="split-visual">
            <Image
              src="/evacuation-simulation.jpeg"
              alt="SimulCrowd evacuation run with agents moving toward exits and Individual Agent Info visible"
              width={1600}
              height={899}
              sizes="(max-width: 1120px) 100vw, 1120px"
            />
          </figure>
          <p className="split-caption">
            Fire in the terminal: who sees it, who evacuates, and what each
            inspected person is doing.
          </p>
        </section>

        <section id="omniverse" className="doc-section">
          <p className="section-kicker">05 — Usage of Omniverse</p>
          <h2 className="section-title">What Kit owns — and what it never loads</h2>
          <p className="section-lead">
            Omniverse is the world simulator and authoring surface. Model
            weights never enter the Kit process.
          </p>
          <div className="prose-block">
            <p>
              The extension lifecycle (<code>extension.py</code>) drives{" "}
              <code>Simulation.update(dt)</code> on the Kit update loop.
              Modules split cleanly: <code>scene</code> / <code>layout</code>{" "}
              for venue discovery, <code>navigation</code> for NavMesh,{" "}
              <code>fire</code> for placement and LOS, <code>ai</code> for the
              decision interface, <code>ui</code> / <code>inspect</code> /{" "}
              <code>viz</code> for operator tooling.
            </p>
            <p>
              Responsibility split: Kit handles scene, USD sync, pathing,
              collision/separation, perception, scheduling, and applying
              intents. The SLM process handles only stateless batched intent
              inference (and optional natural-language summaries). That keeps
              a 4 GB laptop GPU free for rendering while inference runs on a
              Mac, LAN host, or CUDA instance.
            </p>
          </div>
        </section>

        <section id="future" className="doc-section">
          <p className="section-kicker">06 — Future prospects</p>
          <h2 className="section-title">From symbolic perception to multimodal agents</h2>
          <p className="section-lead">
            Today each agent reasons over a compact perception JSON. The next
            leap is richer sensing and stronger models on the same batch
            contract.
          </p>
          <ul className="prospect-list">
            <li>
              <h3>Vision-language models (Nemotron VL / Omni)</h3>
              <p>
                Feed viewport or agent-eye frames into NVIDIA Nemotron
                vision-language models (for example Nemotron Nano VL or
                Nemotron Omni) so decisions can use visual context — smoke
                density, blocked corridors, signage — instead of only boolean
                FOV/LOS flags.
              </p>
            </li>
            <li>
              <h3>Richer crowd behavior</h3>
              <p>
                Hesitation, following nearby people, and differentiated exit
                choice under uncertainty, plus run analytics (time-to-seat,
                egress times, exit usage) for design reviews.
              </p>
            </li>
            <li>
              <h3>Scale and polish</h3>
              <p>
                Larger batched crowds on cloud GPUs, fire/smoke VFX beyond the
                placement cuboid, and packaged scenario templates for
                concourse, gate holdroom, and arrivals hall.
              </p>
            </li>
          </ul>
        </section>
      </main>

      <footer className="docs-footer">
        <div className="docs-footer-inner">
          SimulCrowd technical docs · Omniverse Kit + crowd.agents + services/slm
        </div>
      </footer>
    </div>
  );
}
