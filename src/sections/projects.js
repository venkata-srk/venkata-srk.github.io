import projectsData from '../data/projects.json';

export function renderProjects(container) {
  const categories = ['All', ...new Set(projectsData.map(p => p.category))];

  container.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <h1 class="section-title">Projects</h1>
          <p class="section-subtitle">From full-stack apps and AI to product strategy and operations — a showcase of versatile work.</p>
          <div class="filter-bar animate-on-scroll" id="project-filters" style="margin-top: var(--space-lg);">
            ${categories.map((cat, i) => `<button class="filter-btn ${i === 0 ? 'active' : ''}" data-filter="${cat}">${cat}</button>`).join('')}
          </div>
        </div>

        <div class="stagger-children" id="project-grid">
          ${projectsData.map(project => renderProjectCard(project)).join('')}
        </div>
      </div>
    </section>
  `;

  // Setup filters
  setupProjectFilters();
}

export function renderProjectDetail(container, projectId) {
  const project = projectsData.find(item => item.id === projectId);

  if (!project) {
    container.innerHTML = `
      <section class="section">
        <div class="container text-center">
          <h1 class="section-title">Project not found</h1>
          <p class="text-muted mt-1">The project you're looking for doesn't exist.</p>
          <a href="/projects" class="btn btn-primary mt-2">Back to Projects</a>
        </div>
      </section>
    `;
    return;
  }

  container.innerHTML = `
    <section class="section">
      <div class="container">
        <article class="project-detail">
          <a href="/projects" class="blog-back-btn animate-on-scroll">← Back to Projects</a>
          <header class="animate-on-scroll">
            <span class="project-category">${project.category}</span>
            <h1 class="blog-article-title">${project.title}</h1>
            <p class="project-detail-lead">${project.description}</p>
          </header>

          ${project.overview?.length ? `
            <div class="project-detail-section animate-on-scroll">
              <h2>Overview</h2>
              ${project.overview.map(paragraph => `<p>${paragraph}</p>`).join('')}
            </div>
          ` : ''}

          ${project.highlights?.length ? `
            <div class="project-detail-section animate-on-scroll">
              <h2>Highlights</h2>
              <ul>${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}</ul>
            </div>
          ` : ''}

          <div class="project-detail-section animate-on-scroll">
            <h2>Explore the project</h2>
            <div class="project-detail-links">${renderProjectResources(project)}</div>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderProjectCard(project) {
  return `
    <div class="card project-card animate-on-scroll" data-category="${project.category}">
      <span class="project-category">${project.category}</span>
      <h3 class="project-title"><a href="/projects/${project.id}" class="project-title-link">${project.title}</a></h3>
      <p class="project-desc">${project.description}</p>
      <div class="project-links mt-1">
        ${renderProjectResources(project, true)}
      </div>
    </div>
  `;
}

function renderProjectResources(project, small = false) {
  const size = small ? ' btn-sm' : '';
  return [
    project.liveUrl ? `<a href="${project.liveUrl}" class="btn${size} btn-primary" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>` : '',
    project.modelUrl ? `<a href="${project.modelUrl}" class="btn${size} btn-primary" target="_blank" rel="noopener noreferrer">Hugging Face ↗</a>` : '',
    project.githubUrl ? `<a href="${project.githubUrl}" class="btn${size} btn-secondary" target="_blank" rel="noopener noreferrer">GitHub ↗</a>` : '',
    project.discussionUrl ? `<a href="${project.discussionUrl}" class="btn${size} btn-secondary" target="_blank" rel="noopener noreferrer">Reddit Discussion ↗</a>` : '',
    project.prdUrl ? `<a href="${project.prdUrl}" class="btn${size} btn-secondary" target="_blank" rel="noopener noreferrer">PRD ↗</a>` : '',
    project.caseStudyUrl ? `<a href="${project.caseStudyUrl}" class="btn${size} btn-secondary" target="_blank" rel="noopener noreferrer">Case Study ↗</a>` : '',
  ].filter(Boolean).join('');
}

function setupProjectFilters() {
  const filterBar = document.getElementById('project-filters');
  const grid = document.getElementById('project-grid');
  if (!filterBar || !grid) return;

  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    // Update active state
    filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    const cards = grid.querySelectorAll('.project-card');

    cards.forEach(card => {
      if (filter === 'All' || card.dataset.category === filter) {
        card.style.display = '';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      } else {
        card.style.display = 'none';
      }
    });
  });
}
