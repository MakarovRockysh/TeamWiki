/* ============================================
   TeamWiki · Shared Layout (nav + sidebar + footer)
   每个页面引入此脚本即可获得完整骨架
   ============================================ */
(function () {
  const W = window.WIKI || {};
  const here = window.location.pathname.replace(/\/index\.html$/, '/').replace(/\/$/, '/') || '/';

  // ----- Background -----
  const bg = `
    <div class="bg-orbs" aria-hidden="true">
      <span class="orb orb-1"></span>
      <span class="orb orb-2"></span>
      <span class="orb orb-3"></span>
      <span class="orb orb-4"></span>
    </div>
    <div class="bg-grid" aria-hidden="true"></div>
  `;

  // ----- Topbar -----
  const topbar = `
    <header class="topbar glass">
      <a class="brand" href="/">
        <span class="brand-dot"></span>
        <span class="brand-name">${W.brand?.name || 'TeamWiki'}</span>
        <span class="brand-sub">· ${W.brand?.sub || ''}</span>
      </a>
      <a class="topbar-search" href="/search/">
        <span class="ts-icon">⌕</span>
        <span class="ts-text">搜索：工具 / 规则 / 组件 / 案例 / 会议……</span>
        <span class="kbd">⌘K</span>
      </a>
      <div class="topbar-actions">
        <a class="btn btn-ghost" href="/builder/">基础包</a>
        <a class="btn btn-primary" href="https://github.com/MakarovRockysh/idea_share.git" target="_blank" rel="noopener">GitHub</a>
      </div>
    </header>
  `;

  // ----- Sidebar -----
  function sidebarLink(modKey) {
    const mod = W.modules?.[modKey];
    if (!mod) return '';
    const active = (mod.path === here || (mod.path === '/' && here === '/')) ? 'active' : '';
    return `
      <a class="sidebar-link ${active}" href="${mod.path}">
        <span class="sl-icon" style="background:${active ? mod.color : 'rgba(255,255,255,0.05)'};border-color:${active ? mod.color : 'var(--line-2)'};">${mod.icon}</span>
        <span class="sl-name">${mod.name}</span>
        <span class="sl-badge">${mod.count}</span>
      </a>`;
  }

  const sidebar = `
    <aside class="sidebar glass-light">
      <a class="sidebar-link ${here === '/' ? 'active' : ''}" href="/" style="margin-bottom:14px;">
        <span class="sl-icon" style="background:linear-gradient(135deg,var(--blue-2),#ff5fb1);border-color:transparent;">◐</span>
        <span class="sl-name">首页</span>
        <span class="sl-badge">★</span>
      </a>
      ${(W.layers || []).map(layer => `
        <div class="sidebar-section">
          <div class="sidebar-title">
            <span class="layer-dot" style="background:${layer.color};"></span>
            ${layer.name} · ${layer.en}
          </div>
          ${layer.mods.map(sidebarLink).join('')}
        </div>
      `).join('')}
    </aside>
  `;

  // ----- Footer -----
  const footer = `
    <div class="foot">
      <span>© TeamWiki · ${W.brand?.tagline || '团队第二大脑'}</span>
      <span>不绑定单一工具 · Cursor / Claude / Codex 都能用</span>
    </div>
  `;

  // ----- Inject -----
  function inject() {
    document.body.insertAdjacentHTML('afterbegin', bg + topbar);

    const main = document.querySelector('main.main');
    if (!main) return;
    main.insertAdjacentHTML('beforebegin', sidebar);
    main.insertAdjacentHTML('beforeend', footer);
  }

  // ----- Toast helper -----
  window.toast = function (msg) {
    let t = document.getElementById('teamwiki-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'teamwiki-toast';
      t.className = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), 1800);
  };

  // ----- Global keyboard ⌘K → search -----
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      window.location.href = '/search/';
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
