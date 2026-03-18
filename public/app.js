// ===================== STATE =====================
let currentUser = localStorage.getItem('vdc-current-user') || '';
const state = {
  pantry: [],
  ratings: {},
  customRecipes: []
};

let saveTimer = null;
// NOTE: Replace with your own Upstash credentials or remove cloud sync
const UPSTASH_URL = '';
const UPSTASH_TOKEN = '';

// ===================== UPSTASH REST API =====================
async function upstashCommand(cmd) {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) throw new Error('No cloud config');
  const res = await fetch(`${UPSTASH_URL}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${UPSTASH_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cmd)
  });
  if (!res.ok) throw new Error('Upstash request failed');
  return res.json();
}

async function loadUserData() {
  try {
    const key = `vdc:${currentUser.toLowerCase()}`;
    const result = await upstashCommand(['GET', key]);
    if (result.result) {
      const data = JSON.parse(result.result);
      state.pantry = data.pantry || [];
      state.ratings = data.ratings || {};
      state.customRecipes = data.customRecipes || [];
    } else {
      state.pantry = JSON.parse(localStorage.getItem('vdc-pantry') || '[]');
      state.ratings = JSON.parse(localStorage.getItem('vdc-ratings') || '{}');
      state.customRecipes = JSON.parse(localStorage.getItem('vdc-custom') || '[]');
    }
  } catch (err) {
    console.error('Load error:', err);
    state.pantry = JSON.parse(localStorage.getItem('vdc-pantry') || '[]');
    state.ratings = JSON.parse(localStorage.getItem('vdc-ratings') || '{}');
    state.customRecipes = JSON.parse(localStorage.getItem('vdc-custom') || '[]');
  }
}

function saveData() {
  localStorage.setItem('vdc-pantry', JSON.stringify(state.pantry));
  localStorage.setItem('vdc-ratings', JSON.stringify(state.ratings));
  localStorage.setItem('vdc-custom', JSON.stringify(state.customRecipes));

  clearTimeout(saveTimer);
  saveTimer = setTimeout(async () => {
    try {
      const key = `vdc:${currentUser.toLowerCase()}`;
      const data = JSON.stringify({
        pantry: state.pantry,
        ratings: state.ratings,
        customRecipes: state.customRecipes
      });
      await upstashCommand(['SET', key, data]);
    } catch (err) {
      console.error('Save error:', err);
    }
  }, 800);
}

function getAllRecipes() {
  return [...RECIPE_DATABASE, ...state.customRecipes];
}

// ===================== LOGIN =====================
const loginScreen = document.getElementById('login-screen');
const appContainer = document.getElementById('app-container');
const loginInput = document.getElementById('login-username');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');

loginInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') doLogin();
});
loginBtn.addEventListener('click', doLogin);

logoutBtn.addEventListener('click', () => {
  currentUser = '';
  localStorage.removeItem('vdc-current-user');
  loginScreen.style.display = 'flex';
  appContainer.style.display = 'none';
  loginInput.value = '';
  loginInput.focus();
});

async function doLogin() {
  const name = loginInput.value.trim();
  if (name.length < 2) {
    showToast('Name must be at least 2 characters');
    return;
  }
  currentUser = name;
  localStorage.setItem('vdc-current-user', currentUser);
  document.getElementById('user-display').textContent = currentUser;

  loginScreen.style.display = 'none';
  appContainer.style.display = 'block';

  await loadUserData();
  initApp();
}

if (currentUser) {
  document.getElementById('user-display').textContent = currentUser;
  loginScreen.style.display = 'none';
  appContainer.style.display = 'block';
  loadUserData().then(() => initApp());
} else {
  loginInput.focus();
}

// ===================== NAVIGATION =====================
const navBtns = document.querySelectorAll('.nav-btn');
const tabs = document.querySelectorAll('.tab-content');

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    navBtns.forEach(b => b.classList.remove('active'));
    tabs.forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');

    if (btn.dataset.tab === 'suggest') renderSuggestions();
    if (btn.dataset.tab === 'pantry') renderPantry();
    if (btn.dataset.tab === 'search') document.getElementById('search-input').focus();
    if (btn.dataset.tab === 'favorites') renderFavorites();
    if (btn.dataset.tab === 'add') renderCustomRecipes();
  });
});

// ===================== TOAST =====================
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ===================== PANTRY =====================
function renderPantry() {
  const container = document.getElementById('pantry-container');
  container.innerHTML = '';

  const totalItems = Object.values(INGREDIENT_CATEGORIES).flat().length;
  const checkedCount = state.pantry.length;
  document.getElementById('pantry-stats').innerHTML =
    `You have <strong>${checkedCount}</strong> of <strong>${totalItems}</strong> items in your kitchen`;

  for (const [category, items] of Object.entries(INGREDIENT_CATEGORIES)) {
    const catChecked = items.filter(i => state.pantry.includes(i)).length;
    const catDiv = document.createElement('div');
    catDiv.className = 'pantry-category open';

    catDiv.innerHTML = `
      <div class="pantry-category-header">
        <span>
          <span class="pantry-category-title">${category}</span>
          <span class="pantry-category-count">(${catChecked}/${items.length})</span>
        </span>
        <span class="pantry-category-arrow">▼</span>
      </div>
      <div class="pantry-items">
        <div class="pantry-grid">
          ${items.map(item => `
            <div class="pantry-item ${state.pantry.includes(item) ? 'checked' : ''}" data-item="${escapeAttr(item)}">
              <div class="pantry-checkbox">✓</div>
              <span class="pantry-item-name">${escapeHtml(item)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    catDiv.querySelector('.pantry-category-header').addEventListener('click', () => {
      catDiv.classList.toggle('open');
    });

    catDiv.querySelectorAll('.pantry-item').forEach(el => {
      el.addEventListener('click', () => {
        const item = el.dataset.item;
        if (state.pantry.includes(item)) {
          state.pantry = state.pantry.filter(i => i !== item);
        } else {
          state.pantry.push(item);
        }
        saveData();
        renderPantry();
      });
    });

    container.appendChild(catDiv);
  }
}

document.getElementById('pantry-clear').addEventListener('click', () => {
  if (confirm('Clear all items from your kitchen?')) {
    state.pantry = [];
    saveData();
    renderPantry();
    showToast('Kitchen cleared');
  }
});

document.getElementById('pantry-expand').addEventListener('click', () => {
  document.querySelectorAll('.pantry-category').forEach(c => c.classList.add('open'));
});

document.getElementById('pantry-collapse').addEventListener('click', () => {
  document.querySelectorAll('.pantry-category').forEach(c => c.classList.remove('open'));
});

// ===================== SUGGESTIONS =====================
function getMatchInfo(recipe) {
  const have = [];
  const missing = [];
  recipe.ingredients.forEach(ing => {
    const name = ingName(ing);
    if (state.pantry.includes(name)) have.push(ing);
    else missing.push(ing);
  });
  return { have, missing, total: recipe.ingredients.length };
}

function renderSuggestions() {
  const filter = document.getElementById('suggest-filter').value;
  const catFilter = document.getElementById('suggest-category').value;
  const typeFilter = document.getElementById('suggest-type').value;
  const grid = document.getElementById('suggest-results');
  const empty = document.getElementById('suggest-empty');
  grid.innerHTML = '';

  const allRecipes = getAllRecipes();
  let results = [];

  allRecipes.forEach(recipe => {
    const info = getMatchInfo(recipe);
    if (catFilter !== 'all' && recipe.category !== catFilter) return;
    if (typeFilter !== 'all' && recipe.type !== typeFilter) return;

    if (filter === 'exact' && info.missing.length === 0) {
      results.push({ recipe, info, sort: 0 });
    } else if (filter === 'missing1' && info.missing.length <= 1) {
      results.push({ recipe, info, sort: info.missing.length });
    } else if (filter === 'missing2' && info.missing.length <= 2) {
      results.push({ recipe, info, sort: info.missing.length });
    } else if (filter === 'missing3' && info.missing.length <= 3) {
      results.push({ recipe, info, sort: info.missing.length });
    } else if (filter === 'all' && info.missing.length <= 3) {
      results.push({ recipe, info, sort: info.missing.length });
    }
  });

  results.sort((a, b) => {
    const rA = state.ratings[a.recipe.name] || 0;
    const rB = state.ratings[b.recipe.name] || 0;
    if (rA === -1 && rB !== -1) return 1;
    if (rB === -1 && rA !== -1) return -1;
    if (rA === 1 && rB !== 1) return -1;
    if (rB === 1 && rA !== 1) return 1;
    if (a.sort !== b.sort) return a.sort - b.sort;
    return a.recipe.name.localeCompare(b.recipe.name);
  });

  if (results.length === 0) {
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  results.forEach(({ recipe, info }) => {
    grid.appendChild(createRecipeCard(recipe, info, true));
  });
}

function populateCategoryFilter() {
  const sel = document.getElementById('suggest-category');
  while (sel.options.length > 1) sel.remove(1);
  const cats = new Set();
  getAllRecipes().forEach(d => cats.add(d.category));
  [...cats].sort().forEach(c => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c;
    sel.appendChild(opt);
  });
}

function populateTypeFilter() {
  const sel = document.getElementById('suggest-type');
  while (sel.options.length > 1) sel.remove(1);
  const types = new Set();
  getAllRecipes().forEach(d => { if (d.type) types.add(d.type); });
  [...types].sort().forEach(t => {
    const opt = document.createElement('option');
    opt.value = t;
    opt.textContent = t;
    sel.appendChild(opt);
  });
}

document.getElementById('suggest-filter').addEventListener('change', renderSuggestions);
document.getElementById('suggest-category').addEventListener('change', renderSuggestions);
document.getElementById('suggest-type').addEventListener('change', renderSuggestions);

// ===================== RECIPE CARD =====================
function createRecipeCard(recipe, info, showMatch) {
  const rating = state.ratings[recipe.name] || 0;
  const isCustom = state.customRecipes.some(d => d.name === recipe.name);

  const card = document.createElement('div');
  card.className = 'recipe-card';
  if (rating === 1) card.classList.add('thumbs-up');
  if (rating === -1) card.classList.add('thumbs-down');

  let matchHtml = '';
  if (showMatch && info) {
    if (info.missing.length === 0) {
      matchHtml = '<div class="card-match match-perfect">✓ You have everything!</div>';
    } else {
      matchHtml = `<div class="card-match match-close">Missing ${info.missing.length}: ${info.missing.map(i => escapeHtml(ingName(i))).join(', ')}</div>`;
    }
  }

  const metaParts = [];
  if (recipe.servings) metaParts.push(`Serves ${recipe.servings}`);
  if (recipe.time) metaParts.push(recipe.time);
  if (recipe.type) metaParts.push(recipe.type);

  card.innerHTML = `
    <div class="card-header">
      <span class="card-title">${escapeHtml(recipe.name)}${isCustom ? '<span class="custom-badge">Custom</span>' : ''}</span>
      <span class="card-category">${escapeHtml(recipe.category || '')}</span>
    </div>
    <div class="card-meta">${metaParts.map(p => escapeHtml(p)).join(' · ')}</div>
    ${matchHtml}
    <div class="card-ingredients">
      ${recipe.ingredients.map(ing => {
        const name = ingName(ing);
        const amt = ingAmount(ing);
        const cls = state.pantry.includes(name) ? 'have' : (info ? 'missing' : '');
        return `<span class="ingredient-tag ${cls}">${amt ? escapeHtml(amt) + ' ' : ''}${escapeHtml(name)}</span>`;
      }).join('')}
    </div>
    <div class="card-actions">
      <button class="action-btn thumb-up ${rating === 1 ? 'liked' : ''}" title="Like">👍</button>
      <button class="action-btn thumb-down ${rating === -1 ? 'disliked' : ''}" title="Dislike">👎</button>
      <button class="action-btn view-btn" title="View Details">View</button>
      ${isCustom ? '<button class="action-btn delete-custom" title="Delete">Delete</button>' : ''}
    </div>
  `;

  card.querySelector('.thumb-up').addEventListener('click', (e) => {
    e.stopPropagation();
    state.ratings[recipe.name] = state.ratings[recipe.name] === 1 ? 0 : 1;
    saveData();
    refreshCurrentTab();
    showToast(state.ratings[recipe.name] === 1 ? `Liked: ${recipe.name}` : `Removed rating: ${recipe.name}`);
  });

  card.querySelector('.thumb-down').addEventListener('click', (e) => {
    e.stopPropagation();
    state.ratings[recipe.name] = state.ratings[recipe.name] === -1 ? 0 : -1;
    saveData();
    refreshCurrentTab();
    showToast(state.ratings[recipe.name] === -1 ? `Disliked: ${recipe.name}` : `Removed rating: ${recipe.name}`);
  });

  card.querySelector('.view-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    showRecipeModal(recipe);
  });

  if (isCustom) {
    card.querySelector('.delete-custom').addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm(`Delete custom recipe "${recipe.name}"?`)) {
        state.customRecipes = state.customRecipes.filter(d => d.name !== recipe.name);
        delete state.ratings[recipe.name];
        saveData();
        refreshCurrentTab();
        showToast(`Deleted: ${recipe.name}`);
      }
    });
  }

  card.addEventListener('click', () => showRecipeModal(recipe));

  return card;
}

// ===================== MODAL =====================
function showRecipeModal(recipe) {
  const info = getMatchInfo(recipe);
  const rating = state.ratings[recipe.name] || 0;
  const modal = document.getElementById('recipe-modal');
  const body = document.getElementById('modal-body');

  let shoppingHtml = '';
  if (info.missing.length > 0) {
    shoppingHtml = `
      <div class="modal-shopping">
        <h4>Shopping List</h4>
        ${info.missing.map(i => {
          const amt = ingAmount(i);
          return `<div class="shopping-item">• ${amt ? escapeHtml(amt) + ' ' : ''}${escapeHtml(ingName(i))}</div>`;
        }).join('')}
      </div>
    `;
  }

  const metaParts = [];
  if (recipe.category) metaParts.push(recipe.category);
  if (recipe.type) metaParts.push(recipe.type);
  if (recipe.servings) metaParts.push(`Serves ${recipe.servings}`);
  if (recipe.time) metaParts.push(recipe.time);

  body.innerHTML = `
    <h3 class="modal-title">${escapeHtml(recipe.name)}</h3>
    <div class="modal-meta">${metaParts.map(p => escapeHtml(p)).join(' · ')}</div>

    <div class="modal-section">
      <h4>Ingredients</h4>
      <div class="modal-ingredients">
        ${recipe.ingredients.map(ing => {
          const name = ingName(ing);
          const amt = ingAmount(ing);
          const cls = state.pantry.includes(name) ? 'have' : 'missing';
          return `<span class="ingredient-tag ${cls}">${amt ? '<strong>' + escapeHtml(amt) + '</strong> ' : ''}${escapeHtml(name)}</span>`;
        }).join('')}
      </div>
    </div>

    ${shoppingHtml}

    <div class="modal-section">
      <h4>Instructions</h4>
      <p class="modal-instructions">${escapeHtml(recipe.instructions || '')}</p>
    </div>

    <div class="modal-actions">
      <button class="action-btn modal-thumb-up ${rating === 1 ? 'liked' : ''}">👍 Like</button>
      <button class="action-btn modal-thumb-down ${rating === -1 ? 'disliked' : ''}">👎 Dislike</button>
    </div>
  `;

  body.querySelector('.modal-thumb-up').addEventListener('click', () => {
    state.ratings[recipe.name] = state.ratings[recipe.name] === 1 ? 0 : 1;
    saveData();
    showRecipeModal(recipe);
    refreshCurrentTab();
  });

  body.querySelector('.modal-thumb-down').addEventListener('click', () => {
    state.ratings[recipe.name] = state.ratings[recipe.name] === -1 ? 0 : -1;
    saveData();
    showRecipeModal(recipe);
    refreshCurrentTab();
  });

  modal.style.display = 'flex';
}

document.querySelector('.modal-overlay').addEventListener('click', closeModal);
document.querySelector('.modal-close').addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

function closeModal() {
  document.getElementById('recipe-modal').style.display = 'none';
}

// ===================== SEARCH =====================
const searchInput = document.getElementById('search-input');
let searchTimeout;

searchInput.addEventListener('input', () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(doSearch, 200);
});

document.getElementById('search-clear-btn').addEventListener('click', () => {
  searchInput.value = '';
  document.getElementById('search-results').innerHTML = '';
  searchInput.focus();
});

function doSearch() {
  const q = searchInput.value.trim().toLowerCase();
  const grid = document.getElementById('search-results');
  grid.innerHTML = '';

  if (q.length < 2) return;

  const allRecipes = getAllRecipes();
  const results = allRecipes.filter(d => d.name.toLowerCase().includes(q));

  results.sort((a, b) => {
    const aStart = a.name.toLowerCase().startsWith(q) ? 0 : 1;
    const bStart = b.name.toLowerCase().startsWith(q) ? 0 : 1;
    if (aStart !== bStart) return aStart - bStart;
    return a.name.localeCompare(b.name);
  });

  if (results.length === 0) {
    grid.innerHTML = '<div class="empty-state"><p>No recipes found matching your search.</p></div>';
    return;
  }

  results.forEach(recipe => {
    const info = getMatchInfo(recipe);
    grid.appendChild(createRecipeCard(recipe, info, true));
  });
}

// ===================== FAVORITES =====================
function renderFavorites() {
  const filter = document.getElementById('fav-filter').value;
  const grid = document.getElementById('fav-results');
  const empty = document.getElementById('fav-empty');
  grid.innerHTML = '';

  const allRecipes = getAllRecipes();
  let results = [];

  allRecipes.forEach(recipe => {
    const r = state.ratings[recipe.name] || 0;
    if (filter === 'liked' && r === 1) results.push(recipe);
    else if (filter === 'disliked' && r === -1) results.push(recipe);
    else if (filter === 'all' && r !== 0) results.push(recipe);
  });

  if (results.length === 0) {
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  results.sort((a, b) => a.name.localeCompare(b.name));
  results.forEach(recipe => {
    const info = getMatchInfo(recipe);
    grid.appendChild(createRecipeCard(recipe, info, true));
  });
}

document.getElementById('fav-filter').addEventListener('change', renderFavorites);

// ===================== ADD RECIPE =====================
function populateDatalist() {
  const dl = document.getElementById('all-ingredients-list');
  const allIngredients = new Set();
  Object.values(INGREDIENT_CATEGORIES).flat().forEach(i => allIngredients.add(i));
  getAllRecipes().forEach(d => d.ingredients.forEach(i => allIngredients.add(ingName(i))));
  dl.innerHTML = '';
  [...allIngredients].sort().forEach(ing => {
    const opt = document.createElement('option');
    opt.value = ing;
    dl.appendChild(opt);
  });
}

document.getElementById('add-ingredient-btn').addEventListener('click', () => {
  const container = document.getElementById('add-ingredients');
  const row = document.createElement('div');
  row.className = 'ingredient-row';
  row.innerHTML = `
    <input type="text" class="ingredient-input" placeholder="Ingredient name" list="all-ingredients-list">
    <button type="button" class="btn btn-sm btn-remove" title="Remove">✕</button>
  `;
  row.querySelector('.btn-remove').addEventListener('click', () => row.remove());
  container.appendChild(row);
  row.querySelector('input').focus();
});

document.querySelector('.ingredient-row .btn-remove').addEventListener('click', function() {
  const rows = document.querySelectorAll('#add-ingredients .ingredient-row');
  if (rows.length > 1) this.closest('.ingredient-row').remove();
});

document.getElementById('add-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('add-name').value.trim();
  const category = document.getElementById('add-category').value.trim() || 'Custom';
  const type = document.getElementById('add-type').value.trim() || 'Main';
  const servings = parseInt(document.getElementById('add-servings').value) || 4;
  const time = document.getElementById('add-time').value.trim() || '';
  const instructions = document.getElementById('add-instructions').value.trim();

  const ingredients = [];
  document.querySelectorAll('.ingredient-input').forEach(inp => {
    const val = inp.value.trim();
    if (val) ingredients.push(val);
  });

  if (!name) { showToast('Please enter a recipe name'); return; }
  if (ingredients.length === 0) { showToast('Please add at least one ingredient'); return; }
  if (!instructions) { showToast('Please add instructions'); return; }

  if (getAllRecipes().some(d => d.name.toLowerCase() === name.toLowerCase())) {
    showToast('A recipe with that name already exists');
    return;
  }

  const newRecipe = { name, category, type, servings, time, ingredients, instructions };
  state.customRecipes.push(newRecipe);
  saveData();

  document.getElementById('add-form').reset();
  const ingContainer = document.getElementById('add-ingredients');
  ingContainer.innerHTML = `
    <div class="ingredient-row">
      <input type="text" class="ingredient-input" placeholder="Ingredient name" list="all-ingredients-list">
      <button type="button" class="btn btn-sm btn-remove" title="Remove">✕</button>
    </div>
  `;
  ingContainer.querySelector('.btn-remove').addEventListener('click', function() {
    const rows = document.querySelectorAll('#add-ingredients .ingredient-row');
    if (rows.length > 1) this.closest('.ingredient-row').remove();
  });

  renderCustomRecipes();
  populateDatalist();
  populateCategoryFilter();
  populateTypeFilter();
  showToast(`Added: ${name}`);
});

function renderCustomRecipes() {
  const section = document.getElementById('custom-recipes-section');
  const grid = document.getElementById('custom-recipes-list');
  grid.innerHTML = '';

  if (state.customRecipes.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = 'block';
  state.customRecipes.forEach(recipe => {
    const info = getMatchInfo(recipe);
    grid.appendChild(createRecipeCard(recipe, info, true));
  });
}

// ===================== HELPERS =====================
function ingName(ing) { return typeof ing === 'string' ? ing : ing.n; }
function ingAmount(ing) { return typeof ing === 'string' ? '' : ing.a; }

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function escapeAttr(str) {
  return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function refreshCurrentTab() {
  const active = document.querySelector('.nav-btn.active');
  if (!active) return;
  const tab = active.dataset.tab;
  if (tab === 'suggest') renderSuggestions();
  if (tab === 'search') doSearch();
  if (tab === 'favorites') renderFavorites();
  if (tab === 'add') renderCustomRecipes();
}

// ===================== INIT =====================
function initApp() {
  populateCategoryFilter();
  populateTypeFilter();
  populateDatalist();
  renderPantry();
  renderSuggestions();
}
