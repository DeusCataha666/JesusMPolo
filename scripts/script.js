        document.addEventListener('DOMContentLoaded', function() {
            const accordionHeaders = document.querySelectorAll('.mods-header');
            
            accordionHeaders.forEach(header => {
                header.addEventListener('click', function() {
                    const item = this.parentElement;
                    const isActive = item.classList.contains('active');
                    
                    // Cerrar todos los acordeones primero
                    document.querySelectorAll('.mods').forEach(accordion => {
                        accordion.classList.remove('active');
                    });
                    
                    // Abrir el actual si no estaba activo
                    if (!isActive) {
                        item.classList.add('active');
                    }
                });
            });
            
            // Opcional: Abrir el primer elemento por defecto
            document.querySelector('.mods').classList.add('active');
        });