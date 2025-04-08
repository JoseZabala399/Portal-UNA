function addButtonClickListener(buttonId, targetId, message) {
    document.getElementById(buttonId).addEventListener("click", function() {
        document.getElementById(targetId).innerHTML = `<p>${message}</p>`;
    });
}

addButtonClickListener("registroUsuarios", "seguridadInfo", "Función de Registro de Usuarios: Permite registrar nuevos usuarios en el sistema.");
addButtonClickListener("cambioClave", "seguridadInfo", "Función de Cambio de Clave: Permite a los usuarios cambiar su contraseña.");
addButtonClickListener("recuperacionContrasena", "seguridadInfo", "Función de Recuperación de Contraseña: Permite a los usuarios recuperar su contraseña olvidada.");
addButtonClickListener("nivelesAcceso", "seguridadInfo", "Función de Niveles de Acceso: Define diferentes niveles de acceso para los usuarios.");
addButtonClickListener("identificacion", "asignaturasInfo", "Función de Identificación: Detalla la identificación de las asignaturas.");
addButtonClickListener("modulos", "asignaturasInfo", "Función de Módulos: Enumera los módulos, unidades y objetivos que comprende cada asignatura.");
addButtonClickListener("ponderacion", "asignaturasInfo", "Función de Ponderación: Describe la ponderación de cada asignatura.");
addButtonClickListener("lapsoAcademico", "profesoresInfo", "Función de Lapso Académico: Información sobre los lapsos académicos.");
addButtonClickListener("asignaturasProfesor", "profesoresInfo", "Función de Asignaturas por Profesor: Detalla las asignaturas asignadas a cada profesor.");
addButtonClickListener("estudiantesAsignaturas", "profesoresInfo", "Función de Estudiantes por Asignaturas: Lista los estudiantes inscritos en cada asignatura.");
addButtonClickListener("fichaAcademica", "estudiantesInfo", "Función de Ficha Académica: Información sobre la ficha académica de los estudiantes.");
addButtonClickListener("infoInteres", "generalInfo", "Función de Información de Interés: Información de interés general.");
document.getElementById("identificacionBtn").addEventListener("click", function () {
  const submenu = document.getElementById("identificacionSubmenu");
  submenu.style.display = submenu.style.display === "block" ? "none" : "block";
});

document.getElementById("sisBtn").addEventListener("click", function () {
  document.getElementById("generalInfo").innerHTML = "<h2>Ingeniería de Sistemas</h2><p>Contenido de la carrera.</p>";
});

document.getElementById("indBtn").addEventListener("click", function () {
  document.getElementById("generalInfo").innerHTML = "<h2>Ingeniería Industrial</h2><p>Contenido de la carrera.</p>";
});
