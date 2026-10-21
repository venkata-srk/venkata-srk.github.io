export function renderAbout(container) {
  container.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="about-layout">
          <div class="about-avatar animate-on-scroll" style="border-radius: 0; background: var(--color-border); border: 1px solid var(--color-primary);">
            👤
          </div>
          <div class="about-content">
            <h2 class="animate-on-scroll">About Me</h2>
            <p class="animate-on-scroll">
              I'm a <strong>generalist by conviction</strong> — someone who believes that the best digital products are built by people who understand the full picture, not just one corner of it.
            </p>
            <p class="animate-on-scroll">
              My journey started in <strong>software engineering</strong>, where I fell in love with the craft of turning ideas into working systems. But I quickly realized that writing great code isn't enough. The most impactful engineers I worked with understood <strong>why</strong> they were building something, not just how. That curiosity pulled me toward product thinking.
            </p>
            <p class="animate-on-scroll">
              As I grew, I developed a deep appreciation for <strong>quality assurance</strong> — not as a gate at the end of a process, but as a mindset that permeates every stage of development. I started spotting issues in products I used daily, which led me to document critiques of well-known platforms. This practice sharpened my eye for detail and deepened my empathy for users.
            </p>
            <p class="animate-on-scroll">
              Along the way, I cultivated <strong>business acumen</strong> — learning to connect technical decisions to business outcomes, understanding metrics that matter, and speaking the language of stakeholders. I believe engineers who understand the business build fundamentally better products.
            </p>
            <p class="animate-on-scroll">
              Today, I operate at the intersection of all disciplines. Whether I'm architecting a system, defining a product roadmap, designing a test strategy, or evaluating a business opportunity — I bring the same rigor, curiosity, and care.
            </p>
            <a class="btn btn-secondary animate-on-scroll" href="https://www.linkedin.com/in/venkatasrk/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn ↗</a>

            <div class="skills-grid animate-on-scroll">
              <div class="skill-category">
                <h4>🛠️ Engineering</h4>
                <div class="skill-tags">
                  <span class="tag" style="border-radius: 0;">Python</span>
                  <span class="tag" style="border-radius: 0;">GenAI & Agentic AI</span>
                  <span class="tag" style="border-radius: 0;">Java</span>
                  <span class="tag" style="border-radius: 0;">React</span>
                  <span class="tag" style="border-radius: 0;">AWS</span>
                  <span class="tag" style="border-radius: 0;">SQL</span>
                  <span class="tag" style="border-radius: 0;">APIs</span>
                  <span class="tag" style="border-radius: 0;">System Design</span>
                </div>
              </div>
              <div class="skill-category">
                <h4>🧠 Product</h4>
                <div class="skill-tags">
                  <span class="tag" style="border-radius: 0;">User Research</span>
                  <span class="tag" style="border-radius: 0;">Wireframing</span>
                  <span class="tag" style="border-radius: 0;">PRDs</span>
                  <span class="tag" style="border-radius: 0;">A/B Testing</span>
                  <span class="tag" style="border-radius: 0;">Roadmapping</span>
                  <span class="tag" style="border-radius: 0;">Feature Prioritization</span>
                </div>
              </div>
              <div class="skill-category">
                <h4>🔍 Quality</h4>
                <div class="skill-tags">
                  <span class="tag" style="border-radius: 0;">Test Strategy</span>
                  <span class="tag" style="border-radius: 0;">Accessibility</span>
                  <span class="tag" style="border-radius: 0;">Performance</span>
                  <span class="tag" style="border-radius: 0;">CI/CD Pipelines</span>
                  <span class="tag" style="border-radius: 0;">Code Review</span>
                </div>
              </div>
              <div class="skill-category">
                <h4>📊 Business</h4>
                <div class="skill-tags">
                  <span class="tag" style="border-radius: 0;">Metrics & KPIs</span>
                  <span class="tag" style="border-radius: 0;">Stakeholder Mgmt</span>
                  <span class="tag" style="border-radius: 0;">Cost Analysis</span>
                  <span class="tag" style="border-radius: 0;">Go-to-Market</span>
                  <span class="tag" style="border-radius: 0;">Competitive Analysis</span>
                </div>
              </div>
            </div>

            <div class="resume-section animate-on-scroll" style="margin-top: var(--space-4xl);">
              <h3 style="font-family: var(--font-family); font-size: var(--font-size-2xl); border-bottom: 1px solid var(--color-border); padding-bottom: var(--space-sm); margin-bottom: var(--space-xl);">Experience</h3>
              
              <div class="resume-item" style="margin-bottom: var(--space-xl);">
                <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom: var(--space-xs);">
                  <h4 style="font-size: var(--font-size-lg); font-weight: var(--font-weight-medium);">Product Owner</h4>
                  <span style="color: var(--color-muted); font-size: var(--font-size-sm);">December 2025 — August 2026</span>
                </div>
                <p style="color: var(--color-accent); font-weight: var(--font-weight-medium); margin-bottom: var(--space-sm);">May Lane Inc | Toronto, CA</p>
              </div>

              <div class="resume-item" style="margin-bottom: var(--space-xl);">
                <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom: var(--space-xs);">
                  <h4 style="font-size: var(--font-size-lg); font-weight: var(--font-weight-medium);">Product Owner & Founding Engineer</h4>
                  <span style="color: var(--color-muted); font-size: var(--font-size-sm);">April 2025 — December 2025</span>
                </div>
                <p style="color: var(--color-accent); font-weight: var(--font-weight-medium); margin-bottom: var(--space-sm);">InvoiceBingo | Remote, CA</p>
              </div>

              <div class="resume-item" style="margin-bottom: var(--space-xl);">
                <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom: var(--space-xs);">
                  <h4 style="font-size: var(--font-size-lg); font-weight: var(--font-weight-medium);">Consultant</h4>
                  <span style="color: var(--color-muted); font-size: var(--font-size-sm);">July 2024 — March 2025</span>
                </div>
                <p style="color: var(--color-accent); font-weight: var(--font-weight-medium); margin-bottom: var(--space-sm);">Independent | Remote, IN</p>
              </div>

              <div class="resume-item" style="margin-bottom: var(--space-xl);">
                <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom: var(--space-xs);">
                  <h4 style="font-size: var(--font-size-lg); font-weight: var(--font-weight-medium);">Senior Software Engineer</h4>
                  <span style="color: var(--color-muted); font-size: var(--font-size-sm);">June 2022 — June 2024</span>
                </div>
                <p style="color: var(--color-accent); font-weight: var(--font-weight-medium); margin-bottom: var(--space-sm);">TriNet Zenefits | Bangalore, IN</p>
              </div>

              <div class="resume-item" style="margin-bottom: var(--space-xl);">
                <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom: var(--space-xs);">
                  <h4 style="font-size: var(--font-size-lg); font-weight: var(--font-weight-medium);">Software Development Engineer 2</h4>
                  <span style="color: var(--color-muted); font-size: var(--font-size-sm);">April 2018 — June 2022</span>
                </div>
                <p style="color: var(--color-accent); font-weight: var(--font-weight-medium); margin-bottom: var(--space-sm);">Amadeus Labs | Bangalore, IN</p>
              </div>

              <div class="resume-item" style="margin-bottom: var(--space-xl);">
                <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom: var(--space-xs);">
                  <h4 style="font-size: var(--font-size-lg); font-weight: var(--font-weight-medium);">Systems Engineer</h4>
                  <span style="color: var(--color-muted); font-size: var(--font-size-sm);">May 2016 — April 2018</span>
                </div>
                <p style="color: var(--color-accent); font-weight: var(--font-weight-medium); margin-bottom: var(--space-sm);">Infosys | Bangalore, IN</p>
              </div>

              <h3 style="font-family: var(--font-family); font-size: var(--font-size-2xl); border-bottom: 1px solid var(--color-border); padding-bottom: var(--space-sm); margin-bottom: var(--space-xl); margin-top: var(--space-4xl);">Education</h3>

              <div class="resume-item" style="margin-bottom: var(--space-xl);">
                <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom: var(--space-xs);">
                  <h4 style="font-size: var(--font-size-lg); font-weight: var(--font-weight-medium);">Bridge to IT Careers</h4>
                  <span style="color: var(--color-muted); font-size: var(--font-size-sm);">2026</span>
                </div>
                <p style="color: var(--color-accent); font-weight: var(--font-weight-medium); margin-bottom: var(--space-sm);">Seneca Polytechnic | Toronto, CA</p>
              </div>

              <div class="resume-item" style="margin-bottom: var(--space-xl);">
                <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom: var(--space-xs);">
                  <h4 style="font-size: var(--font-size-lg); font-weight: var(--font-weight-medium);">MBA, Finance</h4>
                  <span style="color: var(--color-muted); font-size: var(--font-size-sm);">2017 — 2019</span>
                </div>
                <p style="color: var(--color-accent); font-weight: var(--font-weight-medium); margin-bottom: var(--space-sm);">Pondicherry University | Pondicherry, India</p>
              </div>

              <div class="resume-item" style="margin-bottom: var(--space-xl);">
                <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom: var(--space-xs);">
                  <h4 style="font-size: var(--font-size-lg); font-weight: var(--font-weight-medium);">B.E, Electronics & Communication Engineering</h4>
                  <span style="color: var(--color-muted); font-size: var(--font-size-sm);">2012 — 2016</span>
                </div>
                <p style="color: var(--color-accent); font-weight: var(--font-weight-medium); margin-bottom: var(--space-sm);">Andhra University | Visakhapatnam, India</p>
              </div>

              <h3 class="certifications-heading">Certifications</h3>
              <ul class="certifications-list">
                <li class="certification-item">
                  <div class="certification-item-header">
                    <h4>Introduction to Model Context Protocol</h4>
                    <span>Issued June 2026</span>
                  </div>
                  <p>Anthropic</p>
                  <div class="certification-links">
                    <a href="https://verify.skilljar.com/c/mzixmmsyufgw" target="_blank" rel="noopener noreferrer">View credential ↗</a>
                  </div>
                </li>
                <li class="certification-item">
                  <div class="certification-item-header">
                    <h4>Generative AI for Project Managers</h4>
                    <span>Issued September 2026</span>
                  </div>
                  <p>Project Management Institute</p>
                  <div class="certification-links">
                    <a href="https://www.credly.com/badges/25fb755b-5608-4012-9627-b457afe4f201" target="_blank" rel="noopener noreferrer">View credential ↗</a>
                    <a href="/Certificate_of_Completion_Generative_AI_Overview_for_Project_Managers_Aathee.pdf" target="_blank" rel="noopener noreferrer">View certificate PDF ↗</a>
                  </div>
                </li>
                <li class="certification-item">
                  <div class="certification-item-header">
                    <h4>IAM Fundamentals</h4>
                    <span>Issued September 2026</span>
                  </div>
                  <p>Ping Identity</p>
                  <div class="certification-links">
                    <a href="https://www.credly.com/badges/c5fbc539-ad84-4c05-b013-8e08ddd7135e" target="_blank" rel="noopener noreferrer">View credential ↗</a>
                  </div>
                </li>
                <li class="certification-item">
                  <div class="certification-item-header">
                    <h4>Digital Accessibility Fundamentals</h4>
                    <span>Issued September 2026</span>
                  </div>
                  <p>Intopia</p>
                  <div class="certification-links">
                    <a href="https://www.credly.com/badges/d3bb463a-1dce-4ecb-80b6-05b8ed8c8210" target="_blank" rel="noopener noreferrer">View credential ↗</a>
                  </div>
                </li>
                <li class="certification-item">
                  <div class="certification-item-header">
                    <h4>SAFe 4 Practitioner</h4>
                    <span>Issued December 2018 · Expired</span>
                  </div>
                  <p>Scaled Agile, Inc.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
