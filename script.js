document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. CONTROL INTERACTIVO DEL LOGIN
    // ==========================================
    const formLogin = document.getElementById("form-login");
    if (formLogin) {
        formLogin.addEventListener("submit", (e) => {
            e.preventDefault(); 
            const usuario = document.getElementById("username").value;
            const contrasena = document.getElementById("password").value;

            if (usuario.trim() !== "" && contrasena.trim() !== "") {
                window.location.href = "dashboard.html"; // Entra al inicio por defecto
            }
        });
    }

    // ==========================================
    // 2. CONTROL DE CIERRE DE SESIÓN SEGURO (AL LOGIN)
    // ==========================================
    const btnCerrarSesion = document.getElementById("btn-cerrar-sesion");
    if (btnCerrarSesion) {
        btnCerrarSesion.addEventListener("click", (e) => {
            const confirmar = confirm("¿Está seguro de que desea cerrar su sesión y salir de Smart Purchase?");
            if (!confirmar) {
                e.preventDefault(); // Cancela la acción si dice que no
            }
            // Si dice que sí, el navegador sigue el enlace href directo a index.html
        });
    }

    // ==========================================
    // 3. ENTRADAS DE FORMULARIOS DINÁMICOS
    // ==========================================
    const formCotizacion = document.getElementById("form-nueva-cotizacion");
    if (formCotizacion) {
        formCotizacion.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("¡Nueva cotización generada con éxito y registrada en el historial!");
            formCotizacion.reset();
        });
    }

    const formFacturaVenta = document.getElementById("form-factura");
    if (formFacturaVenta) {
        formFacturaVenta.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("¡Venta procesada con éxito! Comprobante electrónico emitido.");
            formFacturaVenta.reset();
        });
    }

    const formOrdenCompra = document.getElementById("form-orden-compra");
    if (formOrdenCompra) {
        formOrdenCompra.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("¡Orden de compra enviada para aprobación del administrador!");
            formOrdenCompra.reset();
        });
    }

    // ==========================================
    // 4. VENTANAS MODALES (MÓDULO DE AJUSTES)
    // ==========================================
    const modalEmpresa = document.getElementById("modal-empresa");
    const modalUsuarios = document.getElementById("modal-usuarios");
    const btnConfigEmpresa = document.getElementById("btn-config-empresa");
    const btnConfigUsuarios = document.getElementById("btn-config-usuarios");
    const btnCerrarEmpresa = document.getElementById("close-empresa");
    const btnCerrarUsuarios = document.getElementById("close-usuarios");

    if (btnConfigEmpresa) {
        btnConfigEmpresa.addEventListener("click", () => modalEmpresa.classList.add("active"));
    }
    if (btnConfigUsuarios) {
        btnConfigUsuarios.addEventListener("click", () => modalUsuarios.classList.add("active"));
    }
    if (btnCerrarEmpresa) {
        btnCerrarEmpresa.addEventListener("click", () => modalEmpresa.classList.remove("active"));
    }
    if (btnCerrarUsuarios) {
        btnCerrarUsuarios.addEventListener("click", () => modalUsuarios.classList.remove("active"));
    }

    window.addEventListener("click", (e) => {
        if (e.target === modalEmpresa) modalEmpresa.classList.remove("active");
        if (e.target === modalUsuarios) modalUsuarios.classList.remove("active");
    });

    const formEmpresa = document.getElementById("form-empresa");
    if (formEmpresa) {
        formEmpresa.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombreEmpresa = document.getElementById("empresa-nombre").value;
            if (nombreEmpresa.trim() !== "") {
                document.getElementById("txt-empresa-status").innerText = nombreEmpresa;
                alert("¡Parámetros de la empresa actualizados con éxito!");
                modalEmpresa.classList.remove("active");
            }
        });
    }

    const formUsuarios = document.getElementById("form-usuarios");
    if (formUsuarios) {
        formUsuarios.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("¡Nuevo usuario registrado con éxito!");
            modalUsuarios.classList.remove("active");
            formUsuarios.reset();
        });
    }
});

// ==========================================
    // 2. CONTROL DE CIERRE DE SESIÓN DIRECTO
    // ==========================================
    const btnCerrarSesion = document.getElementById("btn-cerrar-sesion");
    if (btnCerrarSesion) {
        btnCerrarSesion.addEventListener("click", (e) => {
            e.preventDefault(); // Detiene el comportamiento por defecto
            window.location.href = "index.html"; // Te lleva directo al login
        });
    }