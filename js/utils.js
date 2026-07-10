// Utilidades de la aplicación

// Mostrar Toast Notification
export function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    
    const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
    
    toast.className = `toast ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        ${message}
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Mostrar Modal
export function showModal(content) {
    const container = document.getElementById('modal-container');
    
    const backdrop = document.createElement('div');
    backdrop.className = 'fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center modal-backdrop z-50';
    backdrop.innerHTML = content;
    
    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
            backdrop.remove();
        }
    });
    
    container.appendChild(backdrop);
}

// Tema Oscuro/Claro
export function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Cargar tema guardado
    const savedTheme = localStorage.getItem('dbz-theme') || 'light-mode';
    body.classList.remove('light-mode', 'dark-mode');
    body.classList.add(savedTheme);
    updateThemeIcon();
    
    themeToggle.addEventListener('click', () => {
        const isDarkMode = body.classList.contains('dark-mode');
        body.classList.remove(isDarkMode ? 'dark-mode' : 'light-mode');
        body.classList.add(isDarkMode ? 'light-mode' : 'dark-mode');
        localStorage.setItem('dbz-theme', isDarkMode ? 'light-mode' : 'dark-mode');
        updateThemeIcon();
    });
}

function updateThemeIcon() {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    icon.className = `fas fa-${isDarkMode ? 'sun' : 'moon'} text-xl text-gray-700 dark-mode:text-gray-300`;
}

// Menú Móvil
export function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Cerrar menú al hacer clic en un link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Actualizar Nav Links activos
export function updateActiveNavLink(route) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`a[href="#/${route}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Animar entrada
export function animateEntry(element) {
    element.classList.add('fade-in');
    element.addEventListener('animationend', () => {
        element.classList.remove('fade-in');
    });
}
