/**
 * Script para desabilitar automaticamente o link da página atual no menu
 */
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop();
    
    // Mapeamento de páginas para seus respectivos links no menu
    const pageMapping = {
        'blog.html': 'Blog',
        'protetores.html': 'Protetores',
        'catalogo.html': 'Quero adotar',
        'cadastroong.html': 'Cadastrar uma Ong',
        'cadastrovoluntario.html': 'Me voluntariar',
        'login.html': 'Entrar',
        'cadastro.html': 'Cadastre-se',
        'home.html': 'Home'
    };
    
    // Encontrar todos os links no menu
    const menuLinks = document.querySelectorAll('.menu a, .menu button');
    
    menuLinks.forEach(link => {
        const linkText = link.textContent.trim();
        const linkHref = link.getAttribute('href');
        
        // Verificar se é o link da página atual
        if (pageMapping[currentPage] === linkText || 
            (linkHref && linkHref.includes(currentPage))) {
            
            // Adicionar classe de link ativo
            link.classList.add('menu-link-active');
            
            // Desabilitar click events
            link.addEventListener('click', function(e) {
                e.preventDefault();
                return false;
            });
            
            // Para botões, desabilitar também
            if (link.tagName === 'BUTTON') {
                link.disabled = true;
                link.onclick = null;
            }
        }
    });
});
