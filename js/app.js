// Aplicación Principal - Dragon Ball Z Character Catalog
import { renderCatalogView, renderFavoritesView, renderComparisonView, loadFavorites } from './views.js';
import { initTheme, initMobileMenu, updateActiveNavLink, showToast } from './utils.js';

// Rutas
const routes = {
    '#/catalog': renderCatalogView,
    '#/favorites': renderFavoritesView,
    '#/comparison': renderComparisonView,
};

// Inicializar la aplicación
function init() {
    // Cargar favoritos guardados
    loadFavorites();
    
    // Inicializar tema
    initTheme();
    
    // Inicializar menú móvil
    initMobileMenu();
    
    // Configurar logo para volver a home
    document.getElementById('logo-link').addEventListener('click', () => {
        location.hash = '#/catalog';
    });
    
    // Manejar rutas
    window.addEventListener('hashchange', handleRoute);
    
    // Mostrar vista inicial
    handleRoute();
}

function handleRoute() {
    const hash = location.hash || '#/catalog';
    const route = Object.keys(routes).find(r => hash.startsWith(r)) || '#/catalog';
    
    updateActiveNavLink(route.replace('#/', ''));
    
    const renderFunction = routes[route];
    if (renderFunction) {
        renderFunction();
    } else {
        renderCatalogView();
    }
}

// Mostrar toast de bienvenida
window.addEventListener('load', () => {
    setTimeout(() => {
        showToast('¡Bienvenido al Catálogo de Dragon Ball Z! 🐉', 'success');
    }, 500);
});

// Iniciar aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);