// --- FUNCIONES EXPORTADAS ---

export function actualizarPerfilSidebar() {
    const nombreInput = document.querySelector<HTMLInputElement>('#info .input-row .form-input:first-child');
    const apellidoInput = document.querySelector<HTMLInputElement>('#info .input-row .form-input:last-child');
    const usuarioInput = document.querySelector<HTMLInputElement>('#info .form-input.medium');

    if (!nombreInput || !apellidoInput || !usuarioInput) return;

    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const usuario = usuarioInput.value;

    const nombreCompleto = `${nombre} ${apellido}`.trim();
    const email = usuario.includes('@') ? usuario : `${usuario}@sequentia.app`;

    const sidebarNombre = document.querySelector<HTMLElement>('.user-info h2');
    const sidebarEmail = document.querySelector<HTMLElement>('.user-info .email');

    if (sidebarNombre) sidebarNombre.textContent = nombreCompleto;
    if (sidebarEmail) sidebarEmail.textContent = email;

    alert('Perfil actualizado correctamente');
}

export function addPaymentMethod() {
    alert('Funcionalidad para añadir nuevo método de pago');
}

export function editCard() {
    alert('Funcionalidad para editar tarjeta');
}

export function deleteCard() {
    alert('Funcionalidad para eliminar tarjeta');
}

export function cambiarFotoPerfil() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.click();

    fileInput.addEventListener('change', function (e: Event) {
        const target = e.target as HTMLInputElement;
        if (target.files && target.files[0]) {
            const reader = new FileReader();

            reader.onload = function (event: ProgressEvent<FileReader>) {
                const result = event.target?.result;
                if (typeof result !== 'string') return;

                const avatarLarge = document.querySelector<HTMLElement>('.avatar-large');
                const avatarSmall = document.querySelector<HTMLElement>('.avatar-small');
                const profilePhoto = document.querySelector<HTMLElement>('.profile-photo');

                if (avatarLarge) avatarLarge.style.backgroundImage = `url(${result})`;
                if (avatarSmall) avatarSmall.style.backgroundImage = `url(${result})`;
                if (profilePhoto) profilePhoto.style.backgroundImage = `url(${result})`;
            };

            reader.readAsDataURL(target.files[0]);
        }
    });
}

export function cambiarPlanEsencial() {
    alert('Cambiar al plan Esencial');
}

// --- INICIALIZACIÓN AUTOMÁTICA PARA PÁGINAS NO-REACT ---

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll<HTMLLIElement>('.profile-nav li');
    const sections = document.querySelectorAll<HTMLElement>('.section-content');

    const defaultNav = document.querySelector('[data-section="info"]') as HTMLElement | null;
    const defaultSection = document.getElementById('info');

    if (defaultNav) defaultNav.classList.add('active');
    if (defaultSection) defaultSection.classList.add('active');

    navItems.forEach(item => {
        item.addEventListener('click', function () {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            const sectionId = this.getAttribute('data-section');
            if (!sectionId) return;

            sections.forEach(section => section.classList.remove('active'));
            const targetSection = document.getElementById(sectionId);
            if (targetSection) targetSection.classList.add('active');
        });
    });

    // Botones Guardar
    const buttons = document.querySelectorAll<HTMLButtonElement>('.btn-primary');
    buttons.forEach(button => {
        button.addEventListener('click', function (e: MouseEvent) {
            e.preventDefault();
            const closestInfo = (this as HTMLElement).closest('#info');
            if (closestInfo) {
                actualizarPerfilSidebar();
            } else {
                alert('Cambios guardados correctamente');
            }
        });
    });

    // Añadir método de pago
    const addPayment = document.querySelector<HTMLElement>('.add-payment');
    if (addPayment) {
        addPayment.addEventListener('click', addPaymentMethod);
    }

    // Editar y eliminar tarjeta
    const editCardBtn = document.querySelector<HTMLElement>('.btn-text:not(.danger)');
    const deleteCardBtn = document.querySelector<HTMLElement>('.btn-text.danger');
    if (editCardBtn) editCardBtn.addEventListener('click', editCard);
    if (deleteCardBtn) deleteCardBtn.addEventListener('click', deleteCard);

    // Cambiar plan
    const subscriptionButtons = document.querySelectorAll<HTMLButtonElement>('.subscription-card button');
    subscriptionButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (this.classList.contains('btn-secondary')) {
                cambiarPlanEsencial();
            }
        });
    });

    // Cambiar foto de perfil
    const changePhotoBtn = document.querySelector<HTMLButtonElement>('.btn-outline');
    if (changePhotoBtn) {
        changePhotoBtn.addEventListener('click', cambiarFotoPerfil);
    }
});