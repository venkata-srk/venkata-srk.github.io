import critiquesData from '../data/critiques.json';

export function renderCritiques(container) {
  const categories = ['All', ...new Set(critiquesData.map(c => c.category))];

  container.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <h1 class="section-title">Critiques</h1>
          <p class="section-subtitle">I help products get better by spotting what others mostly miss. Real issues found on well-known platforms & apps, with actionable suggestions.</p>
          <div class="filter-bar animate-on-scroll" id="critique-filters" style="margin-top: var(--space-lg);">
            ${categories.map((type, i) => `<button class="filter-btn ${i === 0 ? 'active' : ''}" data-filter="${type}">${type}</button>`).join('')}
          </div>
        </div>

        <div class="stagger-children" id="critique-grid">
          ${critiquesData.map(critique => renderCritiqueCard(critique)).join('')}
        </div>
      </div>
    </section>
  `;

  // Setup filters
  setupCritiqueFilters();
}

export function renderCritiqueArticle(container, articleId) {
  const critique = critiquesData.find(c => c.id === articleId);

  if (!critique) {
    container.innerHTML = `
      <section class="section">
        <div class="container text-center">
          <h2>Critique not found</h2>
          <p class="text-muted mt-1">The critique you're looking for doesn't exist.</p>
          <a href="/critiques" class="btn btn-primary mt-2">Back to Critiques</a>
        </div>
      </section>
    `;
    return;
  }

  container.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="blog-article" style="max-width: 800px; margin: 0 auto;">
          <a href="/critiques" class="blog-back-btn animate-on-scroll" style="display: inline-block; margin-bottom: var(--space-lg);">← Back to Critiques</a>
          <div class="animate-on-scroll">
            <span class="critique-website" style="font-size: var(--font-size-sm); color: var(--color-accent-alt); text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">${critique.website}</span>
            <h1 class="blog-article-title" style="margin: var(--space-xs) 0 var(--space-md);">${critique.title}</h1>
            
            <dl class="critique-article-meta">
              <div><dt>Category</dt><dd>${critique.category}</dd></div>
              <div><dt>Reported On</dt><dd>${critique.reportedOn || critique.date}</dd></div>
              <div><dt>Status</dt><dd>${critique.status || 'Unknown'}</dd></div>
              <div><dt>Discoverer Role</dt><dd>${critique.discovererRole || 'Independent'}</dd></div>
              <div><dt>Severity</dt><dd><span class="tag tag-severity-${critique.severity.toLowerCase()}">${critique.severity}</span></dd></div>
            </dl>

            <div class="critique-desc" style="line-height: var(--line-height-relaxed); margin-bottom: var(--space-2xl);">
              ${critique.description}
            </div>

            ${critique.impact ? `<div class="critique-impact"><h4>Impact</h4><p>${critique.impact}</p></div>` : ''}

            ${critique.suggestion ? `
            <div class="critique-suggestion" style="padding: var(--space-md); background: var(--color-surface-hover); border-left: 3px solid var(--color-primary); margin-bottom: var(--space-xl);">
              <h4 style="color: var(--color-primary); margin-bottom: var(--space-sm);">Actionable Suggestion</h4>
              <p style="margin: 0; line-height: var(--line-height-relaxed);">${critique.suggestion}</p>
            </div>
            ` : ''}

            <div class="critique-tags">
              ${critique.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderCritiqueCard(critique) {
  return `
    <a href="/critiques/${critique.id}" class="critique-card-link" style="text-decoration: none; color: inherit; display: block;" data-category="${critique.category}">
      <div class="card critique-card animate-on-scroll" style="height: 100%;">
        <div class="critique-header" style="margin-bottom: var(--space-md);">
          <div>
            <span class="critique-website">${critique.website}</span>
            <h3 class="critique-title">${critique.title}</h3>
          </div>
        </div>
        
        <div class="critique-meta" style="display: flex; gap: var(--space-sm); flex-wrap: wrap; margin-bottom: var(--space-md); font-size: 0.75rem; color: var(--color-muted);">
          <span><strong>Status:</strong> ${critique.status || 'Unknown'}</span>
          <span>·</span>
          <span><strong style="color: var(--color-primary);">Severity:</strong> ${critique.severity}</span>
        </div>

        <div class="critique-desc" style="line-height: var(--line-height-relaxed); margin-bottom: var(--space-md); color: var(--color-muted);">
          <p>${critique.excerpt || critique.description}</p>
        </div>
        
        <div style="margin-top: auto; color: var(--color-accent); font-size: var(--font-size-sm); font-weight: 500;">
          Read full critique →
        </div>
      </div>
    </a>
  `;
}

function setupCritiqueFilters() {
  const filterBar = document.getElementById('critique-filters');
  const grid = document.getElementById('critique-grid');
  if (!filterBar || !grid) return;

  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    // Update active state
    filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    const cards = grid.querySelectorAll('.critique-card-link');

    cards.forEach(card => {
      if (filter === 'All' || card.dataset.category === filter) {
        card.style.display = '';
        card.querySelector('.card').style.opacity = '1';
        card.querySelector('.card').style.transform = 'translateY(0)';
      } else {
        card.style.display = 'none';
      }
    });
  });
}
