/**
 * Script para desabilitar automaticamente o link da página atual no menu
 */
// Global logout function
function logout() {
    localStorage.removeItem("usuarioLogado");
    alert("Você saiu com sucesso!");
    // This path assumes that pages including this script are in subdirectories of 'src',
    // and login.html is in 'src/cadastro_login_catalogo/'.
    window.location.href = '../cadastro_login_catalogo/login.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    const menuUsuarioContainer = document.querySelector('.menu-usuario'); // Target the common div

    // Highlight active menu link (example of other logic that might be in this file)
    // This is a placeholder; actual active link logic might differ or already exist.
    try {
        const currentPath = window.location.pathname.split("/").pop();
        if (currentPath) {
            document.querySelectorAll('.menu-links a, .dropdown-content a').forEach(link => {
                if (link.getAttribute('href') && link.getAttribute('href').endsWith(currentPath)) {
                    link.classList.add('menu-link-active');
                } else {
                    link.classList.remove('menu-link-active');
                }
            });
        }
    } catch (e) {
        console.warn("Error applying active menu link highlighting:", e);
    }

    if (menuUsuarioContainer) {
        if (usuarioLogado && usuarioLogado.nome) {
            // User is logged in. Populate the .menu-usuario div with logged-in info.
            menuUsuarioContainer.innerHTML = `
                <span id="nomeUsuario" class="nome-usuario">Olá, ${usuarioLogado.nome}!</span>
                <button class="btn-cadastro btn-perfil" onclick="location.href='../dados de usuario/dados usuario.html'">Meu Perfil</button>
                <button class="btn-sair" onclick="logout()">Sair</button>
            `;
        } else {
            // User is NOT logged in.
            // Populate .menu-usuario with "Entrar" / "Cadastre-se" links.
            // These paths are relative, assuming pages are in subdirectories of 'src'.
            const loginPath = '../cadastro_login_catalogo/login.html';
            const cadastroPath = '../cadastro_login_catalogo/cadastro.html';

            // Note: Using inline styles for simplicity here. Ideally, use CSS classes.
            menuUsuarioContainer.innerHTML = `
                <a href="${loginPath}" class="btn-entrar" style="text-decoration: none; color: #333; padding: 8px 12px; border: 1px solid #ccc; border-radius: 4px; margin-left: 10px;">Entrar</a>
                <a href="${cadastroPath}" class="btn-cadastrar" style="text-decoration: none; color: white; background-color: #54a09a; padding: 8px 12px; border-radius: 4px; margin-left: 5px;">Cadastre-se</a>
            `;
        }
    }

    // Specific check for usuariologado.html:
    // If the current page is usuariologado.html and the user is not logged in, redirect them.
    if (window.location.pathname.includes('usuariologado.html')) {
        if (!usuarioLogado) {
            window.location.href = '../cadastro_login_catalogo/login.html';
        }
    }
});
