import Image from "next/image";

const NAV = [
  { href: "#overview", label: "Overview" },
  { href: "#audience", label: "Who It's For" },
  { href: "#questions", label: "What You Learn" },
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
            See how people move through an airport terminal — and how each
            person reacts when a fire starts — while the design can still
            change.
          </p>
          <div className="cta-row">
            <a className="cta cta-primary" href="#overview">
              Read the overview
            </a>
            <a className="cta cta-ghost" href="#questions">
              What you learn
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
            SimulCrowd is a 3D simulation built on NVIDIA Omniverse. Load a
            terminal layout, fill it with simulated people, start a fire, and
            watch who notices, which exits they choose, and where the crowd
            slows down.
          </p>
          <div className="prose-block">
            <p>
              Unlike a scripted “everyone evacuate” demo, each person decides
              from what they can see. Someone facing a wall may keep sitting;
              someone with a clear view of the fire may head for an exit.
              That per-person behavior is the core idea — useful in design
              reviews where seating, corridors, and exits are still negotiable.
            </p>
            <p>
              The 3D application handles the terminal, walking paths, vision,
              and controls. Optional AI assists with each person’s next choice
              (go to a seat, wait, or leave). If AI is unavailable, simple
              rules keep the session running so stakeholders are not blocked.
            </p>
          </div>
        </section>

        <section id="audience" className="doc-section">
          <p className="section-kicker">02 — Who it's for</p>
          <h2 className="section-title">Teams that shape terminal safety</h2>
          <p className="section-lead">
            SimulCrowd is aimed at people who need a shared picture of crowd
            flow before construction or renovation locks the layout in.
          </p>
          <ul className="prospect-list">
            <li>
              <h3>Airport operators and terminal owners</h3>
              <p>
                Test concourse, gate, and exit plans before a renovation or new
                build, and compare options with stakeholders in the room.
              </p>
            </li>
            <li>
              <h3>Aviation architects and designers</h3>
              <p>
                Validate circulation and fire egress while seating and corridor
                geometry can still be changed — not after concrete is poured.
              </p>
            </li>
            <li>
              <h3>Life-safety, operations, and training</h3>
              <p>
                Rehearse terminal evacuation without disrupting a live airport,
                and give insurers, consultants, or agencies a concrete scenario
                to discuss.
              </p>
            </li>
          </ul>
        </section>

        <section id="questions" className="doc-section">
          <p className="section-kicker">03 — What you learn</p>
          <h2 className="section-title">Questions a session can answer</h2>
          <p className="section-lead">
            A short run is less about perfect prediction and more about making
            layout risks visible early.
          </p>
          <ol className="flow-list">
            <li>
              <span className="flow-index">01</span>
              <div>
                <h3>Do people clear the space in time?</h3>
                <p>
                  Watch how long it takes for the crowd to reach exits after
                  fire is noticed — and where movement stalls.
                </p>
              </div>
            </li>
            <li>
              <span className="flow-index">02</span>
              <div>
                <h3>Which exits get used?</h3>
                <p>
                  See whether people overload one door while another stays
                  underused, based on what each person can see from their seat
                  or path.
                </p>
              </div>
            </li>
            <li>
              <span className="flow-index">03</span>
              <div>
                <h3>Where does the layout fight the crowd?</h3>
                <p>
                  Spot pinch points at gates, seating islands, and corridors
                  that look fine on a floor plan but clog under evacuation.
                </p>
              </div>
            </li>
            <li>
              <span className="flow-index">04</span>
              <div>
                <h3>What is one person doing right now?</h3>
                <p>
                  Click anyone to inspect intent, destination, and whether they
                  have seen the fire — useful when explaining the demo to a
                  non-simulation audience.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section id="workflow" className="doc-section">
          <p className="section-kicker">04 — Workflow</p>
          <h2 className="section-title">A typical design session</h2>
          <p className="section-lead">
            Operators work from a Crowd Sim control panel beside the 3D view.
            The loop is short enough for a live review.
          </p>
          <ol className="flow-list">
            <li>
              <span className="flow-index">01</span>
              <div>
                <h3>Open a terminal</h3>
                <p>
                  Load a 3D airport layout. Seats, exits, and walkable areas are
                  marked so the simulation knows where people can sit and leave.
                </p>
              </div>
            </li>
            <li>
              <span className="flow-index">02</span>
              <div>
                <h3>Build walking paths</h3>
                <p>
                  Generate a navigation mesh over floors and corridors so people
                  can path around furniture and walls instead of walking through
                  them.
                </p>
              </div>
            </li>
            <li>
              <span className="flow-index">03</span>
              <div>
                <h3>Fill the space with people</h3>
                <p>
                  Spawn a crowd, assign seats, and optionally connect the AI
                  decision service. Then run — people walk to their seats like a
                  boarding or waiting scenario.
                </p>
              </div>
            </li>
            <li>
              <span className="flow-index">04</span>
              <div>
                <h3>Start a fire and observe</h3>
                <p>
                  Place a fire in the terminal. Only people who can see it begin
                  to evacuate. Inspect individuals, compare exit choices, and
                  note where flow slows for the design discussion.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section id="tech-stack" className="doc-section">
          <p className="section-kicker">05 — Tech Stack</p>
          <h2 className="section-title">Layers in the system</h2>
          <p className="section-lead">
            The 3D world and the AI brain stay separate on purpose: rendering
            and walking stay responsive; reasoning can run on another machine.
          </p>
          <dl className="stack-grid">
            <div className="stack-row">
              <dt>3D platform</dt>
              <dd>
                NVIDIA Omniverse Kit — realtime terminal scene, operator UI, and
                simulation loop
              </dd>
            </div>
            <div className="stack-row">
              <dt>Scene data</dt>
              <dd>
                OpenUSD terminal models with marked seats, exits, spawn areas,
                and walkable regions
              </dd>
            </div>
            <div className="stack-row">
              <dt>Navigation</dt>
              <dd>
                Navigation-mesh pathfinding, waypoint following, lane spacing,
                and simple crowd separation
              </dd>
            </div>
            <div className="stack-row">
              <dt>Perception</dt>
              <dd>
                Fire placement with field of view, distance limits, memory once
                seen, and mesh line-of-sight so walls block vision
              </dd>
            </div>
            <div className="stack-row">
              <dt>Decisions</dt>
              <dd>
                High-level choices only: go to seat, exit, or wait — from rules
                or a remote small language model, with rules as fallback
              </dd>
            </div>
            <div className="stack-row">
              <dt>AI service</dt>
              <dd>
                Standalone inference (for example Phi-4-mini on Apple Silicon or
                a cloud GPU) plus optional plain-language summaries of one
                person’s status
              </dd>
            </div>
          </dl>
        </section>

        <section id="how-it-works" className="doc-section">
          <p className="section-kicker">06 — How It Works</p>
          <h2 className="section-title">Walking every frame, deciding less often</h2>
          <p className="section-lead">
            People keep moving smoothly in the 3D view. Smarter choices update
            on a slower rhythm — when what someone perceives has changed — so
            the crowd does not freeze waiting on AI.
          </p>
          <div className="diagram" aria-label="Architecture diagram">
            <pre>{`Airport terminal (3D layout)
        │
        ▼
┌───────────────────────────────┐
│  SimulCrowd (Omniverse)       │  scene · walking · vision · controls
└───────────────┬───────────────┘
                │  ask AI what each person should do next
                ▼
┌───────────────────────────────┐
│  AI decision service          │  go to seat · exit · wait
│  (laptop GPU or cloud)        │
└───────────────────────────────┘`}</pre>
          </div>
          <div className="prose-block">
            <p>
              <strong>Perception</strong> stays inside the 3D app: can this
              person see the fire, do they know their seat, are they already at
              a destination, which exit is nearest. Compact facts are enough —
              the AI never needs the full 3D mesh.
            </p>
            <p>
              <strong>Action</strong> turns those choices back into walking
              toward a seat or an exit. If the AI service is offline or slow,
              the rule engine covers that moment so a live design review keeps
              going.
            </p>
          </div>
          <figure className="split-visual">
            <Image
              src="/evacuation-simulation.jpeg"
              alt="SimulCrowd evacuation run with agents moving toward exits and individual agent info visible"
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
          <p className="section-kicker">07 — Usage of Omniverse</p>
          <h2 className="section-title">The world stays in Omniverse</h2>
          <p className="section-lead">
            Omniverse is the shared 3D workspace: the terminal you load, the
            people you see, and the controls reviewers use in a meeting.
          </p>
          <div className="prose-block">
            <p>
              It owns the scene, walking paths, collision-style separation,
              fire vision checks, and applying each person’s next intent. Large
              AI models are deliberately kept out of that process so a typical
              design laptop can keep rendering the terminal while inference
              runs elsewhere — on another machine on the network or in the
              cloud.
            </p>
            <p>
              That split also matches how teams already think about Omniverse:
              one place to author and review spatial design, with specialist
              services plugged in for behavior rather than baked into the
              viewport.
            </p>
          </div>
        </section>

        <section id="future" className="doc-section">
          <p className="section-kicker">08 — Future prospects</p>
          <h2 className="section-title">Richer sensing, clearer reviews</h2>
          <p className="section-lead">
            Today each person reasons over a short list of facts. The roadmap
            adds vision, nuance, and reporting without changing the basic
            “simulate, then discuss” loop.
          </p>
          <ul className="prospect-list">
            <li>
              <h3>Vision models such as Nemotron</h3>
              <p>
                Use NVIDIA Nemotron vision-language models so decisions can
                draw on what a person would actually see — smoke, blocked
                corridors, signage — not only yes/no line-of-sight flags.
              </p>
            </li>
            <li>
              <h3>More human crowd behavior</h3>
              <p>
                Hesitation, following nearby people, and different exit choices
                under uncertainty, plus session summaries (time to clear, which
                exits were used) for stakeholders.
              </p>
            </li>
            <li>
              <h3>Larger scenarios and polish</h3>
              <p>
                Bigger crowds on cloud GPUs, more convincing fire and smoke in
                the view, and ready-made templates for concourse, gate
                holdroom, and arrivals hall reviews.
              </p>
            </li>
          </ul>
        </section>
      </main>

      <footer className="docs-footer">
        <div className="docs-footer-inner">
          SimulCrowd · airport terminal crowd simulation on NVIDIA Omniverse
        </div>
      </footer>
    </div>
  );
}
