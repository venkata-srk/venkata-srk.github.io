import projectsData from '../data/projects.json';
import critiquesData from '../data/critiques.json';

export function renderHome(container) {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);
  const featuredCritique = critiquesData[0];

  container.innerHTML = `
    <!-- Hero Section -->
    <section class="hero" id="hero" style="text-align: left; padding: 2rem 0 2rem 0;">
      <div class="container">
        <div style="max-width: 900px;" class="animate-on-scroll">
          <h1 style="font-size: var(--font-size-2xl); margin-bottom: var(--space-md); color: var(--color-primary); font-family: var(--font-family-body); font-weight: var(--font-weight-regular);">
            Hello, World! <span class="waving-hand" style="display: inline-block; transform-origin: 70% 70%;">👋</span> 
            <br> I'm Venkata SRK
          </h1>
          <p class="hero-subtitle home-hero-subtitle">
            A versatile engineer and builder who works at the intersection of Product, UX, QA, and Business Strategy to deliver things that truly matter to users.
          </p>
          <div class="role-rotator" style="margin-bottom: var(--space-xl);">
            <!--<span class="static-text">Currently working as a Data Analyst at May Lane Inc</span>-->
          </div>
          <div class="hero-cta" style="justify-content: flex-start;">
            <a href="/projects" class="btn btn-secondary" style="border-radius: 0;">Explore My Work</a>
            <a href="/contact" class="btn btn-primary" style="border-radius: 0;">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="section" style="border-top: 1px solid var(--color-border);">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <h2 class="section-title">Selected Work</h2>
          <p class="section-subtitle">A selection of projects that showcase different facets of my thinking.</p>
          <a href="/projects" class="btn btn-secondary mt-2" style="border-radius: 0;">View All Projects →</a>
        </div>
        <div class="stagger-children">
          ${featuredProjects.map(project => `
            <div class="card project-card animate-on-scroll">
              <span class="project-category">${project.category}</span>
              <h3 class="project-title"><a href="/projects/${project.id}" class="project-title-link">${project.title}</a></h3>
              <p class="project-desc">${project.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Critiques Spotlight -->
    <section class="section" style="border-top: 1px solid var(--color-border);">
      <div class="container">
        <div class="section-header animate-on-scroll" style="text-align: left; margin-bottom: var(--space-xl);">
          <h2 class="section-title">Critiques Spotlight</h2>
          <p class="section-subtitle" style="margin: 0;">I help products get better by spotting what others mostly miss.</p>
        </div>
        ${featuredCritique ? `
        <div class="stagger-children">
          <a href="/critiques/${featuredCritique.id}" class="critique-card-link" style="text-decoration: none; color: inherit; display: block;">
            <div class="card critique-card animate-on-scroll">
              <div class="critique-header" style="margin-bottom: var(--space-md);">
                <div>
                  <span class="critique-website">${featuredCritique.website}</span>
                  <h3 class="critique-title">${featuredCritique.title}</h3>
                </div>
              </div>
              
              <div class="critique-meta" style="display: flex; gap: var(--space-sm); flex-wrap: wrap; margin-bottom: var(--space-md); font-size: 0.75rem; color: var(--color-muted);">
                <span><strong>Status:</strong> ${featuredCritique.status || 'Unknown'}</span>
                <span>·</span>
                <span><strong style="color: var(--color-primary);">Severity:</strong> ${featuredCritique.severity}</span>
              </div>

              <div class="critique-desc" style="line-height: var(--line-height-relaxed); margin-bottom: var(--space-md); color: var(--color-muted);">
                <p>${featuredCritique.excerpt || featuredCritique.description}</p>
              </div>
              
              <div style="margin-top: var(--space-md); color: var(--color-accent); font-size: var(--font-size-sm); font-weight: 500;">
                Read full critique →
              </div>
            </div>
          </a>
        </div>
        ` : ''}
        <div class="mt-2 animate-on-scroll">
          <a href="/critiques" class="btn btn-secondary" style="border-radius: 0;">See All Critiques →</a>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="section">
      <div class="container">
        <div class="cta-banner home-cta-banner animate-on-scroll">
          <div>
            <h2>Have a challenge?</h2>
            <p style="margin-bottom: 0;">Let's solve it together.</p>
          </div>
          <a href="/contact" class="btn btn-primary" style="border-radius: 0;">Get in Touch</a>
        </div>
      </div>
    </section>
  `;

  // Setup role rotator width
  setupRoleRotator();
}

function setupRoleRotator() {
  const rotator = document.getElementById('role-rotator');
  if (!rotator) return;

  const words = rotator.querySelectorAll('.word');
  let maxWidth = 0;

  // Temporarily make all words visible to measure
  words.forEach(word => {
    word.style.position = 'relative';
    word.style.opacity = '1';
    word.style.transform = 'none';
    const width = word.offsetWidth;
    if (width > maxWidth) maxWidth = width;
    word.style.position = '';
    word.style.opacity = '';
    word.style.transform = '';
  });

  rotator.style.width = maxWidth + 'px';
  rotator.style.display = 'inline-block';
}
