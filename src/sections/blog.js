import blogData from '../data/blog.json';

export function renderBlog(container) {
  const allTags = [...new Set(blogData.flatMap(post => post.tags))];

  container.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <h1 class="section-title">Blog</h1>
          <p class="section-subtitle">Thoughts on building products, shipping quality, and bridging the gap between code and business.</p>
          <div class="filter-bar animate-on-scroll" id="blog-filters" style="margin-top: var(--space-lg);">
            <button class="filter-btn active" data-filter="all">All</button>
            ${allTags.map(tag => `<button class="filter-btn" data-filter="${tag}">${tag}</button>`).join('')}
          </div>
        </div>

        <div class="stagger-children" id="blog-grid">
          ${blogData.map(post => renderBlogCard(post)).join('')}
        </div>
      </div>
    </section>
  `;

  // Setup filters
  setupBlogFilters();
}

export function renderBlogArticle(container, articleId) {
  const post = blogData.find(p => p.id === articleId);

  if (!post) {
    container.innerHTML = `
      <section class="section">
        <div class="container text-center">
          <h2>Article not found</h2>
          <p class="text-muted mt-1">The article you're looking for doesn't exist.</p>
          <a href="/blog" class="btn btn-primary mt-2">Back to Blog</a>
        </div>
      </section>
    `;
    return;
  }

  // Split content into paragraphs
  const paragraphs = post.content.split('\n\n').map(p => p.trim()).filter(Boolean);

  container.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="blog-article">
          <a href="/blog" class="blog-back-btn animate-on-scroll">← Back to Blog</a>
          <div class="blog-article-header animate-on-scroll">
            <h1 class="blog-article-title">${post.title}</h1>
            <div class="blog-article-meta">
              <span>${formatDate(post.date)}</span>
              <span>·</span>
              <span>${post.readingTime}</span>
            </div>
            <div class="blog-tags">
              ${post.tags.map(tag => `<span class="tag tag-accent">${tag}</span>`).join('')}
            </div>
          </div>
          <div class="blog-article-content animate-on-scroll">
            ${paragraphs.map(p => `<p>${p}</p>`).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderBlogCard(post) {
  return `
    <a href="/blog/${post.id}" class="blog-card-link" data-tags='${JSON.stringify(post.tags)}'>
      <div class="card blog-card animate-on-scroll">
        <div class="blog-date">
          <span>${formatDate(post.date)}</span>
          <span>·</span>
          <span>${post.readingTime}</span>
        </div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <div class="blog-tags">
          ${post.tags.map(tag => `<span class="tag tag-accent">${tag}</span>`).join('')}
        </div>
      </div>
    </a>
  `;
}

function setupBlogFilters() {
  const filterBar = document.getElementById('blog-filters');
  const grid = document.getElementById('blog-grid');
  if (!filterBar || !grid) return;

  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    // Update active state
    filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    const cards = grid.querySelectorAll('.blog-card-link');

    cards.forEach(card => {
      const tags = JSON.parse(card.dataset.tags);
      if (filter === 'all' || tags.includes(filter)) {
        card.style.display = '';
        card.querySelector('.card').style.opacity = '1';
        card.querySelector('.card').style.transform = 'translateY(0)';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
