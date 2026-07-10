// Vistas de la aplicación
import { characters, getCharactersByRace, searchCharacters, getRaces, sortCharacters } from './characters-data.js';
import { showModal, showToast } from './utils.js';

// Vista del Catálogo
export function renderCatalogView() {
    const container = document.getElementById('view-container');
    const races = getRaces();
    
    container.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 py-8">
            <!-- Header -->
            <div class="mb-8 slide-in-up">
                <h1 class="text-4xl font-bold mb-2">
                    <i class="fas fa-book" style="color: var(--primary-orange);"></i> Catálogo de Personajes
                </h1>
                <p class="text-gray-600 dark-mode:text-gray-400">Explora todos los personajes de Dragon Ball Z</p>
            </div>

            <!-- Búsqueda y Filtros -->
            <div class="mb-8 space-y-4 slide-in-up">
                <!-- Search Bar -->
                <div class="relative">
                    <input 
                        type="text" 
                        id="search-input" 
                        placeholder="Buscar personajes..." 
                        class="w-full px-4 py-3 rounded-lg border border-gray-300 dark-mode:border-slate-600 bg-white dark-mode:bg-slate-700 text-gray-900 dark-mode:text-white"
                    >
                    <i class="fas fa-search absolute right-4 top-3.5 text-gray-400"></i>
                </div>

                <!-- Filtros de Raza -->
                <div class="flex flex-wrap gap-2">
                    <button class="filter-btn active px-4 py-2 rounded-lg border border-gray-300 dark-mode:border-slate-600 hover:border-orange-500 transition" data-race="all">
                        Todos (${characters.length})
                    </button>
                    ${races.map(race => {
                        const count = getCharactersByRace(race.toLowerCase().replace(/\s+/g, '')).length;
                        return `
                            <button class="filter-btn px-4 py-2 rounded-lg border border-gray-300 dark-mode:border-slate-600 hover:border-orange-500 transition" data-race="${race.toLowerCase()}">
                                ${race} (${count})
                            </button>
                        `;
                    }).join('')}
                </div>

                <!-- Opciones de Ordenamiento -->
                <div class="flex gap-2">
                    <label class="text-sm font-medium">Ordenar por:</label>
                    <select id="sort-select" class="px-3 py-2 rounded-lg border border-gray-300 dark-mode:border-slate-600 bg-white dark-mode:bg-slate-700">
                        <option value="none">Por defecto</option>
                        <option value="name">Nombre (A-Z)</option>
                        <option value="power">Poder (Mayor a Menor)</option>
                        <option value="age">Edad (Menor a Mayor)</option>
                    </select>
                </div>
            </div>

            <!-- Grid de Personajes -->
            <div id="characters-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <!-- Los personajes se renderizarán aquí -->
            </div>

            <!-- Mensaje de No Resultados -->
            <div id="no-results" class="hidden text-center py-12">
                <i class="fas fa-search text-4xl text-gray-300 dark-mode:text-gray-600 mb-4"></i>
                <p class="text-gray-500 dark-mode:text-gray-400">No se encontraron personajes</p>
            </div>
        </div>
    `;

    // Event Listeners
    const searchInput = document.getElementById('search-input');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sort-select');

    let currentFilter = 'all';
    let currentSearch = '';
    let currentSort = 'none';

    function updateCatalog() {
        let filtered = characters;

        // Aplicar búsqueda
        if (currentSearch) {
            filtered = searchCharacters(currentSearch);
        }

        // Aplicar filtro de raza
        if (currentFilter !== 'all') {
            filtered = filtered.filter(char => char.raceType === currentFilter);
        }

        // Aplicar ordenamiento
        if (currentSort !== 'none') {
            filtered = sortCharacters(currentSort);
        }

        renderCharacterGrid(filtered);
    }

    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        updateCatalog();
    });

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.race;
            updateCatalog();
        });
    });

    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        updateCatalog();
    });

    // Renderizar inicialmente
    updateCatalog();
}

// Renderizar Grid de Personajes
function renderCharacterGrid(chars) {
    const grid = document.getElementById('characters-grid');
    const noResults = document.getElementById('no-results');

    if (chars.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');
    grid.innerHTML = chars.map(char => createCharacterCard(char)).join('');

    // Agregar event listeners a las tarjetas
    grid.querySelectorAll('.character-card').forEach(card => {
        card.addEventListener('click', () => {
            const charId = parseInt(card.dataset.id);
            const character = characters.find(c => c.id === charId);
            showCharacterModal(character);
        });
    });
}

// Crear tarjeta de personaje
function createCharacterCard(char) {
    const powerClass = getPowerLevelClass(char.powerLevelNumeric);
    
    return `
        <div class="character-card card-hover fade-in cursor-pointer" data-id="${char.id}">
            <div class="relative">
                <img src="${char.image}" alt="${char.name}" class="character-image w-full">
                <div class="absolute top-2 right-2">
                    <button class="favorite-btn p-2 bg-white dark-mode:bg-slate-800 rounded-full shadow-lg hover:scale-110 transition" data-id="${char.id}">
                        <i class="fas fa-heart text-gray-300 ${char.favorites ? 'text-red-500' : ''}"></i>
                    </button>
                </div>
            </div>
            <div class="character-info">
                <h3 class="font-bold text-lg mb-1">${char.name}</h3>
                <p class="text-xs text-gray-500 dark-mode:text-gray-400 mb-2">${char.japanese}</p>
                <div class="flex flex-wrap gap-2 mb-3">
                    <span class="badge-${char.raceType} px-2 py-1 rounded text-xs font-semibold">
                        ${char.race}
                    </span>
                    <span class="power-level-indicator ${powerClass}">
                        ${char.powerLevel}
                    </span>
                </div>
                <p class="text-xs text-gray-600 dark-mode:text-gray-400 line-clamp-2">${char.description}</p>
            </div>
        </div>
    `;
}

// Modal de Personaje
function showCharacterModal(char) {
    const powerClass = getPowerLevelClass(char.powerLevelNumeric);
    
    const modalContent = `
        <div class="bg-white dark-mode:bg-slate-800 rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <!-- Header -->
            <div class="relative">
                <img src="${char.image}" alt="${char.name}" class="w-full h-64 object-cover">
                <button onclick="this.closest('.modal-backdrop').remove()" class="absolute top-4 right-4 bg-white dark-mode:bg-slate-800 rounded-full p-2 hover:bg-gray-100 dark-mode:hover:bg-slate-700">
                    <i class="fas fa-times"></i>
                </button>
            </div>

            <!-- Content -->
            <div class="p-6">
                <!-- Nombre -->
                <div class="mb-6">
                    <h2 class="text-3xl font-bold mb-1">${char.name}</h2>
                    <p class="text-gray-500 dark-mode:text-gray-400">${char.japanese}</p>
                </div>

                <!-- Información Principal -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-b border-gray-200 dark-mode:border-slate-700">
                    <div>
                        <p class="text-xs text-gray-500 dark-mode:text-gray-400 mb-1">RAZA</p>
                        <p class="font-semibold">${char.race}</p>
                    </div>
                    <div>
                        <p class="text-xs text-gray-500 dark-mode:text-gray-400 mb-1">EDAD</p>
                        <p class="font-semibold">${char.age}</p>
                    </div>
                    <div>
                        <p class="text-xs text-gray-500 dark-mode:text-gray-400 mb-1">PODER</p>
                        <p class="font-semibold ${powerClass}" style="padding: 4px 8px; border-radius: 4px;">${char.powerLevel}</p>
                    </div>
                    <div>
                        <p class="text-xs text-gray-500 dark-mode:text-gray-400 mb-1">SAGA</p>
                        <p class="font-semibold">${char.saga}</p>
                    </div>
                </div>

                <!-- Descripción -->
                <div class="mb-6">
                    <h3 class="font-bold text-lg mb-2">Descripción</h3>
                    <p class="text-gray-700 dark-mode:text-gray-300">${char.description}</p>
                </div>

                <!-- Transformaciones -->
                ${char.transformations.length > 0 ? `
                    <div class="mb-6">
                        <h3 class="font-bold text-lg mb-3">Transformaciones</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                            ${char.transformations.map(t => `
                                <div class="bg-orange-100 dark-mode:bg-orange-900/20 px-3 py-2 rounded text-sm">
                                    <i class="fas fa-star text-orange-500 mr-2"></i>${t}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- Ataques Especiales -->
                ${char.attacks.length > 0 ? `
                    <div class="mb-6">
                        <h3 class="font-bold text-lg mb-3">Ataques Especiales</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                            ${char.attacks.map(attack => `
                                <div class="bg-blue-100 dark-mode:bg-blue-900/20 px-3 py-2 rounded text-sm">
                                    <i class="fas fa-bolt text-blue-500 mr-2"></i>${attack}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- Botones de Acción -->
                <div class="flex gap-3">
                    <button class="flex-1 btn-primary px-4 py-2 rounded-lg font-semibold flex items-center justify-center gap-2" onclick="addToFavorites(${char.id})">
                        <i class="fas fa-heart"></i> Agregar a Favoritos
                    </button>
                    <button class="flex-1 btn-secondary px-4 py-2 rounded-lg font-semibold" onclick="this.closest('.modal-backdrop').remove()">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    `;

    showModal(modalContent);
}

// Vista de Favoritos
export function renderFavoritesView() {
    const container = document.getElementById('view-container');
    const favorites = characters.filter(char => char.favorites);

    container.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 py-8">
            <div class="mb-8">
                <h1 class="text-4xl font-bold mb-2">
                    <i class="fas fa-heart" style="color: #ef4444;"></i> Mis Favoritos
                </h1>
                <p class="text-gray-600 dark-mode:text-gray-400">Tienes ${favorites.length} personajes favoritos</p>
            </div>

            ${favorites.length > 0 ? `
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    ${favorites.map(char => createCharacterCard(char)).join('')}
                </div>
            ` : `
                <div class="text-center py-12 bg-white dark-mode:bg-slate-800 rounded-lg">
                    <i class="fas fa-heart text-4xl text-gray-300 dark-mode:text-gray-600 mb-4"></i>
                    <p class="text-gray-500 dark-mode:text-gray-400 mb-4">No tienes favoritos aún</p>
                    <button class="btn-primary px-6 py-2 rounded-lg" onclick="location.hash = '#/catalog'">
                        Ir al Catálogo
                    </button>
                </div>
            `}
        </div>
    `;

    if (favorites.length > 0) {
        container.querySelectorAll('.character-card').forEach(card => {
            card.addEventListener('click', () => {
                const charId = parseInt(card.dataset.id);
                const character = characters.find(c => c.id === charId);
                showCharacterModal(character);
            });
        });
    }
}

// Vista de Comparación
export function renderComparisonView() {
    const container = document.getElementById('view-container');

    container.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 py-8">
            <div class="mb-8">
                <h1 class="text-4xl font-bold mb-2">
                    <i class="fas fa-exchange-alt" style="color: var(--primary-orange);"></i> Comparar Personajes
                </h1>
                <p class="text-gray-600 dark-mode:text-gray-400">Compara el poder y las estadísticas de los personajes</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                    <label class="block text-sm font-semibold mb-2">Primer Personaje</label>
                    <select id="char1-select" class="w-full px-4 py-2 rounded-lg border border-gray-300 dark-mode:border-slate-600 bg-white dark-mode:bg-slate-700">
                        <option value="">Seleccionar personaje...</option>
                        ${characters.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-semibold mb-2">Segundo Personaje</label>
                    <select id="char2-select" class="w-full px-4 py-2 rounded-lg border border-gray-300 dark-mode:border-slate-600 bg-white dark-mode:bg-slate-700">
                        <option value="">Seleccionar personaje...</option>
                        ${characters.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
                    </select>
                </div>
            </div>

            <div id="comparison-result" class="hidden">
                <!-- Comparación se renderizará aquí -->
            </div>

            <div id="no-comparison" class="text-center py-12 bg-white dark-mode:bg-slate-800 rounded-lg">
                <i class="fas fa-user-friends text-4xl text-gray-300 dark-mode:text-gray-600 mb-4"></i>
                <p class="text-gray-500 dark-mode:text-gray-400">Selecciona dos personajes para compararlos</p>
            </div>
        </div>
    `;

    const char1Select = document.getElementById('char1-select');
    const char2Select = document.getElementById('char2-select');
    const comparisonResult = document.getElementById('comparison-result');
    const noComparison = document.getElementById('no-comparison');

    function updateComparison() {
        const char1Id = parseInt(char1Select.value);
        const char2Id = parseInt(char2Select.value);

        if (!char1Id || !char2Id || char1Id === char2Id) {
            comparisonResult.classList.add('hidden');
            noComparison.classList.remove('hidden');
            return;
        }

        const char1 = characters.find(c => c.id === char1Id);
        const char2 = characters.find(c => c.id === char2Id);

        noComparison.classList.add('hidden');
        comparisonResult.classList.remove('hidden');

        comparisonResult.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Personaje 1 -->
                <div class="bg-white dark-mode:bg-slate-800 rounded-lg overflow-hidden shadow-lg">
                    <img src="${char1.image}" alt="${char1.name}" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h2 class="text-2xl font-bold mb-4">${char1.name}</h2>
                        <div class="space-y-3">
                            <div>
                                <p class="text-xs text-gray-500 dark-mode:text-gray-400 mb-1">PODER</p>
                                <div class="w-full bg-gray-200 dark-mode:bg-slate-700 rounded-full h-2">
                                    <div class="bg-orange-500 h-2 rounded-full" style="width: ${Math.min(char1.powerLevelNumeric / 100, 100)}%"></div>
                                </div>
                                <p class="font-semibold mt-1">${char1.powerLevel}</p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-500 dark-mode:text-gray-400 mb-1">EDAD: ${char1.age}</p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-500 dark-mode:text-gray-400 mb-1">RAZA: ${char1.race}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Personaje 2 -->
                <div class="bg-white dark-mode:bg-slate-800 rounded-lg overflow-hidden shadow-lg">
                    <img src="${char2.image}" alt="${char2.name}" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h2 class="text-2xl font-bold mb-4">${char2.name}</h2>
                        <div class="space-y-3">
                            <div>
                                <p class="text-xs text-gray-500 dark-mode:text-gray-400 mb-1">PODER</p>
                                <div class="w-full bg-gray-200 dark-mode:bg-slate-700 rounded-full h-2">
                                    <div class="bg-blue-500 h-2 rounded-full" style="width: ${Math.min(char2.powerLevelNumeric / 100, 100)}%"></div>
                                </div>
                                <p class="font-semibold mt-1">${char2.powerLevel}</p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-500 dark-mode:text-gray-400 mb-1">EDAD: ${char2.age}</p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-500 dark-mode:text-gray-400 mb-1">RAZA: ${char2.race}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tabla de Comparación -->
            <div class="mt-8 bg-white dark-mode:bg-slate-800 rounded-lg overflow-hidden shadow-lg">
                <table class="w-full">
                    <thead class="bg-orange-500 text-white">
                        <tr>
                            <th class="px-6 py-3 text-left font-semibold">Atributo</th>
                            <th class="px-6 py-3 text-center font-semibold">${char1.name}</th>
                            <th class="px-6 py-3 text-center font-semibold">${char2.name}</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 dark-mode:divide-slate-700">
                        <tr class="hover:bg-gray-50 dark-mode:hover:bg-slate-700/50">
                            <td class="px-6 py-3 font-semibold">Poder Numérico</td>
                            <td class="px-6 py-3 text-center text-orange-600 dark-mode:text-orange-400">${char1.powerLevelNumeric}</td>
                            <td class="px-6 py-3 text-center text-blue-600 dark-mode:text-blue-400">${char2.powerLevelNumeric}</td>
                        </tr>
                        <tr class="hover:bg-gray-50 dark-mode:hover:bg-slate-700/50">
                            <td class="px-6 py-3 font-semibold">Edad</td>
                            <td class="px-6 py-3 text-center">${char1.age}</td>
                            <td class="px-6 py-3 text-center">${char2.age}</td>
                        </tr>
                        <tr class="hover:bg-gray-50 dark-mode:hover:bg-slate-700/50">
                            <td class="px-6 py-3 font-semibold">Transformaciones</td>
                            <td class="px-6 py-3 text-center">${char1.transformations.length}</td>
                            <td class="px-6 py-3 text-center">${char2.transformations.length}</td>
                        </tr>
                        <tr class="hover:bg-gray-50 dark-mode:hover:bg-slate-700/50">
                            <td class="px-6 py-3 font-semibold">Ataques Especiales</td>
                            <td class="px-6 py-3 text-center">${char1.attacks.length}</td>
                            <td class="px-6 py-3 text-center">${char2.attacks.length}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }

    char1Select.addEventListener('change', updateComparison);
    char2Select.addEventListener('change', updateComparison);
}

// Función auxiliar para obtener clase de poder
function getPowerLevelClass(powerLevel) {
    if (powerLevel < 2000) return 'power-level-low';
    if (powerLevel < 5000) return 'power-level-medium';
    if (powerLevel < 8000) return 'power-level-high';
    if (powerLevel < 9500) return 'power-level-ultra';
    return 'power-level-omega';
}

// Función global para agregar a favoritos
window.addToFavorites = function(charId) {
    const char = characters.find(c => c.id === charId);
    if (char) {
        char.favorites = !char.favorites;
        showToast(char.favorites ? `${char.name} agregado a favoritos! ❤️` : `${char.name} removido de favoritos`);
        // Guardar en localStorage
        localStorage.setItem('dbz-favorites', JSON.stringify(characters.filter(c => c.favorites).map(c => c.id)));
    }
};

// Cargar favoritos desde localStorage
export function loadFavorites() {
    const stored = localStorage.getItem('dbz-favorites');
    if (stored) {
        const favoriteIds = JSON.parse(stored);
        favoriteIds.forEach(id => {
            const char = characters.find(c => c.id === id);
            if (char) char.favorites = true;
        });
    }
}
